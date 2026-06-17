import { Product } from "@/data/products";

type Props = {
  product: Product;
};

export default function ProductSchema({
  product,
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: product.name,

    description:
      product.shortDescription,

    category: product.category,

    image: product.images.map(
      (image) =>
        `https://alhirajpharma.in${image}`
    ),

    brand: {
      "@type": "Brand",
      name: "Al Hiraj Pharmaceuticals",
    },

    manufacturer: {
      "@type": "Organization",
      name: "Al Hiraj Pharmaceuticals",
    },

    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Generic Name",
        value: product.genericName,
      },

      {
        "@type": "PropertyValue",
        name: "Dosage Form",
        value: product.dosageForm,
      },

      {
        "@type": "PropertyValue",
        name: "Therapeutic Segment",
        value:
          product.therapeuticSegment,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}