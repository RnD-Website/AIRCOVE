import { Link } from 'react-router-dom';
import { site } from '../../data/site.js';
import { services } from '../../data/services.js';
import { Logo } from '../ui/Icons.jsx';
import NewsletterForm from '../ui/NewsletterForm.jsx';

export default function Footer() {
  return (
    <footer className="footer" style={{ marginBottom: 12 }}>
      <div className="footer__grid">
        <div>
          <Link to="/" className="logo"><Logo />{site.name}</Link>
          <p style={{ marginTop: 14 }}>{site.tagline} Fast, honest cooling and heating service you can count on.</p>
          <NewsletterForm />
          <div className="footer__social">
            {site.social.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ fontSize: 13 }}>{s.label}</a>)}
          </div>
        </div>
        <div className="footer__col">
          <h5>Navigation</h5>
          <ul>
            {site.nav.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}
            <li><Link to="/service-areas">Service Areas</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h5>Services</h5>
          <ul>{services.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
        </div>
        <div className="footer__col">
          <h5>Contact</h5>
          <ul>
            <li><a href={site.phoneHref}>{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}`} target="_blank" rel="noreferrer">{site.address}</a></li>
          </ul>
          <h5 style={{ marginTop: 22 }}>Hours</h5>
          <ul>{site.hours.map(([d, h]) => <li key={d}>{d}: {h}</li>)}</ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} AIRCOVE. All rights reserved.</span>
        <span style={{ display: 'flex', gap: 18 }}>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
        </span>
      </div>
    </footer>
  );
}
