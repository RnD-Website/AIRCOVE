import { services } from '../../data/services.js';
import useForm from './useForm.js';

function Field({ id, label, error, children }) {
  return (
    <div className={`field ${error ? 'field--error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <span className="field__err" role="alert">{error}</span>}
    </div>
  );
}

export const ServiceOptions = () => (
  <>
    <option value="">Select…</option>
    {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
  </>
);

// variant: 'hero' | 'cta' (inline row) | 'stack'
export default function QuoteForm({ variant = 'hero', id = 'quote' }) {
  const { values, errors, status, set, submit } = useForm(['name', 'email', 'service']);
  const loading = status === 'loading';
  return (
    <form className={`qform qform--${variant}`} onSubmit={submit} noValidate aria-label="Request a free quote">
      <Field id={`${id}-name`} label="Name" error={errors.name}><input id={`${id}-name`} placeholder="Jane Smith" value={values.name} onChange={set('name')} autoComplete="name" /></Field>
      <Field id={`${id}-email`} label="Email" error={errors.email}><input id={`${id}-email`} type="email" placeholder="jane@email.com" value={values.email} onChange={set('email')} autoComplete="email" /></Field>
      <Field id={`${id}-service`} label="Service" error={errors.service}><select id={`${id}-service`} value={values.service} onChange={set('service')}><ServiceOptions /></select></Field>
      <button className="btn" type="submit" disabled={loading} style={{ height: 40 }}>{loading ? <span className="spinner" /> : 'Submit'}</button>
      {status === 'success' && <p className="form-msg form-msg--ok" role="status">Thanks! Your request was received. We’ll be in touch shortly.</p>}
      {status === 'error' && <p className="form-msg form-msg--bad" role="alert">Something went wrong. Please call us instead.</p>}
    </form>
  );
}
