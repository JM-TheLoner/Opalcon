// Gallery images showing previous work. 
// Each image points to every sub-service it fits an has descriptors for finishes
// serviceIds: list of sub-service ids attatched. In case one image can serve several services.
// Options: ONE value per key. Each value must exist under the same key in at least one of the services in serviceIds (validate.js checks this in dev).

const images = [
  {
    id: "img-001",
    src: "",
    alt: "",
    serviceIds: [],
    options: { paperSizes: "", finishes: "" },
  },
  {
    id: "img-002",
    src: "",
    alt: "",
    serviceIds: [],
    options: { materials: "", finishes: "" },
  },
  {
    id: "img-003",
    src: "",
    alt: "",
    serviceIds: [],
    options: { paperSizes: "", finishes: "" },
  },
  {
    id: "img-004",
    src: "",
    alt: "",
    serviceIds: [],
    options: { techniques: "" },
  },
  {
    id: "img-005",
    src: "",
    alt: "",
    serviceIds: [],
    options: { materials: "", finishes: "" },
  },
  {
    id: "img-006",
    src: "",
    alt: "",
    serviceIds: [],
    options: { materials: "", variations: "" },
  },
  {
    id: "img-007",
    src: "",
    alt: "",
    serviceIds: [],
    options: { variations: "" },
  },
];

export default images;