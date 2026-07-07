import { products } from "@/data/products";

export function getSearchIndex() {
  return products.map((product) => ({
    id: product.id,

    slug: product.slug,

    name: product.name,

    genericName: product.genericName,

    category: product.category,

    therapeuticSegment: product.therapeuticSegment,

    dosageForm: product.dosageForm,

    indications: product.indications,

    ingredients: product.composition.map((item) => item.ingredient),

    searchTerms: [
      product.name,
      product.genericName,
      product.category,
      product.therapeuticSegment,
      product.dosageForm,
      ...product.indications,
      ...product.composition.map((item) => item.ingredient),
    ],
  }));
}
