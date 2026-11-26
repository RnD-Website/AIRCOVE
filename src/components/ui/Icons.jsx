const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };
const P = {
  snow: <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9 4.500L12 7.500l3-3M9 19.500l3-3 3 3" />,
  wrench: <path d="M14.500 6.500a4 4 0 0 0 5 5L11 20a2.100 2.100 0 0 1-3-3l8.500-8.500zM14.500 6.500l3-3" />,
  gauge: <><path d="M4 16a8 8 0 1 1 16 0" /><path d="M12 16l4-5" /></>,
  bolt: <path d="M13 3L5 13.500h6L10 21l8-10.500h-6L13 3z" />,
  wind: <path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8" />,
  flame: <path d="M12 3c1 4 5 5.500 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z" />,
  layers: <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17.500l9 5 9-5" />,
  thermo: <path d="M10 14.500V5a2 2 0 1 1 4 0v9.500a4 4 0 1 1-4 0zM12 9v7" />,
  arrow: <path d="M7 17L17 7M8 7h9v9" />,
  right: <path d="M5 12h14M13 6l6 6-6 6" />,
  left: <path d="M19 12H5M11 6l-6 6 6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  check: <path d="M5 12.500l4.500 4.500L19 7.500" />,
  price: <path d="M12 3v18M16 7.500c0-1.500-1.800-2.500-4-2.500s-4 1-4 2.700c0 4 8 2 8 6 0 1.700-1.800 2.800-4 2.800s-4-1.200-4-2.800" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c1-4 4-6 8-6s7 2 8 6" /></>,
  shield: <path d="M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6l8-3zM8.500 12l2.500 2.500 4.500-5" />,
  award: <><circle cx="12" cy="9" r="6" /><path d="M8.500 14l-1.500 7 5-3 5 3-1.500-7" /></>,
  smile: <><circle cx="12" cy="12" r="9" /><path d="M8 14c1 1.500 2.500 2.200 4 2.200s3-.7 4-2.200M9 9.500h.01M15 9.500h.01" /></>,
  phone: <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
};
export const Icon = ({ name, ...rest }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...rest}>{P[name]}</svg>
);

export const Logo = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <circle cx="16" cy="16" r="15" fill="#e8f4ff" stroke="#2f7fd1" strokeOpacity=".35" />
    <path d="M8 20c3-6 13-6 16 0M10.500 15c2-3.500 9-3.500 11 0M13 11c1.500-1.500 4.500-1.500 6 0" fill="none" stroke="#2f7fd1" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Star = ({ fill = 1 }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <defs><linearGradient id={`g${fill}`}><stop offset={`${fill * 100}%`} stopColor="#f5b52e" /><stop offset={`${fill * 100}%`} stopColor="#d9dde2" /></linearGradient></defs>
    <path d="M12 2.500l2.900 6 6.600.9-4.800 4.600 1.200 6.500L12 17.300 6.100 20.500l1.200-6.500L2.500 9.400l6.600-.9L12 2.500z" fill={`url(#g${fill})`} />
  </svg>
);

export const Stars = ({ rating = 5 }) => (
  <span className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
    {[0, 1, 2, 3, 4].map((i) => <Star key={i} fill={Math.max(0, Math.min(1, rating - i))} />)}
  </span>
);
