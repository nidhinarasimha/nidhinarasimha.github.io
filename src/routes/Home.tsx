import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { projects, skillCategories, timeline, name, title, shortBio, socials, contactInfo } from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';

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

  useEffect(() => {
    // Handle hash-based scrolling and clear the hash so the page reloads at the top.
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
    visible: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const lineContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
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

  return (
    <div className="snap-y snap-mandatory">
      <motion.section
        id="intro"
        className="min-h-screen bg-[#0a192f] px-6 py-24 sm:px-8"
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
            <motion.p className="flex flex-wrap text-sm uppercase tracking-[0.34em] text-[#64ffda]" variants={lineContainer}>
              {greetingWords.map((word, index) => (
                <motion.span key={index} className="inline-block mr-2" variants={wordItem}>
                  {word}
                </motion.span>
              ))}
            </motion.p>
            <motion.h1 className="flex flex-wrap text-6xl font-bold text-white leading-tight sm:text-7xl" variants={lineContainer}>
              {nameWords.map((word, index) => (
                <motion.span key={index} className="inline-block mr-3" variants={wordItem}>
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h2 className="flex flex-wrap text-3xl font-medium text-slate-200 sm:text-4xl" variants={lineContainer}>
              {titleWords.map((word, index) => (
                <motion.span key={index} className="inline-block mr-2" variants={wordItem}>
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p className="max-w-3xl text-lg leading-8 text-slate-300" variants={lineContainer}>
              {bioWords.map((word, index) => (
                <motion.span key={index} className="inline-block mr-2" variants={wordItem}>
                  {word}
                </motion.span>
              ))}
            </motion.p>
            <motion.div className="flex flex-wrap gap-4" variants={lineContainer}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-[#64ffda] px-6 py-3 text-sm font-semibold text-[#0a192f] transition hover:bg-[#52e0bf]"
              >
                View Projects
              </a>
              <a
                href="#education"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-[#64ffda] hover:text-[#64ffda]"
              >
                Education
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-[#64ffda] hover:text-[#64ffda]"
              >
                Contact Me
              </a>
            </motion.div>
            <motion.div className="flex flex-wrap items-center gap-4 text-sm text-slate-300" variants={lineContainer}>
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                  variants={wordItem}
                >
                  {social.label}
                </motion.a>
              ))}
              <motion.span className="hidden sm:inline" variants={wordItem}>
                |
              </motion.span>
              <motion.span variants={wordItem}>{contactInfo.location}</motion.span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="h-96 w-80 rounded-3xl border-2 border-[#64ffda] bg-gradient-to-br from-[#112240] via-[#0a192f] to-[#1f3250] p-4 shadow-2xl shadow-black/40">
              <img
                src={profileImage}
                alt="Nidhi Narasimha"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="min-h-screen bg-[#edf4ff] px-6 py-24 text-[#0a192f] sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        variants={sectionVariant}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="About" subtitle="A focused student developer building modern apps." tone="light" />
          <p className="max-w-3xl leading-8 text-slate-700">
            I am currently pursuing a Bachelor of Technology in Computer Science at PES University. I enjoy building full-stack projects that combine intuitive UI, secure backend systems, and intelligent automation. I am passionate about applying machine learning, cloud computing, and modern web technologies to solve real user problems.
          </p>
          <div className="mt-8 grid gap-3 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/60">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-3 w-3 rounded-full bg-[#64ffda]"></span>
              <span className="text-sm text-slate-700">Education in Web Technology, Machine Learning, Cloud Computing, Blockchain, Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management and Technology, Data Analytics, and OOAD</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-3 w-3 rounded-full bg-[#64ffda]"></span>
              <span className="text-sm text-slate-700">Active contributor to IEEE PESU, Kannada Koota, and CodeChef communities</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-3 w-3 rounded-full bg-[#64ffda]"></span>
              <span className="text-sm text-slate-700">Focused on secure systems, AI experiences, and polished front-end interfaces</span>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="education"
        className="min-h-screen bg-[#edf4ff] px-6 py-24 text-[#0a192f] sm:px-8"
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
                className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:border-[#64ffda] sm:p-8"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-[#64ffda]">{item.period}</p>
                <h3 className="mt-4 text-2xl font-semibold text-[#0a192f]">{item.title}</h3>
                <p className="mt-2 text-slate-700">{item.institution}</p>
                <ul className="mt-5 space-y-3 text-slate-700">
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

      <motion.section
        id="skills"
        className="min-h-screen bg-[#0a192f] px-6 py-24 text-slate-100 sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        variants={sectionVariant}
      >
        <SectionHeading title="Skills" subtitle="Technical expertise across languages, tools, and frameworks." />
        <div className="grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title} className="rounded-[2rem] border border-white/10 bg-[#0a192f] p-8 shadow-xl shadow-black/10">
              <h3 className="mb-5 text-xl font-semibold text-white">{category.title}</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-2xl bg-[#112240] px-4 py-3 text-sm text-slate-100 shadow-sm shadow-black/10">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="min-h-screen bg-[#edf4ff] px-6 py-24 text-[#0a192f] sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        variants={sectionVariant}
      >
        <SectionHeading title="Projects" subtitle="Selected applications, research, and AI tools." tone="light" />
        <div className="grid gap-6 xl:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} tone="light" />
          ))}
        </div>
      </motion.section>

      <motion.section
        id="experience"
        className="min-h-screen bg-[#0a192f] px-6 py-24 sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        variants={sectionVariant}
      >
        <SectionHeading title="Experience" subtitle="Projects, achievements, and leadership highlights." />
        <div className="grid gap-6 lg:grid-cols-2">
          {timeline.slice(1).map((item) => (
            <motion.article
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-[#0a192f]/80 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-[#64ffda]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-sm uppercase tracking-[0.24em] text-[#64ffda]">{item.date}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{item.subtitle}</p>
              <ul className="mt-5 space-y-3 text-slate-300">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-2 text-sm">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#64ffda]"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="min-h-screen bg-[#112240] px-6 py-24 text-slate-100 sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        variants={sectionVariant}
      >
        <SectionHeading title="Contact" subtitle="Let’s build something meaningful together." />
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-white/10 bg-[#0a192f] p-10 shadow-xl shadow-black/20">
            <p className="text-lg font-semibold text-white">Get in touch</p>
            <p className="mt-4 text-slate-300">
              I’m open to collaborations, internships, and project discussions. Reach out if you want to build secure applications, AI tools, or web products with a clean, professional experience.
            </p>
            <div className="mt-8 space-y-5 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-white">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="text-[#64ffda] hover:text-[#52e0bf]">
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p>{contactInfo.phone}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Location</p>
                <p>{contactInfo.location}</p>
              </div>
            </div>
          </div>

        </div>
      </motion.section>
    </div>
  );
}
