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

    "@id": `https://alhirajpharma.in/products/${product.slug}`,

    url: `https://alhirajpharma.in/products/${product.slug}`,

    name: product.name,

    description: product.shortDescription,

    sku: product.id,

    mpn: product.id,

    productID: product.id,

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

      url: "https://alhirajpharma.in",
    },

    audience: {
      "@type": "MedicalAudience",

      audienceType:
        product.prescriptionRequired
          ? "Healthcare Professionals"
          : "General Public",
    },

    offers: {
      "@type": "Offer",

      url: `https://alhirajpharma.in/products/${product.slug}`,

      availability:
        "https://schema.org/InStock",

      priceCurrency: "INR",
    },

    keywords: [
      product.name,
      product.genericName,
      product.category,
      product.therapeuticSegment,
      product.dosageForm,
      ...product.indications,
      ...product.composition.map(
        (item) => item.ingredient
      ),
    ].join(", "),

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

      {
        "@type": "PropertyValue",

        name: "Packaging",

        value: product.packaging,
      },

      {
        "@type": "PropertyValue",

        name: "Storage",

        value: product.storage,
      },

      {
        "@type": "PropertyValue",

        name: "Prescription Required",

        value:
          product.prescriptionRequired
            ? "Yes"
            : "No",
      },
    ],

    material: product.composition
      .map(
        (item) =>
          `${item.ingredient} (${item.strength})`
      )
      .join(", "),

    isRelatedTo: {
      "@type": "MedicalEntity",

      name: product.therapeuticSegment,
    },
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