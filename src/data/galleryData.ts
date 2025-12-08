/**
 * Gallery Data Configuration
 *
 * IMPORTANT: Replace placeholder image paths with your actual uploaded images.
 * - highlightImages: 8-16 curated "best shots" shown on the main gallery page
 * - allImages: Full collection including highlights + additional photos for the lightbox
 *
 * Image paths are relative to the /public folder.
 * Example: "/gallery/tv-installation/highlight-1.jpg" maps to public/gallery/tv-installation/highlight-1.jpg
 */

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  orientation?: "landscape" | "portrait";
};

export type GallerySectionId =
  | "tv-installation"
  | "home-theater"
  | "prewire-retrofit"
  | "outdoor-entertainment"
  | "security-cameras"
  | "network-installations"
  | "commercial-projects";

export type GallerySection = {
  id: GallerySectionId;
  label: string;
  shortTitle: string;
  description: string;
  highlightImages: GalleryImage[];
  allImages: GalleryImage[];
};

const tvInstallationHighlights: GalleryImage[] = [
  { id: "tv-1", src: "/gallery/tv-installation/highlight-1.jpg", alt: "Large flat-screen TV mounted on blue accent wall in elegant living room with hardwood floors" },
  { id: "tv-2", src: "/gallery/tv-installation/highlight-2.jpg", alt: "TV mounted above stone fireplace with streaming apps displayed and surround speakers" },
  { id: "tv-3", src: "/gallery/tv-installation/highlight-3.jpg", alt: "Curved Samsung TV corner-mounted in bright room with soundbar and streaming interface" },
  { id: "tv-4", src: "/gallery/tv-installation/highlight-4.jpg", alt: "TV on modern fireplace mantel in upscale living room with mirrored walls and art" },
  { id: "tv-5", src: "/gallery/tv-installation/highlight-5.jpg", alt: "Large TV above white stone fireplace in contemporary living room with in-ceiling speakers" },
  { id: "tv-6", src: "/gallery/tv-installation/highlight-6.jpg", alt: "Motorized TV lift at foot of bed showing rear mounting mechanism" },
  { id: "tv-7", src: "/gallery/tv-installation/highlight-7.jpg", alt: "Wall-mounted TV with soundbar on entertainment console in family room" },
  { id: "tv-8", src: "/gallery/tv-installation/highlight-8.jpg", alt: "TV above traditional fireplace with in-wall speakers and soundbar on mantel" },
  { id: "tv-9", src: "/gallery/tv-installation/highlight-9.jpg", alt: "TV in custom built-in cabinet in rustic room with vaulted wood ceiling" },
  { id: "tv-10", src: "/gallery/tv-installation/highlight-10.jpg", alt: "Outdoor TV on motorized lift in wooden cabinet on patio" },
  { id: "tv-11", src: "/gallery/tv-installation/highlight-11.jpg", alt: "Large TV mounted on marble fireplace with streaming apps and soundbar in elegant living room" },
  { id: "tv-12", src: "/gallery/tv-installation/highlight-12.jpg", alt: "Curved TV mounted above white herringbone-tile fireplace displaying streaming apps in cozy living room" },
  { id: "tv-13", src: "/gallery/tv-installation/highlight-13.jpg", alt: "TV mounted on natural stone fireplace in modern living room with clean cable concealment" },
  { id: "tv-14", src: "/gallery/tv-installation/highlight-14.jpg", alt: "Large TV extended on articulating mount in front of natural stone fireplace, demonstrating flexible viewing angles" },
  { id: "tv-15", src: "/gallery/tv-installation/highlight-15.jpg", alt: "Small TV mounted in bright kitchen above built-in oven with in-ceiling speakers" },
];

const tvInstallationExtras: GalleryImage[] = [
  { id: "tv-extra-1", src: "/gallery/tv-installation/extra-1.jpg", alt: "TV mounted above beige stone fireplace in classic living room with piano and family photos" },
  { id: "tv-extra-2", src: "/gallery/tv-installation/extra-2.jpg", alt: "Bedroom TV mounted above light wood dresser beside frosted glass door and wardrobe" },
  { id: "tv-extra-3", src: "/gallery/tv-installation/extra-3.jpg", alt: "Alternate view of bedroom with wall-mounted TV above dresser and sliding closet doors" },
  { id: "tv-extra-4", src: "/gallery/tv-installation/extra-4.jpg", alt: "Large TV mounted above long media console in modern open-concept living and dining room" },
  { id: "tv-extra-5", src: "/gallery/tv-installation/extra-5.jpg", alt: "Art-frame style TV displaying cityscape above sleek dark-tile fireplace with bar cart nearby" },
  { id: "tv-extra-6", src: "/gallery/tv-installation/extra-6.jpg", alt: "Flat-screen TV mounted above brick fireplace with decorative mantel and built-in shelving" },
  { id: "tv-extra-7", src: "/gallery/tv-installation/extra-7.jpg", alt: "TV framed as artwork displaying vibrant floral painting on neutral wall" },
  { id: "tv-extra-8", src: "/gallery/tv-installation/extra-8.jpg", alt: "Slim TV mounted on light wall displaying bright ocean cityscape scene" },
  { id: "tv-extra-9", src: "/gallery/tv-installation/extra-9.jpg", alt: "Corner-mounted TV with floating shelf in bright room overlooking garden and patio" },
  { id: "tv-extra-10", src: "/gallery/tv-installation/extra-10.jpg", alt: "Dining room with wall-mounted TV above long wooden table under recessed ceiling lights" },
  { id: "tv-extra-11", src: "/gallery/tv-installation/extra-11.jpg", alt: "Articulating TV mount extended and angled toward bed in modern primary bedroom" },
  { id: "tv-extra-12", src: "/gallery/tv-installation/extra-12.jpg", alt: "TV mounted on recessed wall panel with blue LED backlighting in modern living room" },
  { id: "tv-extra-13", src: "/gallery/tv-installation/extra-13.jpg", alt: "TV mounted above white fireplace mantel in bright neutral-toned living room" },
  { id: "tv-extra-14", src: "/gallery/tv-installation/extra-14.jpg", alt: "Wall-mounted TV integrated into modern tiled bedroom media wall" },
  { id: "tv-extra-15", src: "/gallery/tv-installation/extra-15.jpg", alt: "Small corner-mounted TV in commercial waiting area with stone accent wall" },
];

const homeTheaterHighlights: GalleryImage[] = [
  { id: "ht-1", src: "/gallery/home-theater/highlight-1.jpg", alt: "Luxury home theater with leather recliners, floor-standing speakers, and framed projection screen with warm ambient lighting" },
  { id: "ht-2", src: "/gallery/home-theater/highlight-2.jpg", alt: "Elegant dedicated theater room with custom millwork, projection screen, and plush leather seating" },
  { id: "ht-3", src: "/gallery/home-theater/highlight-3.jpg", alt: "Multi-row leather theater seating with wall sconces and damask wallpaper in upscale media room" },
  { id: "ht-4", src: "/gallery/home-theater/highlight-4.jpg", alt: "Commercial-style private theater with tiered stadium seating, projection screen, and theater curtains" },
  { id: "ht-5", src: "/gallery/home-theater/highlight-5.jpg", alt: "Rustic home theater with projection screen, media cabinet, and floor-standing speakers with decorative sconces" },
  { id: "ht-6", src: "/gallery/home-theater/highlight-6.jpg", alt: "Modern living room with ultra-short-throw laser projector displaying 4K content on large screen" },
  { id: "ht-7", src: "/gallery/home-theater/highlight-7.jpg", alt: "Bright media room with ceiling-mounted projector, motorized screen, and in-ceiling surround speakers" },
  { id: "ht-8", src: "/gallery/home-theater/highlight-8.jpg", alt: "Contemporary open living space with TV on glass-enclosed fireplace and in-wall speakers" },
];

const homeTheaterExtras: GalleryImage[] = [
  { id: "ht-extra-1", src: "/gallery/home-theater/extra-1.jpg", alt: "Commercial screening room with purple accent wall, ceiling-mounted projector, and stadium seating" },
  { id: "ht-extra-2", src: "/gallery/home-theater/extra-2.jpg", alt: "Modern living room with TV mounted above fireplace and in-ceiling distributed audio" },
  { id: "ht-extra-3", src: "/gallery/home-theater/extra-3.jpg", alt: "Home theater with motorized projection screen, custom cabinetry, and professional equipment rack" },
  { id: "ht-extra-4", src: "/gallery/home-theater/extra-4.jpg", alt: "Wall-mounted TV with high-end tower speakers and AV equipment in modern media room" },
  { id: "ht-extra-5", src: "/gallery/home-theater/extra-5.jpg", alt: "In-ceiling speaker prewire installation with Dolby Atmos layout during construction" },
  { id: "ht-extra-6", src: "/gallery/home-theater/extra-6.jpg", alt: "Installation team assembling large projection screen frame in dedicated theater room" },
  { id: "ht-extra-7", src: "/gallery/home-theater/extra-7.jpg", alt: "Rear projector mounting platform with structured wiring during theater room build" },
];

const prewireHighlights: GalleryImage[] = [
  {
    id: "pw-1",
    src: "/gallery/prewire-retrofit/pw-1.jpg",
    alt: "Low-voltage technician smiling while routing a bundle of black cables through unfinished framing",
  },
  {
    id: "pw-2",
    src: "/gallery/prewire-retrofit/pw-2.jpg",
    alt: "Technician organizing a large bundle of white network cables along the wall into a structured rack",
  },
  {
    id: "pw-3",
    src: "/gallery/prewire-retrofit/pw-3.jpg",
    alt: "Technician configuring a home network rack using a laptop on a rolling AV cabinet",
  },
  {
    id: "pw-4",
    src: "/gallery/prewire-retrofit/pw-4.jpg",
    alt: "Structured coax distribution panel with neatly dressed white cables and splitters inside a wall enclosure",
    orientation: "portrait",
  },
  {
    id: "pw-5",
    src: "/gallery/prewire-retrofit/pw-5.jpg",
    alt: "New construction framing with low-voltage panel and vertical bundle of blue, black, and white cables",
    orientation: "portrait",
  },
  {
    id: "pw-6",
    src: "/gallery/prewire-retrofit/pw-6.jpg",
    alt: "Exterior soffit prewire with round junction boxes and loops of black cable ready for cameras or lights",
  },
  {
    id: "pw-7",
    src: "/gallery/prewire-retrofit/pw-7.jpg",
    alt: "Long framed room with ceiling cans and electrical boxes prewired before drywall installation",
  },
];

const prewireExtras: GalleryImage[] = [
  {
    id: "pw-extra-1",
    src: "/gallery/prewire-retrofit/pw-extra-1.jpg",
    alt: "Tall vertical bundle of low-voltage cables running from floor to ceiling through wall framing",
    orientation: "portrait",
  },
  {
    id: "pw-extra-2",
    src: "/gallery/prewire-retrofit/pw-extra-2.jpg",
    alt: "Exterior view of home addition with extensive electrical and low-voltage rough-in wiring visible in framing",
  },
];

const outdoorHighlights: GalleryImage[] = [
  { id: "out-1", src: "/gallery/outdoor-entertainment/highlight-1.jpg", alt: "Large outdoor TV mounted under covered patio with flanking speakers, streaming live sports on a sunny day" },
  { id: "out-2", src: "/gallery/outdoor-entertainment/highlight-2.jpg", alt: "Backyard landscape speakers nestled among ornamental grasses and palm trees with clean sightlines" },
  { id: "out-3", src: "/gallery/outdoor-entertainment/highlight-3.jpg", alt: "Outdoor patio seating area with wicker furniture, landscape speakers, and weatherproof equipment enclosure" },
  { id: "out-4", src: "/gallery/outdoor-entertainment/highlight-4.jpg", alt: "Motorized outdoor TV lift cabinet in warm wood finish rising from patio entertaining area" },
  { id: "out-5", src: "/gallery/outdoor-entertainment/highlight-5.jpg", alt: "Professionally landscaped backyard with pathway speakers and low-voltage lighting integrated into mulch beds" },
  { id: "out-6", src: "/gallery/outdoor-entertainment/highlight-6.jpg", alt: "Technician installing weatherproof outdoor speaker on exterior wall for whole-home audio coverage", orientation: "portrait" },
  { id: "out-7", src: "/gallery/outdoor-entertainment/highlight-7.jpg", alt: "Modern hillside patio with retractable shade awning and discreet outdoor speakers overlooking mountain views" },
  { id: "out-8", src: "/gallery/outdoor-entertainment/highlight-8.jpg", alt: "Contemporary backyard patio with wall-mounted outdoor speakers and covered deck during renovation" },
];

const outdoorExtras: GalleryImage[] = [
  { id: "out-extra-1", src: "/gallery/outdoor-entertainment/out-extra-1.jpg", alt: "Front yard landscaping with two rock speakers blending naturally along trimmed hedge line" },
  { id: "out-extra-2", src: "/gallery/outdoor-entertainment/out-extra-2.jpg", alt: "Landscape bullet speaker discreetly positioned between shrubs near block wall", orientation: "portrait" },
  { id: "out-extra-3", src: "/gallery/outdoor-entertainment/out-extra-3.jpg", alt: "Circular gravel patio feature surrounded by landscape speakers and drought-tolerant plantings" },
  { id: "out-extra-4", src: "/gallery/outdoor-entertainment/out-extra-4.jpg", alt: "Outdoor kitchen and grill island with landscape speakers integrated in rose garden beds" },
  { id: "out-extra-5", src: "/gallery/outdoor-entertainment/out-extra-5.jpg", alt: "Motorized outdoor TV lift cabinet in warm wood finish on brick patio near French doors" },
  { id: "out-extra-6", src: "/gallery/outdoor-entertainment/out-extra-6.jpg", alt: "Covered outdoor living area with wall-mounted TV over fireplace and in-ceiling speakers" },
  { id: "out-extra-7", src: "/gallery/outdoor-entertainment/out-extra-7.jpg", alt: "Weatherproof speakers mounted under eaves on exterior wall with hillside views" },
  { id: "out-extra-8", src: "/gallery/outdoor-entertainment/out-extra-8.jpg", alt: "Traditional covered porch with column-mounted outdoor speaker near cozy seating area" },
  { id: "out-extra-9", src: "/gallery/outdoor-entertainment/out-extra-9.jpg", alt: "Poolside patio with sliding glass doors and audio system under covered overhang" },
  { id: "out-extra-10", src: "/gallery/outdoor-entertainment/out-extra-10.jpg", alt: "Large covered patio with family seating and wall-mounted outdoor speakers flanking French doors" },
  { id: "out-extra-11", src: "/gallery/outdoor-entertainment/out-extra-11.jpg", alt: "Outdoor gym with natural wood ceiling, in-ceiling speakers, and wall-mounted TV for workouts" },
  { id: "out-extra-12", src: "/gallery/outdoor-entertainment/out-extra-12.jpg", alt: "In-ground outdoor subwoofer installed in landscaped garden bed for seamless bass coverage" },
];

const securityHighlights: GalleryImage[] = [
  {
    id: "sec-1",
    src: "/gallery/security-cameras/sec-1.jpg",
    alt: "Technician Ron installing a bullet security camera on exterior stucco wall above brick column",
    orientation: "portrait",
  },
  {
    id: "sec-2",
    src: "/gallery/security-cameras/sec-2.jpg",
    alt: "Spanish-style front entry with arched wooden door and discreet security camera above doorway",
  },
  {
    id: "sec-3",
    src: "/gallery/security-cameras/sec-3.jpg",
    alt: "Driveway and garage area with security camera mounted under roof eave for vehicle coverage",
  },
  {
    id: "sec-4",
    src: "/gallery/security-cameras/sec-4.jpg",
    alt: "Modern backyard with pool and security camera watching large glass doors to patio",
  },
  {
    id: "sec-5",
    src: "/gallery/security-cameras/sec-5.jpg",
    alt: "Patio doors and bamboo landscaping with compact dome camera mounted under overhang",
  },
  {
    id: "sec-6",
    src: "/gallery/security-cameras/sec-6.jpg",
    alt: "Clean white stucco exterior with sliding glass door, deck, and corner-mounted security camera",
  },
];

const securityExtras: GalleryImage[] = [
  {
    id: "sec-extra-1",
    src: "/gallery/security-cameras/sec-extra-1.jpg",
    alt: "Security system monitor showing multi-camera views of home exterior and pool areas",
  },
  {
    id: "sec-extra-2",
    src: "/gallery/security-cameras/sec-extra-2.jpg",
    alt: "Technician Ron mounting an indoor dome camera in ceiling corner with clean cable routing",
    orientation: "portrait",
  },
  {
    id: "sec-extra-3",
    src: "/gallery/security-cameras/sec-extra-3.jpg",
    alt: "New construction soffit with junction boxes and prewired cabling ready for exterior cameras",
  },
  {
    id: "sec-extra-4",
    src: "/gallery/security-cameras/sec-extra-4.jpg",
    alt: "Rear view of Spanish-style home with multiple cameras providing coverage for patio and yard",
  },
];

const networkHighlights: GalleryImage[] = [
  { id: "net-1", src: "/gallery/network-installations/net-1.jpg", alt: "Network equipment rack with patch panels and switches" },
  { id: "net-2", src: "/gallery/network-installations/net-2.jpg", alt: "Wi-Fi access point installation for whole-home coverage" },
  { id: "net-3", src: "/gallery/network-installations/net-3.jpg", alt: "Structured network cabling in server closet" },
  { id: "net-4", src: "/gallery/network-installations/net-4.jpg", alt: "Router and modem setup with clean cable management" },
  { id: "net-5", src: "/gallery/network-installations/net-5.jpg", alt: "Ceiling-mounted wireless access point" },
  { id: "net-6", src: "/gallery/network-installations/net-6.jpg", alt: "Ethernet wall plate installations throughout home" },
  { id: "net-7", src: "/gallery/network-installations/net-7.jpg", alt: "Mesh Wi-Fi system configuration" },
  { id: "net-8", src: "/gallery/network-installations/net-8.jpg", alt: "Network switch and UPS battery backup installation" },
];

const networkExtras: GalleryImage[] = [
  { id: "net-extra-1", src: "/gallery/network-installations/net-extra-1.jpg", alt: "Cat6 cable termination at patch panel" },
  { id: "net-extra-2", src: "/gallery/network-installations/net-extra-2.jpg", alt: "Wi-Fi signal testing and optimization" },
  { id: "net-extra-3", src: "/gallery/network-installations/net-extra-3.jpg", alt: "Fiber optic connection installation" },
  { id: "net-extra-4", src: "/gallery/network-installations/net-extra-4.jpg", alt: "Outdoor access point for extended coverage" },
];

const commercialHighlights: GalleryImage[] = [
  { id: "com-1", src: "/gallery/commercial-projects/com-1.jpg", alt: "Conference room with large display and video conferencing" },
  { id: "com-2", src: "/gallery/commercial-projects/com-2.jpg", alt: "Lobby TV installation with digital signage" },
  { id: "com-3", src: "/gallery/commercial-projects/com-3.jpg", alt: "Gym with multiple TVs and distributed audio" },
  { id: "com-4", src: "/gallery/commercial-projects/com-4.jpg", alt: "Restaurant bar area with sports TVs" },
  { id: "com-5", src: "/gallery/commercial-projects/com-5.jpg", alt: "Office boardroom AV system installation" },
  { id: "com-6", src: "/gallery/commercial-projects/com-6.jpg", alt: "Private theater room in commercial space" },
  { id: "com-7", src: "/gallery/commercial-projects/com-7.jpg", alt: "Medical office waiting room TV installation" },
  { id: "com-8", src: "/gallery/commercial-projects/com-8.jpg", alt: "Video wall installation in retail space" },
];

const commercialExtras: GalleryImage[] = [
  { id: "com-extra-1", src: "/gallery/commercial-projects/com-extra-1.jpg", alt: "Conference room control system setup" },
  { id: "com-extra-2", src: "/gallery/commercial-projects/com-extra-2.jpg", alt: "Commercial audio system rack" },
  { id: "com-extra-3", src: "/gallery/commercial-projects/com-extra-3.jpg", alt: "Digital menu board installation" },
  { id: "com-extra-4", src: "/gallery/commercial-projects/com-extra-4.jpg", alt: "Training room presentation system" },
];

export const gallerySections: GallerySection[] = [
  {
    id: "tv-installation",
    label: "TV Installation",
    shortTitle: "TV",
    description: "Fireplace installs, custom cabinetry, bedrooms, and more.",
    highlightImages: tvInstallationHighlights,
    allImages: [...tvInstallationHighlights, ...tvInstallationExtras],
  },
  {
    id: "home-theater",
    label: "Home Theater & Surround Sound",
    shortTitle: "Theater",
    description:
      "Dedicated rooms with large screens, projectors, Dolby Atmos, and tiered seating.",
    highlightImages: homeTheaterHighlights,
    allImages: [...homeTheaterHighlights, ...homeTheaterExtras],
  },
  {
    id: "prewire-retrofit",
    label: "Prewire & Retrofit",
    shortTitle: "Prewire",
    description:
      "In-wall wiring, retrofits, and construction-phase work that sets up your system for success.",
    highlightImages: prewireHighlights,
    allImages: [...prewireHighlights, ...prewireExtras],
  },
  {
    id: "outdoor-entertainment",
    label: "Outdoor Entertainment",
    shortTitle: "Outdoor",
    description:
      "Patios, pools, and backyards with hidden speakers and weatherproof TVs.",
    highlightImages: outdoorHighlights,
    allImages: [...outdoorHighlights, ...outdoorExtras],
  },
  {
    id: "security-cameras",
    label: "Security Cameras",
    shortTitle: "Security",
    description:
      "Discreet and visible camera installations, DVR/NVR setups, and monitoring.",
    highlightImages: securityHighlights,
    allImages: [...securityHighlights, ...securityExtras],
  },
  {
    id: "network-installations",
    label: "Network Installations",
    shortTitle: "Network",
    description:
      "Rack wiring, network equipment, and whole-home Wi-Fi coverage.",
    highlightImages: networkHighlights,
    allImages: [...networkHighlights, ...networkExtras],
  },
  {
    id: "commercial-projects",
    label: "Commercial Projects",
    shortTitle: "Commercial",
    description:
      "Conference rooms, lobbies, gyms, theaters, and other commercial spaces.",
    highlightImages: commercialHighlights,
    allImages: [...commercialHighlights, ...commercialExtras],
  },
];
