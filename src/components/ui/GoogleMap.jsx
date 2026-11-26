import { site } from '../../data/site.js';

// Google Maps embed (no API key required).
export default function GoogleMap({ query = site.mapQuery, title = 'AIRCOVE location map', zoom = 12 }) {
  return (
    <div className="map">
      <iframe
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`}
        allowFullScreen
      />
    </div>
  );
}
