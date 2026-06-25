const photos = [
  {
    src: '/images/ipc-session.jpg',
    caption: 'IPC Score Card Monitoring Session',
    sub: 'WHO Partnership · Cox\'s Bazar, 2022',
    badge: 'WHO',
    badgeColor: '#00C9A7',
  },
  {
    src: '/images/mohfwcc.jpg',
    caption: 'MOHFW Health Post Assessment',
    sub: 'With WHO Field Officer · Cox\'s Bazar',
    badge: 'MOHFW',
    badgeColor: '#0077B6',
  },
  {
    src: '/images/field-1.jpeg',
    caption: 'MOHFW Health Post Assessment',
    sub: 'With WHO Field Officer · Cox\'s Bazar',
    badge: 'MOHFW',
    badgeColor: '#0077B6',
  },
  {
    src: '/images/field-2.jpeg',
    caption: 'MOHFW Health Post Assessment',
    sub: 'With WHO Field Officer · Cox\'s Bazar',
    badge: 'MOHFW',
    badgeColor: '#0077B6',
  },
  {
    src: '/images/field-3.jpeg',
    caption: 'MOHFW Health Post Assessment',
    sub: 'With WHO Field Officer · Cox\'s Bazar',
    badge: 'MOHFW',
    badgeColor: '#0077B6',
  },
  {
    src: '/images/field-4.jpeg',
    caption: 'MOHFW Health Post Assessment',
    sub: 'With WHO Field Officer · Cox\'s Bazar',
    badge: 'MOHFW',
    badgeColor: '#0077B6',
  },
  {
    src: '/images/field-5.jpeg',
    caption: 'MOHFW Health Post Assessment',
    sub: 'With WHO Field Officer · Cox\'s Bazar',
    badge: 'MOHFW',
    badgeColor: '#0077B6',
  },
  {
    src: '/images/field-6.jpeg',
    caption: 'MOHFW Health Post Assessment',
    sub: 'With WHO Field Officer · Cox\'s Bazar',
    badge: 'MOHFW',
    badgeColor: '#0077B6',
  },
  {
    src: '/images/field-7.jpeg',
    caption: 'MOHFW Health Post Assessment',
    sub: 'With WHO Field Officer · Cox\'s Bazar',
    badge: 'MOHFW',
    badgeColor: '#0077B6',
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 lg:py-32 section-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="mb-3">
            <span className="badge">📷 Field Work</span>
          </div>
          <h2
            className="font-playfair font-bold section-title inline-block"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--text-primary)' }}
          >
            In the{' '}
            <span className="gradient-text">Field</span>
          </h2>
          <p className="font-inter text-base mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Real moments from years of frontline healthcare work — from refugee camps to village clinics.
          </p>
        </div>

        {/* Centered 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="gallery-card reveal relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                border: '1px solid var(--border-color)',
                height: '380px',
              }}
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div
                className="gallery-overlay absolute inset-0 flex flex-col justify-end p-6"
                style={{
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%)',
                }}
              >
                {/* Org Badge */}
                <span
                  className="font-mono text-xs px-2.5 py-1 rounded-full self-start mb-3"
                  style={{
                    background: `${photo.badgeColor}30`,
                    border: `1px solid ${photo.badgeColor}60`,
                    color: photo.badgeColor,
                  }}
                >
                  {photo.badge}
                </span>

                <h3 className="font-playfair font-semibold text-lg text-white leading-snug">
                  {photo.caption}
                </h3>
                <p className="font-inter text-xs mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {photo.sub}
                </p>
              </div>

              {/* Corner teal glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: 'inset 0 0 0 2px rgba(0,201,167,0.5)' }}
              />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="text-center font-mono text-xs mt-8 reveal"
          style={{ color: 'var(--text-secondary)' }}
        >
          All images are from actual field activities. © Sauren Das Gupta
        </p>
      </div>
    </section>
  );
}
