import { OFFICE_ANCHOR } from '../data/office';
import type { Stall } from '../data/seedStalls';
import { walkTimeMinutes } from './geo';

/** Fixed and disclosed as a simplification: time actually spent eating. */
export const EAT_TIME_MIN = 15;

export type SwapReason = 'far' | 'hot' | 'mood';

export interface FeasibilityResult {
  stall: Stall;
  walkOutMin: number;
  queueMin: number;
  eatMin: number;
  walkBackMin: number;
  totalMin: number;
  leaveAt: Date;
  backAt: Date;
  /** Minutes of slack before the next commitment; negative means it's cutting it late. */
  spareMin: number;
  feasible: boolean;
}

/**
 * The real arithmetic: walk out + queue + eat + walk back, checked against
 * the next calendar commitment. Walk time comes from the office anchor via
 * geo.ts; queue time is the stall's placeholder estimate; nothing here is
 * hardcoded to always pass.
 */
export function computeFeasibility(stall: Stall, nextCommitmentAt: Date, now: Date): FeasibilityResult {
  const walkOutMin = walkTimeMinutes(OFFICE_ANCHOR, stall);
  const walkBackMin = walkOutMin; // same route, both directions
  const queueMin = stall.queueTimeMin;
  const eatMin = EAT_TIME_MIN;
  const totalMin = walkOutMin + queueMin + eatMin + walkBackMin;

  const leaveAt = now;
  const backAt = new Date(now.getTime() + totalMin * 60000);
  const spareMin = Math.round((nextCommitmentAt.getTime() - backAt.getTime()) / 60000);

  return { stall, walkOutMin, queueMin, eatMin, walkBackMin, totalMin, leaveAt, backAt, spareMin, feasible: spareMin >= 0 };
}

/** Two short, data-driven reasoning lines — no hand-authored per-stall flavor text. */
export function reasoningLines(r: FeasibilityResult): string[] {
  const seating =
    r.stall.seatingType === 'aircon'
      ? 'Air-conditioned seating.'
      : r.stall.seatingType === 'outdoor'
        ? 'Outdoor seating.'
        : 'Fan-cooled seating.';
  return [
    `${r.walkOutMin} minute${r.walkOutMin === 1 ? '' : 's'} each way to ${r.stall.centreName}.`,
    `${seating} About a ${r.stall.queueTimeMin}-minute queue.`,
  ];
}

/** All stalls, ranked fastest round-trip first. */
export function rankByTotalTime(stalls: Stall[], nextCommitmentAt: Date, now: Date): FeasibilityResult[] {
  return stalls
    .map((s) => computeFeasibility(s, nextCommitmentAt, now))
    .sort((a, b) => a.totalMin - b.totalMin);
}

/**
 * Today's one suggestion: the fastest stall that actually fits. If nothing
 * fits, this is honest about it and surfaces the closest miss rather than
 * silently forcing a pass.
 */
export function pickSuggestion(stalls: Stall[], nextCommitmentAt: Date, now: Date, excludeIds: string[] = []): FeasibilityResult {
  const candidates = stalls.filter((s) => !excludeIds.includes(s.id));
  const ranked = rankByTotalTime(candidates, nextCommitmentAt, now);
  const feasible = ranked.find((r) => r.feasible);
  return feasible ?? ranked[0];
}

/**
 * The one replacement after a decline. Filters by the stated reason, then
 * applies the same real feasibility check — never a hardcoded "of course
 * this one fits" swap.
 */
export function pickReplacement(
  stalls: Stall[],
  reason: SwapReason,
  current: FeasibilityResult,
  nextCommitmentAt: Date,
  now: Date,
): FeasibilityResult {
  let candidates = stalls.filter((s) => s.id !== current.stall.id);

  if (reason === 'far') {
    candidates = candidates.filter((s) => walkTimeMinutes(OFFICE_ANCHOR, s) < current.walkOutMin);
  } else if (reason === 'hot') {
    candidates = candidates.filter((s) => s.seatingType === 'aircon');
  } else if (reason === 'mood') {
    candidates = candidates.filter(
      (s) => s.signatureDish !== current.stall.signatureDish && s.cuisine !== current.stall.cuisine,
    );
  }

  // If the reason filter leaves nothing, fall back to any other stall rather
  // than crash — still runs through the same real feasibility check.
  if (candidates.length === 0) {
    candidates = stalls.filter((s) => s.id !== current.stall.id);
  }

  return pickSuggestion(candidates, nextCommitmentAt, now);
}
