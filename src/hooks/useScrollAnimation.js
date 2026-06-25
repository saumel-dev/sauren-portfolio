import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // stagger siblings
            const siblings = entry.target.parentElement
              ? [...entry.target.parentElement.children].filter(
                  (el) =>
                    el.classList.contains('reveal') ||
                    el.classList.contains('reveal-left') ||
                    el.classList.contains('reveal-right')
                )
              : [];
            const index = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 80}ms`;
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function useParallax(ref, speed = 0.4) {
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      el.style.transform = `translateY(${scrolled * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed]);
}

export function useCountUp(ref, target, duration = 2000) {
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              el.textContent = target;
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(start);
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, target, duration]);
}
