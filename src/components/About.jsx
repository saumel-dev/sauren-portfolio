import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'IPC Management', icon: '🛡️', desc: 'Infection prevention audits, standard precautions, and WHO scorecard monitoring.' },
  { name: 'Patient Triage', icon: '🩺', desc: 'Frontline patient assessment using standardized ABCDE triage protocols.' },
  { name: 'DHIS2 Reporting', icon: '📊', desc: 'National health data entry, routine information updates, and reporting.' },
  { name: 'Wound Care', icon: '🩹', desc: 'Sterile cleaning, acute wound dressing, and surgical post-care assistance.' },
  { name: 'ANC/PNC Counselling', icon: '🤱', desc: 'Antenatal and post-natal advisory support and maternal hygiene guidance.' },
  { name: 'Health Education', icon: '🗣️', desc: 'Promoting community health standards, hygiene practices, and disease prevention.' },
  { name: 'EWars Reporting', icon: '🚨', desc: 'Epidemiological surveillance and alert systems for early infection control.' },
  { name: 'HeRAM System', icon: '🌐', desc: 'Monitoring health resource availability and service delivery standards.' },
];

function CompetencyCard({ skill }) {
  return (
    <div
      className="glass-card p-4 flex gap-4 items-start transition-all duration-300"
      style={{
        border: '1px solid var(--border-color)',
        borderRadius: '12.5px',
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
        style={{
          background: 'rgba(0,201,167,0.1)',
          border: '1px solid rgba(0,201,167,0.2)',
        }}
      >
        {skill.icon}
      </div>
      <div className="flex flex-col gap-0.5">
        <h4 className="font-inter font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
          {skill.name}
        </h4>
        <p className="font-inter text-xs" style={{ color: 'var(--text-secondary)', lineHeight: '1.4' }}>
          {skill.desc}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 section-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Photo */}
          <div
            className={`flex justify-center lg:justify-start transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Angled accent card behind */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,201,167,0.15), rgba(0,119,182,0.1))',
                  border: '1px solid rgba(0,201,167,0.2)',
                  transform: 'rotate(3deg)',
                }}
              />
              <div
                className="absolute -bottom-8 -right-8 w-full h-full rounded-2xl"
                style={{
                  background: 'rgba(0,201,167,0.05)',
                  border: '1px solid rgba(0,201,167,0.1)',
                  transform: 'rotate(6deg)',
                }}
              />

              {/* Photo */}
              <div
                className="relative w-72 sm:w-80 h-96 sm:h-[420px] rounded-2xl overflow-hidden"
                style={{
                  border: '2px solid rgba(0,201,167,0.5)',
                  boxShadow: '0 0 40px rgba(0,201,167,0.2)',
                }}
              >
                <img
                  src="/images/mohfwcc.jpg"
                  alt="Sauren Das Gupta with WHO Field Officer at MOHFW Health Post, Cox's Bazar"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, transparent 50%, rgba(0,15,30,0.6) 100%)',
                  }}
                />
                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-mono text-xs text-white">MOHFW Coordination Centre</p>
                  <p className="font-inter text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    WHO Partnership · Cox's Bazar
                  </p>
                </div>
              </div>

              {/* Floating years badge */}
              <div
                className="absolute -top-4 -left-4 glass-card px-4 py-3 text-center float-anim"
              >
                <p className="font-playfair font-bold text-2xl" style={{ color: 'var(--accent-teal)' }}>8+</p>
                <p className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>Years</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div
            className={`flex flex-col gap-6 transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Section label */}
            <span className="badge self-start ">👤 About Me</span>

            {/* Heading */}
            <h2
              className="font-playfair font-bold section-title"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--text-primary)' }}
            >
              Who is{' '}
              <span className="gradient-text">Sauren Das Gupta?</span>
            </h2>

            {/* Bio */}
            <p className="font-inter text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Sauren Das Gupta is a dedicated Medical Assistant with over{' '}
              <strong style={{ color: 'var(--text-primary)' }}>8 years of hands-on experience</strong> in frontline healthcare
              delivery across Bangladesh. From managing Infection Prevention &amp; Control in WHO-partnered health posts to
              providing critical primary care in{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Rohingya refugee camps in Cox's Bazar</strong>, Sauren has
              demonstrated unwavering commitment to patient welfare and community health.
            </p>
            <p className="font-inter text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Specially trained by{' '}
              <strong style={{ color: 'var(--accent-teal)' }}>WHO and ICRC</strong>, he is proficient in triage systems,
              maternal health counselling, health data reporting (DHIS2, EWars, HeRAM, 4W), and IPC audit monitoring. His
              work bridges the gap between clinical care and data-driven health management.
            </p>

            {/* Skill badges (pill style) */}
            <div className="flex flex-wrap gap-2 mt-1">
              {['IPC Management', 'Patient Triage', 'DHIS2 Reporting', 'Wound Care', 'ANC/PNC Counselling', 'Health Education', 'EWars', 'HeRAM'].map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
                  style={{
                    background: 'rgba(0,201,167,0.1)',
                    border: '1px solid rgba(0,201,167,0.3)',
                    color: 'var(--accent-teal)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Core Competencies */}
            <div className="flex flex-col gap-4 mt-4">
              <p className="font-inter font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                Core Competencies
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <CompetencyCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
