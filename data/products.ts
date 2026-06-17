export type ProductCategory =
  | "Cardiology"
  | "Neurology"
  | "Diabetology"
  | "Respiratory"
  | "Gastroenterology"
  | "Osteology"
  | "Dermatology";

export type Product = {
  id: string;

  slug: string;

  status: "active" | "upcoming" | "discontinued";

  // Basic Info
  name: string;

  genericName: string;

  category: ProductCategory;

  therapeuticSegment: string;

  dosageForm: string;

  prescriptionRequired: boolean;

  // Media
  images: string[];

  // Marketing Info
  shortDescription: string;

  // Composition
  composition: {
    ingredient: string;
    strength: string;
  }[];

  // Medical Information
  indications: string[];

  keyHighlights: string[];

  // Product Details
  packaging: string;

  storage: string;

  certifications: string[];

  // Documents
  documents?: {
    label: string;
    file: string;
  }[];

  // SEO
  seo?: {
    title: string;
    description: string;
  };

  // Detailed Content
  details: {
    introduction: string;

    dosageInstructions: string;

    safetyInformation: string[];
  };
};

export const products: Product[] = [
  {
    id: "corcium-01",

    slug: "corcium-tablet",

    status: "active",

    name: "Korsium-BT Tablet",

    genericName: "Coral Calcium + Calcium Carbonate",

    category: "Osteology",

    therapeuticSegment: "Bone & Joint Care",

    dosageForm: "Tablet",

    prescriptionRequired: false,

    images: ["/products/corcium-1.png", "/products/corcium-2.png"],

    shortDescription:
      "Calcium supplement formulated to support strong bones, healthy muscles, and proper nerve function.",

    composition: [
      {
        ingredient: "Coral Calcium",
        strength: "225mg",
      },
      {
        ingredient: "Calcium Carbonate",
        strength: "Equivalent Calcium Support",
      },
      {
        ingredient: "Curcuma Longa",
        strength: "Herbal Blend",
      },
    ],

    indications: [
      "Calcium Deficiency",
      "Bone Health Support",
      "Muscle Health",
      "Nutritional Supplementation",
    ],

    keyHighlights: [
      "Supports strong and healthy bones",
      "Helps maintain proper muscle contraction",
      "Supports nerve function and impulses",
      "Advanced calcium supplementation formula",
    ],

    packaging: "1 Strip of 15 Tablets",

    storage: "Store in a cool and dry place away from direct sunlight",

    certifications: ["WHO-GMP Certified", "ISO Certified"],

    details: {
      introduction:
        "Corcium Tablet is a calcium supplementation formula developed to support bone strength, muscle health, and overall calcium balance in the body.",

      dosageInstructions: "Consume as directed by a healthcare professional.",

      safetyInformation: [
        "Read the label carefully before use",
        "Do not exceed the recommended dosage",
        "Keep out of reach of children",
        "Store away from direct sunlight",
      ],
    },
  },
  {
    id: "nutrajoint-01",

    slug: "nutrajoint-capsule",

    status: "active",

    name: "Neutajoint-C Capsule",

    genericName:
      "Boswellia Serrata Extract + Rosehip Extract + Curcuma Longa Extract",

    category: "Osteology",

    therapeuticSegment: "Joint & Mobility Care",

    dosageForm: "Capsule",

    prescriptionRequired: false,

    images: ["/products/nutrajoint-1.png", "/products/nutrajoint-2.png"],

    shortDescription:
      "Advanced joint support formulation designed to help improve mobility and reduce inflammation.",

    composition: [
      {
        ingredient: "Boswellia Serrata Extract",
        strength: "Herbal Blend",
      },
      {
        ingredient: "Rosehip Extract",
        strength: "Herbal Blend",
      },
      {
        ingredient: "Curcuma Longa Extract",
        strength: "Herbal Blend",
      },
      {
        ingredient: "L-Ascorbic Acid",
        strength: "Nutritional Support",
      },
    ],

    indications: [
      "Joint Health Support",
      "Joint Inflammation",
      "Mobility Support",
      "Arthritic Discomfort",
      "Morning Stiffness",
    ],

    keyHighlights: [
      "Supports healthy and flexible joints",
      "Helps reduce joint stiffness and discomfort",
      "Supports mobility and flexibility",
      "Vegetarian formulation",
      "Free from gluten and artificial flavor",
    ],

    packaging: "1 Strip of 10 Capsules",

    storage: "Store in a cool and dry place away from sunlight",

    certifications: ["WHO-GMP Certified", "ISO Certified"],

    details: {
      introduction:
        "Nutrajoint Capsule is formulated to support joint mobility, flexibility, and comfort through a scientifically developed herbal and nutritional blend.",

      dosageInstructions: "Use as directed by a healthcare professional.",

      safetyInformation: [
        "Read label carefully before use",
        "Do not exceed recommended dosage",
        "Keep out of reach of children",
        "Use under medical supervision",
        "Store away from direct sunlight",
      ],
    },
  },
  {
    id: "itrazole-01",

    slug: "itraazol-200-Capsule",

    status: "active",

    name: "Itrazole 200 Capsule",

    genericName: "Itraconazole",

    category: "Dermatology",

    therapeuticSegment: "Anti-Fungal Care",

    dosageForm: "Capsule",

    prescriptionRequired: true,

    images: ["/products/itrazole-1.png", "/products/itrazole-2.png"],

    shortDescription:
      "Broad-spectrum antifungal formulation used for the treatment of fungal infections affecting various parts of the body.",

    composition: [
      {
        ingredient: "Itraconazole",
        strength: "200mg",
      },
    ],

    indications: [
      "Fungal Infections",
      "Skin Infections",
      "Nail Infections",
      "Oral & Vaginal Fungal Infections",
    ],

    keyHighlights: [
      "Broad-spectrum antifungal action",
      "Helps inhibit fungal growth effectively",
      "Supports faster recovery from fungal infections",
      "Manufactured under strict quality standards",
    ],

    packaging: "1 Strip of 10 Capsules",

    storage: "Store below 30°C in a cool and dry place",

    certifications: ["WHO-GMP Certified", "ISO Certified", "NPPA Regulated"],

    details: {
      introduction:
        "Itrazole 200 Capsule is an antifungal medicine formulated to help manage and treat fungal infections by inhibiting fungal cell membrane growth.",

      dosageInstructions:
        "Take as prescribed by a healthcare professional, preferably with food.",

      safetyInformation: [
        "Use under medical supervision",
        "Complete the full prescribed course",
        "Store away from direct sunlight",
        "Keep out of reach of children",
        "Consult physician during pregnancy or liver conditions",
      ],
    },
  },
  {
    id: "billargic-m-01",

    slug: "billargic-m-tablet",

    status: "discontinued",

    name: "Bilargi-M Tablet",

    genericName: "Bilastine + Montelukast",

    category: "Respiratory",

    therapeuticSegment: "Allergy & Respiratory Care",

    dosageForm: "Tablet",

    prescriptionRequired: true,

    images: ["/products/billargic-m-1.png", "/products/billargic-m-2.png"],

    shortDescription:
      "Combination anti-allergic formulation designed to help manage allergic rhinitis and respiratory allergy symptoms.",

    composition: [
      {
        ingredient: "Bilastine",
        strength: "20mg",
      },
      {
        ingredient: "Montelukast",
        strength: "10mg",
      },
    ],

    indications: [
      "Allergic Rhinitis",
      "Allergic Conditions",
      "Runny Nose",
      "Sneezing & Nasal Congestion",
      "Respiratory Allergies",
    ],

    keyHighlights: [
      "Helps relieve allergy symptoms effectively",
      "Supports improved breathing comfort",
      "Reduces airway inflammation",
      "Once-daily anti-allergic formulation",
    ],

    packaging: "1 Strip of 10 Tablets",

    storage: "Store below 30°C in a cool and dry place",

    certifications: ["WHO-GMP Certified", "ISO Certified"],

    details: {
      introduction:
        "Billargic M Tablet is a combination anti-allergic medicine formulated to help manage allergic rhinitis and related respiratory allergy symptoms.",

      dosageInstructions:
        "Take as directed by a healthcare professional, preferably on an empty stomach.",

      safetyInformation: [
        "Use under medical supervision",
        "Avoid alcohol while using this medicine",
        "Do not drive if dizziness or drowsiness occurs",
        "Keep out of reach of children",
        "Consult doctor during pregnancy or breastfeeding",
      ],
    },
  },
  {
    id: "itazole-100-01",

    slug: "itazole-100mg-capsule",

    status: "active",

    name: "Itaazol 100mg Capsule",

    genericName: "Itraconazole",

    category: "Dermatology",

    therapeuticSegment: "Anti-Fungal Care",

    dosageForm: "Capsule",

    prescriptionRequired: true,

    images: ["/products/itazole-100-1.png", "/products/itazole-100-2.png"],

    shortDescription:
      "Antifungal formulation developed to help manage fungal infections affecting skin, nails, and other body areas.",

    composition: [
      {
        ingredient: "Itraconazole",
        strength: "100mg",
      },
    ],

    indications: [
      "Fungal Infections",
      "Skin Fungal Infections",
      "Nail Infections",
      "Oral & Vaginal Fungal Infections",
    ],

    keyHighlights: [
      "Broad-spectrum antifungal support",
      "Helps inhibit fungal growth effectively",
      "Supports faster infection recovery",
      "Manufactured under quality-controlled standards",
      "NPPA regulated formulation",
    ],

    packaging: "1 Strip of 10 Capsules",

    storage: "Store below 30°C in a cool and dry place",

    certifications: ["WHO-GMP Certified", "ISO Certified", "NPPA Regulated"],

    details: {
      introduction:
        "Itazole 100mg Capsule is an antifungal medicine formulated to help manage and treat fungal infections by disrupting fungal cell membrane synthesis.",

      dosageInstructions:
        "Take as prescribed by a healthcare professional, preferably with or after food.",

      safetyInformation: [
        "Use under medical supervision",
        "Complete the full prescribed course",
        "Avoid self-medication",
        "Store away from sunlight and moisture",
        "Consult doctor during pregnancy or liver conditions",
      ],
    },
  },
];
