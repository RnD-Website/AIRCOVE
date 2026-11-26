import { useEffect } from 'react';

/*
 * Site-wide scroll motion.
 *  - Auto reveal (fade / rise / clip) for every section element that is not already animated by <Reveal>
 *  - Staggered grids, count-up stats, image mask reveals
 *  - Scroll-linked parallax on hero + large images
 * Elements are hidden only after this hook marks them, and the markers are removed after the
 * transition ends, so normal hover styles keep working and nothing stays invisible if JS fails.
 */

const UP = [
  'main .cta__head', 'main .faq__intro', 'main .callout', 'main .newsletter', 'main .sub-title',
  'main .services-foot', 'main .load-more', 'main .filters', 'main .emergency', 'main .contact-form',
  'main .info-card', 'main .block', 'main .map', 'main .prose > *', 'main .legal > *', 'main .share',
  'main .article__layout .toc', 'footer .footer__bottom',
].join(',');
const HEAD = 'main h1, main h2';
const IMG = 'main .service-card__img, main .blog-card__img, main .member__img';
const GROUPS = [
  'main .services-grid', 'main .offers-grid', 'main .reviews-grid', 'main .why__list', 'main .team-grid', 'main .blog-grid',
  'main .areas__list', 'main .process', 'main .stats', 'main .steps', 'main .detail-grid', 'main .faq__list', 'footer .footer__grid',
].join(',');
const COUNT = 'main .stat strong';
const PARALLAX = [
  ['.hero__img', { f: 0.14, scale: 1.18 }],
  ['.page-hero__img img', { f: 0.1, scale: 1.14 }],
  ['.why__img img', { f: 0.08, scale: 1.14 }],
  ['.cta .map, .story img', { f: 0.06, scale: 1.12 }],
];

const hasFramer = (el) => {
  for (let p = el; p && p.tagName !== 'MAIN' && p.tagName !== 'BODY'; p = p.parentElement) {
    const s = p.getAttribute && p.getAttribute('style');
    if (s && /opacity/.test(s)) return true;
  }
  return false;
};


// Splits a heading into words > characters (text nodes only, so <br> and inline tags survive).
function splitHeading(el) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  let i = 0;
  nodes.forEach((node) => {
    const frag = document.createDocumentFragment();
    node.textContent.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
      const w = document.createElement('span');
      w.className = 'sw';
      w.setAttribute('aria-hidden', 'true');
      [...part].forEach((ch) => {
        const c = document.createElement('span');
        c.className = 'sc';
        c.style.setProperty('--i', i++);
        c.textContent = ch;
        w.appendChild(c);
      });
      frag.appendChild(w);
    });
    node.parentNode.replaceChild(frag, node);
  });
  el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
}

function countUp(el) {
  const m = el.textContent.trim().match(/^(\D*)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  if (!m) return;
  const [, pre, num, post] = m;
  const target = parseFloat(num.replace(/,/g, ''));
  const dec = (num.split('.')[1] || '').length;
  const commas = num.includes(',');
  const t0 = performance.now();
  const dur = 1700;
  const fmt = (v) => {
    const s = v.toFixed(dec);
    return commas ? Number(s).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) : s;
  };
  const tick = (now) => {
    const k = Math.min(1, (now - t0) / dur);
    const e = k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    el.textContent = `${pre}${fmt(target * e)}${post}`;
    if (k < 1) requestAnimationFrame(tick);
  };
  el.textContent = `${pre}${fmt(0)}${post}`;
  requestAnimationFrame(tick);
}

export default function useMotion() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const pending = new Set();
    const reveal = (el) => {
      if (!pending.has(el)) return;
      pending.delete(el);
      if (el.dataset.mo === 'count') { if (!reduce) countUp(el); return; }
      if (el.classList.contains('mo-split')) {
        el.classList.add('mo-in');
        setTimeout(() => el.classList.remove('mo-split', 'mo-in'), 3800);
        return;
      }
      el.style.transition = '';
      void el.offsetWidth;
      el.classList.add('mo-in');
      const delay = parseInt(el.style.getPropertyValue('--mo-d'), 10) || 0;
      setTimeout(() => {
        el.classList.remove('mo', 'mo-in');
        el.style.removeProperty('--mo-d');
        el.style.transition = '';
      }, 2300 + delay);
    };
    // Checks every pending element against the viewport: robust for smooth scroll, jumps and route changes.
    const sweep = () => {
      const vh = window.innerHeight;
      pending.forEach((el) => {
        if (!el.isConnected) { pending.delete(el); return; }
        if (el.getBoundingClientRect().top < vh * (el.classList.contains('mo-split') ? 0.82 : 0.92)) reveal(el);
      });
    };
    const io = { disconnect() {} };

    const seen = new WeakSet();
    const mark = (el, type, delay = 0) => {
      if (seen.has(el)) return;
      if (type === 'head') {
        if (reduce) return;
        // StrictMode runs this effect twice: an already-split heading must still be queued for reveal
        if (!el.classList.contains('mo-split') && !el.querySelector('.sc')) {
          splitHeading(el);
          el.classList.add('mo-split');
        }
        if (!el.classList.contains('mo-split')) return;
        seen.add(el);
        pending.add(el);
        return;
      }
      if (type !== 'img' && type !== 'count' && hasFramer(el)) return;
      if (type !== 'count' && el.parentElement && el.parentElement.closest('.mo')) return;
      seen.add(el);
      el.dataset.mo = type;
      if (type !== 'count') {
        el.style.setProperty('--mo-d', `${delay}ms`);
        el.style.transition = 'none';
        el.classList.add('mo');
      }
      pending.add(el);
    };

    const scan = () => {
      document.querySelectorAll(GROUPS).forEach((g) => {
        [...g.children].forEach((c, i) => mark(c, 'up', (i % 4) * 90));
      });
      document.querySelectorAll(UP).forEach((el) => mark(el, 'up'));
      document.querySelectorAll(HEAD).forEach((el) => mark(el, 'head'));
      document.querySelectorAll(IMG).forEach((el) => mark(el, 'img', 60));
      document.querySelectorAll(COUNT).forEach((el) => mark(el, 'count'));
      if (!reduce) PARALLAX.forEach(([sel, cfg]) => document.querySelectorAll(sel).forEach((el) => {
        if (!par.has(el)) par.set(el, cfg);
      }));
      last = -1;
      sweep();
    };

    // ---- parallax (rAF, only while the scroll position changes) ----
    const par = new Map();
    let last = -1;
    let raf;
    const loop = () => {
      const y = window.scrollY;
      if (y !== last) {
        last = y;
        const vh = window.innerHeight;
        par.forEach((cfg, el) => {
          if (!el.isConnected) { par.delete(el); return; }
          const { f, scale } = cfg;
          const host = el.classList.contains('hero__img') ? el.parentElement : (el.parentElement || el);
          const r = host.getBoundingClientRect();
          if (r.bottom < -100 || r.top > vh + 100) return;
          const extra = ((scale - 1) * r.height) / 2 * 0.92;
          const off = r.top + r.height / 2 - vh / 2;
          const ty = Math.max(-extra, Math.min(extra, -off * f));
          el.style.transform = `translate3d(0, ${ty.toFixed(1)}px, 0) scale(${scale})`;
        });
      }
      raf = requestAnimationFrame(loop);
    };

    let queued = false;
    const mo = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; scan(); });
    });
    mo.observe(document.getElementById('root'), { childList: true, subtree: true });
    scan();
    raf = requestAnimationFrame(loop);
    const tm = setInterval(sweep, 120);
    window.addEventListener('scroll', sweep, { passive: true });

    return () => { cancelAnimationFrame(raf); clearInterval(tm); window.removeEventListener('scroll', sweep); mo.disconnect(); };
  }, []);
}
