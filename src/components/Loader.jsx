import { useEffect, useState } from 'react';

export default function Loader({ onDone }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExiting(true), 1500);
    const t2 = setTimeout(() => onDone(), 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ${
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* ECG lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-16 absolute top-1/3">
          <polyline
            points="0,50 200,50 260,10 300,90 340,10 380,90 420,50 600,50 660,10 700,90 740,10 780,90 820,50 1440,50"
            fill="none"
            stroke="#00C9A7"
            strokeWidth="2"
            strokeDasharray="1200"
            className="heartbeat-path"
          />
        </svg>
      </div>

      {/* Main monogram */}
      <div className="relative flex flex-col items-center gap-6">
        {/* Outer glow ring */}
        <div className="relative">
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center glow-border"
            style={{
              background: 'linear-gradient(135deg, rgba(0,201,167,0.15), rgba(0,201,167,0.05))',
              border: '2px solid rgba(0,201,167,0.6)',
            }}
          >
            {/* Inner ring */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center loader-pulse"
              style={{
                background: 'linear-gradient(135deg, #00C9A7, #00E5C8)',
              }}
            >
              <span
                className="font-playfair font-bold text-white select-none"
                style={{ fontSize: '1.6rem', letterSpacing: '-0.02em' }}
              >
                SDG
              </span>
            </div>
          </div>

          {/* Heartbeat icon orbiting */}
          <div
            className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-sm"
            style={{ background: 'rgba(0,201,167,0.2)', border: '1px solid rgba(0,201,167,0.5)' }}
          >
            🩺
          </div>
        </div>

        {/* Name */}
        <div className="text-center">
          <p
            className="font-playfair font-semibold text-xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Sauren Das Gupta
          </p>
          {/* <p
            className="font-mono text-xs mt-1 tracking-widest uppercase"
            style={{ color: 'var(--accent-teal)' }}
          >
            Medical Assistant
          </p> */}
        </div>

        {/* Loading bar */}
        <div
          className="w-40 h-0.5 rounded-full overflow-hidden"
          style={{ background: 'rgba(0,201,167,0.15)' }}
        >
          <div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #00C9A7, #00E5C8)',
              animation: 'loadBar 1.4s ease-in-out forwards',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loadBar {
          0% { width: 0%; }
          60% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
