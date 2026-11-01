// Structured data for every service line. Pages are generated from this file
// via src/app/services/[slug]/page.tsx. Copy here is original positioning —
// written for a new company, not a claim of prior project history.

export type ServiceCategory = "visual" | "data" | "inspection" | "public-safety" | "land" | "advisory";

export interface ServiceDeliverable {
  name: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  summary: string;
  heroDescription: string;
  idealFor: string[];
  capabilities: string[];
  deliverables: ServiceDeliverable[];
  process: string[];
  notes?: string[]; // honesty/legal/positioning caveats specific to this service
}

export const services: Service[] = [
  {
    slug: "aerial-photo-video",
    title: "Aerial Photography and Videography",
    shortTitle: "Photo & Video",
    category: "visual",
    summary:
      "Elevated imagery for marketing, real estate, construction, and media use — planned and shot to a brief, not just flown for footage.",
    heroDescription:
      "Still photography and video captured from FAA-regulated airspace, delivered in the formats your team actually needs: web-ready stills, broadcast-grade video, and raw footage for your own editors.",
    idealFor: [
      "Real estate and commercial property marketing",
      "Tourism, hospitality, and destination marketing",
      "Corporate and brand video",
      "Large event and venue coverage",
    ],
    capabilities: [
      "Shot planning around golden-hour light and airspace constraints",
      "4K+ video capture with stabilized gimbal platforms",
      "High-resolution still photography for print and web",
      "FAA-compliant flight planning, including controlled-airspace authorization where required",
    ],
    deliverables: [
      { name: "Edited highlight video", description: "Color-graded, licensed-music-ready cut sized for web and social." },
      { name: "Raw footage package", description: "Unedited 4K+ clips delivered for your in-house or agency editors." },
      { name: "Still photo gallery", description: "High-resolution JPEG/RAW stills, lightly color-corrected." },
    ],
    process: [
      "Brief and shot list review",
      "Airspace and site access check (LAANC authorization where applicable)",
      "Flight day with backup weather window",
      "Edit and delivery via download link",
    ],
  },
  {
    slug: "mapping-photogrammetry",
    title: "Mapping and Photogrammetry",
    shortTitle: "Mapping & Photogrammetry",
    category: "data",
    summary:
      "Orthomosaic maps, digital surface models, and 3D models built from overlapping aerial imagery for engineering, planning, and asset teams.",
    heroDescription:
      "Structured aerial survey flights processed into orthomosaics, point clouds, and 3D models your GIS, engineering, or planning team can drop straight into existing workflows.",
    idealFor: [
      "Civil engineering and land development firms",
      "Local government planning and GIS departments",
      "Quarry, mining, and stockpile volumetrics",
      "Agricultural land assessment",
    ],
    capabilities: [
      "Ground control point (GCP) placement for survey-grade accuracy where required",
      "Orthomosaic generation at centimeter-level ground sample distance",
      "Digital surface model (DSM) and digital terrain model (DTM) outputs",
      "Textured 3D mesh models for visualization and design review",
    ],
    deliverables: [
      { name: "Orthomosaic (GeoTIFF)", description: "Georeferenced, stitched aerial map ready for GIS import." },
      { name: "Point cloud (LAS/LAZ)", description: "Dense 3D point cloud for volumetric and terrain analysis." },
      { name: "3D model", description: "Textured mesh exportable to common CAD/BIM/visualization tools." },
    ],
    process: [
      "Define accuracy requirements and coordinate system with your team",
      "Flight planning with appropriate image overlap",
      "Ground control setup where survey-grade accuracy is required",
      "Photogrammetric processing and QA against control points",
      "Delivery in your required file formats",
    ],
    notes: [
      "Survey-grade deliverables intended to support — not replace — a licensed land surveyor's stamped work where one is legally required.",
    ],
  },
  {
    slug: "surveying-support",
    title: "Surveying Support",
    shortTitle: "Surveying Support",
    category: "data",
    summary:
      "Aerial data collection that feeds a licensed surveyor's workflow — topographic detail, volumetrics, and site documentation at a fraction of ground-crew time.",
    heroDescription:
      "We fly, you (or your licensed surveyor) stamp. Aerial data collection designed to plug into a professional land surveyor's existing process for topographic and boundary-adjacent work.",
    idealFor: [
      "Licensed land surveying firms needing faster topo data collection",
      "Civil engineers scoping early-stage site design",
      "Developers needing preliminary site documentation before a formal survey",
    ],
    capabilities: [
      "Topographic point cloud and contour-ready elevation data",
      "Site documentation imagery for pre-design and change-tracking",
      "Coordination with a surveyor's existing control network and datum",
    ],
    deliverables: [
      { name: "Topographic dataset", description: "Point cloud and/or contour lines in a format your survey software accepts." },
      { name: "Site imagery set", description: "Dated aerial imagery for documentation and progress comparison." },
    ],
    process: [
      "Coordinate scope and accuracy needs directly with your surveyor of record",
      "Fly to the control and datum your project already uses",
      "Deliver data formatted for your existing survey/CAD pipeline",
    ],
    notes: [
      "This is aerial data collection support, not a substitute for a licensed surveyor's legal survey or boundary determination.",
    ],
  },
  {
    slug: "utility-power-line-inspection",
    title: "Power Line and Utility Inspection",
    shortTitle: "Utility Inspection",
    category: "inspection",
    summary:
      "Drone-based inspection of transmission and distribution infrastructure — a faster, lower-cost alternative to helicopter patrols for routine visual inspection.",
    heroDescription:
      "Visual and thermal inspection of poles, conductors, and substations, built around utility reliability standards and documentation requirements — not a photo mission, an inspection program.",
    idealFor: [
      "Electric cooperatives and municipal utilities",
      "Investor-owned utilities supplementing helicopter patrol cycles",
      "Solar and wind asset owners needing infrastructure checks",
    ],
    capabilities: [
      "Visual inspection of structures, hardware, and conductors",
      "Defect flagging (cracked insulators, vegetation encroachment, hardware wear)",
      "Flight planning around active-line safety protocols and utility right-of-way access",
      "Structured, repeatable inspection routes for recurring patrol cycles",
    ],
    deliverables: [
      { name: "Inspection report", description: "Structure-by-structure findings with GPS tags and annotated imagery." },
      { name: "Flagged defect list", description: "Prioritized list of items needing utility crew follow-up." },
      { name: "Imagery archive", description: "Geotagged photo set for your asset management system." },
    ],
    process: [
      "Review line segment, access points, and utility safety requirements",
      "Coordinate outage/energized-line protocol with your operations team",
      "Fly inspection route and capture structure-level imagery",
      "Deliver findings report mapped to your asset IDs",
    ],
    notes: [
      "Positioned as lower-cost, more frequent supplementary coverage alongside — not a wholesale replacement for — existing helicopter patrol and ground crew programs.",
    ],
  },
  {
    slug: "thermal-inspection",
    title: "Thermal Inspection",
    shortTitle: "Thermal Inspection",
    category: "inspection",
    summary:
      "Infrared imaging for roofs, solar arrays, and infrastructure — surfacing heat signatures that indicate moisture intrusion, electrical faults, or panel underperformance.",
    heroDescription:
      "Aerial thermal imaging to find what's invisible at ground level: roof moisture, failing solar cells, overheating electrical connections, and insulation gaps.",
    idealFor: [
      "Commercial roofing contractors and property managers",
      "Solar installers and asset owners (utility-scale and commercial rooftop)",
      "Utilities and industrial facilities checking electrical connections",
    ],
    capabilities: [
      "Radiometric thermal imagery with temperature-mapped overlays",
      "Side-by-side visual/thermal comparison for each flagged area",
      "Flight timing optimized for thermal contrast (pre-dawn, post-sunset, or delta-T windows)",
    ],
    deliverables: [
      { name: "Thermal report", description: "Annotated thermal + visual image pairs with temperature readings at flagged points." },
      { name: "Radiometric imagery", description: "Raw radiometric files for your own thermal analysis software." },
    ],
    process: [
      "Confirm target type and ideal thermal contrast window",
      "Fly matched thermal/visual passes",
      "Analyze and flag anomalies against expected baselines",
      "Deliver report with prioritized findings",
    ],
  },
  {
    slug: "wildfire-prescribed-burn-support",
    title: "Wildfire and Prescribed Burn Support",
    shortTitle: "Wildfire & Burn Support",
    category: "public-safety",
    summary:
      "On-call aerial reconnaissance and thermal hotspot detection to extend an incident management team's eyes, not replace agency-flown operations.",
    heroDescription:
      "Surge-capacity drone support for fire management: reconnaissance imagery, thermal hotspot mapping, and burn-perimeter monitoring, available on-call alongside agency-operated aircraft.",
    idealFor: [
      "State and federal fire management agencies needing on-call surge capacity",
      "Prescribed burn teams monitoring burn perimeters and holdover heat",
      "Land management agencies documenting post-fire conditions",
    ],
    capabilities: [
      "Thermal hotspot detection for holdover heat and spot fires",
      "Burn perimeter and smoke-column reconnaissance imagery",
      "Post-burn and post-fire aerial documentation",
      "On-call availability structured around agency incident timelines",
    ],
    deliverables: [
      { name: "Thermal hotspot map", description: "Georeferenced map of detected heat signatures across the monitored area." },
      { name: "Reconnaissance imagery", description: "Current-condition stills/video of the burn or fire perimeter." },
      { name: "Flight log and incident documentation", description: "Records formatted for incident management system reporting." },
    ],
    process: [
      "Establish on-call agreement and incident contact protocol in advance of fire season",
      "Receive activation request from incident command or burn boss",
      "Coordinate airspace deconfliction with any manned/unmanned agency aircraft on scene",
      "Fly, process, and deliver findings on the incident's timeline",
    ],
    notes: [
      "Intended as supplementary, on-call surge capacity that supports agency incident management teams — not a replacement for agency-flown aerial ignition or firefighting aircraft operations.",
      "All fire-domain flights require explicit coordination and authorization from the incident commander or responsible agency; we do not self-dispatch into active fire airspace.",
    ],
  },
  {
    slug: "construction-progress-monitoring",
    title: "Construction Progress Monitoring",
    shortTitle: "Construction Monitoring",
    category: "data",
    summary:
      "Recurring aerial capture that turns into a time-stamped visual record of a job site — for owners, GCs, and lenders who need proof of progress.",
    heroDescription:
      "Scheduled aerial flights (weekly, bi-weekly, or milestone-based) that build a consistent visual and measurable record of construction progress over time.",
    idealFor: [
      "General contractors managing owner and lender reporting",
      "Developers tracking multi-phase site build-out",
      "Project owners wanting an independent progress record",
    ],
    capabilities: [
      "Recurring flight scheduling matched to project milestones",
      "Orthomosaic time-series for side-by-side progress comparison",
      "Volumetric tracking for cut/fill and stockpile quantities",
    ],
    deliverables: [
      { name: "Progress imagery set", description: "Dated aerial stills/video for each capture date." },
      { name: "Time-series orthomosaic comparison", description: "Side-by-side maps showing change over the capture interval." },
      { name: "Volumetric report", description: "Cut/fill and material quantity estimates where applicable." },
    ],
    process: [
      "Set capture cadence and key reporting dates with your project team",
      "Fly consistent flight paths each visit for comparable data",
      "Deliver imagery and reports on a predictable schedule",
    ],
  },
  {
    slug: "real-estate-land",
    title: "Real Estate and Land",
    shortTitle: "Real Estate & Land",
    category: "visual",
    summary:
      "Listing-ready aerial photography and video, plus property boundary and terrain context for land listings, ranches, and acreage sales.",
    heroDescription:
      "Aerial imagery built for how buyers actually evaluate property: context of the whole parcel, terrain, access, and neighboring land use — not just a flyover clip.",
    idealFor: [
      "Residential and commercial real estate listings",
      "Ranch, farm, and large-acreage land sales",
      "Land brokers needing boundary and terrain context imagery",
    ],
    capabilities: [
      "Listing photo and video packages",
      "Parcel-context imagery showing boundaries, access roads, and terrain",
      "Optional orthomosaic map overlay for large acreage listings",
    ],
    deliverables: [
      { name: "Listing photo set", description: "Web-ready aerial stills for MLS and marketing use." },
      { name: "Listing video", description: "Short-form aerial video edited for listing pages and social media." },
      { name: "Parcel context map", description: "Optional orthomosaic/boundary overlay for larger properties." },
    ],
    process: [
      "Confirm property boundaries and any airspace restrictions near the parcel",
      "Fly during optimal light for listing-quality imagery",
      "Deliver edited stills/video within an agreed turnaround",
    ],
  },
  {
    slug: "agriculture-land-management",
    title: "Agriculture and Land Management",
    shortTitle: "Agriculture & Land",
    category: "land",
    summary:
      "Multispectral-ready aerial data to support crop health assessment, irrigation planning, and rangeland management decisions.",
    heroDescription:
      "Aerial imagery and mapping built for working land — crop stress visibility, irrigation and drainage mapping, and rangeland/herd-area documentation for ranch operations.",
    idealFor: [
      "Row crop and specialty crop operations",
      "Ranch and rangeland management",
      "Irrigation districts and conservation projects",
    ],
    capabilities: [
      "Field-level orthomosaic mapping for crop and land assessment",
      "Visual crop stress and irrigation pattern documentation",
      "Acreage measurement and land-use mapping",
    ],
    deliverables: [
      { name: "Field orthomosaic", description: "Georeferenced map of the field or rangeland area." },
      { name: "Crop/land condition imagery", description: "Annotated imagery flagging visible stress or irrigation issues." },
      { name: "Acreage and boundary report", description: "Measured acreage and land-use breakdown." },
    ],
    process: [
      "Define field boundaries and timing relative to growing season",
      "Fly at a cadence that matches the decision you're trying to make",
      "Deliver maps and imagery in a format your farm management software accepts",
    ],
    notes: [
      "Multispectral/NDVI-specific analysis depends on sensor availability at time of booking — confirm current sensor capability when scoping a project.",
    ],
  },
  {
    slug: "search-rescue-public-safety",
    title: "Search and Rescue / Public Safety Support",
    shortTitle: "SAR & Public Safety",
    category: "public-safety",
    summary:
      "On-call aerial support for search and rescue teams and public safety agencies — reconnaissance, thermal search, and scene documentation under agency direction.",
    heroDescription:
      "Drone support fielded under the direction of the responsible search and rescue or public safety agency — extending situational awareness without duplicating a department's own aviation unit.",
    idealFor: [
      "County search and rescue teams",
      "Local law enforcement and fire departments without an in-house UAS program",
      "Emergency management agencies needing surge aerial capacity",
    ],
    capabilities: [
      "Thermal search support for missing-person operations",
      "Scene and area reconnaissance imagery",
      "Post-incident documentation imagery",
    ],
    deliverables: [
      { name: "Live/near-real-time imagery feed", description: "Visual and thermal feed to incident command, where equipment and authorization allow." },
      { name: "Search area coverage map", description: "Documented flight coverage area for search planning records." },
      { name: "Incident documentation imagery", description: "Still/video record for after-action reporting." },
    ],
    process: [
      "Establish a standing mutual-aid or on-call agreement with the agency before an incident",
      "Respond to activation under incident command direction",
      "Coordinate airspace with any other aircraft (manned or unmanned) on scene",
      "Deliver imagery and documentation per the agency's reporting requirements",
    ],
    notes: [
      "All public-safety missions are flown under the requesting agency's authorization and incident command structure, consistent with FAA public safety / emergency UAS operating rules in effect at the time.",
    ],
  },
  {
    slug: "event-coverage",
    title: "Event Coverage",
    shortTitle: "Event Coverage",
    category: "visual",
    summary:
      "Aerial photo and video coverage for large outdoor events, with flight plans built around crowd safety and airspace rules from the start.",
    heroDescription:
      "Aerial coverage for festivals, races, rodeos, and large gatherings — planned around crowd density, FAA rules for flights over people, and venue coordination, not improvised on the day.",
    idealFor: [
      "Festivals, fairs, and rodeos",
      "Endurance races and large outdoor sporting events",
      "Municipal and tourism-board event coverage",
    ],
    capabilities: [
      "Pre-event flight and airspace planning around crowd density",
      "Live-event aerial photo and video capture",
      "Rapid-turnaround highlight delivery for same-day or next-day use",
    ],
    deliverables: [
      { name: "Event highlight video", description: "Edited aerial video covering the event's key moments." },
      { name: "Photo gallery", description: "High-resolution stills for event marketing and recap use." },
    ],
    process: [
      "Review event layout, crowd plan, and any airspace restrictions (TFRs, stadium rules)",
      "Coordinate with event organizers and local authorities as needed",
      "Fly within FAA rules for operations over people and assemblies",
      "Deliver edited coverage on an agreed turnaround",
    ],
  },
  {
    slug: "training-consulting",
    title: "Training and Consulting",
    shortTitle: "Training & Consulting",
    category: "advisory",
    summary:
      "Help for organizations building their own in-house drone program — program setup, airspace/compliance guidance, and Part 107 exam preparation.",
    heroDescription:
      "Advisory support for organizations standing up their own drone capability: compliance framework guidance, operating procedures, and Part 107 exam preparation.",
    idealFor: [
      "Utilities and agencies building an in-house UAS program",
      "Businesses evaluating whether to build or buy drone capability",
      "Individuals preparing for the FAA Part 107 exam",
    ],
    capabilities: [
      "Part 107 exam preparation guidance",
      "Drone program structure and standard operating procedure (SOP) consulting",
      "Airspace authorization (LAANC) and compliance workflow guidance",
    ],
    deliverables: [
      { name: "Program assessment", description: "Written assessment of what an in-house program would need (equipment, staffing, compliance)." },
      { name: "SOP guidance", description: "Draft standard operating procedure framework to adapt internally." },
    ],
    process: [
      "Scope your organization's goals and current compliance posture",
      "Provide structured guidance and reference materials",
      "Follow up on specific regulatory or procedural questions as they come up",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
