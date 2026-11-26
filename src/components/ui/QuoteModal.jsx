import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useForm from './useForm.js';
import { ServiceOptions } from './QuoteForm.jsx';
import { site } from '../../data/site.js';

const QuoteContext = createContext({ openQuote: () => {}, closeQuote: () => {} });
export const useQuote = () => useContext(QuoteContext);

const SLOTS = ['Morning (8am – 12pm)', 'Afternoon (12pm – 4pm)', 'Evening (4pm – 8pm)', 'Emergency – as soon as possible'];

function F({ id, label, error, children }) {
  return (
    <div className={`field ${error ? 'field--error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <span className="field__err" role="alert">{error}</span>}
    </div>
  );
}

function BookingForm({ onClose, initialService }) {
  const { values, errors, status, set, submit } = useForm(['name', 'email', 'phone', 'service', 'date', 'time', 'message']);
  const loading = status === 'loading';
  const today = new Date().toISOString().slice(0, 10);

  if (status === 'success') {
    return (
      <div className="booking__done" role="status">
        <span className="booking__check" aria-hidden="true">✓</span>
        <h3>Request received</h3>
        <p>Thanks! Our team will confirm your booking shortly. Need us sooner? Call <a href={site.phoneHref}>{site.phone}</a>.</p>
        <button type="button" className="btn btn--dark btn--lg" onClick={onClose}>Done</button>
      </div>
    );
  }
  return (
    <form className="booking__form" onSubmit={submit} noValidate aria-label="Book a free quote">
      <div className="two">
        <F id="bk-name" label="Name" error={errors.name}><input id="bk-name" autoFocus value={values.name} onChange={set('name')} placeholder="Jane Smith" autoComplete="name" /></F>
        <F id="bk-email" label="Email" error={errors.email}><input id="bk-email" type="email" value={values.email} onChange={set('email')} placeholder="jane@email.com" autoComplete="email" /></F>
      </div>
      <div className="two">
        <F id="bk-phone" label="Phone" error={errors.phone}><input id="bk-phone" type="tel" value={values.phone} onChange={set('phone')} placeholder="(555) 000-0000" autoComplete="tel" /></F>
        <F id="bk-service" label="Service type" error={errors.service}><select id="bk-service" value={values.service || initialService || ''} onChange={set('service')}><ServiceOptions /></select></F>
      </div>
      <div className="two">
        <F id="bk-date" label="Preferred date" error={errors.date}><input id="bk-date" type="date" min={today} value={values.date} onChange={set('date')} /></F>
        <F id="bk-time" label="Preferred time" error={errors.time}>
          <select id="bk-time" value={values.time} onChange={set('time')}>
            <option value="">Select…</option>
            {SLOTS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </F>
      </div>
      <F id="bk-msg" label="Message (optional)" error={errors.message}><textarea id="bk-msg" value={values.message} onChange={set('message')} placeholder="Tell us what’s going on…" /></F>
      <button type="submit" className="btn btn--dark btn--lg" disabled={loading}>{loading ? <span className="spinner" style={{ borderTopColor: '#fff' }} /> : 'Book My Free Quote'}</button>
    </form>
  );
}

export function QuoteProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openQuote = useCallback(() => setOpen(true), []);
  const closeQuote = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ openQuote, closeQuote }), [openQuote, closeQuote]);

  useEffect(() => {
    if (!open) return undefined;
    document.documentElement.classList.add('lenis-stopped');
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.classList.remove('lenis-stopped');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {open && (
          <motion.div className="booking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
            <motion.div className="booking__card" role="dialog" aria-modal="true" aria-labelledby="booking-h" initial={{ opacity: 0, y: 28, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16 }} transition={{ duration: 0.35, ease: [0.44, 0, 0.56, 1] }} data-lenis-prevent>
              <div className="booking__head">
                <div>
                  <span className="chip">Free quote</span>
                  <h2 id="booking-h">Book Your Free Quote</h2>
                  <p>Tell us a bit about the job and pick a time that suits you.</p>
                </div>
                <button type="button" className="booking__close" onClick={closeQuote} aria-label="Close booking form">×</button>
              </div>
              <BookingForm onClose={closeQuote} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </QuoteContext.Provider>
  );
}
