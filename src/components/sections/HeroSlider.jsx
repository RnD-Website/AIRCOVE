import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials.js';
import { Icon } from '../ui/Icons.jsx';
import Img from '../ui/Img.jsx';

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const len = 4;
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % len), 5500);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];
  return (
    <div className="hero-slider" aria-roledescription="carousel" aria-label="Customer reviews">
      <AnimatePresence mode="wait">
        <motion.div key={i} className="hero-slide" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.4 }}>
          <p>“{t.quote.length > 110 ? `${t.quote.slice(0, 107)}…` : t.quote}”</p>
          <div className="hero-slide__who">
            <Img className="avatar" src={t.avatar} alt={t.name} />
            <span>{t.name} <span style={{ opacity: 0.6 }}>· {t.area}</span></span>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="slider-arrows">
        <button className="arrow-btn" onClick={() => setI((i + len - 1) % len)} aria-label="Previous review"><Icon name="left" /></button>
        <button className="arrow-btn" onClick={() => setI((i + 1) % len)} aria-label="Next review"><Icon name="right" /></button>
      </div>
    </div>
  );
}
