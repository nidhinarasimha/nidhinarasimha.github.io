import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

export default function Footer() {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const containerClass = `mt-20 py-12 border-t transition-colors duration-500 ${
    isDark
      ? 'border-white/10 bg-black/40 text-white/70'
      : 'border-slate-200 bg-slate-50 text-slate-600'
  }`;

  const linkHoverClass = isDark ? 'hover:text-sky-300' : 'hover:text-sky-600';

  return (
    <footer className={containerClass}>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* Brand & Bio */}
          <div className="space-y-4 md:col-span-1">
            <h2 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Nidhi Narasimha
            </h2>
            <p className="text-sm leading-relaxed">
              B.Tech Computer Science student at PES University. Passionate about building robust web applications, exploring AI, and creating secure digital platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className={`transition-colors ${linkHoverClass}`}>About Me</a>
              </li>
              <li>
                <a href="#projects" className={`transition-colors ${linkHoverClass}`}>Projects</a>
              </li>
              <li>
                <a href="#experience" className={`transition-colors ${linkHoverClass}`}>Experience</a>
              </li>
              <li>
                <a href="#contact" className={`transition-colors ${linkHoverClass}`}>Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links & Back to top */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Connect
            </h3>
            <ul className="flex flex-wrap gap-4 text-sm">
              <li>
                <a href="https://github.com/nidhinarasimha" target="_blank" rel="noreferrer" className={`transition-colors ${linkHoverClass}`}>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/nidhinarasimha" target="_blank" rel="noreferrer" className={`transition-colors ${linkHoverClass}`}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:nidhiudupa17@gmail.com" className={`transition-colors ${linkHoverClass}`}>
                  Email
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  isDark ? 'text-sky-300 hover:text-sky-200' : 'text-sky-600 hover:text-sky-700'
                }`}
              >
                Back to top ↑
              </motion.button>
            </div>
          </div>
        </div>

        <div className={`mt-12 pt-8 text-center text-xs border-t ${isDark ? 'border-white/10 text-white/50' : 'border-slate-200 text-slate-500'}`}>
          <p>© {currentYear} Nidhi Narasimha. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
