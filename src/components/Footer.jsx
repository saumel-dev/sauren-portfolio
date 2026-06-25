const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Training', href: '#education' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Chamber', href: '#chamber' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: '#060B17',
        borderTop: '1px solid rgba(0,201,167,0.12)',
      }}
    >
      {/* Animated heartbeat SVG */}
      <div className="w-full overflow-hidden" style={{ height: '48px' }}>
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          className="w-full h-full"
          aria-hidden="true"
        >
          <polyline
            points="0,24 120,24 180,8 220,40 260,8 300,40 340,24 520,24 580,8 620,40 660,8 700,40 740,24 1440,24"
            fill="none"
            stroke="#00C9A7"
            strokeWidth="1.5"
            strokeOpacity="0.6"
            className="heartbeat-path"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm font-playfair glow-border"
                style={{ background: 'linear-gradient(135deg, #00C9A7, #007B5E)' }}
              >
                SDG
              </div>
              <div>
                <p className="font-playfair font-semibold text-base text-white">Sauren Das Gupta</p>
                <p className="font-mono text-xs" style={{ color: '#00C9A7' }}>Medical Assistant</p>
              </div>
            </div>
            <p className="font-inter text-sm leading-relaxed" style={{ color: '#6B7F94' }}>
              Dedicated to Your Health — delivering compassionate, expert healthcare across Bangladesh for over 8 years.
            </p>
            {/* Social mini icons */}
            <div className="flex gap-3 mt-2">
              {[
                { href: 'https://www.facebook.com/sauren.das91', label: 'Facebook', icon: 'f' },
                { href: 'https://www.instagram.com/sauren.das91', label: 'Instagram', icon: '📷' },
                { href: 'https://wa.me/8801813965097', label: 'WhatsApp', icon: '💬' },
                { href: 'https://www.linkedin.com/in/sauren-das', label: 'LinkedIn', icon: 'in' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'rgba(0,201,167,0.1)',
                    border: '1px solid rgba(0,201,167,0.2)',
                    color: '#00C9A7',
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-playfair font-semibold text-white text-base">Quick Links</h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left font-inter text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: '#6B7F94' }}
                >
                   {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-playfair font-semibold text-white text-base">Contact</h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: '📞', label: 'tel:01813965097', text: '01813-965097' },
                { icon: '✉️', label: 'mailto:sauren.asp91@gmail.com', text: 'sauren.asp91@gmail.com' },
                { icon: '📍', label: null, text: 'Fatikchhari, Chattogram-4350' },
              ].map((c) => (
                <div key={c.text} className="flex items-center gap-3">
                  <span className="text-base">{c.icon}</span>
                  {c.label ? (
                    <a
                      href={c.label}
                      className="font-inter text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: '#6B7F94' }}
                    >
                      {c.text}
                    </a>
                  ) : (
                    <span className="font-inter text-sm" style={{ color: '#6B7F94' }}>
                      {c.text}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Book button */}
            <a
              href="https://wa.me/8801813965097"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold font-inter text-white transition-all duration-300 hover:scale-105 self-start"
              style={{
                background: 'linear-gradient(135deg, #00C9A7, #007B5E)',
                boxShadow: '0 4px 15px rgba(0,201,167,0.3)',
              }}
            >
              📅 Book Appointment
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,201,167,0.2), transparent)' }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs" style={{ color: '#4A5568' }}>
            © 2026 Sauren Das Gupta. All rights reserved.
          </p>
          <p className="font-inter text-xs" style={{ color: '#4A5568' }}>
            Fatikchhari, Chattogram, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
