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

  const introContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.35 } },
  };

  const lineContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const wordItem = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } },
  };

  const splitWords = (text: string) => text.split(' ');
  const greetingWords = splitWords(`Hello, I'm`);
  const nameWords = splitWords(name);
  const titleWords = splitWords(title);
  const bioWords = splitWords(shortBio);

  // Theme-derived class strings
  const accentColor = d ? '#64ffda' : '#0066cc';
  const accentHover = d ? '#52e0bf' : '#0055bb';
  const introBg = d ? 'bg-[#0a192f]/85' : 'bg-[#f8faff]/85';
  const sectionLightBg = d ? 'bg-[#edf4ff]' : 'bg-[#f0f8ff]';
  const sectionLightText = d ? 'text-[#0a192f]' : 'text-[#0f172a]';
  const sectionDarkBg = d ? 'bg-[#0a192f]' : 'bg-[#f8faff]';
  const sectionDarkText = d ? 'text-slate-100' : 'text-[#0f172a]';
  const contactSectionBg = d ? 'bg-[#112240]' : 'bg-[#edf4ff]';
  const textPrimary = d ? 'text-white' : 'text-[#0f172a]';
  const textSec = d ? 'text-slate-300' : 'text-slate-600';
  const textDimLight = d ? 'text-slate-700' : 'text-slate-600';
  const borderLight = d ? 'border-slate-200' : 'border-slate-200';
  const borderDark = d ? 'border-white/10' : 'border-slate-200';
  const skillCatCard = d ? 'border-white/10 bg-[#0a192f]' : 'border-slate-200 bg-white';
  const skillPillClass = d ? 'bg-[#112240] text-slate-100' : 'bg-[#dbeafe] text-[#1e3a5f]';
  const expCard = d ? 'bg-[#0a192f]/80 border-white/10 hover:border-[#64ffda]' : 'bg-white border-slate-200 hover:border-[#0066cc]';
  const contactCard = d ? 'border-white/10 bg-[#0a192f]' : 'border-slate-200 bg-white';
  const aboutBulletCard = d ? 'border-slate-200 bg-white/90' : 'border-slate-200 bg-white';
  const lightSectionCard = d ? 'border-slate-200 bg-white/95' : 'border-slate-200 bg-white';
  const lightSectionCardText = d ? 'text-slate-700' : 'text-slate-600';
  const socialLink = d ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-[#0f172a]';
  const introBtnPrimary = `bg-[${accentColor}] hover:bg-[${accentHover}] text-[#0a192f]`;
  const introBtnSecondary = d
    ? 'border-white/20 bg-white/5 text-white hover:border-[#64ffda] hover:text-[#64ffda]'
    : 'border-slate-300 bg-white text-[#0f172a] hover:border-[#0066cc] hover:text-[#0066cc]';

  return (
    <div className="snap-y snap-mandatory">
      {/* Intro */}
      <motion.section
        id="intro"
        className={`min-h-screen px-6 py-24 sm:px-8 transition-colors duration-300 ${introBg}`}
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="flex flex-col justify-center gap-6 text-left"
            variants={introContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="flex flex-wrap text-sm uppercase tracking-[0.34em]"
              style={{ color: accentColor }}
              variants={lineContainer}
            >
              {greetingWords.map((word, index) => (
                <motion.span key={index} className="inline-block mr-2" variants={wordItem}>
                  {word}
                </motion.span>
              ))}
            </motion.p>
            <motion.h1 className={`flex flex-wrap text-6xl font-bold leading-tight sm:text-7xl ${textPrimary}`} variants={lineContainer}>
              {nameWords.map((word, index) => (
                <motion.span key={index} className="inline-block mr-3" variants={wordItem}>
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h2 className={`flex flex-wrap text-3xl font-medium sm:text-4xl ${d ? 'text-slate-200' : 'text-slate-600'}`} variants={lineContainer}>
              {titleWords.map((word, index) => (
                <motion.span key={index} className="inline-block mr-2" variants={wordItem}>
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p className={`max-w-3xl text-lg leading-8 ${textSec}`} variants={lineContainer}>
              {bioWords.map((word, index) => (
                <motion.span key={index} className="inline-block mr-2" variants={wordItem}>
                  {word}
                </motion.span>
              ))}
            </motion.p>
            <motion.div className="flex flex-wrap gap-4" variants={lineContainer}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition"
                style={{ background: accentColor, color: '#0a192f' }}
                onMouseEnter={e => (e.currentTarget.style.background = accentHover)}
                onMouseLeave={e => (e.currentTarget.style.background = accentColor)}
              >
                View Projects
              </a>
              <a href="#education" className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm transition ${introBtnSecondary}`}>
                Education
              </a>
              <a href="#contact" className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm transition ${introBtnSecondary}`}>
                Contact Me
              </a>
            </motion.div>
            <motion.div className={`flex flex-wrap items-center gap-4 text-sm ${textSec}`} variants={lineContainer}>
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`transition ${socialLink}`}
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
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              className="h-96 w-80 rounded-3xl p-4 shadow-2xl shadow-black/40"
              style={{
                border: `2px solid ${accentColor}`,
                background: d
                  ? 'linear-gradient(to bottom right, #112240, #0a192f, #1f3250)'
                  : 'linear-gradient(to bottom right, #e8f0fe, #f8faff, #dbeafe)',
              }}
            >
              <img
                src={profileImage}
                alt="Nidhi Narasimha"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        id="about"
        className={`min-h-screen px-6 py-24 sm:px-8 transition-colors duration-300 ${sectionLightBg} ${sectionLightText}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        variants={sectionVariant}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="About" subtitle="A focused student developer building modern apps." tone="light" />
          <p className={`max-w-3xl leading-8 ${textDimLight}`}>
            I am currently pursuing a Bachelor of Technology in Computer Science at PES University. I enjoy building full-stack projects that combine intuitive UI, secure backend systems, and intelligent automation. I am passionate about applying machine learning, cloud computing, and modern web technologies to solve real user problems.
          </p>
          <div className={`mt-8 grid gap-3 rounded-3xl border p-6 shadow-lg ${aboutBulletCard} ${d ? 'shadow-slate-200/60' : 'shadow-slate-200/40'}`}>
            {[
              'Education in Web Technology, Machine Learning, Cloud Computing, Blockchain, Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management and Technology, Data Analytics, and OOAD',
              'Active contributor to IEEE PESU, Kannada Koota, and CodeChef communities',
              'Focused on secure systems, AI experiences, and polished front-end interfaces',
            ].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <span className="inline-flex h-3 w-3 shrink-0 rounded-full" style={{ background: accentColor }}></span>
                <span className={`text-sm ${lightSectionCardText}`}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        id="education"
        className={`min-h-screen px-6 py-24 sm:px-8 transition-colors duration-300 ${sectionLightBg} ${sectionLightText}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        variants={sectionVariant}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Education" subtitle="Academic journey from school to undergraduate studies." tone="light" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
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
            ].map((item) => (
              <article
                key={item.title}
                className={`rounded-3xl border p-6 shadow-xl transition hover:-translate-y-1 sm:p-8 ${lightSectionCard}`}
                style={{ ['--tw-shadow' as string]: 'none' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = accentColor}
                onMouseLeave={e => e.currentTarget.style.borderColor = ''}
              >
                <p className="text-sm uppercase tracking-[0.24em]" style={{ color: accentColor }}>{item.period}</p>
                <h3 className={`mt-4 text-2xl font-semibold ${d ? 'text-[#0a192f]' : 'text-[#0f172a]'}`}>{item.title}</h3>
                <p className={`mt-2 ${lightSectionCardText}`}>{item.institution}</p>
                <ul className={`mt-5 space-y-3 ${lightSectionCardText}`}>
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

      {/* Skills */}
      <motion.section
        id="skills"
        className={`min-h-screen px-6 py-24 sm:px-8 transition-colors duration-300 ${sectionDarkBg} ${sectionDarkText}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        variants={sectionVariant}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Skills" subtitle="Technical expertise across languages, tools, and frameworks." />
          <div className="grid gap-6 lg:grid-cols-2">
            {skillCategories.map((category) => (
              <div key={category.title} className={`rounded-[2rem] border p-8 shadow-xl ${skillCatCard}`}>
                <h3 className={`mb-5 text-xl font-semibold ${textPrimary}`}>{category.title}</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className={`rounded-2xl px-4 py-3 text-sm shadow-sm ${skillPillClass}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        className={`min-h-screen px-6 py-24 sm:px-8 transition-colors duration-300 ${sectionLightBg} ${sectionLightText}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        variants={sectionVariant}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Projects" subtitle="Selected applications, research, and AI tools." tone="light" />
          <div className="grid gap-6 xl:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} tone="light" />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        id="experience"
        className={`min-h-screen px-6 py-24 sm:px-8 transition-colors duration-300 ${sectionDarkBg}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        variants={sectionVariant}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Experience" subtitle="Projects, achievements, and leadership highlights." />
          <div className="grid gap-6 lg:grid-cols-2">
            {timeline.slice(1).map((item) => (
              <motion.article
                key={item.title}
                className={`group rounded-3xl border p-6 shadow-xl transition hover:-translate-y-1 ${expCard}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
              >
                <p className="text-sm uppercase tracking-[0.24em]" style={{ color: accentColor }}>{item.date}</p>
                <h3 className={`mt-3 text-xl font-semibold ${textPrimary}`}>{item.title}</h3>
                <p className={`mt-1 text-sm ${textSec}`}>{item.subtitle}</p>
                <ul className={`mt-5 space-y-3 ${textSec}`}>
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accentColor }}></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className={`min-h-screen px-6 py-24 sm:px-8 transition-colors duration-300 ${contactSectionBg}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        variants={sectionVariant}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Contact" subtitle="Let's build something meaningful together." />
          <div className={`rounded-[2rem] border p-10 shadow-xl ${contactCard}`}>
            <p className={`text-lg font-semibold ${textPrimary}`}>Get in touch</p>
            <p className={`mt-4 ${textSec}`}>
              I'm open to collaborations, internships, and project discussions. Reach out if you want to build secure applications, AI tools, or web products with a clean, professional experience.
            </p>
            <div className={`mt-8 space-y-5 text-sm ${textSec}`}>
              <div>
                <p className={`font-semibold ${textPrimary}`}>Email</p>
                <a href={`mailto:${contactInfo.email}`} style={{ color: accentColor }} className="transition hover:opacity-80">
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
