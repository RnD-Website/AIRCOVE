import { useState } from 'react';

const rules = {
  name: (v) => (v.trim().length < 2 ? 'Please enter your name' : ''),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter a valid email'),
  phone: (v) => (v && v.replace(/\D/g, '').length < 7 ? 'Enter a valid phone number' : ''),
  service: (v) => (v ? '' : 'Choose a service'),
  date: (v) => (v ? '' : 'Pick a date'),
  time: (v) => (v ? '' : 'Pick a time'),
  message: () => '',
};

// Validation + loading + success/error states shared by every form.
export default function useForm(fields) {
  const [values, setValues] = useState(Object.fromEntries(fields.map((f) => [f, ''])));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: '' }));
  };
  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    fields.forEach((f) => { const m = rules[f]?.(values[f]); if (m) errs[f] = m; });
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus('loading');
    // Replace with a real API call when a backend is available.
    setTimeout(() => {
      setStatus('success');
      setValues(Object.fromEntries(fields.map((f) => [f, ''])));
    }, 1000);
  };
  return { values, errors, status, set, submit, reset: () => setStatus('idle') };
}
