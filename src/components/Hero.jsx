import { useState, useEffect, useRef } from 'react';
import { useParallax } from '../hooks/useScrollAnimation';

const titles = [
  'Medical Assistant',
  'Community Health Advocate',
  'IPC Specialist',
  'Field Healthcare Expert',
];

const floatingIcons = [
  { icon: '🩺', class: 'icon-float-1', style: { top: '12%', left: '8%', fontSize: '3rem' } },
  { icon: '❤️‍🩹', class: 'icon-float-2', style: { top: '20%', right: '12%', fontSize: '2.5rem' } },
  { icon: '💉', class: 'icon-float-3', style: { bottom: '22%', left: '14%', fontSize: '2.2rem' } },
  { icon: '➕', class: 'icon-float-4', style: { bottom: '18%', right: '8%', fontSize: '2.8rem' } },
  { icon: '🏥', class: 'icon-float-1', style: { top: '50%', left: '3%', fontSize: '2rem' } },
  { icon: '💊', class: 'icon-float-3', style: { top: '35%', right: '5%', fontSize: '1.8rem' } },
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const parallaxRef = useRef(null);
  useParallax(parallaxRef, 0.25);

  // Typewriter effect
  useEffect(() => {
    const current = titles[titleIndex];
    let timeout;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 45);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Parallax background blobs */}
      <div ref={parallaxRef} className="absolute inset-0 pointer-events-none hero-parallax">
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,201,167,0.07) 0%, transparent 70%)',
            top: '-100px',
            right: '-100px',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,119,182,0.06) 0%, transparent 70%)',
            bottom: '-80px',
            left: '-80px',
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--accent-teal) 1px, transparent 1px), linear-gradient(90deg, var(--accent-teal) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating medical icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.map((item, i) => (
          <div
            key={i}
            className={`absolute ${item.class} select-none`}
            style={{ ...item.style, filter: 'grayscale(30%)' }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT: Text content */}
          <div className="flex flex-col gap-6 lg:gap-7">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className="badge">🏥 Healthcare Professional</span>
            </div>

            {/* Headline */}
            <h1 className="font-playfair font-bold leading-tight" style={{ color: 'var(--text-primary)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
              Compassionate Care.{' '}
              <span className="gradient-text">Clinical</span>{' '}
              Excellence.
            </h1>

            {/* Typewriter subtitle */}
            <div className="flex items-center gap-3 h-10">
              <div
                className="w-1 h-8 rounded-full"
                style={{ background: 'var(--accent-teal)' }}
              />
              <p
                className="font-inter font-semibold text-xl typewriter-cursor"
                style={{ color: 'var(--accent-teal)', minWidth: '280px' }}
              >
                {displayText}
              </p>
            </div>

            {/* Tagline */}
            <p className="font-inter text-base leading-relaxed max-w-lg" style={{ color: 'var(--text-secondary)' }}>
              8+ years of frontline healthcare experience across NGO and government health sectors in Bangladesh — serving communities from Cox's Bazar to the Rohingya refugee camps.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/8801813965097"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-book-appointment"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-inter font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #00C9A7, #007B5E)',
                  boxShadow: '0 6px 25px rgba(0,201,167,0.4)',
                }}
              >
                Book Appointment →
              </a>
              <button
                onClick={scrollToAbout}
                id="hero-view-work"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-inter font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  border: '2px solid var(--accent-teal)',
                  color: 'var(--accent-teal)',
                  background: 'transparent',
                }}
              >
                View My Work ↓
              </button>
            </div>

            {/* Micro stats */}
            <div className="flex items-center gap-6 pt-2">
              {[
                { value: '8+', label: 'Years Exp.' },
                { value: 'WHO', label: 'Trained' },
                { value: 'ICRC', label: 'Certified' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-playfair font-bold text-2xl" style={{ color: 'var(--accent-teal)' }}>{s.value}</p>
                  <p className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Photo + badges */}
          <div className="flex justify-center items-center relative">
            <div className="relative">
              {/* Glow ring behind photo */}
              <div
                className="absolute inset-0 rounded-full glow-border"
                style={{ transform: 'scale(1.08)', background: 'transparent' }}
              />

              {/* Photo frame */}
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden float-anim"
                style={{
                  border: '3px solid rgba(0,201,167,0.7)',
                  boxShadow: '0 0 40px rgba(0,201,167,0.3)',
                }}
              >
                <img
                  src="/images/chamber.jpg"
                  alt="Sauren Das Gupta — Medical Assistant at Torab Pharmacy Chamber"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, transparent 60%, rgba(0,201,167,0.15) 100%)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <p className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>Scroll Down</p>
        <div
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1"
          style={{ borderColor: 'var(--accent-teal)' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: 'var(--accent-teal)', animation: 'floatAnim 1.5s ease-in-out infinite' }}
          />
        </div>
      </div> */}
    </section>
  );
}
