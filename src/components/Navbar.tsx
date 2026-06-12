import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { socials } from '../data/portfolio';

const navItems = [
  { label: 'Intro', id: 'intro' },
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [active, setActive] = useState('intro');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') navigate('/');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      if (location.pathname !== '/') { setActive(''); return; }
      const scrollPosition = window.scrollY + 180;
      const current = navItems
        .filter((item): item is { label: string; id: string } => typeof item.id === 'string')
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => section !== null)
        .reverse()
        .find((section) => section.offsetTop <= scrollPosition);
      setActive(current?.id ?? 'intro');
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname]);

  const navClass = `fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
    scrolled ? 'top-4' : 'top-0'
  }`;

  const containerClass = `relative mx-auto flex max-w-6xl items-center justify-between transition-all duration-300 transform-gpu ${
    scrolled
      ? `rounded-full overflow-hidden px-6 py-3 shadow-xl backdrop-blur-xl ${
          isDark
            ? 'bg-black/60 border border-white/10 shadow-black/50'
            : 'bg-white/70 border border-slate-200/50 shadow-sky-900/5'
        }`
      : 'px-6 py-4 sm:px-8'
  }`;

  const navLinkActive = isDark ? 'text-sky-300' : 'text-sky-600';
  const navLinkInactive = isDark ? 'text-white/60 hover:text-white' : 'text-slate-500 hover:text-slate-900';

  const mobileMenuStyle = isDark
    ? { background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(24px)' }
    : { background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(24px)' };
  
  const toggleStyle = isDark
    ? { border: '1px solid rgba(125,211,252,0.2)', background: 'rgba(125,211,252,0.05)', color: '#7dd3fc' }
    : { border: '1px solid rgba(56,189,248,0.2)', background: 'rgba(56,189,248,0.1)', color: '#0ea5e9' };

  return (
    <header className={navClass}>
      <div className="px-4">
        <div className={containerClass}>
          {/* Logo */}
          <div className="flex items-center">
            <a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }} className={`text-xl font-bold tracking-tight transition-transform hover:scale-105 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Nidhi N
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  active === item.id ? navLinkActive : navLinkInactive
                }`}
              >
                {active === item.id && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className={`absolute inset-0 rounded-full -z-10 ${
                      isDark ? 'bg-sky-500/20' : 'bg-sky-100'
                    }`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links & Mobile Menu Button */}
          <div className="flex items-center gap-4 ml-auto md:ml-0">
            <div className="hidden md:flex items-center gap-4 border-r border-slate-700/50 pr-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-sky-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.label === 'GitHub' ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  ) : social.label === 'LinkedIn' ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ) : (
                    <span>{social.label}</span>
                  )}
                </a>
              ))}
            </div>

            <button
              className={`md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border transition-colors ${
                isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50'
              }`}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }} className={`block h-0.5 w-5 rounded-full ${isDark ? 'bg-white' : 'bg-slate-800'}`} />
              <motion.span animate={{ opacity: open ? 0 : 1 }} className={`block h-0.5 w-5 rounded-full ${isDark ? 'bg-white' : 'bg-slate-800'}`} />
              <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }} className={`block h-0.5 w-5 rounded-full ${isDark ? 'bg-white' : 'bg-slate-800'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute left-4 right-4 top-20 rounded-2xl border shadow-2xl md:hidden overflow-hidden ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}
            style={mobileMenuStyle}
          >
            <div className="flex flex-col p-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => { scrollToSection(item.id); setOpen(false); }}
                  className={`block rounded-xl px-4 py-3 text-left font-medium transition-all ${
                    active === item.id
                      ? isDark ? 'bg-sky-500/20 text-sky-300' : 'bg-sky-50 text-sky-600'
                      : isDark ? 'text-white/70 hover:bg-white/5 hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
