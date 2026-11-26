import { useParams } from 'react-router-dom';
import useSEO from '../hooks/useSEO.js';
import { locations } from '../data/locations.js';
import { services } from '../data/services.js';
import PageHero from '../components/sections/PageHero.jsx';
import GoogleMap from '../components/ui/GoogleMap.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import ServiceCard from '../components/sections/ServiceCard.jsx';
import CTASection from '../components/sections/CTASection.jsx';
import NotFound from './NotFound.jsx';

export default function AreaDetail() {
  const { slug } = useParams();
  const l = locations.find((x) => x.slug === slug);
  useSEO({ title: l ? `AC Repair in ${l.name}` : 'Service Area', description: l?.blurb || '' });
  if (!l) return <NotFound />;
  return (
    <>
      <PageHero crumb={l.name} title={`AC Repair & HVAC Service in ${l.name}`} text={l.blurb} />
      <div style={{ height: 24 }} />
      <section className="panel panel--first" style={{ paddingTop: 48 }}>
        <Reveal><GoogleMap query={`${l.name} (placeholder area)`} title={`${l.name} map`} zoom={13} /></Reveal>
        <div className="sub-title"><h2>Popular Services in {l.name}</h2></div>
        <div className="services-grid">{services.slice(0, 4).map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}</div>
      </section>
      <CTASection />
    </>
  );
}
