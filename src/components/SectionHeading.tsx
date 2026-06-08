export default function SectionHeading({
  title,
  subtitle,
  tone = 'dark',
}: {
  title: string;
  subtitle?: string;
  tone?: 'dark' | 'light';
}) {
  const textColor = tone === 'light' ? 'text-[#0a192f]' : 'text-white';

  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em] text-[#64ffda]">{title}</p>
      {subtitle && <h2 className={`mt-3 text-3xl font-semibold ${textColor} sm:text-4xl`}>{subtitle}</h2>}
      {!subtitle && <div className="mt-3 h-1 w-20 rounded-full bg-[#64ffda]/80" />}
    </div>
  );
}
