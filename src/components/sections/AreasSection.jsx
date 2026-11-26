import { Link } from 'react-router-dom';
import { locations } from '../../data/locations.js';
import { Icon } from '../ui/Icons.jsx';
import Button from '../ui/Button.jsx';
import GoogleMap from '../ui/GoogleMap.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHead from './SectionHead.jsx';

export default function AreasSection({ id = 'service-areas' }) {
  return (
    <section className="panel" id={id} aria-labelledby="areas-h">
      <SectionHead
        tag="Service Areas"
        title={<span id="areas-h">Proudly Serving Your Community</span>}
        text="Don’t see your neighborhood? Give us a call, we probably cover it."
        action={<Button to="/contact">Get a Free Quote</Button>}
      />
      <div className="areas">
        <div className="areas__list">
          {locations.map((l, i) => (
            <Reveal key={l.slug} delay={(i % 2) * 0.05}>
              <Link className="area-link" to={`/service-areas/${l.slug}`}>{l.name}<Icon name="arrow" /></Link>
            </Reveal>
          ))}
          <p className="small muted" style={{ gridColumn: '1 / -1', marginTop: 6 }}>Placeholder locations. Replace with the actual service area.</p>
        </div>
        <Reveal><GoogleMap title="AIRCOVE service area map" /></Reveal>
      </div>
    </section>
  );
}
