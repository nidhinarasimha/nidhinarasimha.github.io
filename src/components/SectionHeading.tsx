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

  const textColor = !isDark
    ? 'text-[#0f172a]'
    : tone === 'light'
      ? 'text-[#0a192f]'
      : 'text-white';

  return (
    <div className="mb-12 md:mb-16 max-w-3xl">
      <div className="flex items-center gap-4">
        <div className="h-[2px] w-12 rounded-full bg-gradient-accent"></div>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-gradient">{title}</p>
      </div>
      
      {subtitle && (
        <h2 className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${textColor}`}>
          {subtitle}
        </h2>
      )}
      
      {!subtitle && (
        <div className="mt-6 h-[2px] w-24 rounded-full bg-gradient-accent opacity-50" />
      )}
    </div>
  );
}
