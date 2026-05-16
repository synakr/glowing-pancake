type SectionCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionCard({
  children,
  className = "",
}: SectionCardProps) {
  return (
    <section
      className={`
        bg-white
        border
        border-slate-200/80
        rounded-[32px]
        shadow-sm
        ${className}
      `}
    >
      {children}
    </section>
  );
}