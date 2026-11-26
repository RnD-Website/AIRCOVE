import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '../../data/site.js';
import { Logo } from '../ui/Icons.jsx';
import Button from '../ui/Button.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    let last = window.scrollY;
    const on = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      if (y < 240) setHidden(false);
      else if (y > last + 6) setHidden(true);
      else if (y < last - 6) setHidden(false);
      last = y;
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle('lenis-stopped', open);
  }, [open]);

  return (
    <>
      <motion.header
        className={`header ${solid ? 'header--solid' : ''} ${hidden && !open ? 'header--hidden' : ''}`}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
      >
        <div className="header__inner">
          <div className="header__pill">
            <Link to="/" className="logo" aria-label="AIRCOVE home"><Logo />{site.name}</Link>
            <nav className="header__links" aria-label="Main">
              {site.nav.map((n) => (
                <NavLink key={n.to} to={n.to} className={({ isActive }) => (isActive ? 'active' : '')}>{n.label}</NavLink>
              ))}
            </nav>
            <a className="header__phone" href={site.phoneHref} style={{ fontSize: 13 }}>{site.phone}</a>
            <button className="header__burger" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>Menu</button>
          </div>
          <Button quote className="header__cta">Get a Free Quote</Button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
            role="dialog" aria-label="Menu"
          >
            <div className="mobile-menu__top">
              <Link to="/" className="logo"><Logo />{site.name}</Link>
              <button onClick={() => setOpen(false)} aria-label="Close menu" style={{ fontSize: 13 }}>Close</button>
            </div>
            <nav aria-label="Mobile">
              {site.nav.map((n, i) => (
                <motion.div key={n.to} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.1 }}>
                  <Link to={n.to}>{n.label}</Link>
                </motion.div>
              ))}
            </nav>
            <div className="mobile-menu__foot">
              <Button quote variant="dark" size="lg" onClick={() => setOpen(false)}>Get a Free Quote</Button>
              <Button href={site.phoneHref} size="lg">Call {site.phone}</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
