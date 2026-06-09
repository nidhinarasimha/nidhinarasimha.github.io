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
    details: ['Completed school education from class 1 to 10 under the CBSE curriculum.'],
  },
];

export default function Education() {
  const { isDark } = useTheme();
  const d = isDark;

  const accent = d ? '#c084fc' : '#a78bfa';
  const glass = d
    ? { background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)' }
    : undefined;

  return (
    <motion.section
      className={`min-h-screen px-6 py-24 sm:px-8 ${d ? '' : 'bg-[#faf5ff] text-[#1e1033]'}`}
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
              className={`rounded-3xl p-6 shadow-2xl transition hover:-translate-y-1 sm:p-8 ${
                d ? 'shadow-black/50' : 'border border-violet-200 bg-white shadow-violet-100/50'
              }`}
              style={d ? glass : undefined}
              onMouseEnter={e => d && (e.currentTarget.style.borderColor = `${accent}40`)}
              onMouseLeave={e => d && (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
            >
              <p className="text-sm uppercase tracking-[0.24em]" style={{ color: accent }}>{item.period}</p>
              <h3 className={`mt-4 text-xl font-semibold ${d ? 'text-white' : 'text-[#1e1033]'}`}>{item.title}</h3>
              <p className={`mt-2 text-sm ${d ? 'text-white/55' : 'text-[#6d5a92]'}`}>{item.institution}</p>
              <ul className={`mt-5 space-y-3 ${d ? 'text-white/50' : 'text-[#6d5a92]'}`}>
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-2 text-sm">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }}></span>
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
