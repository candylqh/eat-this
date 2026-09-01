import { createContext, useContext, useMemo, useReducer, type ReactNode } from 'react';

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

export type SwapReason = 'far' | 'hot' | 'mood';
export type Outcome = 'went' | 'missed';
export type AccessoryKey = 'hat' | 'scarf' | 'specs';

interface State {
  screen: Screen;
  reason: SwapReason;
  outcome: Outcome;
  chip: number;
  credits: number;
  owned: Record<AccessoryKey, boolean>;
  worn: Record<AccessoryKey, boolean>;
}

const initialState: State = {
  screen: 'budget',
  reason: 'far',
  outcome: 'went',
  chip: 1,
  credits: 14,
  owned: { hat: true, scarf: false, specs: false },
  worn: { hat: true, scarf: false, specs: false },
};

type Action =
  | { type: 'go'; screen: Screen }
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
    case 'swap':
      return { ...state, reason: action.reason, screen: 'replacement' };
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
  go: (screen: Screen) => void;
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo<Ctx>(
    () => ({
      state,
      go: (screen) => dispatch({ type: 'go', screen }),
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
    }),
    [state],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}

export const SWAPS: Record<SwapReason, { tag: string; reason: string }> = {
  far: {
    tag: 'Closer than Amoy',
    reason: 'Four minutes each way instead of six, and the last two are under the covered link.',
  },
  hot: {
    tag: 'Air-conditioned',
    reason:
      'Same four-minute walk, but you eat in air-con — the fan-cooled floor is the one you turned down.',
  },
  mood: {
    tag: 'Not chicken rice',
    reason: 'Noodles instead, and nothing on this plate resembles what you just declined.',
  },
};

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
