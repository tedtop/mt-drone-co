// Service-area city pages. Keep copy generic and honest — we are Montana-wide
// from day one, not claiming an office or crew based in every city listed.

export interface CityArea {
  slug: string;
  name: string;
  region: string;
  blurb: string;
  nearbyNotes?: string[]; // e.g. national park drone bans, major local industries
  relevantServices: string[]; // service slugs most relevant to this area
}

export const cities: CityArea[] = [
  {
    slug: "missoula",
    name: "Missoula",
    region: "Western Montana",
    blurb:
      "Western Montana's hub for forestry, construction, and higher-education projects — and a base for regional wildfire support logistics.",
    nearbyNotes: [
      "The U.S. Forest Service's Northern Rockies (Region 1) fire operations are headquartered in Missoula, making it a natural base for on-call wildfire support coordination.",
    ],
    relevantServices: [
      "wildfire-prescribed-burn-support",
      "mapping-photogrammetry",
      "construction-progress-monitoring",
      "aerial-photo-video",
    ],
  },
  {
    slug: "bozeman",
    name: "Bozeman",
    region: "Southwest Montana",
    blurb:
      "Fast-growing Gallatin Valley with heavy construction, real estate, and tourism activity near Yellowstone's north entrance corridor.",
    nearbyNotes: [
      "Yellowstone National Park prohibits unmanned aircraft operations. We do not fly within national park boundaries and cannot support shoots that would require it.",
    ],
    relevantServices: [
      "construction-progress-monitoring",
      "real-estate-land",
      "mapping-photogrammetry",
      "event-coverage",
    ],
  },
  {
    slug: "billings",
    name: "Billings",
    region: "Eastern Montana / Yellowstone County",
    blurb:
      "Montana's largest city and an energy, agriculture, and rail logistics center with significant industrial inspection demand.",
    relevantServices: [
      "utility-power-line-inspection",
      "thermal-inspection",
      "agriculture-land-management",
      "mapping-photogrammetry",
    ],
  },
  {
    slug: "helena",
    name: "Helena",
    region: "West-Central Montana",
    blurb:
      "State capital with a concentration of state agency, tribal, and local government decision-makers for public-sector drone programs.",
    nearbyNotes: [
      "As the seat of state government, Helena is a priority market for our government and enterprise services — see our Government and Enterprise page.",
    ],
    relevantServices: [
      "mapping-photogrammetry",
      "wildfire-prescribed-burn-support",
      "search-rescue-public-safety",
      "training-consulting",
    ],
  },
  {
    slug: "kalispell",
    name: "Kalispell",
    region: "Northwest Montana / Flathead Valley",
    blurb:
      "Flathead Valley's commercial center, serving a region with active utility inspection programs and heavy seasonal tourism.",
    nearbyNotes: [
      "Glacier National Park prohibits unmanned aircraft operations. We do not fly within national park boundaries, including Glacier, and cannot support shoots that would require it.",
      "Flathead Electric Cooperative began using drones for power line inspection in 2026 — a sign of regional utility demand for this service.",
    ],
    relevantServices: [
      "utility-power-line-inspection",
      "real-estate-land",
      "aerial-photo-video",
      "thermal-inspection",
    ],
  },
  {
    slug: "great-falls",
    name: "Great Falls",
    region: "North-Central Montana",
    blurb:
      "Agricultural and energy infrastructure hub, with proximity to Malmstrom Air Force Base requiring extra airspace awareness.",
    nearbyNotes: [
      "Operations near Malmstrom Air Force Base require additional airspace coordination; we account for this in flight planning for the area.",
    ],
    relevantServices: [
      "agriculture-land-management",
      "utility-power-line-inspection",
      "mapping-photogrammetry",
      "construction-progress-monitoring",
    ],
  },
  {
    slug: "butte",
    name: "Butte",
    region: "Southwest Montana",
    blurb:
      "Historic mining city with ongoing reclamation, infrastructure, and industrial-site mapping needs.",
    relevantServices: [
      "mapping-photogrammetry",
      "thermal-inspection",
      "surveying-support",
      "construction-progress-monitoring",
    ],
  },
];

export function getCityBySlug(slug: string): CityArea | undefined {
  return cities.find((c) => c.slug === slug);
}
