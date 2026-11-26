import { Link, useParams } from 'react-router-dom';
import useSEO from '../hooks/useSEO.js';
import { getService, services } from '../data/services.js';
import { site } from '../data/site.js';
import PageHero from '../components/sections/PageHero.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Button from '../components/ui/Button.jsx';
import { Icon } from '../components/ui/Icons.jsx';
import ReviewsSection from '../components/sections/ReviewsSection.jsx';
import FinancingSection from '../components/sections/FinancingSection.jsx';
import FAQSection from '../components/sections/FAQSection.jsx';
import CTASection from '../components/sections/CTASection.jsx';
import NotFound from './NotFound.jsx';
import { faqs } from '../data/faqs.js';

const Check = ({ items }) => <ul className="check-list">{items.map((i) => <li key={i}><Icon name="check" />{i}</li>)}</ul>;

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = getService(slug);
  useSEO({ title: s ? s.title : 'Service', description: s ? s.short : '', image: s?.image });
  if (!s) return <NotFound />;
  const others = services.filter((x) => x.slug !== s.slug);
  const serviceFaqs = [
    { q: `How much does ${s.title.toLowerCase()} cost?`, a: 'We quote a clear, flat price before any work begins. Nothing is added at the end.' },
    { q: 'How soon can a technician arrive?', a: 'Most visits are same day. Emergency calls are dispatched as fast as possible, day or night.' },
    ...faqs.slice(2, 6),
  ];

  return (
    <>
      <PageHero crumb={s.title} title={s.title} text={s.heroText} image={s.image} alt={`${s.title} by an AIRCOVE technician`} />
      <div className="container"><div className="stats">{s.stats.map(([n, l], i) => <Reveal key={l} className="stat" delay={i * 0.06}><strong>{n}</strong><span>{l}</span></Reveal>)}</div></div>
      <div style={{ height: 24 }} />
      <section className="panel panel--first" style={{ paddingTop: 48 }}>
        <div className="detail-grid">
          <Reveal className="block block--tint"><h3>About this service</h3><p>{s.about}</p></Reveal>
          <Reveal className="block" delay={0.08}><h3>Signs you need this service</h3><Check items={s.problems} /></Reveal>
          <Reveal className="block"><h3>What’s included</h3><Check items={s.included} /></Reveal>
          <Reveal className="block" delay={0.08}>
            <h3>Why choose AIRCOVE</h3>
            <Check items={['Upfront pricing before any work', 'Licensed and insured technicians', 'Same-day service available', 'Satisfaction guarantee on every job']} />
          </Reveal>
        </div>
        <div className="sub-title"><h2>Our Process</h2><span className="chip">4 simple steps</span></div>
        <ol className="process">{s.process.map((p, i) => <Reveal as="li" key={p} delay={i * 0.08}><span>{p}</span></Reveal>)}</ol>
        <Reveal className="emergency">
          <div><span className="mono" style={{ opacity: 0.6 }}>Emergency?</span><h3>Call {site.phone}</h3></div>
          <Button href={site.phoneHref} variant="white" size="lg">Call {site.phone}</Button>
        </Reveal>
        <div className="sub-title"><h2>Related Services</h2></div>
        <div className="related">{others.map((o) => <Link key={o.slug} to={`/services/${o.slug}`}>{o.title}</Link>)}</div>
      </section>
      <ReviewsSection id="reviews" title={`Reviews for ${s.title}`} ids={s.reviews} intro="Real feedback from homeowners we’ve helped." />
      <FinancingSection />
      <FAQSection title={`${s.title}: Common Questions`} items={serviceFaqs} />
      <CTASection />
    </>
  );
}
