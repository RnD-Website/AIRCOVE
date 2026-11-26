import Reveal from '../ui/Reveal.jsx';
import { Stars } from '../ui/Icons.jsx';
import Img from '../ui/Img.jsx';

export default function ReviewCard({ t, index = 0 }) {
  return (
    <Reveal className="review" delay={(index % 3) * 0.08}>
      <div className="review__head"><strong>{t.rating.toFixed(1)}</strong><Stars rating={t.rating} /></div>
      <p className="q">“{t.quote}”</p>
      <div className="review__who">
        <Img className="avatar" src={t.avatar} alt={t.name} />
        <div><b>{t.name}</b><span className="mono muted">HOMEOWNER · {t.area}</span></div>
      </div>
    </Reveal>
  );
}
