import { useState } from 'react';

export default function NewsletterForm({ dark = true }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle');
  const [err, setErr] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr('Enter a valid email'); return; }
    setErr(''); setState('loading');
    setTimeout(() => { setState('done'); setEmail(''); }, 800);
  };
  return (
    <form onSubmit={onSubmit} noValidate aria-label="Newsletter" className={dark ? '' : 'newsletter-form'}>
      <div className="footer__news" style={dark ? undefined : { margin: 0 }}>
        <label className="sr-only" htmlFor={`nl-${dark}`}>Email</label>
        <input id={`nl-${dark}`} type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className={`btn ${dark ? 'btn--white' : ''}`} type="submit" disabled={state === 'loading'}>{state === 'loading' ? <span className="spinner" /> : 'Submit'}</button>
      </div>
      {err && <p className="field__err" style={{ marginTop: 6 }} role="alert">{err}</p>}
      {state === 'done' && <p style={{ marginTop: 8, fontSize: 12, color: dark ? '#9be0b1' : '#1f7a3f' }} role="status">Subscribed. Thank you!</p>}
    </form>
  );
}
