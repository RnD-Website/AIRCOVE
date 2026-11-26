import { motion } from 'framer-motion';
import { site } from '../../data/site.js';
import { Stars } from '../ui/Icons.jsx';
import Button from '../ui/Button.jsx';
import HeroSlider from './HeroSlider.jsx';

const up = (d) => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease: [0.44, 0, 0.56, 1] } });

export default function Hero() {
  return (
    <>
      <section className="hero" aria-label="Introduction">
        <video className="hero__img" src="/videos/hero.mp4" poster="/images/hero-poster.jpg" autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__copy">
            <motion.a href={site.phoneHref} className="chip chip--dark" {...up(0.1)}>
              <span className="dot" /> Emergency? We’re available 24/7
            </motion.a>
            <h1>Expert AC Repair &amp; HVAC Services You Can Count On</h1>
            <motion.p {...up(0.3)}>Fast, reliable cooling and heating solutions. Our experienced technicians are ready for AC repairs, installations, maintenance and emergency service.</motion.p>
            <motion.div className="hero__btns" {...up(0.4)}>
              <Button quote variant="white">Get a Free Quote</Button>
              <Button href={site.phoneHref} variant="glass">Call Now · {site.phone}</Button>
            </motion.div>
          </div>
          <motion.div className="hero__side" {...up(0.5)}>
            <div className="rating"><strong>4.5</strong><Stars rating={4.5} /><span style={{ width: '100%', fontSize: 14 }}>500+ Google reviews</span></div>
            <HeroSlider />
          </motion.div>
        </div>
      </section>
    </>
  );
}
