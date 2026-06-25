const experiences = [
  {
    role: 'Medical Assistant',
    org: 'MOHFW Coordination Centre & ICRC Project',
    location: "Cox's Bazar, Bangladesh",
    duration: 'Feb 2020 – Feb 2023',
    years: '3 Years',
    badges: ['NGO', 'Healthcare', "Cox's Bazar"],
    icon: '🏥',
    color: '#00C9A7',
    highlights: [
      "Managed IPC standards at WHO-partnered MOHFW health posts",
      "Provided primary OPD care to Rohingya refugee population",
      "Conducted monthly IPC audits and scorecard monitoring",
      "Reported via DHIS2, EWars, and HeRAM systems",
      "Collaborated with WHO and ICRC field officers",
    ],
  },
  {
    role: 'Enrich Health Officer',
    org: 'Mukti Cox\'s Bazar',
    location: "Cox's Bazar, Bangladesh",
    duration: 'Aug 2014 – Jan 2020',
    years: '5+ Years',
    badges: ['NGO', 'Community Health', "Cox's Bazar"],
    icon: '🌿',
    color: '#4361EE',
    highlights: [
      "Delivered community-based health education programs",
      "Conducted ANC/PNC counselling for mothers",
      "Organized satellite medical camps in remote areas",
      "Managed health data and reporting under PKSF",
      "Led team of community health workers",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 lg:py-32 section-bg overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="mb-3">
            <span className="badge">💼 Career</span>
          </div>
          <h2
            className="font-playfair font-bold section-title inline-block"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--text-primary)' }}
          >
            Professional{' '}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="font-inter text-base mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Over 8 years of dedicated service across leading healthcare organizations in Bangladesh.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(0,201,167,0.4), transparent)' }}
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.role}
                className={`flex flex-col lg:flex-row gap-6 lg:gap-0 items-start reveal ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Card */}
                <div className={`w-full lg:w-5/12 ${i % 2 === 0 ? 'lg:pr-10 lg:text-right' : 'lg:pl-10'}`}>
                  <div
                    className="glass-card p-6 flex flex-col gap-4"
                    style={{ borderLeft: i % 2 === 0 ? 'none' : `3px solid ${exp.color}`, borderRight: i % 2 === 0 ? `3px solid ${exp.color}` : 'none' }}
                  >
                    {/* Duration */}
                    <span
                      className="font-mono text-xs"
                      style={{ color: exp.color }}
                    >
                      📅 {exp.duration}
                    </span>

                    {/* Role */}
                    <h3
                      className="font-playfair font-bold text-lg"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {exp.role}
                    </h3>

                    {/* Org */}
                    <div className={`flex flex-col gap-1 ${i % 2 === 0 ? 'lg:items-end' : ''}`}>
                      <p className="font-inter font-semibold text-sm" style={{ color: exp.color }}>
                        {exp.org}
                      </p>
                      <p className="font-inter text-xs" style={{ color: 'var(--text-secondary)' }}>
                        📍 {exp.location}
                      </p>
                    </div>

                    {/* Highlights */}
                    <ul className={`flex flex-col gap-2 ${i % 2 === 0 ? 'lg:items-end' : ''}`}>
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm font-inter" style={{ color: 'var(--text-secondary)' }}>
                          {i % 2 === 0 ? (
                            <>
                              <span className="flex-1 text-right hidden lg:block">{h}</span>
                              <span className="hidden lg:block" style={{ color: exp.color }}>▸</span>
                              <span className="lg:hidden" style={{ color: exp.color }}>▸</span>
                              <span className="flex-1 lg:hidden">{h}</span>
                            </>
                          ) : (
                            <>
                              <span style={{ color: exp.color }}>▸</span>
                              <span className="flex-1">{h}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>

                    {/* Badges */}
                    <div className={`flex flex-wrap gap-2 mt-2 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      {exp.badges.map((b) => (
                        <span
                          key={b}
                          className="font-mono text-xs px-2.5 py-1 rounded-full"
                          style={{
                            background: `${exp.color}15`,
                            border: `1px solid ${exp.color}40`,
                            color: exp.color,
                          }}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex w-2/12 justify-center items-start pt-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 relative glow-border"
                    style={{
                      background: 'var(--bg-primary)',
                      border: `2px solid ${exp.color}`,
                      boxShadow: `0 0 20px ${exp.color}40`,
                    }}
                  >
                    {exp.icon}
                  </div>
                </div>

                {/* Years badge */}
                <div className={`hidden lg:flex w-5/12 items-start pt-8 ${i % 2 === 0 ? 'lg:pl-10' : 'lg:pr-10 lg:justify-end'}`}>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{
                      background: `${exp.color}10`,
                      border: `1px solid ${exp.color}30`,
                    }}
                  >
                    <span className="font-mono text-xs font-medium" style={{ color: exp.color }}>
                      ⏱️ {exp.years}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
