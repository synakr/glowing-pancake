export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Al Hiraj Pharmaceuticals",

    alternateName: [
      "Al Hiraj Pharma",
      "Al Hiraj Distributors",
      "Al Hiraj",
    ],

    url: "https://alhirajpharma.in",

    logo: "https://alhirajpharma.in/logo.png",

    foundingDate: "2025",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    description:
      "Al Hiraj Pharmaceuticals is engaged in pharmaceutical marketing, third-party manufacturing, contract manufacturing, and healthcare product distribution.",
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