import { useEffect } from 'react';

const setMeta = (attr, key, value) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute('content', value);
};

// Unique title, description and Open Graph tags per page.
export default function useSEO({ title, description, image = '/images/hero.jpg' }) {
  useEffect(() => {
    const full = title ? `${title} | AIRCOVE` : 'AIRCOVE | AC Repair & HVAC Services';
    document.title = full;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', full);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:url', window.location.href);
  }, [title, description, image]);
}
