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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const textVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
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

  // ─── theme tokens ────────────────────────────────────────────────
  const accent      = d ? '#7dd3fc' : '#0ea5e9';
  const accentHover = d ? '#38bdf8' : '#0284c7';

  // Minimal glassmorphism
  const glass = d
    ? { background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.05)' }
    : undefined;
  const glassStrong = d
    ? { background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.08)' }
    : undefined;

  // Clean cards, no heavy glow
  const cardBase  = d ? 'rounded-3xl border border-white/5 bg-white/5 shadow-sm' : 'rounded-3xl border border-slate-200 bg-white shadow-sm';
  const cardHover = `transition hover:-translate-y-1 hover:shadow-md`;

  const secBgNormal  = d ? '' : '';
  const secBgAlt     = d ? '' : '';
  const secBgContact = d ? '' : '';

  const textPrimary = d ? 'text-white'    : 'text-slate-900';
  const textSec     = d ? 'text-white/70' : 'text-slate-600';
  const textDim     = d ? 'text-white/50' : 'text-slate-500';

  const lightCardText = d ? 'text-white/70' : 'text-slate-600';
  const lightHeading  = d ? 'text-white' : 'text-slate-900';

  const skillPill      = d ? 'text-white text-sm px-4 py-2 rounded-full' : 'bg-slate-100 text-slate-700 text-sm px-4 py-2 rounded-full';
  const skillPillStyle = d ? { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' } : undefined;

  // Clean gradient buttons
  const filledBtnClass = `bg-gradient-accent text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg`;

  return (
    <div className="">

      <motion.section
        id="intro"
        className={`relative px-6 pt-4 pb-24 md:pt-4 md:pb-20 lg:pb-24 sm:px-8 min-h-[calc(100dvh-5rem)] flex items-center`}
        initial="hidden" animate="visible" variants={sectionVariant}
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:gap-20 lg:grid-cols-2">
          <motion.div
            className="flex flex-col justify-center gap-6 text-left"
            variants={staggerContainer} initial="hidden" animate="visible"
          >
            <motion.p
              className="text-xl sm:text-2xl font-semibold tracking-wide text-gradient uppercase"
              variants={textVariant}
            >
              Hello, I'm
            </motion.p>

            <motion.h1 className={`text-5xl font-bold tracking-tight leading-none sm:text-6xl lg:text-7xl ${textPrimary}`} variants={textVariant}>
              {name}
            </motion.h1>

            <motion.h2 className={`text-2xl font-medium sm:text-3xl lg:text-4xl ${d ? 'text-white/80' : 'text-slate-700'}`} variants={textVariant}>
              {title.split('|').map((part, index) => (
                <span key={index} className={`block ${index === 1 ? 'text-gradient mt-1 sm:mt-2 font-semibold' : ''}`}>
                  {part.trim()}
                </span>
              ))}
            </motion.h2>

            <motion.p className={`max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed ${textSec}`} variants={textVariant}>
              {shortBio}
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 pt-4" variants={textVariant}>
              {[
                { label: 'View Projects', href: '#projects', primary: true },
                { label: 'Education',    href: '#education', primary: false },
                { label: 'Contact Me',   href: '#contact', primary: false },
              ].map(({ label, href, primary }) => (
                <a
                  key={label}
                  href={href}
                  className={`inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-1 ${
                    primary 
                      ? 'bg-gradient-accent text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50' 
                      : `border-2 ${d ? 'border-sky-500/30 text-sky-400 hover:bg-sky-500/10' : 'border-slate-400 text-slate-800 hover:bg-slate-300 hover:border-slate-500'}`
                  }`}
                >
                  {label}
                </a>
              ))}
            </motion.div>

            <motion.div className={`flex flex-wrap items-center gap-4 text-sm mt-4 ${textDim}`} variants={textVariant}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`transition hover:-translate-y-0.5 ${d ? 'hover:text-white' : 'hover:text-slate-900'}`}
                >
                  {social.label}
                </a>
              ))}
              <span className="hidden sm:inline">|</span>
              <span>{contactInfo.location}</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center lg:justify-end"
            variants={textVariant}
          >
            <div className="relative group h-80 w-72 sm:h-[26rem] sm:w-[22rem] lg:h-[30rem] lg:w-[26rem]">
              {/* Soft Gradient Shadow Behind Image */}
              <div className="absolute inset-0 translate-x-3 translate-y-4 rounded-3xl bg-gradient-accent opacity-20 blur-xl transition-all duration-500 group-hover:translate-x-5 group-hover:translate-y-6 group-hover:opacity-30"></div>
              
              {/* Actual Image */}
              <img 
                src={profileImage} 
                alt="Nidhi Narasimha" 
                className="relative z-10 h-full w-full rounded-3xl object-cover grayscale-[15%] shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:grayscale-0" 
              />
            </div>
          </motion.div>
        </div>


      </motion.section>

      {/* ── About ──────────────────────────────────────────────────── */}
      <motion.section
        id="about"
        className={`px-6 py-20 md:py-28 sm:px-8 ${d ? '' : `${secBgAlt} text-[#0c1a2e]`}`}
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }} variants={sectionVariant}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="About" subtitle="A focused student developer building modern apps." tone={d ? 'dark' : 'light'} />
          <div className={`p-8 sm:p-12 ${cardBase}`} style={d ? glassStrong : undefined}>
            <p className={`max-w-3xl leading-relaxed sm:text-lg ${d ? 'text-white/80' : textSec}`}>
              I am currently pursuing a Bachelor of Technology in Computer Science at PES University. I enjoy building full-stack projects that combine intuitive UI, secure backend systems, and intelligent automation. I am passionate about applying machine learning, cloud computing, and modern web technologies to solve real user problems.
            </p>
            <div className="mt-8 sm:mt-10 grid gap-5">
              {[
                'Education in Web Technology, Machine Learning, Cloud Computing, Blockchain, Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management and Technology, Data Analytics, and OOAD',
                'Active contributor to IEEE PESU, Kannada Koota, and CodeChef communities',
                'Focused on secure systems, AI experiences, and polished front-end interfaces',
              ].map((text) => (
                <div key={text} className="flex items-start gap-4">
                  <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-gradient-accent"></span>
                  <span className={`text-base leading-relaxed ${d ? 'text-white/70' : textSec}`}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Education ──────────────────────────────────────────────── */}
      <motion.section
        id="education"
        className={`px-6 py-20 md:py-28 sm:px-8 ${d ? '' : `${secBgNormal} text-[#0c1a2e]`}`}
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, delay: 0.15 }} variants={sectionVariant}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Education" subtitle="Academic journey from school to undergraduate studies." tone={d ? 'dark' : 'light'} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <p className="text-sm uppercase tracking-[0.24em] text-gradient">{item.period}</p>
                <h3 className={`mt-4 text-xl font-semibold ${d ? 'text-white' : lightHeading}`}>{item.title}</h3>
                <p className={`mt-2 text-sm ${d ? 'text-white/55' : lightCardText}`}>{item.institution}</p>
                <ul className={`mt-5 space-y-3 ${d ? 'text-white/50' : lightCardText}`}>
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-accent"></span>
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
        className={`px-6 py-20 md:py-28 sm:px-8 ${d ? '' : `${secBgAlt} text-[#0c1a2e]`}`}
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
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
        className={`px-6 py-20 md:py-28 sm:px-8 ${d ? '' : `${secBgNormal} text-[#0c1a2e]`}`}
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
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
        className={`px-6 py-20 md:py-28 sm:px-8 ${d ? '' : `${secBgAlt} text-[#0c1a2e]`}`}
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
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
                <p className="text-sm uppercase tracking-[0.24em] text-gradient">{item.date}</p>
                <h3 className={`mt-3 text-xl font-semibold ${textPrimary}`}>{item.title}</h3>
                <p className={`mt-1 text-sm ${textSec}`}>{item.subtitle}</p>
                <ul className={`mt-5 space-y-3 ${textSec}`}>
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-accent"></span>
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
        className={`px-6 py-20 md:py-28 sm:px-8 ${d ? '' : `${secBgContact} text-[#0c1a2e]`}`}
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.3 }} variants={sectionVariant}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Contact" subtitle="Let's build something meaningful together." />
          <div
            className="mx-auto max-w-4xl rounded-[2rem] p-8 sm:p-14 transition-shadow hover:shadow-xl"
            style={d ? {
              ...glassStrong,
              boxShadow: `0 25px 60px rgba(0,0,0,0.6), 0 0 80px rgba(125,211,252,0.06)`,
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
                <a href={`mailto:${contactInfo.email}`} className="transition hover:opacity-80 text-gradient">
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
