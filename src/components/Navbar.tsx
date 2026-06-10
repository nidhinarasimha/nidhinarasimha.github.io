import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
    if (location.pathname !== '/') { setActive(''); return; }
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 180;
      const current = navItems
        .filter((item): item is { label: string; id: string } => typeof item.id === 'string')
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => section !== null)
        .reverse()
        .find((section) => section.offsetTop <= scrollPosition);
      setActive(current?.id ?? 'intro');
    };
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [location.pathname]);

  const headerStyle = isDark
    ? { background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }
    : undefined;
  const headerClass = isDark
    ? 'fixed left-0 right-0 top-0 z-50'
    : 'fixed left-0 right-0 top-0 z-50 border-b border-sky-200 bg-white/95 backdrop-blur-lg';

  const navLinkActive   = isDark ? 'text-[#7dd3fc]' : 'text-[#38bdf8]';
  const navLinkInactive = isDark ? 'text-white/50 hover:text-white' : 'text-slate-500 hover:text-[#0c1a2e]';
  const textBase        = isDark ? 'text-white' : 'text-[#0c1a2e]';

  const mobileMenuStyle = isDark
    ? { background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderTop: '1px solid rgba(255,255,255,0.07)' }
    : undefined;
  const mobileMenuClass  = isDark ? '' : 'border-t border-sky-200 bg-white';
  const mobileActive     = isDark ? 'text-[#7dd3fc]' : 'text-[#38bdf8] bg-[#e0f2fe]';
  const mobileInactive   = isDark ? 'text-white/60 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:bg-sky-50 hover:text-[#0c1a2e]';

  const toggleStyle = isDark
    ? { border: '1px solid rgba(125,211,252,0.25)', background: 'rgba(125,211,252,0.08)', color: '#7dd3fc' }
    : { border: '1px solid rgba(56,189,248,0.3)',   background: 'rgba(56,189,248,0.08)',  color: '#38bdf8' };
  const toggleClass = isDark
    ? 'flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:bg-[#7dd3fc]/15'
    : 'flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:bg-[#38bdf8]/15';

  const hamburgerClass = isDark
    ? 'md:hidden inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors hover:bg-white/5'
    : 'md:hidden inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-sky-200 bg-sky-50 transition-colors';
  const barClass = isDark ? 'block h-0.5 w-5 bg-white/70' : 'block h-0.5 w-5 bg-[#0c1a2e]';

  return (
    <header className={headerClass} style={headerStyle}>
      <div className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm sm:px-8 ${textBase}`}>
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
            className={toggleClass}
            style={toggleStyle}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className={hamburgerClass}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <span className={barClass}></span>
            <span className={barClass}></span>
            <span className={barClass}></span>
          </button>
        </div>
      </div>

      {open && (
        <div className={`px-6 py-4 md:hidden ${mobileMenuClass}`} style={mobileMenuStyle}>
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => { scrollToSection(item.id); setOpen(false); }}
                className={`block rounded-lg px-3 py-2 text-left transition ${active === item.id ? mobileActive : mobileInactive}`}
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
