export type ProductCategory =
  | "Cardiology"
  | "Neurology"
  | "Diabetology"
  | "Respiratory"
  | "Gastroenterology";

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
    id: "cardioplus-01",

    slug: "cardioplus",

    status: "active",

    name: "CardioPlus",

    genericName: "Olmesartan Medoxomil + Hydrochlorothiazide",

    category: "Cardiology",

    therapeuticSegment: "Cardiovascular Care",

    dosageForm: "Tablet",

    prescriptionRequired: true,

    images: ["/products/product-1.png", "/products/product-1-2.png"],

    shortDescription:
      "Advanced antihypertensive formulation designed for effective blood pressure management.",

    composition: [
      {
        ingredient: "Olmesartan Medoxomil",
        strength: "40mg",
      },
      {
        ingredient: "Hydrochlorothiazide",
        strength: "12.5mg",
      },
    ],

    indications: [
      "Hypertension Management",
      "Cardiovascular Protection",
      "Blood Pressure Control",
    ],

    keyHighlights: [
      "Long-lasting blood pressure control",
      "Clinically trusted formulation",
      "WHO-GMP manufactured",
    ],

    packaging: "10x10 Blister Pack",

    storage: "Store below 30°C in a cool and dry place",

    certifications: ["WHO-GMP Certified", "ISO 9001 Certified"],

    details: {
      introduction:
        "CardioPlus is developed to support effective hypertension management and cardiovascular care.",

      dosageInstructions: "Use as directed by a healthcare professional.",

      safetyInformation: [
        "Keep out of reach of children",
        "Use under medical supervision",
      ],
    },
  },

  {
    id: "neurovex-01",

    slug: "neurovex",

    status: "active",

    name: "NeuroVex",

    genericName: "Citicoline + Piracetam",

    category: "Neurology",

    therapeuticSegment: "Neurological Care",

    dosageForm: "Capsule",

    prescriptionRequired: true,

    images: ["/products/product-2.png", "/products/product-2-2.png"],

    shortDescription:
      "Neurological support formulation for cognitive and nerve health.",

    composition: [
      {
        ingredient: "Citicoline",
        strength: "500mg",
      },
      {
        ingredient: "Piracetam",
        strength: "800mg",
      },
    ],

    indications: ["Cognitive Support", "Neurological Wellness"],

    keyHighlights: [
      "Supports cognitive performance",
      "Advanced neuro formulation",
    ],

    packaging: "5x10 Capsule Strip",

    storage: "Store below 25°C in a cool and dry place",

    certifications: ["WHO-GMP Certified", "ISO Certified"],

    details: {
      introduction:
        "NeuroVex supports neurological wellness through advanced pharmaceutical research.",

      dosageInstructions: "Take as prescribed by your healthcare professional.",

      safetyInformation: ["Avoid self-medication", "Store away from moisture"],
    },
  },

  {
    id: "glucofine-01",

    slug: "glucofine",

    status: "active",

    name: "GlucoFine",

    genericName: "Metformin Hydrochloride",

    category: "Diabetology",

    therapeuticSegment: "Diabetic Care",

    dosageForm: "Tablet",

    prescriptionRequired: true,

    images: ["/products/product-3.png", "/products/product-3-2.png"],

    shortDescription:
      "Modern anti-diabetic formulation for glycemic management.",

    composition: [
      {
        ingredient: "Metformin Hydrochloride",
        strength: "500mg",
      },
    ],

    indications: ["Type 2 Diabetes", "Blood Sugar Management"],

    keyHighlights: [
      "Reliable glucose control",
      "Trusted diabetic care solution",
    ],

    packaging: "10x15 Tablet Strip",

    storage: "Store below 25°C in a dry environment",

    certifications: ["WHO-GMP Certified", "ISO Certified"],

    details: {
      introduction: "GlucoFine supports effective blood glucose management.",

      dosageInstructions: "Take exactly as prescribed by your physician.",

      safetyInformation: [
        "Monitor blood sugar regularly",
        "Use under medical supervision",
      ],
    },
  },

  {
    id: "corcium-01",

    slug: "corcium-tablet",

    status: "active",

    name: "Corcium Tablet",

    genericName: "Coral Calcium + Calcium Carbonate",

    category: "Diabetology",

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

    name: "Nutrajoint Capsule",

    genericName:
      "Boswellia Serrata Extract + Rosehip Extract + Curcuma Longa Extract",

    category: "Gastroenterology",

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

    slug: "itrazole-200-capsule",

    status: "active",

    name: "Itrazole 200 Capsule",

    genericName: "Itraconazole",

    category: "Respiratory",

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

    name: "Billargic M Tablet",

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

    name: "Itazole 100mg Capsule",

    genericName: "Itraconazole",

    category: "Respiratory",

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
