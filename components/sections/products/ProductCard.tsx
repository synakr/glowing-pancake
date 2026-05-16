import { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;

  onOpen: () => void;
};

const categoryColors: Record<string, string> = {
  Cardiology: "bg-red-50 text-red-700 border-red-100",
  Neurology: "bg-violet-50 text-violet-700 border-violet-100",
  Diabetology: "bg-blue-50 text-blue-700 border-blue-100",
  Gastroenterology:
    "bg-orange-50 text-orange-700 border-orange-100",
  Respiratory:
    "bg-cyan-50 text-cyan-700 border-cyan-100",
};

export default function ProductCard({
  product,
  onOpen,
}: ProductCardProps) {
  return (
    <div
      onClick={onOpen}
      className="
        group
        relative
        cursor-pointer
        overflow-hidden
        rounded-xl
        sm:rounded-2xl
        md:rounded-[30px]
        border
        border-slate-200/80
        bg-white
        p-3
        sm:p-4
        md:p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-200
        hover:shadow-[0_20px_60px_-20px_rgba(6,182,212,0.18)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          right-0
          top-0
          h-24
          w-24
          sm:h-28
          sm:w-28
          md:h-32
          md:w-32
          rounded-full
          bg-cyan-100/40
          blur-3xl
        "
      />

      <div className="relative z-10 flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5">
        
        {/* LEFT IMAGE */}
        <div
          className="
            relative
            flex
            h-[140px]
            w-full
            sm:h-[160px]
            md:h-[170px]
            md:min-w-[170px]
            md:w-[170px]
            items-center
            justify-center
            overflow-hidden
            rounded-xl
            sm:rounded-2xl
            md:rounded-[24px]
            border
            border-slate-100
            bg-gradient-to-br
            from-slate-50
            via-white
            to-cyan-50
          "
        >
          {/* Background Blur */}
          <div className="absolute h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-cyan-200/30 blur-2xl" />

          <img
            src={product.images[0]}
            alt={product.name}
            className="
              relative
              z-10
              h-[110px]
              sm:h-[130px]
              object-contain
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          {/* Dosage */}
          <div
            className="
              absolute
              bottom-2
              sm:bottom-3
              left-2
              sm:left-3
              rounded-full
              bg-white/90
              px-2.5
              sm:px-3
              py-1
              sm:py-1.5
              text-[9px]
              sm:text-[11px]
              font-semibold
              text-slate-600
              shadow-sm
              backdrop-blur
            "
          >
            {product.dosageForm}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-1 flex-col w-full md:w-auto">
          
          {/* Top */}
          <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-2 sm:gap-3">
            
            {/* Category */}
            <div
              className={`
                inline-flex
                items-center
                rounded-full
                border
                px-2.5
                sm:px-3.5
                py-1
                sm:py-1.5
                text-[9px]
                sm:text-[11px]
                font-semibold
                uppercase
                tracking-wide
                ${
                  categoryColors[product.category] ??
                  "bg-slate-50 text-slate-700 border-slate-100"
                }
              `}
            >
              {product.category}
            </div>

            {/* Rx */}
            {product.prescriptionRequired && (
              <div
                className="
                  rounded-full
                  border
                  border-slate-200
                  bg-slate-50
                  px-2
                  sm:px-2.5
                  py-0.5
                  sm:py-1
                  text-[8px]
                  sm:text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-slate-500
                  whitespace-nowrap
                "
              >
                Rx
              </div>
            )}
          </div>

          {/* Product Name */}
          <div className="mt-2 sm:mt-3 md:mt-4">
            <h3 className="text-lg sm:text-xl md:text-[28px] font-bold leading-tight sm:leading-none tracking-tight text-[#0b2c6d]">
              {product.name}
            </h3>

            <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium leading-5 sm:leading-6 text-cyan-600">
              {product.genericName}
            </p>
          </div>

          {/* Description */}
          <p className="mt-2 sm:mt-3 md:mt-4 line-clamp-2 text-xs sm:text-[15px] leading-5 sm:leading-7 text-slate-600">
            {product.shortDescription}
          </p>

          {/* Composition */}
          <div className="mt-3 sm:mt-4 md:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
            {product.composition
              .slice(0, 2)
              .map((item) => (
                <div
                  key={item.ingredient}
                  className="
                    rounded-lg
                    sm:rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-2
                    sm:px-3
                    py-1
                    sm:py-2
                    text-[8px]
                    sm:text-[11px]
                    font-medium
                    text-slate-600
                  "
                >
                  {item.ingredient}{" "}
                  {item.strength}
                </div>
              ))}
          </div>

          {/* Bottom */}
          <div className="mt-3 sm:mt-4 md:mt-auto md:pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
            
            {/* Certifications */}
            <div className="flex items-center gap-2 min-w-0">
              <div className="h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0" />

              <p className="text-xs font-medium text-slate-500 truncate">
                {product.certifications[0]}
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={(e) => {
                e.stopPropagation();

                onOpen();
              }}
              className="
                flex
                items-center
                justify-center
                gap-1.5
                sm:gap-2
                rounded-full
                bg-cyan-50
                px-3
                sm:px-4
                py-2
                sm:py-2.5
                text-xs
                sm:text-sm
                font-semibold
                text-cyan-700
                transition-all
                hover:bg-cyan-100
                group-hover:translate-x-1
                whitespace-nowrap
              "
            >
              View Details →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}