import { useMemo, useState } from 'react';
import useSEO from '../hooks/useSEO.js';
import { services, categories } from '../data/services.js';
import PageHero from '../components/sections/PageHero.jsx';
import ServiceCard from '../components/sections/ServiceCard.jsx';
import ReviewsSection from '../components/sections/ReviewsSection.jsx';
import FinancingSection from '../components/sections/FinancingSection.jsx';
import FAQSection from '../components/sections/FAQSection.jsx';
import CTASection from '../components/sections/CTASection.jsx';

const kinds = ['All', 'Residential', 'Commercial'];

export default function Services() {
  useSEO({ title: 'AC & HVAC Services', description: 'AC repair, installation, maintenance, emergency service, duct cleaning, heating repair, HVAC installation and thermostats.', image: '/images/services/ac-repair.jpg' });
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const [kind, setKind] = useState('All');

  const list = useMemo(() => services.filter((s) => {
    const text = `${s.title} ${s.short} ${s.category}`.toLowerCase();
    return (!q || text.includes(q.toLowerCase())) && (cat === 'All' || s.category === cat) && (kind === 'All' || s.kind.includes(kind));
  }), [q, cat, kind]);

  return (
    <>
      <PageHero crumb="Services" title="AC & HVAC Services for Your Home and Business" text="From a struggling air conditioner to a complete HVAC system, we handle it, and we tell you the price before we start." image="/images/services/ac-repair.jpg" alt="AIRCOVE technician repairing an air conditioning unit" />
      <div style={{ height: 24 }} />
      <section className="panel panel--first" style={{ paddingTop: 48 }}>
        <div className="filters">
          <div className="search"><label className="sr-only" htmlFor="svc-search">Search services</label><input id="svc-search" type="search" placeholder="Search services…" value={q} onChange={(e) => setQ(e.target.value)} /></div>
          <div className="pills" role="group" aria-label="Category">{categories.map((c) => <button key={c} className={`pill ${cat === c ? 'on' : ''}`} onClick={() => setCat(c)}>{c}</button>)}</div>
          <div className="pills" role="group" aria-label="Type">{kinds.map((k) => <button key={k} className={`pill ${kind === k ? 'on' : ''}`} onClick={() => setKind(k)}>{k}</button>)}</div>
        </div>
        {list.length ? (
          <div className="services-grid">{list.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}</div>
        ) : (
          <p className="empty">No services match your filters. <button className="btn" onClick={() => { setQ(''); setCat('All'); setKind('All'); }}>Reset</button></p>
        )}
      </section>
      <ReviewsSection id="reviews" link="/about#reviews" />
      <FinancingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
