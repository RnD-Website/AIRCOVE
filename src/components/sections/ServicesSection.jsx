import { services } from '../../data/services.js';
import Button from '../ui/Button.jsx';
import SectionHead from './SectionHead.jsx';
import ServiceCard from './ServiceCard.jsx';

export default function ServicesSection() {
  return (
    <section className="panel panel--first" aria-labelledby="services-h">
      <SectionHead
        tag="Services"
        title={<span id="services-h">Complete AC &amp; HVAC Services for Your Home and Business</span>}
        text="From a struggling air conditioner to a full system install, we handle it, and we tell you the price before we start."
        action={<Button to="/services">See all services</Button>}
      />
      <div className="services-grid">
        {services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
      </div>
      <div className="services-foot"><span>Looking for more services?</span><Button to="/services">See all services</Button></div>
    </section>
  );
}
