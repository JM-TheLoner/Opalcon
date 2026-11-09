// Top-level groupings.
// Drives the Services page sections and the first quote dropdown.
// Find attatched sub-services by filtering ./SubServices.js for the matching categoryId.

const categories = [
  {
    id: "cat_print",
    title: "Print Production",
    description: "Everything printed on paper and card, from business cards to books.",
    image: "", // optional
  },
  {
    id: "cat_apparel",
    title: "Apparel & Merchandise",
    description: "Custom clothing, headwear, bags, drinkware and other branded merchandise.",
    image: "",
  },
  {
    id: "cat_signage",
    title: "Signage & Large Format",
    description: "Banners, signboards, vehicle branding and large-scale graphics.",
    image: "",
  },
  {
    id: "cat_design",
    title: "Graphic Design & Branding",
    description: "Logos, brand identities and design for print, social media and packaging.",
    image: "",
  },
  {
    id: "cat_digital",
    title: "Digital Solutions",
    description: "Website design and development, e-commerce and UI/UX design.",
    image: "",
  },
];

export default categories;