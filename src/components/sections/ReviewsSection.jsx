import { useState } from 'react';
import { testimonials } from '../../data/testimonials.js';
import Button from '../ui/Button.jsx';
import SectionHead from './SectionHead.jsx';
import ReviewCard from './ReviewCard.jsx';

// `compact` shows 3 reviews (home); otherwise starts at 3 with Load More.
export default function ReviewsSection({ title = 'Homeowners Trust AIRCOVE for Reliable Cooling', id = 'reviews', link, ids, intro, action }) {
  const list = ids ? ids.map((i) => testimonials[i]) : testimonials;
  const [count, setCount] = useState(3);
  const shown = list.slice(0, count);
  return (
    <section className="panel" id={id} aria-labelledby={`${id}-h`}>
      <SectionHead
        tag="Reviews"
        title={<span id={`${id}-h`}>{title}</span>}
        text={intro || 'Hiring an HVAC company shouldn’t be a gamble, so we make every step predictable, from the upfront price to the work itself.'}
        action={action || (link && <Button to={link}>See reviews</Button>)}
      />
      <div className="reviews-grid">{shown.map((t, i) => <ReviewCard key={t.name} t={t} index={i} />)}</div>
      {count < list.length && <div className="load-more"><Button onClick={() => setCount(list.length)}>Load More</Button></div>}
    </section>
  );
}
