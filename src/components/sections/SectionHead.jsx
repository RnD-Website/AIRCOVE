import Reveal from '../ui/Reveal.jsx';

export default function SectionHead({ tag, title, text, action, wide }) {
  return (
    <Reveal className="section-head">
      <div className="section-head__title">
        {tag && <span className="chip">{tag}</span>}
        <h2>{title}</h2>
      </div>
      {(text || action) && (
        <div className={`section-head__aside ${wide ? 'section-head__aside--wide' : ''}`}>
          {text && <p>{text}</p>}
          {action}
        </div>
      )}
    </Reveal>
  );
}
