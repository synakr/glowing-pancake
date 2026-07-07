export type Therapeutic = {
  slug: string;

  title: string;

  // Must exactly match products.ts therapeuticSegment
  segment: string;

  // Lucide icon name
  icon: string;

  shortDescription: string;

  introduction: string;

  overview: string;

  commonConditions: string[];
};

export const therapeutic: Therapeutic[] = [
  {
    slug: "allergy-respiratory",

    title: "Respiratory Care",

    segment: "Allergy & Respiratory Care",

    icon: "lungs",

    shortDescription:
      "Advanced pharmaceutical formulations supporting allergy management and respiratory wellness.",

    introduction:
      "Our Allergy & Respiratory Care portfolio is developed to support healthcare professionals in the management of allergic rhinitis, seasonal allergies, and respiratory conditions through high-quality pharmaceutical formulations.",

    overview:
      "Manufactured under stringent quality standards, these formulations help improve patient comfort by addressing common allergy symptoms while supporting healthy respiratory function.",

    commonConditions: [
      "Allergic Rhinitis",
      "Respiratory Allergies",
      "Nasal Congestion",
      "Sneezing",
      "Seasonal Allergies",
    ],
  },

  {
    slug: "anti-fungal",

    title: "Anti-Fungal Care",

    segment: "Anti-Fungal Care",

    icon: "shield",

    shortDescription:
      "Quality antifungal medicines for the effective management of fungal infections.",

    introduction:
      "Our Anti-Fungal Care range includes trusted pharmaceutical formulations designed to help healthcare professionals manage a wide variety of fungal infections affecting different parts of the body.",

    overview:
      "Manufactured under strict quality standards, these formulations provide reliable antifungal therapy for skin, nail, oral, and systemic fungal infections.",

    commonConditions: [
      "Skin Fungal Infection",
      "Nail Infection",
      "Oral Candidiasis",
      "Vaginal Fungal Infection",
      "Dermatophytosis",
    ],
  },

  {
    slug: "bone-joint",

    title: "Bone & Joint Care",

    segment: "Bone & Joint Care",

    icon: "bone",

    shortDescription:
      "Nutritional formulations supporting healthy bones, muscles, and calcium balance.",

    introduction:
      "Our Bone & Joint Care portfolio provides advanced calcium supplementation and nutritional support to promote strong bones, healthy muscles, and overall skeletal wellness.",

    overview:
      "These formulations are designed to support bone mineral density, muscle function, and long-term musculoskeletal health using scientifically developed ingredients.",

    commonConditions: [
      "Calcium Deficiency",
      "Bone Health",
      "Osteoporosis Support",
      "Muscle Weakness",
      "Calcium Supplementation",
    ],
  },

  {
    slug: "joint-mobility",

    title: "Joint & Mobility Care",

    segment: "Joint & Mobility Care",

    icon: "accessibility",

    shortDescription:
      "Advanced formulations supporting joint flexibility, comfort, and mobility.",

    introduction:
      "Our Joint & Mobility Care products combine herbal extracts and nutritional ingredients to support joint flexibility, mobility, and everyday comfort.",

    overview:
      "Designed to promote healthy joints and reduce stiffness, these formulations help maintain an active lifestyle while supporting long-term joint health.",

    commonConditions: [
      "Joint Pain",
      "Joint Stiffness",
      "Arthritic Discomfort",
      "Mobility Support",
      "Inflammation",
    ],
  },

  {
    slug: "dermatology",

    title: "Dermatology & Anti-Fungal Care",

    segment: "Dermatology & Anti-Fungal Care",

    icon: "scan-face",

    shortDescription:
      "Topical dermatological formulations for effective fungal skin infection management.",

    introduction:
      "Our Dermatology & Anti-Fungal Care range offers targeted topical treatments designed to manage common fungal skin infections while promoting healthy skin recovery.",

    overview:
      "Developed using quality pharmaceutical ingredients, these formulations provide localized antifungal action with convenient topical application.",

    commonConditions: [
      "Ringworm",
      "Athlete's Foot",
      "Jock Itch",
      "Fungal Skin Infection",
      "Skin Irritation",
    ],
  },

  {
    slug: "cardiovascular",

    title: "Cardiovascular Care",

    segment: "Cardiovascular Care",

    icon: "heart-pulse",

    shortDescription:
      "Reliable cardiovascular formulations supporting blood pressure management and heart health.",

    introduction:
      "Our Cardiovascular Care portfolio includes quality antihypertensive formulations designed to support healthcare professionals in the effective management of hypertension and cardiovascular risk.",

    overview:
      "Manufactured under rigorous quality standards, these medicines help support long-term cardiovascular health through evidence-based combination therapies.",

    commonConditions: [
      "Hypertension",
      "High Blood Pressure",
      "Cardiovascular Risk",
      "Stroke Prevention",
      "Heart Health",
    ],
  },
];
