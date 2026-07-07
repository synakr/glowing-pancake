export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    "@id": "https://alhirajpharma.in/#organization",

    name: "Al Hiraj Pharmaceuticals",

    legalName: "Al Hiraj Pharmaceuticals",

    alternateName: [
      "Alhiraj Pharmaceuticals",
      "Al Hiraj Pharma",
      "Alhiraj Pharma",
      "Al Hiraj Pharmaceutical",
      "Alhiraj Pharmaceutical",
      "Al Hiraj",
      "Alhiraj",
      "Al Hiraj Distributor",
      "Alhiraj Distributor",
      "Al Hiraj Distributors",
      "Alhiraj Distributors",
    ],

    url: "https://alhirajpharma.in",

    logo: "https://alhirajpharma.in/logo.png",

    image: "https://alhirajpharma.in/logo.png",

    slogan: "Committed to Better Health.", // Optional

    foundingDate: "2025",

    email: "alhirajpharmaceuticals@gmail.com",

    telephone: "+91-8974144139",

    // faxNumber: "",

    description:
      "Al Hiraj Pharmaceuticals is an Indian pharmaceutical and nutraceutical company committed to delivering quality healthcare products, innovative pharmaceutical formulations, nutraceutical solutions, and trusted medical care across multiple therapeutic segments.",

    address: {
      "@type": "PostalAddress",

      streetAddress:
        "16, Next to Masjid Al-Jabbar, Medarahalli",

      addressLocality: "Bengaluru",

      addressRegion: "Karnataka",

      postalCode: "560090",

      addressCountry: "IN",
    },

    contactPoint: [
      {
        "@type": "ContactPoint",

        contactType: "customer support",

        telephone: "+91-8974144139",

        email: "",

        areaServed: "IN",

        availableLanguage: [
          "English",
          "Hindi",
        ],
      },

      {
        "@type": "ContactPoint",

        contactType: "sales",

        telephone: "+91-8119029977",

        email: "alhirajpharmaceuticals@gmail.com",
      },

      {
        "@type": "ContactPoint",

        contactType: "general inquiries",

        telephone: "+91-8088412002",

        email: "alhirajpharmaceuticals@gmail.com",
      },
    ],

    areaServed: {
      "@type": "Country",

      name: "India",
    },

    knowsAbout: [
      "Pharmaceutical Products",
      "Nutraceutical Products",
      "Healthcare Products",
      "Prescription Medicines",
      "Generic Medicines",
      "Nutritional Supplements",
      "Dietary Supplements",
      "Wellness Products",
      "Cardiology",
      "Neurology",
      "Diabetology",
      "Respiratory Care",
      "Gastroenterology",
      "Dermatology",
      "Bone & Joint Care",
    ],

    sameAs: [
      "https://www.linkedin.com/company/alhirajpharmaceuticals/",
      // "https://www.instagram.com/...",
      // "https://www.facebook.com/...",
      // "https://x.com/...",
      // "https://www.youtube.com/@...",
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