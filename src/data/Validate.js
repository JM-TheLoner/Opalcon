// dev-time check for image 
// Dev-time data check. Warns in the console. Never changes anything.
// Called once in main.jsx

export function validateData(categories, subServices, images) {
  const warn = (msg) => console.warn(`[data] ${msg}`);

  //Check For Duplicate IDs
  const checkDuplicates = (list, label) => {
    const seen = new Set();
    list.forEach(({ id }) => {
      if (seen.has(id)) warn(`Duplicate ${label} id "${id}"`);
      seen.add(id);
    });
  };
  checkDuplicates(categories, "category");
  checkDuplicates(subServices, "sub-service");
  checkDuplicates(images, "image");

  // Sub-services must point to a real category
  const categoryIds = new Set(categories.map((c) => c.id));
  subServices.forEach((s) => {
    if (!categoryIds.has(s.categoryId)) {
      warn(`Sub-service "${s.id}" has unknown categoryId "${s.categoryId}"`);
    }
  });

  // Images must point to real sub-services, and their options must exist
  const serviceById = new Map(subServices.map((s) => [s.id, s]));
  images.forEach((img) => {
    if (!img.serviceIds?.length) {
      warn(`Image "${img.id}" has no serviceIds`);
      return;
    }

    img.serviceIds.forEach((id) => {
      if (!serviceById.has(id)) {
        warn(`Image "${img.id}" points to unknown sub-service "${id}"`);
      }
    });

    Object.entries(img.options ?? {}).forEach(([key, value]) => {
      const found = img.serviceIds.some((id) =>
        serviceById.get(id)?.options?.[key]?.includes(value)
      );
      if (!found) {
        warn(
          `Image "${img.id}": "${value}" not found under "${key}" in any of its services`
        );
      }
    });
  });
}