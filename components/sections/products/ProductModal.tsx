"use client";

import { useEffect, useState } from "react";

import { Product } from "@/data/products";

import {
  X,
  Pill,
  ShieldCheck,
  BadgeCheck,
  ClipboardList,
  FlaskConical,
  Package,
  FileDown,
  ShieldAlert,
  Sparkles,
  Activity,
  LayoutGrid,
} from "lucide-react";
import OverviewTab from "./modal/OverviewTab";
import CompositionTab from "./modal/CompositionTab";
import IndicationsTab from "./modal/IndicationsTab";
import HighlightsTab from "./modal/HighlightsTab";
import DosageTab from "./modal/DosageTab";
import PackagingTab from "./modal/PackagingTab";
import SafetyTab from "./modal/SafetyTab";
import CertificationsTab from "./modal/CertificationsTab";

type ProductModalProps = {
  product: Product | null;

  isOpen: boolean;

  onClose: () => void;
};

const sidebarItems = [
  {
    label: "All Details",
    id: "all",
    icon: LayoutGrid,
  },

  {
    label: "Overview",
    id: "overview",
    icon: ClipboardList,
  },

  {
    label: "Composition",
    id: "composition",
    icon: FlaskConical,
  },

  {
    label: "Indications",
    id: "indications",
    icon: Activity,
  },

  {
    label: "Key Highlights",
    id: "highlights",
    icon: Sparkles,
  },

  {
    label: "Dosage & Use",
    id: "dosage",
    icon: Pill,
  },

  {
    label: "Packaging",
    id: "packaging",
    icon: Package,
  },

  {
    label: "Safety Information",
    id: "safety",
    icon: ShieldAlert,
  },

  {
    label: "Certifications",
    id: "certifications",
    icon: BadgeCheck,
  },
];

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: ProductModalProps) {
  const [activeImage, setActiveImage] =
    useState(0);

  const [activeTab, setActiveTab] =
  useState("all");

  /* Prevent Background Scroll */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  /* Reset Image */
  useEffect(() => {
    setActiveImage(0);
  }, [product]);

  /* ESC Close */
  useEffect(() => {
    const handleEscape = (
      e: KeyboardEvent
    ) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [onClose]);

  if (!isOpen || !product) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-950/60
        p-0
        sm:p-4
        lg:p-5
        backdrop-blur-md
        animate-in
        fade-in
        duration-200
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          h-dvh
          max-h-dvh
          w-full
          max-w-7xl
          overflow-hidden
          rounded-none
          border
          border-white/30
          bg-white
          shadow-[0_40px_120px_-20px_rgba(15,23,42,0.4)]
          animate-in
          zoom-in-95
          duration-200
          sm:max-h-[95vh]
          sm:rounded-2xl
          lg:rounded-4xl
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="
            absolute
            right-4
            top-4
            h-10
            w-10
            sm:right-6
            sm:top-6
            sm:h-12
            sm:w-12
            z-50
            flex
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white/90
            text-slate-600
            backdrop-blur
            transition-all
            hover:border-cyan-300
            hover:text-cyan-600
            hover:shadow-lg
          "
        >
          <X className="h-5 w-5" />
        </button>

        <div 
          className="
            grid
            h-full
            overflow-hidden
            lg:grid-cols-[210px_1fr]
          "
        >
          
          {/* SIDEBAR */}
          <div
            className="
              sticky
              top-0
              z-30
              flex
              shrink-0
              min-h-0
              min-w-0
              border-b
              border-slate-200
              bg-linear-to-b
              from-slate-50
              to-white
              p-2
              lg:h-full
              lg:flex-col
              lg:border-b-0
              lg:border-r
              lg:p-3
            "
          >
            {/* Tabs */}
            <div
              className="
                flex
                gap-2
                overflow-x-auto
                min-w-0
                custom-scrollbar
                lg:flex-1
                lg:flex-col
                lg:space-y-1.5
                lg:overflow-y-auto
                lg:overflow-x-hidden
              "
            >
              {sidebarItems.map((item) => {
                const Icon = item.icon;

                const active =
                  activeTab === item.id;

                return (
                  <button
                    key={item.label}
                    onClick={() =>
                      setActiveTab(item.id)
                    }
                    className={`
                      flex
                      min-w-fit
                      shrink-0
                      items-center
                      lg:w-full
                      gap-3
                      rounded-xl
                      px-3
                      py-2
                      lg:py-2.5
                      text-left
                      transition-all
                      duration-300
                      ${
                        active
                          ? "text-cyan-600 bg-slate-100 shadow-lg"
                          : "bg-white text-slate-600 hover:bg-cyan-50 hover:text-cyan-700"
                      }
                    `}
                  >
                    {/* Icon */}
                    <div
                      className={`
                        flex
                        h-9
                        w-9
                        min-w-9
                        items-center
                        justify-center
                        rounded-xl
                        transition-all
                        ${
                          active
                            ? "bg-white/20"
                            : "bg-slate-100"
                        }
                      `}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    {/* Label */}
                    <div>
                      <p className="text-xs lg:text-sm font-semibold leading-none">
                        {item.label}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Download */}
            <button
              className="
                mt-4
                hidden
                lg:flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#0b2c6d]
                px-4
                py-3
                text-xs
                lg:text-sm
                font-semibold
                text-white
                transition-all
                hover:-translate-y-0.5
                hover:shadow-xl
                hover:shadow-[#0b2c6d]/20
              "
            >
              <FileDown className="h-4 w-4" />

              Brochure
            </button>
          </div>

          {/* CONTENT */}
          <div
          className="
            relative
            h-full
            min-h-0
            min-w-0
            overflow-y-auto
            overflow-x-hidden 
            custom-scrollbar
            p-3
            sm:p-6
            lg:p-8
            pb-[calc(env(safe-area-inset-bottom)+1rem)]
          "
        >
            
            {/* Decorative Blur */}
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

            {/* TOP */}
            <div
              className="
                relative
                z-10
                grid
                gap-5
                sm:gap-7
                lg:grid-cols-[320px_1fr]
                xl:grid-cols-[360px_1fr]
              "
            >
            
            {/* LEFT */}
            <div className="min-w-0">
              
              {/* Main Image */}
              <div
                className="
                  relative
                  flex
                  h-60
                  sm:h-70
                  lg:h-80
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-linear-to-br
                  from-slate-50
                  via-white
                  to-cyan-50
                "
              >
                <div className="absolute h-52 w-52 rounded-full bg-cyan-100 blur-3xl" />

                <img
                  key={product.images[activeImage]}
                  src={
                    product.images[activeImage] ??
                    "/placeholder-product.png"
                  }
                  alt={product.name}
                  loading="lazy"
                  className="
                    relative
                    z-10
                    h-45
                    sm:h-55
                    lg:h-60
                    object-contain
                  "
                />
              </div>

              {/* Gallery */}
              <div className="mt-4 flex gap-2.5 overflow-x-auto pb-1 pr-1 custom-scrollbar">
                {product.images.map(
                  (image, index) => (
                    <button
                      key={image}
                      onClick={() =>
                        setActiveImage(index)
                      }
                      className={`
                        flex
                        h-14
                        w-14
                        sm:h-20
                        sm:w-20
                        shrink-0
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-2xl
                        border
                        bg-white
                        p-2
                        transition-all
                        ${
                          activeImage === index
                            ? "border-cyan-500 shadow-md shadow-cyan-500/10"
                            : "border-slate-200 hover:border-cyan-300"
                        }
                      `}
                    >
                      <img
                        src={image}
                        alt=""
                        loading="lazy"
                        className="h-full object-contain"
                      />
                    </button>
                  )
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative z-10 min-w-0">
              
              {/* Tags */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                
                <div
                  className="
                    rounded-lg
                    bg-cyan-100
                    px-3.5
                    py-1.5
                    text-xs
                    font-semibold
                    tracking-wide
                    text-cyan-700
                  "
                >
                  {product.therapeuticSegment}
                </div>

                {product.prescriptionRequired && (
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-slate-200
                      bg-white
                      px-3.5
                      py-1.5
                      text-xs
                      font-semibold
                      text-slate-600
                      shadow-sm
                    "
                  >
                    <ShieldCheck className="h-3.5 w-3.5 text-cyan-600" />

                    Prescription Required
                  </div>
                )}
              </div>

              {/* Title */}
              <div className="mt-5">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-none tracking-tight text-[#0b2c6d]">
                  {product.name}
                </h2>

                <p className="mt-2 text-sm sm:text-base leading-7 sm:leading-8 text-slate-600 wrap-break-word">
                  {product.genericName}
                </p>
              </div>

              {/* Description */}
              <p className="mt-5 max-w-3xl text-sm sm:text-base leading-7 text-slate-600 wrap-break-word">
                {product.details.introduction}
              </p>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
                
                {[
                  {
                    label: "Dosage Form",
                    value: product.dosageForm,
                    icon: Pill,
                  },

                  {
                    label: "Ingredients",
                    value:
                      product.composition.length,
                    icon: FlaskConical,
                  },

                  {
                    label: "Category",
                    value: product.category,
                    icon: BadgeCheck,
                  },

                  {
                    label: "Packaging",
                    value: product.packaging,
                    icon: Package,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white/80
                        p-4
                        backdrop-blur
                      "
                    >
                      <Icon className="h-5 w-5 text-cyan-600" />

                      <p className="mt-3 text-xs font-medium text-slate-500">
                        {item.label}
                      </p>

                      <h3 className="mt-1 text-sm font-bold leading-6 text-[#0b2c6d]">
                        {item.value}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

            {/* BOTTOM GRID */}
            <div className="relative z-10 mt-8 min-w-0 sm:mt-10">

              {/* ALL DETAILS */}
              {activeTab === "all" && (
                <div className="space-y-5">
                  <OverviewTab product={product} />

                  <CompositionTab product={product} />

                  <IndicationsTab product={product} />

                  <HighlightsTab product={product} />

                  <DosageTab product={product} />

                  <PackagingTab product={product} />

                  <SafetyTab product={product} />

                  <CertificationsTab product={product} />
                </div>
              )}

              {/* OVERVIEW */}
              {activeTab === "overview" && (
                <OverviewTab product={product} />
              )}

              {/* COMPOSITION */}
              {activeTab === "composition" && (
                <CompositionTab product={product} />
              )}

              {/* INDICATIONS */}
              {activeTab === "indications" && (
                <IndicationsTab product={product} />
              )}

              {/* HIGHLIGHTS */}
              {activeTab === "highlights" && (
                <HighlightsTab product={product} />
              )}

              {/* DOSAGE */}
              {activeTab === "dosage" && (
                <DosageTab product={product} />
              )}

              {/* PACKAGING */}
              {activeTab === "packaging" && (
                <PackagingTab product={product} />
              )}

              {/* SAFETY */}
              {activeTab === "safety" && (
                <SafetyTab product={product} />
              )}

              {/* CERTIFICATIONS */}
              {activeTab === "certifications" && (
                <CertificationsTab product={product} />
              )}
            </div>

            {/* Footer */}
            <div
              className="
                w-full
                flex
                lg:w-auto
                relative
                z-10
                mt-8
                flex-col
                gap-5
                rounded-2xl
                border
                border-slate-200
                bg-slate-50/80
                px-4
                py-4
                sm:px-6
                sm:py-6
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              <p className="max-w-2xl text-sm leading-7 text-slate-500">
                For complete information, dosage guidance,
                contraindications and clinical references,
                please refer to the official product
                brochure or consult our medical affairs
                team.
              </p>

              <button
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-[#0b2c6d]
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  hover:shadow-[#0b2c6d]/20
                "
              >
                <FileDown className="h-4 w-4" />

                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}