export default function Chamber() {
  return (
    <section
      id="chamber"
      className="py-24 lg:py-32 section-bg-alt overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="mb-3">
            <span className="badge">🏪 Chamber</span>
          </div>
          <h2
            className="font-playfair font-bold section-title inline-block"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--text-primary)' }}
          >
            Visit My{' '}
            <span className="gradient-text">Chamber</span>
          </h2>
          <p className="font-inter text-base mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Walk in for a consultation or book an appointment in advance via WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Info card */}
          <div className="reveal-left flex flex-col gap-6">
            <div
              className="glass-card p-8 flex flex-col gap-6"
              style={{ borderLeft: '3px solid var(--accent-teal)' }}
            >
              {/* Chamber name */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: 'rgba(0,201,167,0.12)', border: '1px solid rgba(0,201,167,0.3)' }}
                  >
                    💊
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                      Torab Pharmacy
                    </h3>
                    <p className="font-inter text-sm" style={{ color: 'var(--text-secondary)' }}>
                      তোরাব ফার্মেসী
                    </p>
                  </div>
                </div>
                <div
                  className="h-px mt-4"
                  style={{ background: 'var(--border-color)' }}
                />
              </div>

              {/* Contact rows */}
              {[
                {
                  icon: '📍',
                  label: 'Chamber Address',
                  value: 'Tejendra Square, Bibirhat, Fatikchhari',
                  sub: 'তেজেন্দ্র স্কয়ার, বিবিরহাট, ফটিকছড়ি',
                },
                {
                  icon: '🏠',
                  label: 'Home Address',
                  value: 'North Paindong, Berajali Hindupara',
                  sub: 'Fatikchhari, Chattogram-4350',
                },
                {
                  icon: '📞',
                  label: 'Phone',
                  value: '01813-965097',
                  href: 'tel:+8801813-965097',
                },
                {
                  icon: '✉️',
                  label: 'Email',
                  value: 'sauren.asp91@gmail.com',
                  href: 'mailto:sauren.asp91@gmail.com',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
                    style={{ background: 'rgba(0,201,167,0.1)', border: '1px solid rgba(0,201,167,0.2)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-mono text-xs mb-0.5" style={{ color: 'var(--text-secondary)' }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-inter text-sm font-medium transition-colors duration-200 hover:underline"
                        style={{ color: 'var(--accent-teal)' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-inter text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                        {item.value}
                      </p>
                    )}
                    {item.sub && (
                      <p className="font-inter text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                        {item.sub}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/8801813965097"
                target="_blank"
                rel="noopener noreferrer"
                id="chamber-whatsapp"
                className="flex items-center justify-center gap-3 py-4 rounded-xl font-inter font-semibold text-white transition-all duration-300 hover:scale-[1.02] wa-pulse mt-2"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  boxShadow: '0 6px 25px rgba(37,211,102,0.3)',
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.551 4.107 1.512 5.83L0 24l6.335-1.505A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.587-.458-5.112-1.266l-.367-.21-3.761.894.95-3.668-.228-.378A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Map placeholder */}
          <div className="reveal-right">
            <div
              className="glass-card overflow-hidden"
              style={{ height: '460px' }}
            >
              {/* Map mock */}
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-4 relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,201,167,0.05) 0%, rgba(0,119,182,0.05) 100%)',
                }}
              >
                {/* Grid lines mock */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(var(--accent-teal) 1px, transparent 1px), linear-gradient(90deg, var(--accent-teal) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Animated pin */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  {/* Pulse rings */}
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'rgba(0,201,167,0.15)',
                        animation: 'pulseRing 2s ease-out infinite',
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'rgba(0,201,167,0.1)',
                        animation: 'pulseRing 2s ease-out 0.6s infinite',
                      }}
                    />
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                      style={{
                        background: 'linear-gradient(135deg, #00C9A7, #007B5E)',
                        boxShadow: '0 0 20px rgba(0,201,167,0.5)',
                      }}
                    >
                      📍
                    </div>
                  </div>

                  <div className="glass-card px-6 py-4 text-center">
                    <p className="font-playfair font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                      Torab Pharmacy
                    </p>
                    <p className="font-inter text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                      Tejendra Square, Bibirhat
                    </p>
                    <p className="font-inter text-xs" style={{ color: 'var(--text-secondary)' }}>
                      Fatikchhari, Chattogram-4350
                    </p>
                    <a
                      href="https://maps.app.goo.gl/MqFg3eVPTrFC4eCs5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 font-mono text-xs transition-colors duration-200 hover:underline"
                      style={{ color: 'var(--accent-teal)' }}
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>

                {/* Road lines mock */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
                  preserveAspectRatio="none"
                  viewBox="0 0 400 460"
                >
                  <line x1="0" y1="230" x2="400" y2="230" stroke="#00C9A7" strokeWidth="2" strokeDasharray="8,4" />
                  <line x1="200" y1="0" x2="200" y2="460" stroke="#00C9A7" strokeWidth="2" strokeDasharray="8,4" />
                  <line x1="0" y1="100" x2="400" y2="350" stroke="#0077B6" strokeWidth="1" strokeDasharray="6,6" />
                  <line x1="0" y1="350" x2="400" y2="100" stroke="#0077B6" strokeWidth="1" strokeDasharray="6,6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
