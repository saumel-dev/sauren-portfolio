const educationItems = [
  {
    degree: 'Diploma in Medical Technology',
    field: 'Medical Assistant',
    institution: 'Medical Assistant Training School',
    location: 'Noakhali, Bangladesh',
    year: '2008 – 2012',
    icon: '🎓',
  },
  {
    degree: 'SSC (Science)',
    field: 'Secondary School Certificate',
    institution: 'Fatickchari Coronation Model High School',
    location: 'Chittagong Board',
    year: '2007',
    icon: '📚',
    extra: 'CGPA 4.38',
  },
];

const certifications = [
  {
    title: 'HeRAMS Implementation Training',
    org: 'WHO & Health Sector',
    location: "Cox's Bazar",
    year: '2022',
    icon: '🏅',
    color: '#00C9A7',
    orgBadge: 'WHO',
  },
  {
    title: 'IPC Management Training',
    org: 'World Health Organization',
    location: "Cox's Bazar",
    year: '2022',
    icon: '🛡️',
    color: '#0077B6',
    orgBadge: 'WHO',
  },
  {
    title: 'Patient Triage System',
    org: 'International Committee of the Red Cross',
    location: "Cox's Bazar",
    year: '2020',
    icon: '🩺',
    color: '#E63946',
    orgBadge: 'ICRC',
  },
  {
    title: 'Health Care & Nutrition Training',
    org: 'PKSF',
    location: 'Dhaka',
    year: '2018',
    icon: '🌿',
    color: '#4361EE',
    orgBadge: 'PKSF',
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 lg:py-32 section-bg-alt overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="mb-3">
            <span className="badge">🎓 Qualifications</span>
          </div>
          <h2
            className="font-playfair font-bold section-title inline-block"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--text-primary)' }}
          >
            Qualifications &{' '}
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="font-inter text-base mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Academically trained and field-certified across multiple international healthcare standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Education */}
          <div className="reveal-left flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                style={{ background: 'rgba(0,201,167,0.15)', border: '1px solid rgba(0,201,167,0.3)' }}
              >
                📚
              </div>
              <h3 className="font-playfair font-semibold text-xl" style={{ color: 'var(--text-primary)' }}>
                Education
              </h3>
            </div>

            {educationItems.map((item, i) => (
              <div
                key={i}
                className="glass-card p-6 flex gap-4 relative overflow-hidden group"
              >
                {/* Left accent */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{ background: 'linear-gradient(180deg, #00C9A7, #0077B6)' }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'rgba(0,201,167,0.1)', border: '1px solid rgba(0,201,167,0.2)' }}
                >
                  {item.icon}
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-inter font-semibold text-sm leading-snug" style={{ color: 'var(--text-primary)' }}>
                      {item.degree}
                    </h4>
                    <span className="font-mono text-xs flex-shrink-0" style={{ color: 'var(--accent-teal)' }}>
                      {item.year}
                    </span>
                  </div>
                  <p className="font-inter text-sm" style={{ color: 'var(--accent-teal)' }}>{item.field}</p>
                  <p className="font-inter text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {item.institution}
                  </p>
                  <p className="font-inter text-xs" style={{ color: 'var(--text-secondary)' }}>
                    📍 {item.location}
                  </p>
                  {item.extra && (
                    <span
                      className="mt-2 self-start font-mono text-xs px-2 py-0.5 rounded"
                      style={{ background: 'rgba(255,215,0,0.1)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.3)' }}
                    >
                      🏆 {item.extra}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="reveal-right flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                style={{ background: 'rgba(0,201,167,0.15)', border: '1px solid rgba(0,201,167,0.3)' }}
              >
                🏅
              </div>
              <h3 className="font-playfair font-semibold text-xl" style={{ color: 'var(--text-primary)' }}>
                International Certifications
              </h3>
            </div>

            {certifications.map((cert, i) => (
              <div
                key={i}
                className="glass-card p-5 flex gap-4 relative overflow-hidden group"
              >
                {/* Left accent */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{ background: cert.color }}
                />

                {/* Org badge */}
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}40` }}
                  >
                    {cert.icon}
                  </div>
                  <span
                    className="font-mono text-xs font-bold px-1.5 py-0.5 rounded"
                    style={{ background: `${cert.color}20`, color: cert.color, fontSize: '0.6rem' }}
                  >
                    {cert.orgBadge}
                  </span>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-inter font-semibold text-sm leading-snug" style={{ color: 'var(--text-primary)' }}>
                      {cert.title}
                    </h4>
                    <span className="font-mono text-xs flex-shrink-0" style={{ color: cert.color }}>
                      {cert.year}
                    </span>
                  </div>
                  <p className="font-inter text-sm font-medium" style={{ color: cert.color }}>
                    {cert.org}
                  </p>
                  <p className="font-inter text-xs" style={{ color: 'var(--text-secondary)' }}>
                    📍 {cert.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
