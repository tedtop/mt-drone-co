// Central registry of stock photography used across the site. All images are
// free-to-use stock photos (sourced from Pexels, license permits free
// commercial use, no attribution required) stored locally in /public/images —
// generic atmospheric/subject-matter imagery (drones in flight, Montana
// landscapes, power lines, etc), never presented as photos of this specific
// company's own completed projects, aircraft, or staff. See README.md
// "Stock photography" section for the full sourcing list and honesty notes.

export const heroImages = {
  home: "/images/hero-home.jpg",
  government: "/images/hero-government.jpg",
  about: "/images/hero-about.jpg",
  safety: "/images/hero-safety.jpg",
  services: "/images/hero-services.jpg",
  serviceArea: "/images/hero-service-area.jpg",
} as const;

export const cityImages: Record<string, string> = {
  missoula: "/images/city-missoula.jpg",
  bozeman: "/images/city-bozeman.jpg",
  billings: "/images/city-billings.jpg",
  helena: "/images/city-helena.jpg",
  kalispell: "/images/city-kalispell.jpg",
  "great-falls": "/images/city-great-falls.jpg",
  butte: "/images/city-butte.jpg",
};

export const serviceImages: Record<string, string> = {
  "aerial-photo-video": "/images/service-aerial-photo-video.jpg",
  "mapping-photogrammetry": "/images/service-mapping-photogrammetry.jpg",
  "surveying-support": "/images/service-surveying-support.jpg",
  "utility-power-line-inspection": "/images/service-utility-power-line-inspection.jpg",
  "thermal-inspection": "/images/service-thermal-inspection.jpg",
  "wildfire-prescribed-burn-support": "/images/service-wildfire-prescribed-burn-support.jpg",
  "construction-progress-monitoring": "/images/service-construction-progress-monitoring.jpg",
  "real-estate-land": "/images/service-real-estate-land.jpg",
  "agriculture-land-management": "/images/service-agriculture-land-management.jpg",
  "search-rescue-public-safety": "/images/service-search-rescue-public-safety.jpg",
  "event-coverage": "/images/service-event-coverage.jpg",
  "training-consulting": "/images/service-training-consulting.jpg",
};

export const fleetImages = {
  entryLevel: "/images/fleet-entry-level.jpg",
  prosumer: "/images/fleet-prosumer.jpg",
  enterprise: "/images/fleet-enterprise.jpg",
  thermalSensor: "/images/fleet-thermal-sensor.jpg",
} as const;

// Industry-example photography standing in for "sample deliverable" slots —
// real aerial/infrared/on-the-ground photography relevant to each service,
// but never presented as this company's own completed work (see
// IllustrativeDeliverable.tsx and README.md "Sample deliverable
// illustrations"). Keyed by service slug so each service page shows imagery
// actually relevant to that service rather than one generic set.
export const sampleDeliverableImages: Record<string, { src: string; label: string }> = {
  "aerial-photo-video": { src: "/images/sample-aerialvideo.jpg", label: "Cinematic aerial photography" },
  "mapping-photogrammetry": { src: "/images/sample-orthomosaic.jpg", label: "Orthomosaic map" },
  "surveying-support": { src: "/images/sample-surveying.jpg", label: "Aerial survey data capture" },
  "utility-power-line-inspection": { src: "/images/sample-utility-inspection.jpg", label: "Utility inspection imagery" },
  "thermal-inspection": { src: "/images/sample-thermal.jpg", label: "Thermal inspection imagery" },
  "wildfire-prescribed-burn-support": { src: "/images/sample-wildfire.jpg", label: "Wildfire reconnaissance imagery" },
  "construction-progress-monitoring": { src: "/images/sample-construction.jpg", label: "Construction progress capture" },
  "real-estate-land": { src: "/images/sample-realestate.jpg", label: "Real estate aerial imagery" },
  "agriculture-land-management": { src: "/images/sample-agriculture.jpg", label: "Agricultural field imagery" },
  "search-rescue-public-safety": { src: "/images/sample-searchrescue.jpg", label: "Search and rescue terrain imagery" },
  "event-coverage": { src: "/images/sample-event.jpg", label: "Event aerial coverage" },
  "training-consulting": { src: "/images/sample-training.jpg", label: "Flight operations training" },
};

// The 3 shown on the home page's generic "what a deliverable looks like" strip.
export const homeSampleDeliverables = [
  { src: "/images/sample-orthomosaic.jpg", label: "Orthomosaic map" },
  { src: "/images/sample-thermal.jpg", label: "Thermal inspection report" },
  { src: "/images/sample-utility-inspection.jpg", label: "Utility inspection report" },
];
