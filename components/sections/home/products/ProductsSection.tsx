import SectionCard from "@/components/ui/SectionCard";

const products = [
  {
    name: "CardioPlus",
    category: "Cardiology",
    image: "/products/product-1.png",
  },
  {
    name: "NeuroVex",
    category: "Neurology",
    image: "/products/product-2.png",
  },
  {
    name: "GlucoFine",
    category: "Diabetology",
    image: "/products/product-3.png",
  },
  {
    name: "GlucscsaoFine",
    category: "Diabcasdcasetology",
    image: "/products/product-3.png",
  },
];

export default function ProductsSection() {
  return (
    <SectionCard className="overflow-hidden p-6 md:p-8">
      <div className="space-y-10">
        
        {/* Heading */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Our Products
            </p>

            <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-[#0b2c6d]">
              Innovative Pharmaceutical Product Portfolio
            </h2>
          </div>

          <button className="w-fit rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-400">
            View All Products
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="
                group
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200
                bg-white
                transition-all
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              {/* Image Area */}
              <div className="relative flex h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-100 p-8">
                
                {/* Blur */}
                <div className="absolute h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl" />

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    relative
                    z-10
                    h-[260px]
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="space-y-4 p-7">
                <div className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-700">
                  {product.category}
                </div>

                <h3 className="text-2xl font-bold text-[#0b2c6d]">
                  {product.name}
                </h3>

                <p className="leading-7 text-slate-600">
                  Premium pharmaceutical formulation developed with advanced
                  research and global quality standards.
                </p>

                <button className="pt-2 text-sm font-semibold text-cyan-600">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}