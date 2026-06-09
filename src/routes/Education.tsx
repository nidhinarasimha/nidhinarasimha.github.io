import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { useTheme } from '../contexts/ThemeContext';

const educationEntries = [
  {
    period: '2023 - 2027',
    title: 'B.Tech in Computer Science',
    institution: 'PES University, Bangalore',
    details: ['Focused on software development, data structures, databases, networks, operating systems, cloud, ML, and blockchain.'],
  },
  {
    period: '2021 - 2023',
    title: 'PUC / Pre-University',
    institution: 'Jnanashudha PU College, Karkala',
    details: ['Completed pre-university education with a strong foundation in science and mathematics.'],
  },
  {
    period: '2009 - 2021',
    title: 'Schooling',
    institution: 'St. Norbert CBSE School',
    details: ['Completed school education from class 1 to 12 under the CBSE curriculum.'],
  },
];

export default function Education() {
  const { isDark } = useTheme();
  const d = isDark;

  const accentColor = d ? '#64ffda' : '#0066cc';
  const pageBg = d ? 'bg-[#0a192f] text-slate-100' : 'bg-[#f8faff] text-[#0f172a]';
  const cardClass = d
    ? 'border-white/10 bg-[#112240] hover:border-[#64ffda]'
    : 'border-slate-200 bg-white hover:border-[#0066cc]';
  const headingText = d ? 'text-white' : 'text-[#0f172a]';
  const bodyText = d ? 'text-slate-300' : 'text-slate-600';

  return (
    <motion.section
      className={`min-h-screen px-6 py-24 sm:px-8 transition-colors duration-300 ${pageBg}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Education" subtitle="Academic journey from school to undergraduate studies." />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {educationEntries.map((item) => (
            <article
              key={item.title}
              className={`rounded-3xl border p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 sm:p-8 ${cardClass}`}
            >
              <p className="text-sm uppercase tracking-[0.24em]" style={{ color: accentColor }}>{item.period}</p>
              <h3 className={`mt-4 text-2xl font-semibold ${headingText}`}>{item.title}</h3>
              <p className={`mt-2 ${bodyText}`}>{item.institution}</p>
              <ul className={`mt-5 space-y-3 ${bodyText}`}>
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-2 text-sm">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accentColor }}></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
