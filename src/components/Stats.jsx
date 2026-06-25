import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 8, suffix: '+', label: 'Years of Experience', icon: '⏱️', desc: 'Frontline Healthcare' },
  { value: 2, suffix: '', label: 'Major Organizations', icon: '🏢', desc: 'MOHFW & Mukti' },
  { value: 4, suffix: '', label: 'WHO/ICRC Trainings', icon: '🏅', desc: 'Certified & Verified' },
  { value: 1000, suffix: 's', label: 'Patients Served', icon: '❤️', desc: 'Lives Impacted' },
  { value: 3, suffix: '', label: 'Reporting Systems', icon: '📊', desc: 'DHIS2, EWars, HeRAM' },
];

function CounterStat({ stat, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const target = stat.value;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, stat.value]);

  return (
    <div className="flex flex-col items-center gap-2 px-6 py-8 group relative">
      {/* Vertical divider */}
      <div
        className="absolute right-0 top-1/4 bottom-1/4 w-px hidden lg:block"
        style={{ background: 'var(--border-color)' }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-1 transition-all duration-300 group-hover:scale-110"
        style={{
          background: 'rgba(0,201,167,0.08)',
          border: '1px solid var(--border-color)',
        }}
      >
        {stat.icon}
      </div>

      {/* Number */}
      <div className="flex items-baseline gap-0.5">
        <span
          className="font-playfair font-bold"
          style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--accent-teal)', lineHeight: 1 }}
        >
          {count}
        </span>
        <span
          className="font-playfair font-bold text-2xl"
          style={{ color: 'var(--accent-teal)' }}
        >
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p
        className="font-inter font-semibold text-sm text-center"
        style={{ color: 'var(--text-primary)' }}
      >
        {stat.label}
      </p>
      <p
        className="font-mono text-xs text-center"
        style={{ color: 'var(--text-secondary)' }}
      >
        {stat.desc}
      </p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative py-4 overflow-hidden"
    >
      {/* Background strip */}
      <div
        className="absolute inset-0 transition-colors duration-400"
        style={{
          background: 'var(--gradient-stats)',
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)',
        }}
      />

      {/* Subtle teal glow mid */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-24 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,201,167,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-0">
          {stats.map((stat, i) => (
            <CounterStat key={i} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
