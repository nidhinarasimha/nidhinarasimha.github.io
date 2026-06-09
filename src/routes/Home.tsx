import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { projects, skillCategories, timeline, name, title, shortBio, socials, contactInfo } from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { useTheme } from '../contexts/ThemeContext';

const profileImage = new URL('../../image1.jpeg', import.meta.url).href;

const featuredProjects = projects.filter(
  (project) => !['e-commerce-platform', 'hospital-management-system', 'hepatitis-c-analysis'].includes(project.slug)
);

const sectionVariant = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const location = useLocation();
  const { isDark } = useTheme();
  const d = isDark;

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }, 0);
      }
    }
  }, [location.hash]);

  const introContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.35 } } };
  const lineContainer  = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
  const wordItem = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } },
  };

  const splitWords = (text: string) => text.split(' ');

  // ─── theme tokens ────────────────────────────────────────────────
  const accent      = d ? '#c084fc' : '#38bdf8';
  const accentHover = d ? '#a855f7' : '#0ea5e9';

  const glass = d
    ? { background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)' }
    : undefined;
  const glassStrong = d
    ? { background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)', border: '1px solid rgba(255,255,255,0.1)' }
    : undefined;

  const cardBase  = d ? 'rounded-3xl shadow-2xl shadow-black/60' : 'rounded-3xl border border-sky-200 bg-white shadow-xl shadow-sky-100/50';
  const cardHover = `transition hover:-translate-y-1 ${d ? '' : ''}`;

  const secBgNormal  = d ? '' : 'bg-[#f0f9ff]';
  const secBgAlt     = d ? '' : 'bg-[#e0f2fe]';
  const secBgContact = d ? '' : 'bg-[#f0f9ff]';

  const textPrimary = d ? 'text-white'    : 'text-[#0c1a2e]';
  const textSec     = d ? 'text-white/60' : 'text-[#4a6480]';
  const textDim     = d ? 'text-white/50' : 'text-[#4a6480]';

  const lightCardText = d ? 'text-[#4a6480]' : 'text-[#4a6480]';
  const lightHeading  = d ? 'text-[#0c1a2e]' : 'text-[#0c1a2e]';

  const skillPill      = d ? 'text-white text-sm px-4 py-3 rounded-2xl' : 'bg-[#e0f2fe] text-[#0369a1] text-sm px-4 py-3 rounded-2xl';
  const skillPillStyle = d ? { background: 'rgba(192,132,252,0.1)', border: '1px solid rgba(192,132,252,0.2)', backdropFilter: 'blur(8px)' } : undefined;

  const greetingWords = splitWords(`Hello, I'm`);
  const nameWords     = splitWords(name);
  const titleWords    = splitWords(title);
  const bioWords      = splitWords(shortBio);

  // shared filled-button style (used for all 3 intro buttons)
  const filledBtn = {
    base: { background: accent, color: '#000000', boxShadow: `0 0 24px ${accent}55` },
    hover: { background: accentHover, boxShadow: `0 0 32px ${accentHover}66` },
  };

  return (
    <div className="snap-y snap-mandatory">

      {/* ── Intro ──────────────────────────────────────────────────── */}
      <motion.section
        id="intro"
        className={`min-h-screen px-6 py-24 sm:px-8 ${d ? '' : 'bg-[#f0f9ff]/85'}`}
        initial="hidden" animate="visible" variants={sectionVariant}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="flex flex-col justify-center gap-6 text-left"
            variants={introContainer} initial="hidden" animate="visible"
          >
            <motion.p
              className="flex flex-wrap text-xs uppercase tracking-[0.4em] font-medium"
              style={{ color: accent }}
              variants={lineContainer}
            >
              {greetingWords.map((word, i) => (
                <motion.span key={i} className="inline-block mr-2" variants={wordItem}>{word}</motion.span>
              ))}
            </motion.p>

            <motion.h1 className={`flex flex-wrap text-6xl font-bold leading-tight sm:text-7xl ${textPrimary}`} variants={lineContainer}>
              {nameWords.map((word, i) => (
                <motion.span key={i} className="inline-block mr-3" variants={wordItem}>{word}</motion.span>
              ))}
            </motion.h1>

            <motion.h2 className={`flex flex-wrap text-3xl font-medium sm:text-4xl ${d ? 'text-white/70' : 'text-[#0369a1]/80'}`} variants={lineContainer}>
              {titleWords.map((word, i) => (
                <motion.span key={i} className="inline-block mr-2" variants={wordItem}>{word}</motion.span>
              ))}
            </motion.h2>

            <motion.p className={`max-w-3xl text-lg leading-8 ${textSec}`} variants={lineContainer}>
              {bioWords.map((word, i) => (
                <motion.span key={i} className="inline-block mr-2" variants={wordItem}>{word}</motion.span>
              ))}
            </motion.p>

            {/* All 3 buttons — same filled style */}
            <motion.div className="flex flex-wrap gap-4" variants={lineContainer}>
              {[
                { label: 'View Projects', href: '#projects' },
                { label: 'Education',    href: '#education' },
                { label: 'Contact Me',   href: '#contact'   },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all"
                  style={filledBtn.base}
                  onMouseEnter={e => Object.assign(e.currentTarget.style, filledBtn.hover)}
                  onMouseLeave={e => Object.assign(e.currentTarget.style, filledBtn.base)}
                >
                  {label}
                </a>
              ))}
            </motion.div>

            <motion.div className={`flex flex-wrap items-center gap-4 text-sm ${textSec}`} variants={lineContainer}>
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`transition ${d ? 'hover:text-white' : 'hover:text-[#0c1a2e]'}`}
                  variants={wordItem}
                >
                  {social.label}
                </motion.a>
              ))}
              <motion.span className="hidden sm:inline" variants={wordItem}>|</motion.span>
              <motion.span variants={wordItem}>{contactInfo.location}</motion.span>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              className="h-96 w-80 rounded-3xl p-4"
              style={d ? {
                background: 'rgba(192,132,252,0.05)',
                border: '1px solid rgba(192,132,252,0.28)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.6), 0 0 60px rgba(192,132,252,0.1)',
              } : {
                border: '2px solid #38bdf8',
                background: 'linear-gradient(to bottom right, #e0f2fe, #f0f9ff)',
                boxShadow: '0 25px 50px rgba(56,189,248,0.15)',
              }}
            >
              <img src={profileImage} alt="Nidhi Narasimha" className="h-full w-full rounded-2xl object-cover" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── About ──────────────────────────────────────────────────── */}
      <motion.section
        id="about"
        className={`min-h-screen px-6 py-24 sm:px-8 ${d ? '' : `${secBgAlt} text-[#0c1a2e]`}`}
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }} variants={sectionVariant}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="About" subtitle="A focused student developer building modern apps." tone={d ? 'dark' : 'light'} />
          {d ? (
            <div className="rounded-3xl p-10 shadow-2xl shadow-black/60" style={glassStrong}>
              <p className="max-w-3xl leading-8 text-white/70">
                I am currently pursuing a Bachelor of Technology in Computer Science at PES University. I enjoy building full-stack projects that combine intuitive UI, secure backend systems, and intelligent automation. I am passionate about applying machine learning, cloud computing, and modern web technologies to solve real user problems.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  'Education in Web Technology, Machine Learning, Cloud Computing, Blockchain, Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management and Technology, Data Analytics, and OOAD',
                  'Active contributor to IEEE PESU, Kannada Koota, and CodeChef communities',
                  'Focused on secure systems, AI experiences, and polished front-end interfaces',
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full" style={{ background: accent, boxShadow: `0 0 6px ${accent}` }}></span>
                    <span className="text-sm text-white/60">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <p className={`max-w-3xl leading-8 ${textDim}`}>
                I am currently pursuing a Bachelor of Technology in Computer Science at PES University. I enjoy building full-stack projects that combine intuitive UI, secure backend systems, and intelligent automation. I am passionate about applying machine learning, cloud computing, and modern web technologies to solve real user problems.
              </p>
              <div className="mt-8 grid gap-3 rounded-3xl border border-sky-200 bg-white p-6 shadow-lg shadow-sky-100/40">
                {[
                  'Education in Web Technology, Machine Learning, Cloud Computing, Blockchain, Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management and Technology, Data Analytics, and OOAD',
                  'Active contributor to IEEE PESU, Kannada Koota, and CodeChef communities',
                  'Focused on secure systems, AI experiences, and polished front-end interfaces',
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-flex h-3 w-3 shrink-0 rounded-full" style={{ background: accent }}></span>
                    <span className="text-sm text-[#4a6480]">{text}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </motion.section>

      {/* ── Education ──────────────────────────────────────────────── */}
      <motion.section
        id="education"
        className={`min-h-screen px-6 py-24 sm:px-8 ${d ? '' : `${secBgNormal} text-[#0c1a2e]`}`}
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }} variants={sectionVariant}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Education" subtitle="Academic journey from school to undergraduate studies." tone={d ? 'dark' : 'light'} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { period: '2023 - 2027', title: 'B.Tech in Computer Science', institution: 'PES University, Bangalore', details: ['Focused on software development, data structures, databases, networks, operating systems, cloud, ML, and blockchain.'] },
              { period: '2021 - 2023', title: 'PUC / Pre-University', institution: 'Jnanashudha PU College, Karkala', details: ['Completed pre-university education with a strong foundation in science and mathematics.'] },
              { period: '2009 - 2021', title: 'Schooling', institution: 'St. Norbert CBSE School', details: ['Completed school education from class 1 to 10 under the CBSE curriculum.'] },
            ].map((item) => (
              <article
                key={item.title}
                className={`p-6 sm:p-8 ${cardBase} ${cardHover}`}
                style={d ? glass : undefined}
                onMouseEnter={e => d
                  ? (e.currentTarget.style.borderColor = `${accent}40`)
                  : (e.currentTarget.style.borderColor = accent)
                }
                onMouseLeave={e => d
                  ? (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')
                  : (e.currentTarget.style.borderColor = '')
                }
              >
                <p className="text-sm uppercase tracking-[0.24em]" style={{ color: accent }}>{item.period}</p>
                <h3 className={`mt-4 text-xl font-semibold ${d ? 'text-white' : lightHeading}`}>{item.title}</h3>
                <p className={`mt-2 text-sm ${d ? 'text-white/55' : lightCardText}`}>{item.institution}</p>
                <ul className={`mt-5 space-y-3 ${d ? 'text-white/50' : lightCardText}`}>
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

      {/* ── Skills ─────────────────────────────────────────────────── */}
      <motion.section
        id="skills"
        className={`min-h-screen px-6 py-24 sm:px-8 ${d ? '' : `${secBgAlt} text-[#0c1a2e]`}`}
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }} variants={sectionVariant}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Skills" subtitle="Technical expertise across languages, tools, and frameworks." />
          <div className="grid gap-6 lg:grid-cols-2">
            {skillCategories.map((category) => (
              <div key={category.title} className={`p-8 ${cardBase}`} style={d ? glass : undefined}>
                <h3 className={`mb-5 text-xl font-semibold ${textPrimary}`}>{category.title}</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className={skillPill} style={skillPillStyle}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Projects ───────────────────────────────────────────────── */}
      <motion.section
        id="projects"
        className={`min-h-screen px-6 py-24 sm:px-8 ${d ? '' : `${secBgNormal} text-[#0c1a2e]`}`}
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }} variants={sectionVariant}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Projects" subtitle="Selected applications, research, and AI tools." tone={d ? 'dark' : 'light'} />
          <div className="grid gap-6 xl:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} tone={d ? 'dark' : 'light'} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Experience ─────────────────────────────────────────────── */}
      <motion.section
        id="experience"
        className={`min-h-screen px-6 py-24 sm:px-8 ${d ? '' : `${secBgAlt} text-[#0c1a2e]`}`}
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }} variants={sectionVariant}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Experience" subtitle="Hackathons and certifications." />
          <div className="grid gap-6 lg:grid-cols-2">
            {timeline.slice(1).map((item) => (
              <motion.article
                key={item.title}
                className={`p-6 ${cardBase} ${cardHover}`}
                style={d ? glass : undefined}
                onMouseEnter={e => d
                  ? (e.currentTarget.style.borderColor = `${accent}40`)
                  : (e.currentTarget.style.borderColor = accent)
                }
                onMouseLeave={e => d
                  ? (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')
                  : (e.currentTarget.style.borderColor = '')
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
              >
                <p className="text-sm uppercase tracking-[0.24em]" style={{ color: accent }}>{item.date}</p>
                <h3 className={`mt-3 text-xl font-semibold ${textPrimary}`}>{item.title}</h3>
                <p className={`mt-1 text-sm ${textSec}`}>{item.subtitle}</p>
                <ul className={`mt-5 space-y-3 ${textSec}`}>
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }}></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Contact ────────────────────────────────────────────────── */}
      <motion.section
        id="contact"
        className={`min-h-screen px-6 py-24 sm:px-8 ${d ? '' : `${secBgContact} text-[#0c1a2e]`}`}
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }} variants={sectionVariant}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Contact" subtitle="Let's build something meaningful together." />
          <div
            className="rounded-[2rem] p-10 shadow-2xl"
            style={d ? {
              ...glassStrong,
              boxShadow: `0 25px 60px rgba(0,0,0,0.6), 0 0 80px rgba(192,132,252,0.06)`,
            } : {
              background: '#ffffff',
              border: '1px solid #bae6fd',
              boxShadow: '0 20px 40px rgba(56,189,248,0.08)',
            }}
          >
            <p className={`text-lg font-semibold ${textPrimary}`}>Get in touch</p>
            <p className={`mt-4 ${textSec}`}>
              I'm open to collaborations, internships, and project discussions. Reach out if you want to build secure applications, AI tools, or web products with a clean, professional experience.
            </p>
            <div className={`mt-8 space-y-5 text-sm ${textSec}`}>
              <div>
                <p className={`font-semibold ${textPrimary}`}>Email</p>
                <a href={`mailto:${contactInfo.email}`} style={{ color: accent }} className="transition hover:opacity-80">
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <p className={`font-semibold ${textPrimary}`}>Phone</p>
                <p>{contactInfo.phone}</p>
              </div>
              <div>
                <p className={`font-semibold ${textPrimary}`}>Location</p>
                <p>{contactInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
