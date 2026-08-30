/* =====================================================================
   ARTWORKS DATA FILE
   =====================================================================
   This is the ONLY file you need to touch to add, edit, or remove a
   piece from the gallery. The rest of the site reads this list
   automatically -- no other code needs to change.

   HOW TO ADD A NEW PIECE
   -----------------------
   1. Save the image into the /images folder (jpg or png), giving it a
      short lowercase filename with no spaces, e.g. "sunset-study.jpg"
   2. Copy the template block below, paste it at the TOP of the
      ARTWORKS array (so newest work shows first), and fill it in.
   3. Save this file. That's it -- refresh the site to see it appear.

   TEMPLATE (copy this block):
   -----------------------
   {
     title: "Piece Title",       // leave as "" if untitled -- the title line just won't show
     medium: "watercolor",        // see MEDIUM KEYS below
     mediumLabel: "Watercolor",   // shown to visitors, can be more specific
     year: 2026,                  // number, used for sorting. Use null if unknown
     yearLabel: "2026",           // shown to visitors, e.g. "Mar 2026"
     theme: "",                   // your own category, or "" to leave unsorted for now
     image: "sunset-study.jpg",
     blurb: "",                   // optional short note, can leave blank
     featured: false              // true = shows in the featured strip on Home
   },

   MEDIUM KEYS (used for the primary tabs -- keep to this list so tabs
   don't multiply; add a new key only if a whole new medium shows up):
     photograph | colorpencil | graphite | acrylic | watercolor | gouache |
     pen | charcoal | marker | sketches | mixed

   THEME (no longer used by a filter on the site, but the field is
   left in each entry below in case you want to bring theme-based
   filtering back later -- safe to ignore, or leave "" going forward):
     theme: ""
   ===================================================================== */

const ARTWORKS = [
  {
    title: "Balloon Flowers",
    medium: "colorpencil",
    mediumLabel: "Colored Pencil",
    year: 2023,
    yearLabel: "Aug 2023",
    theme: "",
    image: "balloon-flowers.jpg",
    ratio: 1.0674,
    blurb: "",
    featured: false
  },
  {
    title: "Baby Blue Eyes",
    medium: "colorpencil",
    mediumLabel: "Colored Pencil",
    year: 2023,
    yearLabel: "Aug 2023",
    theme: "",
    image: "baby-blue-eyes.jpg",
    ratio: 1.2242,
    blurb: "",
    featured: false
  },
  {
    title: "Eeyore",
    medium: "colorpencil",
    mediumLabel: "Colored Pencil, Matted Frame",
    year: 2019,
    yearLabel: "2019",
    theme: "",
    image: "eeyore.jpg",
    ratio: 1.3333,
    blurb: "",
    featured: false
  },
  {
    title: "Felix's Pizza",
    medium: "acrylic",
    mediumLabel: "Acrylic on Canvas",
    year: 2022,
    yearLabel: "2022",
    theme: "",
    image: "felix-pizza.jpg",
    ratio: 1.3617,
    blurb: "",
    featured: false
  },
  {
    title: "Landscape Clock",
    medium: "acrylic",
    mediumLabel: "Acrylic on Canvas",
    year: 2023,
    yearLabel: "Aug 2023",
    theme: "",
    image: "landscape-clock.jpg",
    ratio: 1.0019,
    blurb: "A Mother's Day gift.",
    featured: false
  },
  {
    title: "Gucci Horsebit Purse",
    medium: "acrylic",
    mediumLabel: "Acrylic on Canvas",
    year: 2023,
    yearLabel: "Jun 2023",
    theme: "",
    image: "gucci-purse.jpg",
    ratio: 1.3333,
    blurb: "",
    featured: false
  },
  {
    title: "Dedicated to Charlie",
    medium: "acrylic",
    mediumLabel: "Acrylic Paint with Resin Coating",
    year: 2019,
    yearLabel: "2019",
    theme: "",
    image: "charlie-blue-dog.jpg",
    ratio: 1.2103,
    blurb: "",
    featured: false
  },
  {
    title: "Boat on Water",
    medium: "acrylic",
    mediumLabel: "Acrylic Paint",
    year: 2020,
    yearLabel: "2020",
    theme: "",
    image: "boat-on-water.jpg",
    ratio: 0.6338,
    blurb: "",
    featured: false
  },
  {
    title: "Misty Hills",
    medium: "acrylic",
    mediumLabel: "Acrylic on Canvas",
    year: 2023,
    yearLabel: "2023",
    theme: "",
    image: "misty-hills.jpg",
    ratio: 1.4097,
    blurb: "",
    featured: false
  },
  {
    title: "Winter Scene in a Globe",
    medium: "pen",
    mediumLabel: "Pen",
    year: 2021,
    yearLabel: "2021",
    theme: "",
    image: "winter-scene-globe.jpg",
    ratio: 1.2424,
    blurb: "",
    featured: false
  },
  {
    title: "Wavy Bay",
    medium: "watercolor",
    mediumLabel: "Watercolor",
    year: 2023,
    yearLabel: "2023",
    theme: "",
    image: "wavy-bay.jpg",
    ratio: 0.6744,
    blurb: "",
    featured: false
  },
  {
    title: "Mysterious Woods",
    medium: "mixed",
    mediumLabel: "Oil on Canvas",
    year: 2022,
    yearLabel: "Sep 2022",
    theme: "",
    image: "mysterious-woods.jpg",
    ratio: 1.2471,
    blurb: "",
    featured: false
  },
  {
    title: "Driftwood",
    medium: "charcoal",
    mediumLabel: "Charcoal",
    year: 2019,
    yearLabel: "2019",
    theme: "",
    image: "driftwood.jpg",
    ratio: 0.7262,
    blurb: "",
    featured: false
  },
  {
    title: "Multi-colored Giraffe",
    medium: "marker",
    mediumLabel: "Alcohol Marker",
    year: 2020,
    yearLabel: "2020",
    theme: "",
    image: "multicolored-giraffe.jpg",
    ratio: 1.5549,
    blurb: "",
    featured: false
  },
  {
    title: "Crushed Cans Pop Art",
    medium: "marker",
    mediumLabel: "Alcohol Marker",
    year: 2023,
    yearLabel: "2023",
    theme: "",
    image: "crushed-cans-pop-art.jpg",
    ratio: 0.7919,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "colorpencil",
    mediumLabel: "Colored Pencil",
    year: 2023,
    yearLabel: "2023",
    theme: "",
    image: "teal-navy-flower.jpg",
    ratio: 1.1696,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "gouache",
    mediumLabel: "Gouache",
    year: 2022,
    yearLabel: "2022",
    theme: "",
    image: "forest-lantern-lights.jpg",
    ratio: 1.9802,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "marker",
    mediumLabel: "Alcohol Marker",
    year: 2025,
    yearLabel: "2025",
    theme: "",
    image: "fruit-medley.jpg",
    ratio: 0.6538,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "pen",
    mediumLabel: "Pen & Ink",
    year: 2023,
    yearLabel: "2023",
    theme: "",
    image: "feather-study.jpg",
    ratio: 1.4363,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "watercolor",
    mediumLabel: "Watercolor",
    year: 2026,
    yearLabel: "May 2026",
    theme: "",
    image: "tree-fence-dusk.jpg",
    ratio: 1.3333,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "acrylic",
    mediumLabel: "Acrylic",
    year: 2020,
    yearLabel: "2020",
    theme: "",
    image: "ocean-waves-beach.jpg",
    ratio: 0.6925,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "acrylic",
    mediumLabel: "Acrylic",
    year: 2024,
    yearLabel: "2024",
    theme: "",
    image: "camera-still-life-grayscale.jpg",
    ratio: 1.3582,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "graphite",
    mediumLabel: "Graphite",
    year: 2025,
    yearLabel: "2025",
    theme: "",
    image: "elephant-sketch.jpg",
    ratio: 1.6789,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "acrylic",
    mediumLabel: "Acrylic",
    year: 2025,
    yearLabel: "2025",
    theme: "",
    image: "candle-still-life.jpg",
    ratio: 1.4363,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "mixed",
    mediumLabel: "Ink",
    year: 2024,
    yearLabel: "2024",
    theme: "",
    image: "blue-dragon.jpg",
    ratio: 0.995,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "mixed",
    mediumLabel: "Mixed Media (Watercolor, Gouache, Colored Pencil)",
    year: 2026,
    yearLabel: "May 2026",
    theme: "",
    image: "bird-lotus-pond.jpg",
    ratio: 1.2618,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "photograph",
    mediumLabel: "Photograph",
    year: 2025,
    yearLabel: "2025",
    theme: "",
    image: "ocean-sunset-photo.jpg",
    ratio: 1.3333,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "graphite",
    mediumLabel: "Graphite with Colored Pencil Border",
    year: 2025,
    yearLabel: "2025",
    theme: "",
    image: "family-portrait.jpg",
    ratio: 0.798,
    blurb: "",
    featured: true
  },
  {
    title: "",
    medium: "acrylic",
    mediumLabel: "Acrylic",
    year: 2026,
    yearLabel: "Apr 2026",
    theme: "",
    image: "junk-drawer-still-life.jpg",
    ratio: 0.7869,
    blurb: "",
    featured: true
  },
  {
    title: "",
    medium: "sketches",
    mediumLabel: "Graphite",
    year: 2026,
    yearLabel: "Feb 2026",
    theme: "",
    image: "hand-foot-studies.jpg",
    ratio: 0.6637,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "sketches",
    mediumLabel: "Watercolor / Watercolor + Colored Pencil",
    year: 2026,
    yearLabel: "May 2026",
    theme: "",
    image: "watercolor-technique-study.jpg",
    ratio: 0.85,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "acrylic",
    mediumLabel: "Acrylic",
    year: 2024,
    yearLabel: "2024",
    theme: "",
    image: "self-portrait.jpg",
    ratio: 1.2719,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "photograph",
    mediumLabel: "Photograph",
    year: 2026,
    yearLabel: "2026",
    theme: "",
    image: "carousel-sculptures-photo.jpg",
    ratio: 0.75,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "mixed",
    mediumLabel: "Oil Pastel",
    year: 2020,
    yearLabel: "2020",
    theme: "",
    image: "purple-calla-lily.jpg",
    ratio: 1.3333,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "graphite",
    mediumLabel: "Graphite",
    year: 2024,
    yearLabel: "2024",
    theme: "",
    image: "tiger-study.jpg",
    ratio: 0.9437,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "sketches",
    mediumLabel: "Gouache",
    year: 2026,
    yearLabel: "Jan 2026",
    theme: "",
    image: "portrait-in-blue.jpg",
    ratio: 1.5385,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "acrylic",
    mediumLabel: "Acrylic with Layered Resin",
    year: 2024,
    yearLabel: "2024",
    theme: "",
    image: "mountain-lake-flowers.jpg",
    ratio: 0.9838,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "photograph",
    mediumLabel: "Photograph",
    year: 2025,
    yearLabel: "2025",
    theme: "",
    image: "park-pavilion-photo.jpg",
    ratio: 1.3333,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "mixed",
    mediumLabel: "Watercolor and Colored Pencil",
    year: 2026,
    yearLabel: "Apr 2026",
    theme: "",
    image: "woodland-picnic.jpg",
    ratio: 0.67,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "acrylic",
    mediumLabel: "Acrylic",
    year: 2024,
    yearLabel: "2024",
    theme: "",
    image: "waves-on-rocks.jpg",
    ratio: 0.7919,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "graphite",
    mediumLabel: "Graphite",
    year: 2023,
    yearLabel: "2023",
    theme: "",
    image: "camera-book-still-life.jpg",
    ratio: 0.7638,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "acrylic",
    mediumLabel: "Acrylic",
    year: 2024,
    yearLabel: "2024",
    theme: "",
    image: "iced-drink.jpg",
    ratio: 1.1878,
    blurb: "",
    featured: true
  },
  {
    title: "Gloriosa (Flame Lily)",
    medium: "sketches",
    mediumLabel: "Watercolor",
    year: 2026,
    yearLabel: "Feb 2026",
    theme: "",
    image: "gloriosa-flame-lily.jpg",
    ratio: 0.6312,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "acrylic",
    mediumLabel: "Acrylic with Mixed Media (Beads)",
    year: 2026,
    yearLabel: "Mar 2026",
    theme: "",
    image: "mixed-media-study-beads.jpg",
    ratio: 1.3333,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "mixed",
    mediumLabel: "Oil",
    year: 2023,
    yearLabel: "2023",
    theme: "",
    image: "ghost-on-a-swing.jpg",
    ratio: 1.2569,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "photograph",
    mediumLabel: "Photograph",
    year: 2026,
    yearLabel: "2026",
    theme: "",
    image: "build-a-bloom-photo.jpg",
    ratio: 1.3333,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "watercolor",
    mediumLabel: "Watercolor",
    year: 2024,
    yearLabel: "2024",
    theme: "",
    image: "river-two-trees-mountains.jpg",
    ratio: 1.0031,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "colorpencil",
    mediumLabel: "Colored Pencil",
    year: 2025,
    yearLabel: "2025",
    theme: "",
    image: "five-faces.jpg",
    ratio: 0.6331,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "acrylic",
    mediumLabel: "Acrylic",
    year: 2026,
    yearLabel: "May 2026",
    theme: "",
    image: "abstract-shell-leaves.jpg",
    ratio: 0.4963,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "acrylic",
    mediumLabel: "Acrylic",
    year: 2024,
    yearLabel: "2024",
    theme: "",
    image: "sphere-color-study.jpg",
    ratio: 1.0376,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "gouache",
    mediumLabel: "Gouache",
    year: 2026,
    yearLabel: "Jun 2026",
    theme: "",
    image: "orange-slices.jpg",
    ratio: 0.9756,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "photograph",
    mediumLabel: "Photograph",
    year: 2025,
    yearLabel: "2025",
    theme: "",
    image: "beach-boat-kayak-photo.jpg",
    ratio: 1.3333,
    blurb: "",
    featured: false
  },
  {
    title: "Beatrix Potter Master Copy",
    medium: "sketches",
    mediumLabel: "Watercolor",
    year: 2026,
    yearLabel: "May 2026",
    theme: "",
    image: "beatrix-potter-master-copy.jpg",
    ratio: 0.7338,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "photograph",
    mediumLabel: "Photograph",
    year: 2026,
    yearLabel: "2026",
    theme: "",
    image: "city-brownstones-photo.jpg",
    ratio: 0.75,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "gouache",
    mediumLabel: "Gouache",
    year: 2026,
    yearLabel: "Jun 2026",
    theme: "",
    image: "lighthouse-cottage.jpg",
    ratio: 1.0336,
    blurb: "",
    featured: true
  },
  {
    title: "Enthralled",
    medium: "sketches",
    mediumLabel: "Graphite",
    year: 2024,
    yearLabel: "2024",
    theme: "",
    image: "enthralled.jpg",
    ratio: 1.2739,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "acrylic",
    mediumLabel: "Acrylic",
    year: 2023,
    yearLabel: "2023",
    theme: "",
    image: "misty-pond.jpg",
    ratio: 1.0063,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "photograph",
    mediumLabel: "Photograph",
    year: 2026,
    yearLabel: "2026",
    theme: "",
    image: "central-park-skyline-photo.jpg",
    ratio: 1.3333,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "watercolor",
    mediumLabel: "Watercolor",
    year: 2025,
    yearLabel: "2025",
    theme: "",
    image: "alpine-houses.jpg",
    ratio: 1.2729,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "colorpencil",
    mediumLabel: "Colored Pencil",
    year: 2023,
    yearLabel: "2023",
    theme: "",
    image: "marionette-on-stage.jpg",
    ratio: 1.3853,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "gouache",
    mediumLabel: "Gouache",
    year: 2025,
    yearLabel: "2025",
    theme: "",
    image: "blue-boat.jpg",
    ratio: 1.4842,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "photograph",
    mediumLabel: "Photograph",
    year: 2026,
    yearLabel: "2026",
    theme: "",
    image: "central-park-rowboats-photo.jpg",
    ratio: 1.3333,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "pen",
    mediumLabel: "Pen",
    year: 2024,
    yearLabel: "2024",
    theme: "",
    image: "windswept-tree.jpg",
    ratio: 1.534,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "mixed",
    mediumLabel: "Mixed Media (Mehndi)",
    year: 2026,
    yearLabel: "May 2026",
    theme: "",
    image: "henna-design.jpg",
    ratio: 1.3333,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "mixed",
    mediumLabel: "Indian Ink and Watercolor",
    year: 2025,
    yearLabel: "2025",
    theme: "",
    image: "elephant-in-sunhat.jpg",
    ratio: 1.4911,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "photograph",
    mediumLabel: "Photograph",
    year: 2025,
    yearLabel: "2025",
    theme: "",
    image: "gateway-arch-photo.jpg",
    ratio: 1.3333,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "graphite",
    mediumLabel: "Graphite",
    year: 2024,
    yearLabel: "2024",
    theme: "",
    image: "grandmother-portrait.jpg",
    ratio: 1.3333,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "charcoal",
    mediumLabel: "Charcoal",
    year: 2025,
    yearLabel: "2025",
    theme: "",
    image: "twisted-branch.jpg",
    ratio: 1.3212,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "charcoal",
    mediumLabel: "Charcoal",
    year: 2025,
    yearLabel: "2025",
    theme: "",
    image: "girl-behind-hair.jpg",
    ratio: 1.5414,
    blurb: "",
    featured: false
  },
  {
    title: "",
    medium: "acrylic",
    mediumLabel: "Acrylic",
    year: 2025,
    yearLabel: "2025",
    theme: "",
    image: "rocky-cove.jpg",
    ratio: 1.364,
    blurb: "",
    featured: false
  },
];

/* Medium tab order + display labels. Add a key here if you introduce
   a brand-new medium key above that isn't in this list yet. */
const MEDIUM_ORDER = [
  { key: "photograph",  label: "Photography" },
  { key: "colorpencil", label: "Colored Pencil" },
  { key: "graphite",    label: "Graphite" },
  { key: "acrylic",     label: "Acrylic" },
  { key: "watercolor",  label: "Watercolor" },
  { key: "gouache",     label: "Gouache" },
  { key: "pen",         label: "Pen & Ink" },
  { key: "charcoal",    label: "Charcoal" },
  { key: "marker",      label: "Marker" },
  { key: "sketches",    label: "Studies & Sketches" },
  { key: "mixed",       label: "Mixed Media" }
];
