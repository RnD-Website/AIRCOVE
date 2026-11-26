import { site } from '../../data/site.js';
import Reveal from '../ui/Reveal.jsx';
import Button from '../ui/Button.jsx';
import GoogleMap from '../ui/GoogleMap.jsx';

export default function CTASection({ last = true }) {
  return (
    <section className={`panel ${last ? 'panel--last' : ''}`} id="get-quote" aria-labelledby="cta-h">
      <div className="cta">
        <Reveal className="cta__head">
          <div className="section-head__title">
            <span className="chip">Get a free quote</span>
            <h2 id="cta-h">Ready to Get Your Comfort Back?</h2>
          </div>
          <p>One call is all it takes to get reliable AC service and professional help from our team.</p>
        </Reveal>
        <Reveal className="cta__btns"><Button quote variant="dark" size="lg">Get a Free Quote</Button><Button href={site.phoneHref} size="lg">Call {site.phone}</Button></Reveal>
        <div className="cta__info">
          <Reveal className="info-card">
            <span className="mono muted">Hours</span>
            <dl>{site.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
          </Reveal>
          <Reveal className="info-card" delay={0.08}>
            <span className="mono muted">Reach us</span>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}`} target="_blank" rel="noreferrer">{site.address}</a>
          </Reveal>
          <Reveal className="info-card info-card--map" delay={0.16}><GoogleMap title="AIRCOVE office map" zoom={14} /></Reveal>
        </div>
      </div>
    </section>
  );
}
