import { Product } from "@/data/products";

export function getRelatedSearches(product: Product) {
  const searches = new Set<string>();

  searches.add(product.name);
  searches.add(product.genericName);

  searches.add(`${product.genericName} ${product.dosageForm}`);

  searches.add(`${product.genericName} Uses`);

  searches.add(`${product.genericName} Benefits`);

  searches.add(`${product.genericName} Side Effects`);

  searches.add(`${product.genericName} Dosage`);

  searches.add(`${product.therapeuticSegment} Medicines`);

  searches.add(`${product.category} Medicines`);

  product.indications.forEach((item) => searches.add(item));

  product.composition.forEach((item) => {
    searches.add(item.ingredient);
    searches.add(`${item.ingredient} Medicine`);
    searches.add(`${item.ingredient} Uses`);
  });

  return [...searches];
}
