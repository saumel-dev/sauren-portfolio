const socials = [
  {
    id: 'facebook',
    name: 'Facebook',
    handle: '@sauren.das91',
    href: 'https://www.facebook.com/sauren.das91',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    color: '#1877F2',
    bg: 'rgba(24,119,242,0.1)',
    border: 'rgba(24,119,242,0.3)',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@sauren.das91',
    href: 'https://www.instagram.com/sauren.das91',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: '#E4405F',
    bg: 'rgba(228,64,95,0.1)',
    border: 'rgba(228,64,95,0.3)',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    handle: '+880 1813 965097',
    href: 'https://wa.me/8801813965097',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.551 4.107 1.512 5.83L0 24l6.335-1.505A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.587-.458-5.112-1.266l-.367-.21-3.761.894.95-3.668-.228-.378A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
    color: '#25D366',
    bg: 'rgba(37,211,102,0.1)',
    border: 'rgba(37,211,102,0.3)',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'sauren-das',
    href: 'https://www.linkedin.com/in/sauren-das',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: '#0A66C2',
    bg: 'rgba(10,102,194,0.1)',
    border: 'rgba(10,102,194,0.3)',
  },
  {
    id: 'email',
    name: 'Email',
    handle: 'sauren.asp91@gmail.com',
    href: 'mailto:sauren.asp91@gmail.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    color: '#EA4335',
    bg: 'rgba(234,67,53,0.1)',
    border: 'rgba(234,67,53,0.3)',
  },
  {
    id: 'phone',
    name: 'Phone',
    handle: '01813-965097',
    href: 'tel:01813965097',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
    color: '#00C9A7',
    bg: 'rgba(0,201,167,0.1)',
    border: 'rgba(0,201,167,0.3)',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 section-bg overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="mb-3">
            <span className="badge">🤝 Connect</span>
          </div>
          <h2
            className="font-playfair font-bold section-title inline-block"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--text-primary)' }}
          >
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="font-inter text-base mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Reach out through any of my platforms. I'm available for healthcare consultations, collaborations, and community health initiatives.
          </p>
        </div>

        {/* Social grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {socials.map((s, i) => (
            <a
              key={s.id}
              id={`contact-${s.id}`}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="glass-card p-6 flex items-center gap-4 group reveal no-underline"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: s.bg,
                  border: `1px solid ${s.border}`,
                  color: s.color,
                }}
              >
                {s.icon}
              </div>

              <div className="flex flex-col gap-0.5">
                <p
                  className="font-inter font-semibold text-sm"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {s.name}
                </p>
                <p
                  className="font-mono text-xs break-all"
                  style={{ color: s.color }}
                >
                  {s.handle}
                </p>
              </div>

              {/* Arrow */}
              <div
                className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                style={{ color: s.color }}
              >
                →
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 reveal">
          <p className="font-inter text-sm" style={{ color: 'var(--text-secondary)' }}>
            Prefer a direct message?
          </p>
          <a
            href="https://wa.me/8801813965097"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-8 py-3.5 rounded-full font-inter font-semibold text-white transition-all duration-300 hover:scale-105 wa-pulse"
            style={{
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              boxShadow: '0 6px 25px rgba(37,211,102,0.3)',
            }}
          >
           Send WhatsApp Message
          </a>
        </div>
      </div>
    </section>
  );
}
