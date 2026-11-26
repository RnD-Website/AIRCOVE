import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { faqs } from '../../data/faqs.js';
import { Icon } from '../ui/Icons.jsx';
import Button from '../ui/Button.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function FAQSection({ title = 'Questions About Your AC Service?', items = faqs }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="panel" aria-labelledby="faq-h">
      <div className="faq">
        <Reveal className="faq__intro">
          <span className="chip">FAQs</span>
          <h2 id="faq-h">{title}</h2>
          <p>No runaround here, just honest answers to what homeowners actually want to know.</p>
          <Button to="/contact">Get a Free Quote</Button>
        </Reveal>
        <div>
          {items.map((f, i) => {
            const on = open === i;
            return (
              <Reveal key={f.q} className={`faq__item ${on ? 'open' : ''}`} delay={i * 0.04}>
                <button className="faq__q" onClick={() => setOpen(on ? -1 : i)} aria-expanded={on}>
                  {f.q}<span className="faq__plus"><Icon name="plus" /></span>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.44, 0, 0.56, 1] }} style={{ overflow: 'hidden' }}>
                      <p className="faq__a">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
