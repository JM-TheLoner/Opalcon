// Individual services. Each points UP to its category via categoryId.
// Id is unique across the whole site (used for anchors and quote prefill).
// Options: plain string lists. Keys can vary per service; the page renders only the keys that exist. 
// "Other ..." entries are NOT stored here. The quote builder adds them in the sent form and doesn't touch this code.
// Gallery images live in images.js and point back here via serviceIds.

const subServices = [
  // ───────────── Print Production ─────────────
  {
    id: "book-publication-printing",
    categoryId: "cat_print",
    title: "Book & Publication Printing",
    description: "Books, magazines, catalogues and other bound publications.",
    options: {
      materials: ["Uncoated paper", "Gloss art paper", "Matte art paper"],
      techniques: ["Digital Printing", "Offset Printing"],
      finishes: ["Perfect binding", "Saddle stitch", "Hardcover", "Matte lamination"],
      paperSizes: ["A4", "A5", "A6"],
    },
  },
  {
    id: "marketing-promotional-materials",
    categoryId: "cat_print",
    title: "Marketing & Promotional Materials",
    description: "Flyers, brochures, posters and leaflets that get your message out.",
    options: {
      materials: ["Gloss art paper", "Matte art paper", "Recycled paper"],
      finishes: ["Matte lamination", "Gloss lamination", "Spot UV"],
      paperSizes: ["A3", "A4", "A5", "A6", "DL"],
      variations: ["Single-sided", "Double-sided", "Folded"],
    },
  },
  {
    id: "business-stationery",
    categoryId: "cat_print",
    title: "Business Stationery",
    description: "Business cards, letterheads, envelopes and notepads.",
    options: {
      materials: ["Standard card", "Premium card", "Textured paper"],
      finishes: ["Matte lamination", "Gloss lamination", "Spot UV", "Foil stamping"],
      variations: ["Business cards", "Letterheads", "Envelopes", "Notepads"],
    },
  },
  {
    id: "cards-invitations",
    categoryId: "cat_print",
    title: "Cards & Invitations",
    description: "Invitations and cards for weddings, events and corporate occasions.",
    options: {
      materials: ["Textured card", "Pearl card", "Kraft card"],
      finishes: ["Foil stamping", "Embossing", "Matte lamination"],
      variations: ["Wedding invitations", "Event invitations", "Greeting cards", "Thank-you cards"],
    },
  },
  {
    id: "stickers-labels",
    categoryId: "cat_print",
    title: "Stickers & Labels",
    description: "Custom stickers and product labels in any shape.",
    options: {
      materials: ["Vinyl", "Paper", "Transparent film"],
      finishes: ["Gloss lamination", "Matte lamination"],
      variations: ["Die-cut", "Kiss-cut", "Sheets", "Rolls"],
    },
  },
  {
    id: "packaging-product-printing",
    categoryId: "cat_print",
    title: "Packaging & Product Printing",
    description: "Printed boxes, bags and tags for your products.",
    options: {
      materials: ["Kraft board", "White card", "Corrugated board"],
      techniques: ["Digital Printing", "Offset Printing"],
      finishes: ["Matte lamination", "Gloss lamination", "Spot UV"],
      variations: ["Boxes", "Paper bags", "Product tags", "Hang tags"],
    },
  },
  {
    id: "general-document-printing",
    categoryId: "cat_print",
    title: "General Document Printing",
    description: "Everyday document printing, copying and binding.",
    options: {
      materials: ["80gsm paper", "100gsm paper"],
      techniques: ["Digital Printing"],
      finishes: ["Stapling", "Spiral binding", "Lamination"],
      paperSizes: ["A4", "A3"],
      variations: ["Black & white", "Full colour"],
    },
  },

  // ───────────── Apparel & Merchandise ─────────────
  {
    id: "t-shirt-printing",
    categoryId: "cat_apparel",
    title: "T-shirt Printing",
    description: "Custom printed T-shirts for brands, teams and events.",
    options: {
      materials: ["Cotton", "Polyester blend", "Performance fabric"],
      techniques: ["Screen Printing", "Heat Transfer", "Direct-to-Garment (DTG)", "Embroidery"],
      variations: ["Round neck", "V-neck", "Long sleeve"],
    },
  },
  {
    id: "custom-clothing-uniforms",
    categoryId: "cat_apparel",
    title: "Custom Clothing & Uniforms",
    description: "Branded clothing and uniforms for staff and organisations.",
    options: {
      materials: ["Cotton", "Polycotton", "Denim"],
      techniques: ["Embroidery", "Screen Printing", "Heat Transfer"],
      variations: ["Polo shirts", "Work shirts", "Hoodies", "Jackets", "Corporate uniforms"],
    },
  },
  {
    id: "bags-accessories",
    categoryId: "cat_apparel",
    title: "Bags & Accessories",
    description: "Branded bags, lanyards and accessories.",
    options: {
      materials: ["Canvas", "Non-woven fabric", "Cotton"],
      techniques: ["Screen Printing", "Heat Transfer", "Embroidery"],
      variations: ["Tote bags", "Drawstring bags", "Backpacks", "Lanyards"],
    },
  },
  {
    id: "headwear-printing",
    categoryId: "cat_apparel",
    title: "Headwear Printing",
    description: "Custom caps, hats and beanies.",
    options: {
      materials: ["Cotton twill", "Mesh"],
      techniques: ["Embroidery", "Heat Transfer", "Screen Printing"],
      variations: ["Baseball caps", "Snapbacks", "Bucket hats", "Beanies"],
    },
  },
  {
    id: "drinkware-printing",
    categoryId: "cat_apparel",
    title: "Drinkware Printing",
    description: "Printed mugs, bottles and tumblers.",
    options: {
      materials: ["Ceramic", "Stainless steel", "Plastic"],
      techniques: ["Sublimation", "Screen Printing", "Laser engraving"],
      variations: ["Mugs", "Tumblers", "Water bottles", "Flasks"],
    },
  },
  {
    id: "corporate-promotional-merchandise",
    categoryId: "cat_apparel",
    title: "Corporate & Promotional Merchandise",
    description: "Branded giveaways and corporate gifts.",
    options: {
      techniques: ["Screen Printing", "Laser engraving", "Pad printing"],
      variations: ["Pens", "Notebooks", "Keyholders", "Umbrellas", "Gift sets"],
    },
  },

  // ───────────── Signage & Large Format ─────────────
  {
    id: "banner-printing",
    categoryId: "cat_signage",
    title: "Banner Printing",
    description: "Durable banners for indoor and outdoor use.",
    options: {
      materials: ["PVC flex", "Mesh vinyl", "Fabric"],
      finishes: ["Hemmed edges", "Eyelets", "Pole pockets"],
      variations: ["Indoor banners", "Outdoor banners", "Roll-up banners", "Backdrop banners"],
    },
  },
  {
    id: "signboard-production",
    categoryId: "cat_signage",
    title: "Signboard Production",
    description: "Shop signs, directional signs and dimensional lettering.",
    options: {
      materials: ["Acrylic", "Aluminium composite", "Wood", "Stainless steel"],
      finishes: ["Backlit", "Matte", "Gloss"],
      variations: ["Shop signs", "Directional signs", "3D letters", "LED signs"],
    },
  },
  {
    id: "large-format-printing",
    categoryId: "cat_signage",
    title: "Large Format Printing",
    description: "Posters, canvas prints and other big-format graphics.",
    options: {
      materials: ["Vinyl", "Canvas", "Photo paper", "Backlit film"],
      techniques: ["Large Format Digital", "Latex printing"],
      sizes: ["A2", "A1", "A0", "Custom"],
      variations: ["Posters", "Billboards", "Canvas prints"],
    },
  },
  {
    id: "vehicle-branding",
    categoryId: "cat_signage",
    title: "Vehicle Branding",
    description: "Wraps and graphics that turn vehicles into moving adverts.",
    options: {
      materials: ["Cast vinyl", "Reflective vinyl", "Perforated window film"],
      finishes: ["Gloss", "Matte", "Laminated"],
      variations: ["Full wraps", "Partial wraps", "Door decals", "Fleet graphics"],
    },
  },
  {
    id: "wall-window-graphics",
    categoryId: "cat_signage",
    title: "Wall & Window Graphics",
    description: "Murals, window decals and floor graphics.",
    options: {
      materials: ["Self-adhesive vinyl", "Frosted film", "Wallpaper", "One-way vision film"],
      finishes: ["Matte", "Gloss", "Laminated"],
      variations: ["Wall murals", "Window decals", "Frosted privacy film", "Floor graphics"],
    },
  },
  {
    id: "exhibition-display-materials",
    categoryId: "cat_signage",
    title: "Exhibition & Display Materials",
    description: "Stands, backdrops and displays for events and exhibitions.",
    options: {
      materials: ["Fabric", "PVC", "Foam board"],
      variations: ["Pop-up stands", "X-banner stands", "Backdrops", "Table covers", "Display boards"],
    },
  },

  // ───────────── Graphic Design & Branding ─────────────
  {
    id: "logo-design",
    categoryId: "cat_design",
    title: "Logo Design",
    description: "A distinctive logo built around your business.",
    options: {
      variations: ["Wordmark", "Icon logo", "Combination mark", "Logo redesign"],
    },
  },
  {
    id: "brand-identity-design",
    categoryId: "cat_design",
    title: "Brand Identity Design",
    description: "A complete, consistent look for your brand.",
    options: {
      variations: ["Colour palette", "Typography", "Brand guidelines", "Stationery suite"],
    },
  },
  {
    id: "marketing-promotional-design",
    categoryId: "cat_design",
    title: "Marketing & Promotional Design",
    description: "Designs for campaigns, adverts and promotions.",
    options: {
      variations: ["Flyers", "Brochures", "Posters", "Billboards", "Ad creatives"],
    },
  },
  {
    id: "social-media-design",
    categoryId: "cat_design",
    title: "Social Media Design",
    description: "On-brand graphics for your social channels.",
    options: {
      variations: ["Post templates", "Story templates", "Profile and cover graphics", "Ad creatives"],
    },
  },
  {
    id: "print-design-layout",
    categoryId: "cat_design",
    title: "Print Design & Layout",
    description: "Print-ready layouts for publications and documents.",
    options: {
      variations: ["Books and magazines", "Catalogues", "Reports", "Menus"],
    },
  },
  {
    id: "packaging-design",
    categoryId: "cat_design",
    title: "Packaging Design",
    description: "Packaging that stands out on the shelf.",
    options: {
      variations: ["Boxes", "Labels", "Pouches", "Bottles and jars"],
    },
  },
  {
    id: "presentation-design",
    categoryId: "cat_design",
    title: "Presentation Design",
    description: "Clear, polished slides and decks.",
    options: {
      variations: ["Pitch decks", "Company profiles", "Training slides", "Template design"],
    },
  },
  {
    id: "illustration-custom-graphics",
    categoryId: "cat_design",
    title: "Illustration & Custom Graphics",
    description: "Original illustrations, icons and graphics.",
    options: {
      variations: ["Custom illustrations", "Icons", "Infographics", "Mascots"],
    },
  },

  // ───────────── Digital Solutions ─────────────
  {
    id: "website-design-development",
    categoryId: "cat_digital",
    title: "Website Design & Development",
    description: "Websites designed and built from scratch.",
    options: {
      variations: ["Business website", "Portfolio", "Landing page", "Blog"],
      features: ["Contact forms", "WhatsApp integration", "SEO setup", "Content management"],
    },
  },
  {
    id: "ecommerce-development",
    categoryId: "cat_digital",
    title: "E-commerce Development",
    description: "Online stores that are ready to sell.",
    options: {
      features: ["Online store", "Payment integration", "Product catalogue", "Order management"],
    },
  },
  {
    id: "ui-ux-design",
    categoryId: "cat_digital",
    title: "UI/UX Design",
    description: "Interfaces designed around how people actually use them.",
    options: {
      variations: ["Wireframes", "Prototypes", "Design systems", "User research"],
    },
  },
  {
    id: "website-redesign",
    categoryId: "cat_digital",
    title: "Website Redesign",
    description: "Give an existing website a fresh look and better performance.",
    options: {
      variations: ["Visual refresh", "Performance and speed", "Mobile optimisation", "Content restructure"],
    },
  },
  {
    id: "website-maintenance",
    categoryId: "cat_digital",
    title: "Website Maintenance",
    description: "Ongoing updates, backups and support.",
    options: {
      variations: ["Updates and backups", "Security monitoring", "Content changes", "Hosting support"],
    },
  },
];

export default subServices;