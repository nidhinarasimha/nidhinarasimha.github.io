export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em] text-[#64ffda]">{title}</p>
      {subtitle && <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{subtitle}</h2>}
    </div>
  );
}
