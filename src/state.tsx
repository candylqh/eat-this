import { createContext, useContext, useMemo, useReducer, type ReactNode } from 'react';
import { STALLS, type Stall } from './data/seedStalls';
import {
  computeFeasibility,
  pickSuggestion,
  pickReplacement,
  type FeasibilityResult,
  type SwapReason,
} from './lib/feasibility';

export type Screen =
  | 'budget'
  | 'suggestion'
  | 'feasibility'
  | 'going'
  | 'declined'
  | 'replacement'
  | 'plates'
  | 'post'
  | 'add'
  | 'avatar';

export type { SwapReason };
export type Outcome = 'went' | 'missed';
export type AccessoryKey = 'hat' | 'scarf' | 'specs';

interface State {
  screen: Screen;
  /** Round-trip time budget picked on the Budget screen, in minutes. */
  budgetMin: number;
  /** "Now" for this lunch session — captured once when the budget is picked. */
  now: Date;
  /** Placeholder calendar commitment — a mock "next meeting," now + budgetMin. */
  nextCommitmentAt: Date;
  currentStallId: string;
  declinedStallIds: string[];
  lastReason: SwapReason | null;
  outcome: Outcome;
  chip: number;
  credits: number;
  owned: Record<AccessoryKey, boolean>;
  worn: Record<AccessoryKey, boolean>;
}

export function getStallById(id: string): Stall {
  const stall = STALLS.find((s) => s.id === id);
  if (!stall) throw new Error(`Unknown stall id: ${id}`);
  return stall;
}

function freshLunchFields(budgetMin: number) {
  const now = new Date();
  const nextCommitmentAt = new Date(now.getTime() + budgetMin * 60000);
  const currentStallId = pickSuggestion(STALLS, nextCommitmentAt, now).stall.id;
  return { budgetMin, now, nextCommitmentAt, currentStallId, declinedStallIds: [] as string[], lastReason: null as SwapReason | null };
}

function createInitialState(): State {
  return {
    screen: 'budget',
    ...freshLunchFields(30),
    outcome: 'went',
    chip: 1,
    credits: 14,
    owned: { hat: true, scarf: false, specs: false },
    worn: { hat: true, scarf: false, specs: false },
  };
}

type Action =
  | { type: 'go'; screen: Screen }
  | { type: 'pickBudget'; budgetMin: number }
  | { type: 'swap'; reason: SwapReason }
  | { type: 'pickChip'; chip: number }
  | { type: 'buy'; key: AccessoryKey; cost: number }
  | { type: 'sayWent' }
  | { type: 'sayMissed' }
  | { type: 'filePost' }
  | { type: 'fileFind' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'go':
      return { ...state, screen: action.screen };
    case 'pickBudget':
      return { ...state, ...freshLunchFields(action.budgetMin), screen: 'suggestion' };
    case 'swap': {
      const current = computeFeasibility(getStallById(state.currentStallId), state.nextCommitmentAt, state.now);
      const replacement = pickReplacement(STALLS, action.reason, current, state.nextCommitmentAt, state.now);
      return {
        ...state,
        currentStallId: replacement.stall.id,
        declinedStallIds: [...state.declinedStallIds, state.currentStallId],
        lastReason: action.reason,
        screen: 'replacement',
      };
    }
    case 'pickChip':
      return { ...state, chip: action.chip };
    case 'buy': {
      const { key, cost } = action;
      if (state.owned[key]) {
        return { ...state, worn: { ...state.worn, [key]: !state.worn[key] } };
      }
      if (state.credits < cost) return state;
      return {
        ...state,
        credits: state.credits - cost,
        owned: { ...state.owned, [key]: true },
        worn: { ...state.worn, [key]: true },
      };
    }
    case 'sayWent':
      return { ...state, outcome: 'went', chip: 1 };
    case 'sayMissed':
      return { ...state, outcome: 'missed', chip: 0 };
    case 'filePost':
      return {
        ...state,
        screen: 'plates',
        credits: state.credits + (state.outcome === 'went' ? 3 : 1),
      };
    case 'fileFind':
      return { ...state, screen: 'avatar', credits: state.credits + 3 };
    default:
      return state;
  }
}

interface Ctx {
  state: State;
  /** Real, computed feasibility for whichever stall is currently suggested. */
  currentResult: FeasibilityResult;
  go: (screen: Screen) => void;
  pickBudget: (budgetMin: number) => void;
  swap: (reason: SwapReason) => void;
  pickChip: (chip: number) => void;
  buy: (key: AccessoryKey, cost: number) => void;
  sayWent: () => void;
  sayMissed: () => void;
  filePost: () => void;
  fileFind: () => void;
  commit: () => void;
  decline: () => void;
  back: () => void;
  restart: () => void;
}

const AppContext = createContext<Ctx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, createInitialState);

  const value = useMemo<Ctx>(() => {
    const currentResult = computeFeasibility(getStallById(state.currentStallId), state.nextCommitmentAt, state.now);
    return {
      state,
      currentResult,
      go: (screen) => dispatch({ type: 'go', screen }),
      pickBudget: (budgetMin) => dispatch({ type: 'pickBudget', budgetMin }),
      swap: (reason) => dispatch({ type: 'swap', reason }),
      pickChip: (chip) => dispatch({ type: 'pickChip', chip }),
      buy: (key, cost) => dispatch({ type: 'buy', key, cost }),
      sayWent: () => dispatch({ type: 'sayWent' }),
      sayMissed: () => dispatch({ type: 'sayMissed' }),
      filePost: () => dispatch({ type: 'filePost' }),
      fileFind: () => dispatch({ type: 'fileFind' }),
      commit: () => dispatch({ type: 'go', screen: 'going' }),
      decline: () => dispatch({ type: 'go', screen: 'declined' }),
      back: () => dispatch({ type: 'go', screen: 'suggestion' }),
      restart: () => dispatch({ type: 'go', screen: 'budget' }),
    };
  }, [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}

/** Short label for the "Instead" pill on the replacement screen. */
export function swapTagLabel(reason: SwapReason): string {
  if (reason === 'far') return 'Closer';
  if (reason === 'hot') return 'Air-conditioned';
  return 'Different dish';
}

export function shopButtonState(state: State, key: AccessoryKey, cost: number) {
  const owned = state.owned[key];
  const worn = state.worn[key];
  const canAfford = state.credits >= cost;
  if (owned && worn) return { label: 'Worn', bg: 'var(--ink)', fg: 'var(--amber-light)' };
  if (owned) return { label: 'Wear it', bg: 'var(--amber-lighter)', fg: 'var(--ink)' };
  if (!canAfford)
    return { label: `Need ${cost - state.credits} more`, bg: 'var(--bg)', fg: 'var(--brown-mono)' };
  return { label: `Buy · ${cost}`, bg: 'var(--amber-light)', fg: 'var(--ink)' };
}
