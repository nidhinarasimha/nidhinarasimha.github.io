import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

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
  return (
    <motion.section
      className="min-h-screen bg-[#0a192f] px-6 py-24 sm:px-8"
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
              className="rounded-3xl border border-white/10 bg-[#112240] p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-[#64ffda] sm:p-8"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-[#64ffda]">{item.period}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.institution}</p>
              <ul className="mt-5 space-y-3 text-slate-300">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-2 text-sm">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#64ffda]"></span>
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
