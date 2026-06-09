import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [active, setActive] = useState('intro');
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 80);
  };

  useEffect(() => {
    if (location.pathname !== '/') {
      setActive('');
      return;
    }

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 180;
      const currentSection = navItems
        .filter((item): item is { label: string; id: string } => typeof item.id === 'string')
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => section !== null)
        .reverse()
        .find((section) => section.offsetTop <= scrollPosition);

      setActive(currentSection?.id ?? 'intro');
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [location.pathname]);

  const accent = isDark ? '#64ffda' : '#0066cc';
  const headerClass = isDark
    ? 'border-b border-white/10 bg-[#0a192f]/95 backdrop-blur-lg'
    : 'border-b border-slate-200 bg-white/95 backdrop-blur-lg';
  const textClass = isDark ? 'text-white' : 'text-[#0f172a]';
  const navLinkActive = isDark ? 'text-[#64ffda]' : 'text-[#0066cc]';
  const navLinkInactive = isDark ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-[#0f172a]';
  const mobileMenuBg = isDark ? 'border-white/10 bg-[#0a192f]/98' : 'border-slate-200 bg-white';
  const mobileActiveLink = isDark ? 'bg-[#112240] text-[#64ffda]' : 'bg-[#e8f0fe] text-[#0066cc]';
  const mobileInactiveLink = isDark ? 'text-slate-200 hover:bg-white/5 hover:text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-[#0f172a]';
  const hamburgerBg = isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50';
  const hamburgerBar = isDark ? 'bg-white' : 'bg-[#0f172a]';

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${headerClass}`}>
      <div className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm sm:px-8 ${textClass}`}>
        <Link to="/" aria-label="Home" className="h-8 w-8 rounded-full border border-white/10 bg-[#64ffda]/10" style={{ borderColor: `${accent}33` }} />

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`transition-colors ${active === item.id ? navLinkActive : navLinkInactive}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200 ${
              isDark
                ? 'border-white/20 bg-white/5 text-[#64ffda] hover:bg-[#64ffda]/10 hover:border-[#64ffda]/40'
                : 'border-slate-300 bg-slate-100 text-[#0066cc] hover:bg-slate-200'
            }`}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className={`inline-flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-lg border transition-colors md:hidden ${hamburgerBg}`}
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            <span className={`block h-0.5 w-5 ${hamburgerBar}`}></span>
            <span className={`block h-0.5 w-5 ${hamburgerBar}`}></span>
            <span className={`block h-0.5 w-5 ${hamburgerBar}`}></span>
          </button>
        </div>
      </div>

      {open && (
        <div className={`border-t px-6 py-4 md:hidden ${mobileMenuBg}`}>
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  scrollToSection(item.id);
                  setOpen(false);
                }}
                className={`block rounded-lg px-3 py-2 text-left transition ${active === item.id ? mobileActiveLink : mobileInactiveLink}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
