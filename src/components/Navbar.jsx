import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Training', href: '#education' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'backdrop-blur-md shadow-lg'
            : ''
        }`}
        style={{
          background: scrolled
            ? darkMode
              ? 'rgba(10,15,30,0.88)'
              : 'rgba(255,255,255,0.88)'
            : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 group"
              aria-label="Go to homepage"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm font-playfair transition-transform group-hover:scale-110 glow-border"
                style={{ background: 'linear-gradient(135deg, #00C9A7, #007B5E)' }}
              >
                SDG
              </div>
              <div className="hidden sm:block">
                <span
                  className="font-playfair font-semibold text-base"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Sauren Das Gupta
                </span>
                <p className="font-mono text-xs" style={{ color: 'var(--accent-teal)' }}>
                  Medical Assistant
                </p>
              </div>
            </button>

            {/* Center Nav Links (desktop) */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right: toggle + CTA */}
            <div className="flex items-center gap-3">
              {/* Dark/Light Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                id="theme-toggle"
                aria-label="Toggle dark/light mode"
                className="relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none"
                style={{
                  background: darkMode
                    ? 'rgba(0,201,167,0.2)'
                    : 'rgba(0,119,182,0.15)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <span
                  className="absolute top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs transition-all duration-300"
                  style={{
                    left: darkMode ? '26px' : '2px',
                    background: 'var(--accent-teal)',
                  }}
                >
                  {darkMode ? '🌙' : '☀️'}
                </span>
              </button>

              {/* WhatsApp Book Appointment CTA */}
              <a
                href="https://wa.me/8801813965097"
                target="_blank"
                rel="noopener noreferrer"
                id="navbar-whatsapp-cta"
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold font-inter transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #00C9A7, #007B5E)',
                  color: '#fff',
                  boxShadow: '0 4px 15px rgba(0,201,167,0.35)',
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.551 4.107 1.512 5.83L0 24l6.335-1.505A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.587-.458-5.112-1.266l-.367-.21-3.761.894.95-3.668-.228-.378A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Book Appointment
              </a>

              {/* Hamburger (mobile) */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden flex flex-col gap-1.5 p-2 ${mobileOpen ? 'hamburger-open' : ''}`}
                style={{ color: 'var(--text-primary)' }}
                aria-label="Toggle mobile menu"
              >
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col py-8 px-6 lg:hidden drawer-enter"
          style={{
            background: darkMode ? '#0D1526' : '#FFFFFF',
            borderLeft: '1px solid var(--border-color)',
          }}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs font-playfair"
                style={{ background: 'linear-gradient(135deg, #00C9A7, #007B5E)' }}
              >
                SDG
              </div>
              <span className="font-playfair font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                Sauren Das Gupta
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-2xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              ✕
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex flex-col gap-2 flex-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 rounded-xl font-inter font-medium transition-all duration-200 hover:pl-6"
                style={{
                  color: activeSection === link.href.replace('#', '')
                    ? 'var(--accent-teal)'
                    : 'var(--text-secondary)',
                  background: activeSection === link.href.replace('#', '')
                    ? 'rgba(0,201,167,0.1)'
                    : 'transparent',
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile WA Button */}
          <a
            href="https://wa.me/8801813965097"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #00C9A7, #007B5E)' }}
          >
            📱 Book Appointment
          </a>
        </div>
      )}
    </>
  );
}
