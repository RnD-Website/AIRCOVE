import { useState } from 'react';

// Image with graceful fallback so a missing file never shows a broken icon.
// The fallback keeps the same className so it is positioned exactly like the image.
export default function Img({ src, alt, eager, className, style, ...rest }) {
  const [bad, setBad] = useState(false);
  if (bad) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={className}
        style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#e8f4ff,#f5f8fa)', ...style }}
      />
    );
  }
  const extra = eager ? { fetchpriority: 'high' } : {};
  return <img src={src} alt={alt} className={className} style={style} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setBad(true)} {...extra} {...rest} />;
}
