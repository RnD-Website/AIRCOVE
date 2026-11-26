import { offers } from '../../data/offers.js';
import Button from '../ui/Button.jsx';
import SectionHead from './SectionHead.jsx';
import OfferCard from './OfferCard.jsx';

export default function OffersSection({ link = true }) {
  return (
    <section className="panel" aria-labelledby="off-h">
      <SectionHead
        tag="Special Offers"
        title={<span id="off-h">Save on Your Next AC Service</span>}
        text="First-time customers save right out of the gate. Just mention the offer when you book."
        action={link && <Button to="/offers">See all offers</Button>}
      />
      <div className="offers-grid">{offers.map((o, i) => <OfferCard key={o.title} offer={o} index={i} />)}</div>
    </section>
  );
}
