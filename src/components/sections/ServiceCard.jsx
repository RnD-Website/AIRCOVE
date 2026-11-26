import { Link } from 'react-router-dom';
import { Icon } from '../ui/Icons.jsx';
import Img from '../ui/Img.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function ServiceCard({ service: s, index = 0 }) {
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <Link to={`/services/${s.slug}`} className="service-card" aria-label={s.title}>
        <div className="service-card__rail"><Icon name={s.icon} /><span>/0{s.n}</span></div>
        <div className="service-card__img"><Img src={s.image} alt={`${s.title} by an AIRCOVE technician`} /></div>
        <div className="service-card__body">
          <span className="small muted">{s.kind}</span>
          <h3>{s.title}</h3>
          <p>{s.short}</p>
          <Icon name="arrow" className="service-card__arrow" />
        </div>
      </Link>
    </Reveal>
  );
}
