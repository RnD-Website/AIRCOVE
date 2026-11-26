import Reveal from '../ui/Reveal.jsx';
import { Icon } from '../ui/Icons.jsx';
import Button from '../ui/Button.jsx';
import Img from '../ui/Img.jsx';

const items = [
  ['price', 'Upfront Pricing', 'You hear the full price before we start. No hourly meter, no add-ons at the end.'],
  ['clock', 'Same-Day Service', 'We show up when we say we will and come ready to fix it on the spot.'],
  ['user', 'Experienced Technicians', 'Seasoned, factory-trained pros who treat your home like their own.'],
  ['shield', 'Licensed & Insured', 'Every job is done by licensed technicians and finished to code.'],
  ['award', 'Quality Workmanship', 'Clean, careful work that is backed by our satisfaction guarantee.'],
  ['smile', 'Customer Satisfaction', 'Thousands of five-star reviews from neighbors who call us again.'],
];

export default function WhySection() {
  return (
    <section className="panel" aria-labelledby="why-h">
      <div className="why">
        <Reveal className="why__left">
          <div className="section-head__title">
            <span className="chip">Why Choose AIRCOVE</span>
            <h2 id="why-h">Comfort You Can Count On, Every Time</h2>
            <p className="muted" style={{ maxWidth: 380 }}>Hiring an HVAC company shouldn’t be a gamble, so we make every step predictable, from the upfront price to the work itself.</p>
            <Button to="/about">About us</Button>
          </div>
          <div className="why__img"><Img src="/images/why-choose.jpg" alt="AIRCOVE technician servicing an outdoor condenser unit" /></div>
        </Reveal>
        <div className="why__list">
          {items.map(([ico, t, p], i) => (
            <Reveal key={t} delay={(i % 2) * 0.08} className="feature">
              <div className="feature__ico"><Icon name={ico} /></div>
              <div><h4>{t}</h4><p>{p}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
