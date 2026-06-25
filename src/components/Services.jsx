const services = [
  {
    icon: '🩺',
    title: 'Primary Health Care',
    description: 'OPD clinical services following treatment protocols and national health guidelines.',
    color: '#00C9A7',
  },
  {
    icon: '🩹',
    title: 'First Aid & Wound Care',
    description: 'Basic emergency care, wound dressing, and management of acute injuries.',
    color: '#00B4D8',
  },
  {
    icon: '📋',
    title: 'Patient Screening & Triage',
    description: 'Rapid patient assessment using ABCDE approach for emergency prioritization.',
    color: '#7B2FBE',
  },
  {
    icon: '🛡️',
    title: 'Infection Prevention (IPC)',
    description: 'Monitoring IPC standards, conducting audits, and managing score cards.',
    color: '#E63946',
  },
  {
    icon: '🤱',
    title: 'Maternal Health',
    description: 'ANC/PNC visits, pregnancy counselling, and maternal medicine provision.',
    color: '#FF6B9D',
  },
  {
    icon: '🧠',
    title: 'Mental Health Referral',
    description: 'Identifying and referring psychological cases to MHPSS teams.',
    color: '#F77F00',
  },
  {
    icon: '📊',
    title: 'Health Data & Reporting',
    description: 'DHIS2, EWars, 4W, HeRAM systems and monthly narrative health reports.',
    color: '#06D6A0',
  },
  {
    icon: '🏕️',
    title: 'Medical Camp Management',
    description: 'Organizing static and satellite medical camps in underserved communities.',
    color: '#4361EE',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 section-bg-alt overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="mb-3">
            <span className="badge">⚕️ Services</span>
          </div>
          <h2
            className="font-playfair font-bold section-title inline-block"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--text-primary)' }}
          >
            What I{' '}
            <span className="gradient-text">Do</span>
          </h2>
          <p className="font-inter text-base mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A comprehensive suite of clinical and administrative healthcare services, delivered with precision and compassion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="glass-card p-6 flex flex-col gap-4 reveal cursor-default group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon ring */}
              <div
                className="service-icon-ring"
                style={{ borderColor: `${svc.color}40` }}
              >
                <span>{svc.icon}</span>
              </div>

              {/* Title */}
              <h3
                className="font-playfair font-semibold text-base leading-snug"
                style={{ color: 'var(--text-primary)' }}
              >
                {svc.title}
              </h3>

              {/* Description */}
              <p
                className="font-inter text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {svc.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="mt-auto h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${svc.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
