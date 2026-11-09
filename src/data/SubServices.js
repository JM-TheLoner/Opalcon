// Individual services. Each points UP to its category via categoryId.
// Id is unique across the whole site (used for anchors and quote prefill).
// Options: plain string lists. Keys can vary per service; the page renders only the keys that exist. 
// "Other ..." entries are NOT stored here. The quote builder adds them in the sent form and doesn't touch this code.
// Gallery images live in images.js and point back here via serviceIds.

const SubServices = [
// ==========================================
// 1. PRINT & PRODUCTION
// ==========================================

  {
    id: "book-publication-printing",
    categoryId: "cat_print",
    title: "Book & Publication Printing",
    description: "Books, magazines, catalogues and other bound publications.",
    options: {
      formats: [
        "Paperback",
        "Hardcover",
        "Saddle-stitched",
        "Spiral-bound"
      ],
      materials: [
        "Uncoated Paper",
        "Gloss Art Paper",
        "Matte Art Paper"
      ],
      techniques: [
        "Digital Printing",
        "Offset Printing", 
        "Letterpress"
      ],
      finishes: [
        "Perfect Binding",
        "Saddle Stitch",
        "Hardcover Binding",
        "Matte Lamination",
        "Gloss Lamination",
        "Soft-touch Lamination",
        "Foil Stamping"
      ],
      paperSizes: [
        "A4",
        "A5",
        "A6",
        "B5",
        "Custom Size"
      ]
    }
  },

  {
    id: "marketing-promotional-materials",
    categoryId: "cat_print",
    title: "Marketing & Promotional Materials",
    description: "Printed promotional materials such as flyers, brochures, posters, leaflets and catalogues.",
    options: {
      formats: [
        "Flyers",
        "Leaflets",
        "Brochures",
        "Folded Brochures",
        "Posters",
        "Catalogues",
        "Booklets"
      ],
      materials: [
        "Uncoated Paper",
        "Gloss Art Paper",
        "Matte Art Paper",
        "Art Card",
        "Recycled Paper"
      ],
      techniques: [
        "Digital Printing",
        "Offset Printing"
      ],
      finishes: [
        "Matte Lamination",
        "Gloss Lamination",
        "Soft-touch Lamination",
        "Spot UV",
        "Foil Stamping"
      ],
      paperSizes: [
        "A3",
        "A4",
        "A5",
        "A6",
        "DL",
        "Custom Size"
      ]
    }
  },

  {
    id: "business-stationery",
    categoryId: "cat_print",
    title: "Business Stationery",
    description: "Professionally printed stationery for businesses, offices and organisations.",
    options: {
      products: [
        "Letterheads",
        "Envelopes",
        "Compliment Slips",
        "Notepads",
        "Presentation Folders",
        "Business Forms"
      ],
      materials: [
        "Uncoated Paper",
        "Bond Paper",
        "Premium Textured Paper",
        "Art Card"
      ],
      techniques: [
        "Digital Printing",
        "Offset Printing",
        "Foil Stamping",
        "Embossing"
      ],
      finishes: [
        "Matte Lamination",
        "Gloss Lamination",
        "Soft-touch Lamination",
        "Foil Finish",
        "Embossed Finish",
        "Debossed Finish"
      ],
      paperSizes: [
        "A4",
        "A5",
        "A6",
        "DL",
        "Custom Size"
      ]
    }
  },

  {
    id: "cards-invitations",
    categoryId: "cat_print",
    title: "Cards & Invitations",
    description: "Custom-designed and printed cards for business, personal occasions, events and special announcements.",
    options: {
      formats: [
        "Flat Cards",
        "Folded Cards",
        "Bi-fold Cards",
        "Tri-fold Cards",
        "Die-cut Cards"
      ],
      materials: [
        "Art Card",
        "Matte Cardstock",
        "Gloss Cardstock",
        "Uncoated Cardstock",
        "Textured Cardstock",
        "Kraft Cardstock"
      ],
      techniques: [
        "Digital Printing",
        "Offset Printing",
        "Letterpress"
      ],
      finishes: [
        "Matte Lamination",
        "Gloss Lamination",
        "Soft-touch Lamination",
        "Spot UV",
        "Foil Stamping",
        "Embossing",
        "Debossing",
        "Rounded Corners"
      ],
      paperSizes: [
        "A6",
        "A5",
        "A4",
        "DL",
        "Square",
        "Custom Size"
      ]
    }
  },

  {
    id: "stickers-labels",
    categoryId: "cat_print",
    title: "Stickers & Labels",
    description: "Custom printed stickers and product labels for packaging, branding, promotion and identification.",
    options: {
      types: [
        "Paper Stickers",
        "Vinyl Stickers",
        "Transparent Stickers",
        "Die-cut Stickers",
        "Kiss-cut Stickers",
        "Product Labels",
        "Roll Labels",
        "Sheet Labels"
      ],
      materials: [
        "Paper",
        "White Vinyl",
        "Clear Vinyl",
        "Holographic Vinyl",
        "Kraft Paper",
        "Waterproof Synthetic Material"
      ],
      adhesives: [
        "Permanent Adhesive",
        "Removable Adhesive",
        "Repositionable Adhesive"
      ],
      techniques: [
        "Digital Printing",
        "UV Printing",
        "Screen Printing"
      ],
      finishes: [
        "Matte Lamination",
        "Gloss Lamination",
        "Gloss Finish",
        "Matte Finish",
        "Holographic Finish",
        "Waterproof Finish"
      ],
      cuttingMethods: [
        "Die-cut",
        "Kiss-cut",
        "Sheet Cut",
        "Roll Format"
      ]
    }
  },

  {
    id: "packaging-product-printing",
    categoryId: "cat_print",
    title: "Packaging & Product Printing",
    description: "Custom printed packaging and branded product materials for retail, food, gifts and other products.",
    options: {
      packagingTypes: [
        "Paper Bags",
        "Shopping Bags",
        "Product Boxes",
        "Gift Boxes",
        "Food Packaging",
        "Sleeves",
        "Tags",
        "Wrapping Paper"
      ],
      materials: [
        "Kraft Paper",
        "Art Card",
        "Duplex Board",
        "Corrugated Board",
        "Folding Box Board",
        "Rigid Board"
      ],
      constructionTypes: [
        "Folding Carton",
        "Rigid Box",
        "Corrugated Box",
        "Die-cut Packaging",
        "Self-locking Box"
      ],
      techniques: [
        "Digital Printing",
        "Offset Printing",
        "Flexographic Printing",
        "Screen Printing"
      ],
      finishes: [
        "Matte Lamination",
        "Gloss Lamination",
        "Soft-touch Lamination",
        "Spot UV",
        "Foil Stamping",
        "Embossing",
        "Debossing",
        "Varnishing"
      ]
    }
  },

// ==========================================
// 2. APPAREL & MERCHANDISE
// ==========================================

  {
    id: "t-shirt-printing",
    categoryId: "cat_apparel",
    title: "T-shirt Printing",
    description: "Custom printed and branded T-shirts for businesses, events, organisations and personal use.",
    options: {
      garmentTypes: [
        "Round-neck T-shirt",
        "Polo Shirt",
        "V-neck T-shirt",
        "Oversized T-shirt",
        "Long-sleeve T-shirt",
        "Sports T-shirt"
      ],
      fabrics: [
        "Cotton",
        "Polyester",
        "Cotton-Polyester Blend",
        "Cotton Piqué",
        "Performance Fabric"
      ],
      techniques: [
        "Screen Printing",
        "Direct-to-Garment (DTG)",
        "Direct-to-Film (DTF)",
        "Heat Transfer",
        "Sublimation",
        "Embroidery"
      ]
    }
  },

  {
    id: "custom-clothing-uniforms",
    categoryId: "cat_apparel",
    title: "Custom Clothing & Uniforms",
    description: "Custom-made clothing, corporate uniforms, workwear and branded garments.",
    options: {
      garmentTypes: [
        "Corporate Shirts",
        "Workwear",
        "School Uniforms",
        "Industrial Uniforms",
        "Chef Uniforms",
        "Scrubs",
        "Jackets",
        "Hoodies",
        "Custom Outfits"
      ],
      fabrics: [
        "Cotton",
        "Polyester",
        "Cotton-Polyester Blend",
        "Twill",
        "Denim",
        "Fleece",
        "Performance Fabric"
      ],
      techniques: [
        "Screen Printing",
        "Direct-to-Film (DTF)",
        "Heat Transfer",
        "Embroidery",
        "Sublimation"
      ],
      constructionFeatures: [
        "Custom Collar Styles",
        "Button Plackets",
        "Pockets",
        "Ribbed Cuffs",
        "Lined Construction"
      ]
    }
  },

  {
    id: "bags-accessories",
    categoryId: "cat_apparel",
    title: "Bags & Accessories",
    description: "Custom branded bags and accessories for businesses, events, promotions and everyday use.",
    options: {
      productTypes: [
        "Tote Bags",
        "Drawstring Bags",
        "Backpacks",
        "Laptop Bags",
        "Travel Bags",
        "Pouches",
        "Wallets",
        "Aprons"
      ],
      materials: [
        "Cotton",
        "Canvas",
        "Non-woven Fabric",
        "Polyester",
        "Jute",
        "Leather",
        "Faux Leather"
      ],
      techniques: [
        "Screen Printing",
        "Heat Transfer",
        "Direct-to-Film (DTF)",
        "Embroidery",
        "Sublimation"
      ],
      finishes: [
        "Zipper Closure",
        "Lined Interior",
        "Reinforced Stitching",
        "Padded Construction"
      ]
    }
  },

  {
    id: "headwear-printing",
    categoryId: "cat_apparel",
    title: "Headwear Printing",
    description: "Custom branded caps, hats and other headwear for promotional, corporate and personal use.",
    options: {
      styles: [
        "Baseball Caps",
        "Snapback Caps",
        "Trucker Caps",
        "Bucket Hats",
        "Beanies",
        "Visors"
      ],
      materials: [
        "Cotton",
        "Polyester",
        "Cotton-Polyester Blend",
        "Mesh",
        "Wool Blend",
        "Acrylic"
      ],
      techniques: [
        "Embroidery",
        "3D Puff Embroidery",
        "Screen Printing",
        "Heat Transfer",
        "Direct-to-Film (DTF)"
      ],
      finishes: [
        "Flat Brim",
        "Curved Brim",
        "Structured Crown",
        "Unstructured Crown"
      ]
    }
  },

  {
    id: "drinkware-printing",
    categoryId: "cat_apparel",
    title: "Drinkware Printing",
    description: "Custom printed and branded mugs, bottles, tumblers and other drinkware.",
    options: {
      productTypes: [
        "Ceramic Mugs",
        "Travel Mugs",
        "Tumblers",
        "Water Bottles",
        "Sports Bottles",
        "Flasks",
        "Glass Cups"
      ],
      materials: [
        "Ceramic",
        "Stainless Steel",
        "Glass",
        "Plastic",
        "Acrylic"
      ],
      techniques: [
        "Sublimation",
        "UV Printing",
        "Screen Printing",
        "Laser Engraving",
        "Pad Printing"
      ],
      finishes: [
        "Gloss Finish",
        "Matte Finish",
        "Metallic Finish",
        "Frosted Finish"
      ]
    }
  },

  {
    id: "corporate-promotional-merchandise",
    categoryId: "cat_apparel",
    title: "Corporate & Promotional Merchandise",
    description: "Custom branded merchandise and promotional products for businesses, events and organisations.",
    options: {
      productTypes: [
        "Pens",
        "Keyholders",
        "Notebooks",
        "Lanyards",
        "USB Drives",
        "Power Banks",
        "Desk Accessories",
        "Gift Sets",
        "Promotional Accessories"
      ],
      materials: [
        "Plastic",
        "Metal",
        "Wood",
        "Leather",
        "Faux Leather",
        "Fabric",
        "Paper"
      ],
      brandingTechniques: [
        "Screen Printing",
        "UV Printing",
        "Pad Printing",
        "Laser Engraving",
        "Embroidery",
        "Heat Transfer",
        "Foil Stamping"
      ],
      finishes: [
        "Matte Finish",
        "Gloss Finish",
        "Metallic Finish",
        "Engraved Finish"
      ]
    }
  },

// ==========================================
// 3. SIGNAGE & LARGE FORMAT
// ==========================================

  {
    id: "banner-printing",
    categoryId: "cat_signage",
    title: "Banner Printing",
    description: "Custom printed banners for advertising, events, promotions and outdoor displays.",
    options: {
      materials: [
        "PVC Flex Banner",
        "Frontlit Banner",
        "Backlit Banner",
        "Mesh Banner",
        "Fabric Banner"
      ],
      techniques: [
        "Large Format Digital Printing",
        "UV Printing",
        "Dye Sublimation"
      ],
      finishes: [
        "Eyelets",
        "Hemming",
        "Pole Pockets",
        "Reinforced Edges",
        "Lamination"
      ],
      displaySystems: [
        "Roll-up Stand",
        "X-Stand",
        "Pull-up Display",
        "Hanging Banner System"
      ]
    }
  },

  {
    id: "signboard-production",
    categoryId: "cat_signage",
    title: "Signboard Production",
    description: "Custom fabricated signboards for shops, offices, buildings and commercial spaces.",
    options: {
      types: [
        "Flat Signboards",
        "3D Letter Signs",
        "Lightbox Signs",
        "LED Signs",
        "Reception Signs",
        "Directional Signs"
      ],
      materials: [
        "Acrylic",
        "Aluminium Composite Panel (ACP)",
        "PVC Board",
        "Stainless Steel",
        "Wood",
        "Perspex"
      ],
      construction: [
        "Flat Panel",
        "Raised Letters",
        "3D Fabricated Letters",
        "Layered Construction"
      ],
      illumination: [
        "Non-illuminated",
        "Front-lit",
        "Backlit",
        "Halo-lit"
      ],
      finishes: [
        "Gloss Finish",
        "Matte Finish",
        "Brushed Metal Finish",
        "Polished Finish",
        "Painted Finish"
      ]
    }
  },

  {
    id: "large-format-printing",
    categoryId: "cat_signage",
    title: "Large Format Printing",
    description: "Large-scale printed graphics for advertising, branding, exhibitions and commercial displays.",
    options: {
      applications: [
        "Posters",
        "Billboards",
        "Backdrops",
        "Window Graphics",
        "Wall Graphics",
        "Display Graphics",
        "Floor Graphics"
      ],
      materials: [
        "PVC Flex",
        "Self-adhesive Vinyl",
        "Canvas",
        "Fabric",
        "Backlit Film",
        "Photo Paper",
        "Mesh"
      ],
      techniques: [
        "Large Format Digital Printing",
        "UV Printing",
        "Dye Sublimation"
      ],
      finishes: [
        "Matte Lamination",
        "Gloss Lamination",
        "UV Protection",
        "Anti-scratch Lamination",
        "Waterproof Finish"
      ]
    }
  },

  {
    id: "vehicle-branding",
    categoryId: "cat_signage",
    title: "Vehicle Branding",
    description: "Custom vehicle graphics and branding for cars, vans, buses and commercial fleets.",
    options: {
      coverageTypes: [
        "Full Vehicle Wrap",
        "Partial Vehicle Wrap",
        "Vehicle Decals",
        "Door Branding",
        "Bonnet Branding",
        "Rear Window Graphics"
      ],
      materials: [
        "Cast Vinyl",
        "Calendered Vinyl",
        "Printable Vinyl",
        "Perforated Window Film"
      ],
      techniques: [
        "Large Format Digital Printing",
        "Cut Vinyl Lettering",
        "UV Printing"
      ],
      finishes: [
        "Gloss Finish",
        "Matte Finish",
        "Satin Finish",
        "Carbon Fibre Effect",
        "Lamination",
        "UV Protection"
      ]
    }
  },

  {
    id: "wall-window-graphics",
    categoryId: "cat_signage",
    title: "Wall & Window Graphics",
    description: "Decorative and promotional graphics for interior walls, glass surfaces and commercial windows.",
    options: {
      applications: [
        "Wall Murals",
        "Wall Decals",
        "Window Decals",
        "Frosted Glass Graphics",
        "Window Privacy Film",
        "Glass Branding",
        "Floor Graphics"
      ],
      materials: [
        "Self-adhesive Vinyl",
        "Frosted Vinyl",
        "Perforated Window Film",
        "Removable Wall Vinyl",
        "Printable Wallpaper"
      ],
      techniques: [
        "Large Format Digital Printing",
        "UV Printing",
        "Cut Vinyl Lettering"
      ],
      finishes: [
        "Matte Finish",
        "Gloss Finish",
        "Frosted Finish",
        "Textured Finish",
        "Lamination",
        "Removable Adhesive"
      ]
    }
  },

  {
    id: "exhibition-display-materials",
    categoryId: "cat_signage",
    title: "Exhibition & Display Materials",
    description: "Printed display systems and branded materials for exhibitions, trade shows, events and promotional spaces.",
    options: {
      displayTypes: [
        "Roll-up Banners",
        "X-Banners",
        "Pop-up Displays",
        "Media Walls",
        "Exhibition Stands",
        "Table Covers",
        "Display Boards",
        "Backdrop Systems"
      ],
      materials: [
        "PVC Flex",
        "Fabric",
        "Foam Board",
        "PVC Board",
        "Acrylic",
        "Aluminium"
      ],
      structures: [
        "Retractable Stand",
        "Pop-up Frame",
        "Modular Frame",
        "Freestanding Display",
        "Wall-mounted Display"
      ],
      finishes: [
        "Matte Finish",
        "Gloss Finish",
        "Fabric Finish",
        "Lamination"
      ]
    }
  },

// ==========================================
// 4. GRAPHIC DESIGN & BRANDING
// ==========================================

  {
    id: "logo-design",
    categoryId: "cat_design",
    title: "Logo Design",
    description: "Custom logo creation to establish a distinctive and recognisable visual identity for a business or brand.",
    options: {
      logoTypes: [
        "Wordmark",
        "Lettermark",
        "Combination Mark",
        "Pictorial Mark",
        "Abstract Mark",
        "Emblem"
      ],
      designStyles: [
        "Minimalist",
        "Modern",
        "Classic",
        "Corporate",
        "Geometric",
        "Illustrative",
        "Typography-focused"
      ],
      deliverables: [
        "Primary Logo",
        "Secondary Logo",
        "Logo Variations",
        "Brand Mark",
        "Favicon"
      ]
    }
  },

  {
    id: "brand-identity-design",
    categoryId: "cat_design",
    title: "Brand Identity Design",
    description: "A cohesive visual identity system covering the core design elements used to represent a brand consistently.",
    options: {
      identityElements: [
        "Logo System",
        "Colour Palette",
        "Typography System",
        "Brand Patterns",
        "Iconography",
        "Visual Elements"
      ],
      brandApplications: [
        "Business Cards",
        "Letterheads",
        "Envelopes",
        "Presentation Templates",
        "Social Media Templates",
        "Packaging",
        "Branded Merchandise"
      ],
      guidelines: [
        "Logo Usage Guidelines",
        "Colour Guidelines",
        "Typography Guidelines",
        "Brand Application Guidelines",
        "Complete Brand Guidelines"
      ]
    }
  },

  {
    id: "marketing-promotional-design",
    categoryId: "cat_design",
    title: "Marketing & Promotional Design",
    description: "Creative design of marketing and advertising materials for campaigns, promotions and business communication.",
    options: {
      designTypes: [
        "Flyer Design",
        "Brochure Design",
        "Poster Design",
        "Banner Design",
        "Catalogue Design",
        "Advert Design",
        "Promotional Campaign Graphics"
      ],
      designStyles: [
        "Minimalist",
        "Corporate",
        "Modern",
        "Bold",
        "Editorial",
        "Illustrative"
      ],
      deliverables: [
        "Print-ready Artwork",
        "Digital Artwork",
        "Editable Source Files",
        "Multiple Design Variations"
      ]
    }
  },

  {
    id: "print-design-layout",
    categoryId: "cat_design",
    title: "Print Design & Layout",
    description: "Professional layout and artwork preparation for printed publications, marketing materials and business documents.",
    options: {
      designTypes: [
        "Book Layout",
        "Magazine Layout",
        "Brochure Layout",
        "Catalogue Layout",
        "Flyer Design",
        "Business Stationery Design",
        "Invitation Design"
      ],
      layoutStyles: [
        "Editorial",
        "Minimalist",
        "Corporate",
        "Modern",
        "Magazine-style"
      ],
      printPreparation: [
        "CMYK Colour Setup",
        "Bleed and Crop Marks",
        "Print-ready PDF",
        "Font Embedding",
        "Image Resolution Preparation"
      ]
    }
  },

  {
    id: "packaging-design",
    categoryId: "cat_design",
    title: "Packaging Design",
    description: "Creative and structural packaging design that combines product presentation, brand identity and practical packaging requirements.",
    options: {
      packagingTypes: [
        "Product Box",
        "Folding Carton",
        "Rigid Box",
        "Paper Bag",
        "Product Label",
        "Product Sleeve",
        "Food Packaging",
        "Gift Packaging"
      ],
      designElements: [
        "Visual Packaging Design",
        "Structural Packaging Design",
        "Product Label Design",
        "Packaging Artwork",
        "Packaging Mockups"
      ],
      printPreparation: [
        "Dieline Setup",
        "CMYK Colour Setup",
        "Bleed and Crop Marks",
        "Print-ready Artwork"
      ]
    }
  },

  {
    id: "illustration-custom-graphics",
    categoryId: "cat_design",
    title: "Illustration & Custom Graphics",
    description: "Custom illustrations, visual assets and graphic artwork for branding, marketing, publications and digital use.",
    options: {
      illustrationStyles: [
        "Vector Illustration",
        "Digital Illustration",
        "Hand-drawn Illustration",
        "Line Art",
        "Flat Illustration",
        "Character Illustration",
        "Isometric Illustration"
      ],
      techniques: [
        "Vector Artwork",
        "Digital Painting",
        "Line Drawing",
        "Icon Design"
      ],
      deliverables: [
        "Custom Illustrations",
        "Icon Sets",
        "Graphic Assets",
        "Character Artwork",
        "Editable Source Files"
      ]
    }
  },

// ==========================================
// 5. DIGITAL SOLUTIONS
// ==========================================

  {
    id: "website-design-development",
    categoryId: "cat_digital",
    title: "Website Design & Development",
    description: "Custom website design and development for businesses, organisations, individuals and brands.",
    options: {
      websiteTypes: [
        "Business Website",
        "Portfolio Website",
        "Landing Page",
        "Blog or Publication Website",
        "Corporate Website",
        "Informational Website"
      ],
      developmentApproaches: [
        "Custom Development",
        "CMS-based Development",
        "Website Builder"
      ],
      platforms: [
        "WordPress",
        "Webflow",
        "Custom-built Website"
      ],
      features: [
        "Responsive Design",
        "Content Management System",
        "Contact Forms",
        "Blog Integration",
        "Search Functionality",
        "Social Media Integration",
        "SEO Setup",
        "Analytics Integration"
      ]
    }
  },

  {
    id: "ui-ux-design",
    categoryId: "cat_digital",
    title: "UI/UX Design",
    description: "User interface and user experience design for websites, mobile applications and digital products.",
    options: {
      designTypes: [
        "Website UI/UX",
        "Mobile App UI/UX",
        "Web Application UI/UX",
        "Dashboard Design",
        "SaaS Product Design"
      ],
      deliverables: [
        "User Flows",
        "Wireframes",
        "Low-fidelity Prototypes",
        "High-fidelity Designs",
        "Interactive Prototypes",
        "Design Systems",
        "Developer Handoff"
      ],
      designTools: [
        "Figma",
        "Adobe XD"
      ]
    }
  },

  {
    id: "website-redesign",
    categoryId: "cat_digital",
    title: "Website Redesign",
    description: "Visual and structural improvements to existing websites to improve their appearance, usability and functionality.",
    options: {
      redesignAreas: [
        "Visual Design Refresh",
        "User Experience Improvements",
        "Navigation Restructuring",
        "Responsive Design Improvements",
        "Performance Improvements",
        "Content Structure Improvements"
      ],
      platforms: [
        "WordPress",
        "Webflow",
        "Custom-built Website",
        "Other Existing Platform"
      ],
      features: [
        "Updated UI/UX",
        "Mobile Responsiveness",
        "Content Management",
        "SEO Improvements",
        "Accessibility Improvements",
        "Third-party Integrations"
      ]
    }
  },
];

export default SubServices;