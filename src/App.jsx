import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Education from './components/Education';
import Gallery from './components/Gallery';
import Chamber from './components/Chamber';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollAnimation';

// Floating WhatsApp sticky button
function WhatsAppSticky() {
  return (
    <a
      href="https://wa.me/8801813965097"
      target="_blank"
      rel="noopener noreferrer"
      id="sticky-whatsapp"
      aria-label="Message on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 wa-pulse"
      style={{
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: '0 6px 25px rgba(37,211,102,0.45)',
      }}
    >
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.551 4.107 1.512 5.83L0 24l6.335-1.505A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.587-.458-5.112-1.266l-.367-.21-3.761.894.95-3.668-.228-.378A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    </a>
  );
}

// Scroll-to-top button
function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollTop}
      id="scroll-to-top"
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 scroll-top-btn ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{
        background: 'rgba(0,201,167,0.15)',
        border: '1px solid rgba(0,201,167,0.4)',
        color: '#00C9A7',
        backdropFilter: 'blur(8px)',
      }}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
      </svg>
    </button>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Apply dark/light class to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll reveal hook (re-runs after load)
  useScrollReveal();

  return (
    <>
      {/* Loading screen */}
      {!loaded && <Loader onDone={() => setLoaded(true)} />}

      {/* Main app */}
      <div
        className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'var(--bg-primary)' }}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main>
          <Hero />
          <Stats />
          <About />
          <Services />
          <Experience />
          <Education />
          <Gallery />
          <Chamber />
          <Contact />
        </main>

        <Footer />

        {/* Floating widgets */}
        <WhatsAppSticky />
        <ScrollTopButton />
      </div>
    </>
  );
}
