import { useTheme } from '../contexts/ThemeContext';

export default function SectionHeading({
  title,
  subtitle,
  tone = 'dark',
}: {
  title: string;
  subtitle?: string;
  tone?: 'dark' | 'light';
}) {
  const { isDark } = useTheme();
  const accentColor = isDark ? '#64ffda' : '#0066cc';

  const textColor = !isDark
    ? 'text-[#0f172a]'
    : tone === 'light'
      ? 'text-[#0a192f]'
      : 'text-white';

  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em]" style={{ color: accentColor }}>{title}</p>
      {subtitle && <h2 className={`mt-3 text-3xl font-semibold ${textColor} sm:text-4xl`}>{subtitle}</h2>}
      {!subtitle && <div className="mt-3 h-1 w-20 rounded-full" style={{ background: `${accentColor}cc` }} />}
    </div>
  );
}
