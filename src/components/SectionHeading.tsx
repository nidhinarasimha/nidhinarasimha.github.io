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
  const accentColor = isDark ? '#c084fc' : '#0066cc';

  const textColor = !isDark
    ? 'text-[#0f172a]'
    : tone === 'light'
      ? 'text-[#0a192f]'
      : 'text-white';

  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.35em] font-medium" style={{ color: accentColor }}>{title}</p>
      {subtitle && <h2 className={`mt-3 text-3xl font-semibold ${textColor} sm:text-4xl`}>{subtitle}</h2>}
      {!subtitle && (
        <div
          className="mt-3 h-[2px] w-16 rounded-full"
          style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}
        />
      )}
    </div>
  );
}
