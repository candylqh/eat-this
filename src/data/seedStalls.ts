export type SeatingType = 'fan-cooled' | 'aircon' | 'outdoor';

export interface Stall {
  id: string;
  name: string;
  centreName: string;
  unit: string;
  address: string;
  lat: number;
  lng: number;
  cuisine: string;
  signatureDish: string;
  price: number;
  seatingType: SeatingType;
  /**
   * Placeholder/mock — not sourced from a real queue signal. Safe to
   * replace with a live queue estimate later; nothing else in the app
   * depends on this being real.
   */
  queueTimeMin: number;
}

/**
 * The one editable seed set for the whole app. Swap this file (or its
 * contents) to change every stall shown anywhere — suggestion, the
 * decline/replacement loop, and the plates board all read from here.
 * Deliberately no `walkTimeMin` field: walk time is always computed live
 * from OFFICE_ANCHOR + this stall's lat/lng (src/lib/geo.ts), never stored.
 */
export const STALLS: Stall[] = [
  {
    id: 'jiak-song-mee-hoon-kway',
    name: 'Jiak Song Mee Hoon Kway',
    centreName: 'Telok Blangah Crescent Market & Food Centre',
    unit: '#01-108',
    address: '11 Telok Blangah Crescent, Singapore 090011',
    lat: 1.277589579,
    lng: 103.8190741,
    cuisine: 'Singaporean',
    signatureDish: 'Mee Hoon Kway',
    price: 5.9,
    seatingType: 'fan-cooled',
    queueTimeMin: 10,
  },
  {
    id: 'fong-yong-tau-foo',
    name: 'Fong Yong Tau Foo',
    centreName: 'Bukit Merah Central Food Centre',
    unit: '#01-3631',
    address: '164 Bukit Merah Central, Singapore 150164',
    lat: 1.283447683,
    lng: 103.8167956,
    cuisine: 'Singaporean',
    signatureDish: 'Yong Tau Foo Dry',
    price: 6,
    seatingType: 'fan-cooled',
    queueTimeMin: 5,
  },
  {
    id: 'chicken-rice-station',
    name: 'Chicken Rice Station',
    centreName: 'Depot Heights Shopping Centre',
    unit: '#02-22',
    address: '108 Depot Road',
    lat: 1.2811084,
    lng: 103.810715,
    cuisine: 'Singaporean',
    signatureDish: 'Hainanese Chicken Rice',
    price: 4.6,
    seatingType: 'fan-cooled',
    queueTimeMin: 10,
  },
  {
    id: 'xiang-man-bak-chor-mee',
    name: 'Xiang Man Bak Chor Mee',
    centreName: 'Yue Hua Food Court',
    unit: '#02-22',
    address: '108 Depot Road',
    lat: 1.2812284,
    lng: 103.8107405,
    cuisine: 'Singaporean',
    signatureDish: 'Bak Chor Mee',
    price: 4,
    seatingType: 'fan-cooled',
    queueTimeMin: 8,
  },
  {
    id: 'huang-ji-beef-noodle',
    name: 'Huang Ji Beef Noodle',
    centreName: 'Yue Hua Food Court',
    unit: '#02-22',
    address: '108 Depot Road',
    lat: 1.2812284,
    lng: 103.8107405,
    cuisine: 'Singaporean',
    signatureDish: 'Beef Brisket Noodle',
    price: 6,
    seatingType: 'fan-cooled',
    queueTimeMin: 12,
  },
  {
    id: 'yue-hua-seafood',
    name: 'Yue Hua Seafood',
    centreName: 'Depot Heights Shopping Centre',
    unit: '#02-04',
    address: '108 Depot Road',
    lat: 1.2810722,
    lng: 103.8106553,
    cuisine: 'Singaporean',
    signatureDish: 'Luncheon Meat Fried Rice',
    price: 7,
    seatingType: 'fan-cooled',
    queueTimeMin: 15,
  },
  {
    id: 'korean-japanese-cuisine-stall',
    name: 'Korean & Japanese Cuisine Stall',
    centreName: 'Depot Heights Shopping Centre',
    unit: '#01',
    address: '108 Depot Road',
    lat: 1.2812961,
    lng: 103.8107113,
    cuisine: 'Korean',
    signatureDish: 'Kimchi Fried Rice with Teriyaki Chicken',
    price: 9,
    seatingType: 'fan-cooled',
    queueTimeMin: 10,
  },
  {
    id: 'mad-roaster',
    name: 'Mad Roaster',
    centreName: 'Depot Heights',
    unit: '#01-14',
    address: '108 Depot Road',
    lat: 1.2813172,
    lng: 103.8105896,
    cuisine: 'Cafe',
    signatureDish: 'Kimchi Grilled Cheese',
    price: 8,
    seatingType: 'aircon',
    queueTimeMin: 7,
  },
  {
    id: 'frog-porridge-stall',
    name: 'Frog Porridge Stall',
    centreName: 'Telok Blangah Crescent Market & Food Centre',
    unit: '#01',
    address: '11 Telok Blangah Crescent',
    lat: 1.277271,
    lng: 103.8187789,
    cuisine: 'Singaporean',
    signatureDish: 'Frog Porridge',
    price: 8,
    seatingType: 'fan-cooled',
    queueTimeMin: 15,
  },
  {
    id: 'carrot-cake-stall',
    name: 'Carrot Cake Stall',
    centreName: 'Telok Blangah Crescent Market & Food Centre',
    unit: '#01',
    address: '11 Telok Blangah Crescent',
    lat: 1.277271,
    lng: 103.8187789,
    cuisine: 'Singaporean',
    signatureDish: 'Fried Carrot Cake',
    price: 4,
    seatingType: 'fan-cooled',
    queueTimeMin: 12,
  },
  {
    id: 'economic-bee-hoon-stall',
    name: 'Economic Bee Hoon Stall',
    centreName: 'Telok Blangah Crescent Market & Food Centre',
    unit: '#01',
    address: '11 Telok Blangah Crescent',
    lat: 1.277271,
    lng: 103.8187789,
    cuisine: 'Singaporean',
    signatureDish: 'Economic Bee Hoon',
    price: 3.5,
    seatingType: 'fan-cooled',
    queueTimeMin: 10,
  },
  {
    id: 'wan-ton-mee-stall',
    name: 'Wan Ton Mee Stall',
    centreName: 'Telok Blangah Crescent Market & Food Centre',
    unit: '#01',
    address: '11 Telok Blangah Crescent',
    lat: 1.277271,
    lng: 103.8187789,
    cuisine: 'Singaporean',
    signatureDish: 'Wan Ton Mee',
    price: 4,
    seatingType: 'fan-cooled',
    queueTimeMin: 8,
  },
  {
    id: 'fish-soup-stall',
    name: 'Fish Soup Stall',
    centreName: 'Telok Blangah Crescent Market & Food Centre',
    unit: '#01',
    address: '11 Telok Blangah Crescent',
    lat: 1.277271,
    lng: 103.8187789,
    cuisine: 'Singaporean',
    signatureDish: 'Sliced Fish Soup',
    price: 8,
    seatingType: 'fan-cooled',
    queueTimeMin: 12,
  },
];
