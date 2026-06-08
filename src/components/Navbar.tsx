import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Intro', id: 'intro' },
  { label: 'About', id: 'about' },
  { label: 'Education', path: '/education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('intro');
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    const sections = navItems
      .filter((item): item is { label: string; id: string } => typeof item.id === 'string')
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.y > b.boundingClientRect.y ? 1 : -1));
        if (visible.length) {
          setActive(visible[0].target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0a192f]/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm text-white sm:px-8">
        <Link to="/" aria-label="Home" className="h-8 w-8 rounded-full border border-white/10 bg-[#64ffda]/10" />

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) =>
            item.path ? (
              <Link
                key={item.label}
                to={item.path}
                className={`transition-colors ${location.pathname === item.path ? 'text-[#64ffda]' : 'text-slate-300 hover:text-white'}`}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id ?? '')}
                className={`transition-colors ${active === item.id ? 'text-[#64ffda]' : 'text-slate-300 hover:text-white'}`}
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white mt-1"></span>
          <span className="block h-0.5 w-6 bg-white mt-1"></span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0a192f]/98 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) =>
              item.path ? (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2 text-left transition ${location.pathname === item.path ? 'bg-[#112240] text-[#64ffda]' : 'text-slate-200 hover:bg-white/5 hover:text-white'}`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    scrollToSection(item.id ?? '');
                    setOpen(false);
                  }}
                  className={`block rounded-lg px-3 py-2 text-left transition ${active === item.id ? 'bg-[#112240] text-[#64ffda]' : 'text-slate-200 hover:bg-white/5 hover:text-white'}`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
