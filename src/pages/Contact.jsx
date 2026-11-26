import useSEO from '../hooks/useSEO.js';
import useForm from '../components/ui/useForm.js';
import { site } from '../data/site.js';
import PageHero from '../components/sections/PageHero.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import GoogleMap from '../components/ui/GoogleMap.jsx';
import Button from '../components/ui/Button.jsx';
import { ServiceOptions } from '../components/ui/QuoteForm.jsx';
import FAQSection from '../components/sections/FAQSection.jsx';

function F({ id, label, error, children }) {
  return <div className={`field ${error ? 'field--error' : ''}`}><label htmlFor={id}>{label}</label>{children}{error && <span className="field__err" role="alert">{error}</span>}</div>;
}

export default function Contact() {
  useSEO({ title: 'Contact', description: 'Get a free AC quote or book emergency service. Call, email or send us a message.' });
  const { values, errors, status, set, submit } = useForm(['name', 'email', 'phone', 'service', 'message']);
  return (
    <>
      <PageHero crumb="Contact" title="Get in Touch With AIRCOVE" text="One call is all it takes to get reliable AC service and professional help from our team." cta={null} />
      <div style={{ height: 24 }} />
      <section className="panel panel--first" style={{ paddingTop: 48 }}>
        <div className="contact-grid">
          <div style={{ display: 'grid', gap: 16, gridTemplateRows: 'auto 1fr' }}>
            <Reveal className="info-card"><span className="mono muted">Reach us</span><a href={site.phoneHref}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><span>{site.address}</span><span className="small muted">Placeholder contact details. Replace before launch.</span></Reveal>
            <Reveal className="info-card info-card--fill"><span className="mono muted">Hours</span><dl>{site.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl></Reveal>
          </div>
          <Reveal>
            <form className="contact-form" onSubmit={submit} noValidate aria-label="Contact form">
              <div className="two">
                <F id="c-name" label="Name" error={errors.name}><input id="c-name" value={values.name} onChange={set('name')} placeholder="Jane Smith" autoComplete="name" /></F>
                <F id="c-email" label="Email" error={errors.email}><input id="c-email" type="email" value={values.email} onChange={set('email')} placeholder="jane@email.com" autoComplete="email" /></F>
              </div>
              <div className="two">
                <F id="c-phone" label="Phone" error={errors.phone}><input id="c-phone" type="tel" value={values.phone} onChange={set('phone')} placeholder="(555) 000-0000" autoComplete="tel" /></F>
                <F id="c-service" label="Service type" error={errors.service}><select id="c-service" value={values.service} onChange={set('service')}><ServiceOptions /></select></F>
              </div>
              <F id="c-msg" label="Message" error={errors.message}><textarea id="c-msg" value={values.message} onChange={set('message')} placeholder="Tell us what’s going on…" /></F>
              <Button type="submit" variant="dark" size="lg" disabled={status === 'loading'}>{status === 'loading' ? <span className="spinner" style={{ borderTopColor: '#fff' }} /> : 'Submit Request'}</Button>
              {status === 'success' && <p className="form-msg form-msg--ok" role="status">Thanks! Your request was received. We’ll be in touch shortly.</p>}
              {status === 'error' && <p className="form-msg form-msg--bad" role="alert">Something went wrong. Please call us instead.</p>}
            </form>
          </Reveal>
        </div>
        <div style={{ marginTop: 16 }}><GoogleMap title="AIRCOVE office map" zoom={14} /></div>
      </section>
      <FAQSection />
    </>
  );
}
