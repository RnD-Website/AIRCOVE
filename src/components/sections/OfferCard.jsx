import Reveal from '../ui/Reveal.jsx';
import Button from '../ui/Button.jsx';

export default function OfferCard({ offer: o, index = 0, cta }) {
  return (
    <Reveal className="offer" delay={index * 0.08}>
      <div className={`offer__big ${o.big.length > 4 ? 'is-word' : ''}`}>{o.big}</div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3>{o.title}</h3>
        <p>{o.text}</p>
        {cta && <div style={{ marginTop: 16 }}><Button to="/contact" variant="dark">Claim this offer</Button></div>}
      </div>
    </Reveal>
  );
}
