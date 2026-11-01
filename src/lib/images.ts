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
