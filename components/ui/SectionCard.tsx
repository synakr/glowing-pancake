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
        rounded-4xl
        shadow-sm
        ${className}
      `}
    >
      {children}
    </section>
  );
}