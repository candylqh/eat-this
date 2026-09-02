export interface OfficeAnchor {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

/**
 * Single office anchor for this demo — one office, no multi-tenant
 * abstraction. Every stall's walk time is computed from this anchor
 * (see src/lib/geo.ts); nothing downstream hardcodes a walk time per stall.
 */
export const OFFICE_ANCHOR: OfficeAnchor = {
  name: 'Defence Technology Building',
  address: '1 Depot Road, Singapore 109679',
  lat: 1.2793,
  lng: 103.81655,
};
