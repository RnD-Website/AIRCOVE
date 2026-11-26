import { useMemo, useState } from 'react';
import useSEO from '../hooks/useSEO.js';
import { blogPosts, blogCategories } from '../data/blogPosts.js';
import PageHero from '../components/sections/PageHero.jsx';
import BlogCard from '../components/sections/BlogCard.jsx';
import Button from '../components/ui/Button.jsx';
import NewsletterForm from '../components/ui/NewsletterForm.jsx';
import FAQSection from '../components/sections/FAQSection.jsx';
import CTASection from '../components/sections/CTASection.jsx';

const PAGE = 4;

export default function Blog() {
  useSEO({ title: 'AC & HVAC Tips and Guides', description: 'Straight answers to common AC and HVAC questions from technicians who fix this stuff every day.', image: '/images/blog/blog-1.jpg' });
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const [count, setCount] = useState(PAGE);

  const list = useMemo(() => blogPosts.filter((p) =>
    (cat === 'All' || p.category === cat) && (!q || `${p.title} ${p.excerpt}`.toLowerCase().includes(q.toLowerCase()))), [cat, q]);
  const [featured, ...rest] = list;

  return (
    <>
      <PageHero crumb="Blog" title="AC & HVAC Tips From Your Local Experts" text="Straight answers to common cooling and heating questions, from people who fix this stuff every day." cta={null} />
      <div style={{ height: 24 }} />
      <section className="panel panel--first" style={{ paddingTop: 48 }}>
        <div className="filters">
          <div className="search"><label className="sr-only" htmlFor="blog-search">Search articles</label><input id="blog-search" type="search" placeholder="Search articles…" value={q} onChange={(e) => { setQ(e.target.value); setCount(PAGE); }} /></div>
          <div className="pills" role="group" aria-label="Category">{blogCategories.map((c) => <button key={c} className={`pill ${cat === c ? 'on' : ''}`} onClick={() => { setCat(c); setCount(PAGE); }}>{c}</button>)}</div>
        </div>
        {list.length ? (
          <div className="blog-grid">
            <BlogCard post={featured} featured />
            {rest.slice(0, count - 1).map((p, i) => <BlogCard key={p.slug} post={p} index={i} />)}
          </div>
        ) : <p className="empty">No articles found.</p>}
        {rest.length > count - 1 && <div className="load-more"><Button onClick={() => setCount(count + PAGE)}>Load More</Button></div>}
        <div className="newsletter">
          <div><h3 style={{ fontSize: 24, lineHeight: '27px' }}>Get AC tips in your inbox</h3><p className="muted" style={{ marginTop: 6 }}>Seasonal maintenance reminders and savings. No spam.</p></div>
          <NewsletterForm dark={false} />
        </div>
      </section>
      <FAQSection />
      <CTASection />
    </>
  );
}
