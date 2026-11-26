import { Link } from 'react-router-dom';
import { Icon } from './Icons.jsx';
import { useQuote } from './QuoteModal.jsx';

// Letter-roll label: every character slides up and its twin rises from below on hover (see .btn__ch in motion.css)
function Roll({ children }) {
  const text = [].concat(children).filter((c) => typeof c === 'string' || typeof c === 'number').join('');
  const rest = [].concat(children).filter((c) => typeof c !== 'string' && typeof c !== 'number');
  if (!text) return <>{children}</>;
  return (
    <>
      <span className="btn__label" aria-label={text}>
        {[...text].map((ch, i) => (
          <span key={i} className="btn__ch" aria-hidden="true" style={{ '--i': i }}>{ch === ' ' ? '\u00a0' : ch}</span>
        ))}
      </span>
      {rest}
    </>
  );
}

// `quote` makes the button open the booking form instead of navigating.
export default function Button({ to, href, variant, size, icon, quote, onClick, children, className = '', ...rest }) {
  const { openQuote } = useQuote();
  const cls = `btn ${variant ? `btn--${variant}` : ''} ${size ? `btn--${size}` : ''} ${className}`;
  const inner = <><Roll>{children}</Roll>{icon && <Icon name={icon} width={14} height={14} />}</>;
  if (quote) return <button type="button" className={cls} onClick={(e) => { onClick?.(e); openQuote(); }} {...rest}>{inner}</button>;
  if (to) return <Link to={to} className={cls} onClick={onClick} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} onClick={onClick} {...rest}>{inner}</a>;
  return <button className={cls} onClick={onClick} {...rest}>{inner}</button>;
}
