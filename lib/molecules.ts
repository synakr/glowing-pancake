import { products } from "@/data/products";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function getAllMolecules() {
  const map = new Map<
    string,
    {
      name: string;
      slug: string;
    }
  >();

  products.forEach((product) => {
    product.composition.forEach((item) => {
      const name = item.ingredient.trim();

      if (!map.has(name)) {
        map.set(name, {
          name,
          slug: slugify(name),
        });
      }
    });
  });

  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
}
