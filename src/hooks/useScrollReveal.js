import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const selectors = [
      '.scroll-reveal',
      '.scroll-reveal-stagger',
      '.scroll-reveal-left',
      '.scroll-reveal-right',
      '.scroll-reveal-scale',
      '.wave-divider',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    selectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => observer.observe(el));
    });

    return () => observer.disconnect();
  }, []);
}

export function useNavScroll() {
  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById('nav');
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 40);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
