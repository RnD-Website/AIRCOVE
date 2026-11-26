import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO.js';
import { locations } from '../data/locations.js';
import PageHero from '../components/sections/PageHero.jsx';
import AreasSection from '../components/sections/AreasSection.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import CTASection from '../components/sections/CTASection.jsx';

export default function ServiceAreas() {
  useSEO({ title: 'Service Areas', description: 'AIRCOVE provides same-day AC repair, installation and maintenance across the neighborhoods we serve.' });
  return (
    <>
      <PageHero crumb="Service Areas" title="Proudly Serving Your Community" text="Same-day AC and HVAC service across the neighborhoods we call home. Don’t see yours? Call us, we probably cover it." />
      <div style={{ height: 24 }} />
      <AreasSection id="areas" />
      <section className="panel" aria-labelledby="avail-h">
        <h2 id="avail-h" style={{ fontSize: 36, lineHeight: '40px', marginBottom: 24 }}>Service Availability</h2>
        <div className="detail-grid">
          {locations.map((l) => (
            <Reveal key={l.slug} className="block"><h3 style={{ fontSize: 22, marginBottom: 8 }}><Link to={`/service-areas/${l.slug}`}>{l.name}</Link></h3><p>{l.blurb} Same-day appointments and 24/7 emergency dispatch.</p></Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
