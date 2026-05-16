import {
  Construction,
  Sparkles,
} from "lucide-react";

type Props = {
  title: string;

  description?: string;
};

export default function ComingSoonPage({
  title,
  description,
}: Props) {
  return (
    <section className="relative overflow-hidden py-24">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50" />

      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        
        <div
          className="
            rounded-[40px]
            border
            border-white/40
            bg-white/80
            p-12
            text-center
            shadow-xl
            backdrop-blur-xl
          "
        >
          {/* Icon */}
          <div
            className="
              mx-auto
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-[28px]
              bg-gradient-to-br
              from-cyan-500
              to-cyan-600
              text-white
              shadow-xl
              shadow-cyan-500/20
            "
          >
            <Construction className="h-11 w-11" />
          </div>

          {/* Badge */}
          <div
            className="
              mx-auto
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-cyan-50
              px-5
              py-2.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-cyan-700
            "
          >
            <Sparkles className="h-3.5 w-3.5" />

            Coming Soon
          </div>

          {/* Title */}
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-[#0b2c6d]">
            {title}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-slate-600">
            {description ??
              "We are currently developing this section to deliver a modern, professional and informative experience. Stay tuned for upcoming updates."}
          </p>

          {/* Loader */}
          <div className="mt-10 flex items-center justify-center gap-2">
            <div className="h-3 w-3 animate-bounce rounded-full bg-cyan-500" />
            <div className="h-3 w-3 animate-bounce rounded-full bg-cyan-500 [animation-delay:0.15s]" />
            <div className="h-3 w-3 animate-bounce rounded-full bg-cyan-500 [animation-delay:0.3s]" />
          </div>
        </div>
      </div>
    </section>
  );
}