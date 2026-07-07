"use client";

import { useState } from "react";

import { Product } from "@/data/products";

import {
  Pill,
  ShieldCheck,
  BadgeCheck,
  FlaskConical,
  Package,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import RelatedProducts from "./RelatedProducts";

type Props = {
  product: Product;
};

export default function ProductDetailsPage({
  product,
}: Props) {
  const [activeImage, setActiveImage] =
    useState(0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-slate-500">
        Home / Products / {product.name}
      </div>

      {/* Hero */}
      <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white">
        
        <div className="grid gap-8 p-6 lg:grid-cols-[380px_1fr] lg:p-8">
          
          {/* Image */}
          <div>
            <div
              className="
                flex
                h-[340px]
                items-center
                justify-center
                rounded-[28px]
                border
                border-slate-200
                bg-gradient-to-br
                from-slate-50
                via-white
                to-cyan-50
              "
            >
              <img
                src={
                  product.images[activeImage]
                }
                alt={product.name}
                className="h-[250px] object-contain"
              />
            </div>

            <div className="mt-4 flex gap-3">
              {product.images.map(
                (image, index) => (
                  <button
                    key={image}
                    onClick={() =>
                      setActiveImage(index)
                    }
                    className={`
                      h-20
                      w-20
                      overflow-hidden
                      rounded-2xl
                      border
                      p-2
                      ${
                        activeImage === index
                          ? "border-cyan-500"
                          : "border-slate-200"
                      }
                    `}
                  >
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="flex flex-wrap gap-3">
              
              <div className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                {product.therapeuticSegment}
              </div>

              {product.prescriptionRequired && (
                <div className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm">
                  <ShieldCheck className="h-4 w-4 text-cyan-600" />
                  Prescription Required
                </div>
              )}
            </div>

            <h1 className="mt-6 text-5xl font-bold text-[#0b2c6d]">
              {product.name}
            </h1>

            <p className="mt-3 text-xl text-slate-600">
              {product.genericName}
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              {product.details.introduction}
            </p>

            {/* Stats */}
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              
              {[
                {
                  icon: Pill,
                  label: "Dosage Form",
                  value: product.dosageForm,
                },
                {
                  icon: FlaskConical,
                  label: "Ingredients",
                  value:
                    product.composition.length,
                },
                {
                  icon: BadgeCheck,
                  label: "Category",
                  value: product.category,
                },
                {
                  icon: Package,
                  label: "Packaging",
                  value: product.packaging,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 p-4"
                  >
                    <Icon className="h-5 w-5 text-cyan-600" />

                    <p className="mt-3 text-xs text-slate-500">
                      {item.label}
                    </p>

                    <h3 className="mt-1 font-bold text-[#0b2c6d]">
                      {item.value}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 space-y-6">

        {/* Composition */}
        <section className="rounded-[28px] border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-[#0b2c6d]">
            Composition
          </h2>

          <div className="mt-6 space-y-3">
            {product.composition.map(
              (item) => (
                <div
                  key={item.ingredient}
                  className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
                >
                  <span>
                    {item.ingredient}
                  </span>

                  <span className="font-semibold text-cyan-700">
                    {item.strength}
                  </span>
                </div>
              )
            )}
          </div>
        </section>

        {/* Indications */}
        <section className="rounded-[28px] border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-[#0b2c6d]">
            Indications
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {product.indications.map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                  {item}
                </div>
              )
            )}
          </div>
        </section>

        {/* Highlights */}
        <section className="rounded-[28px] border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-[#0b2c6d]">
            Key Highlights
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {product.keyHighlights.map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <Sparkles className="h-5 w-5 text-emerald-600" />
                  {item}
                </div>
              )
            )}
          </div>
        </section>

        {/* Dosage */}
        <section className="rounded-[28px] border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-[#0b2c6d]">
            Dosage & Usage
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            {
              product.details
                .dosageInstructions
            }
          </p>
        </section>

        {/* Packaging */}
        <section className="rounded-[28px] border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-[#0b2c6d]">
            Packaging & Storage
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Packaging
              </p>

              <h3 className="mt-2 font-bold text-[#0b2c6d]">
                {product.packaging}
              </h3>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Storage
              </p>

              <h3 className="mt-2 text-slate-700">
                {product.storage}
              </h3>
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className="rounded-[28px] border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-[#0b2c6d]">
            Safety Information
          </h2>

          <div className="mt-6 space-y-3">
            {product.details.safetyInformation.map(
              (item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl bg-slate-50 p-4"
                >
                  <ShieldAlert className="mt-1 h-5 w-5 text-rose-500" />
                  {item}
                </div>
              )
            )}
          </div>
        </section>

        {/* Certifications */}
        <section className="rounded-[28px] border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-[#0b2c6d]">
            Certifications
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {product.certifications.map(
              (item) => (
                <div
                  key={item}
                  className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </section>
      </div>

      <RelatedProducts currentProduct={product} />
    </div>
  );
}