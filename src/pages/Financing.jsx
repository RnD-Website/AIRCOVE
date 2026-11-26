import useSEO from '../hooks/useSEO.js';
import PageHero from '../components/sections/PageHero.jsx';
import FinancingSection, { financingSteps } from '../components/sections/FinancingSection.jsx';
import FAQSection from '../components/sections/FAQSection.jsx';
import CTASection from '../components/sections/CTASection.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { Icon } from '../components/ui/Icons.jsx';
import SectionHead from '../components/sections/SectionHead.jsx';

const benefits = ['Flexible payment options', 'Affordable monthly payments', 'Simple application process', 'No pressure to apply', 'Options for repairs and full replacements', 'Ask about current promotional plans'];
const options = [
  ['AC repairs', 'Spread out the cost of larger repairs and keep your home comfortable now.'],
  ['System replacement', 'Fund a new AC or complete HVAC system with a monthly plan that fits your budget.'],
  ['New installations', 'Plan an upgrade, a ductless addition or a heat pump with flexible terms.'],
];
const finFaqs = [
  { q: 'Do you offer financing?', a: 'Yes. Flexible payment options are available for repairs, replacements and installations. Availability and terms depend on approval.' },
  { q: 'How do I apply?', a: 'Ask us when you request your quote. We will explain the options and walk you through a simple application.' },
  { q: 'Does applying affect my credit?', a: 'This depends on the financing partner. We will explain what to expect before you apply.' },
  { q: 'What can I finance?', a: 'Repairs, replacements and new installations. Ask your technician about eligible work.' },
];

export default function Financing() {
  useSEO({ title: 'Financing', description: 'Flexible payment options for AC repair, replacement and installation. Simple application, affordable monthly payments.', image: '/images/financing.jpg' });
  return (
    <>
      <PageHero crumb="Financing" title="Comfort Now. Flexible Payments Later." text="Flexible payment options, affordable monthly payments and a simple application process." image="/images/financing.jpg" alt="Homeowners reviewing financing options with an AIRCOVE team member" cta="Ask about financing" />
      <div style={{ height: 24 }} />
      <section className="panel panel--first" style={{ paddingTop: 48 }}>
        <SectionHead tag="Benefits" title="Why Finance With AIRCOVE" text="Payment options designed to take the stress out of big repairs." />
        <div className="detail-grid">
          <Reveal className="block block--tint"><h3>Built around your budget</h3><p>You shouldn’t have to choose between comfort and your budget. Ask about payment options for any job and we’ll explain what is available. Financing is subject to approval and terms vary.</p></Reveal>
          <Reveal className="block" delay={0.08}><ul className="check-list">{benefits.map((b) => <li key={b}><Icon name="check" />{b}</li>)}</ul></Reveal>
        </div>
        <div className="sub-title"><h2>Available Options</h2></div>
        <div className="steps">{options.map(([t, p], i) => <Reveal key={t} className="step" delay={i * 0.08}><span className="mono muted">OPTION 0{i + 1}</span><div><h3>{t}</h3><p>{p}</p></div></Reveal>)}</div>
      </section>
      <FinancingSection link={false} />
      <FAQSection title="Financing Questions" items={finFaqs} />
      <CTASection />
    </>
  );
}
