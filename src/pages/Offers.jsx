import useSEO from '../hooks/useSEO.js';
import { offers } from '../data/offers.js';
import PageHero from '../components/sections/PageHero.jsx';
import OfferCard from '../components/sections/OfferCard.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import CTASection from '../components/sections/CTASection.jsx';

export default function Offers() {
  useSEO({ title: 'Special Offers', description: 'Save on AC repair, inspections and seasonal maintenance with AIRCOVE special offers for new and returning customers.', image: '/images/offers.jpg' });
  return (
    <>
      <PageHero crumb="Offers" title="Save on Your Next AC Service" text="First-time customers save right out of the gate. Just mention the offer when you book." image="/images/offers.jpg" alt="AIRCOVE technician handing a homeowner a service invoice" cta="Claim an offer" />
      <div style={{ height: 24 }} />
      <section className="panel panel--first" style={{ paddingTop: 48 }}>
        <div className="offers-grid">{offers.map((o, i) => <OfferCard key={o.title} offer={o} index={i} cta />)}</div>
      </section>
      <section className="panel" aria-labelledby="terms-h">
        <h2 id="terms-h" style={{ fontSize: 36, lineHeight: '40px', marginBottom: 24 }}>Terms &amp; Conditions</h2>
        <div className="detail-grid">
          {offers.map((o) => <Reveal key={o.title} className="block"><h3 style={{ fontSize: 20, lineHeight: '24px' }}>{o.big} {o.title}</h3><p>{o.terms}</p></Reveal>)}
        </div>
        <p className="small muted" style={{ marginTop: 20 }}>Offers cannot be combined unless stated. AIRCOVE may change or end offers at any time.</p>
      </section>
      <CTASection />
    </>
  );
}
