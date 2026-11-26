import Reveal from '../ui/Reveal.jsx';
import Button from '../ui/Button.jsx';
import Img from '../ui/Img.jsx';
import SectionHead from './SectionHead.jsx';

export const financingSteps = [
  ['Call or request a quote', 'Tell us what’s going on at any time, day or night.'],
  ['Get an upfront price', 'We diagnose the issue and quote it before any work begins.'],
  ['We fix it right', 'Licensed technicians, clean work, the first time.'],
];

export default function FinancingSection({ link = true }) {
  return (
    <section className="panel" aria-labelledby="fin-h">
      <SectionHead
        tag="Financing"
        title={<span id="fin-h">Comfort Now. Flexible Payments Later.</span>}
        text="Flexible payment options with affordable monthly payments and a simple application process."
        action={link && <Button to="/financing">See options</Button>}
      />
      <div className="steps">
        {financingSteps.map(([t, p], i) => (
          <Reveal key={t} className="step" delay={i * 0.1}>
            <span className="mono muted">STEP 0{i + 1}</span>
            <div><h3>{t}</h3><p>{p}</p></div>
          </Reveal>
        ))}
      </div>
      <Reveal className="callout">
        <div className="callout__body">
          <span className="chip">Need financing?</span>
          <div>
            <h3 style={{ marginBottom: 10 }}>Need financing?</h3>
            <p>Flexible payment options for AC replacements, new HVAC systems and major repairs. Ask about payment plans when you book. Subject to approval.</p>
          </div>
          <Button to="/contact" variant="dark">Ask about financing</Button>
        </div>
        <Img src="/images/financing.jpg" alt="Homeowners reviewing an AC installation quote with a technician" />
      </Reveal>
    </section>
  );
}
