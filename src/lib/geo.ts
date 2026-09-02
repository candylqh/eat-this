import type { OfficeAnchor } from '../data/office';
import type { Stall } from '../data/seedStalls';

const EARTH_RADIUS_M = 6371000;

/** Straight-line distance between two lat/lng points, in meters. */
export function haversineMeters(aLat: number, aLng: number, bLat: number, bLng: number): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(bLat - aLat);
  const dLng = toRad(bLng - aLng);
  const lat1 = toRad(aLat);
  const lat2 = toRad(bLat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * EARTH_RADIUS_M * Math.asin(Math.sqrt(h));
}

/** Average casual walking pace, meters/minute (4.8 km/h). */
export const WALK_SPEED_M_PER_MIN = 80;

/**
 * Straight-line distance understates real footpath distance — streets
 * aren't straight lines. This is a standard urban-planning rule of thumb
 * for converting as-the-crow-flies distance to walking distance; it's
 * applied uniformly to every stall, not tuned per stall to hit a number.
 */
export const DETOUR_FACTOR = 1.4;

/** Walk time from the office anchor to a stall, in whole minutes (rounded up). */
export function walkTimeMinutes(anchor: OfficeAnchor, stall: Stall): number {
  const straightLineM = haversineMeters(anchor.lat, anchor.lng, stall.lat, stall.lng);
  const walkingDistanceM = straightLineM * DETOUR_FACTOR;
  return Math.ceil(walkingDistanceM / WALK_SPEED_M_PER_MIN);
}
