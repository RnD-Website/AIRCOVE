import { useParams } from 'react-router-dom';
import useSEO from '../hooks/useSEO.js';
import { getPost, blogPosts } from '../data/blogPosts.js';
import Reveal from '../components/ui/Reveal.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import Button from '../components/ui/Button.jsx';
import NewsletterForm from '../components/ui/NewsletterForm.jsx';
import BlogCard from '../components/sections/BlogCard.jsx';
import CTASection from '../components/sections/CTASection.jsx';
import NotFound from './NotFound.jsx';

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export default function BlogDetail() {
  const { slug } = useParams();
  const p = getPost(slug);
  useSEO({ title: p?.title || 'Article', description: p?.excerpt || '', image: p?.image });
  if (!p) return <NotFound />;
  const related = blogPosts.filter((x) => x.slug !== p.slug).slice(0, 2);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const share = [
    ['Facebook', `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`],
    ['X', `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(p.title)}`],
    ['LinkedIn', `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`],
  ];
  return (
    <>
      <PageHero crumb="Blog" title={p.title} text={p.excerpt} image={p.image} alt={p.title} cta={null}>
        <div className="author mono"><span>{p.category}</span><span>By {p.author}</span><span>{p.date}</span><span>{p.read} MIN READ</span></div>
      </PageHero>
      <div style={{ height: 24 }} />
      <section className="panel panel--first" style={{ paddingTop: 48 }}>
        <div className="article__layout">
          <nav className="toc" aria-label="Table of contents">
            <span className="mono muted">In this article</span>
            {p.sections.map((s) => <a key={s.h} href={`#${slugify(s.h)}`}>{s.h}</a>)}
          </nav>
          <div className="prose">
            {p.sections.map((s) => (
              <Reveal key={s.h} y={14}>
                <h2 id={slugify(s.h)}>{s.h}</h2>
                {s.p.map((t) => <p key={t}>{t}</p>)}
                {s.list && <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
              </Reveal>
            ))}
            <div className="share">
              <span className="mono muted">Share</span>
              {share.map(([n, h]) => <a key={n} className="btn" href={h} target="_blank" rel="noreferrer">{n}</a>)}
            </div>
          </div>
        </div>
        <div className="sub-title"><h2>Related Articles</h2><Button to="/blog">All articles</Button></div>
        <div className="blog-grid">{related.map((r, i) => <BlogCard key={r.slug} post={r} index={i} />)}</div>
        <div className="newsletter">
          <div><h3 style={{ fontSize: 24, lineHeight: '27px' }}>Get AC tips in your inbox</h3><p className="muted" style={{ marginTop: 6 }}>Seasonal maintenance reminders and savings. No spam.</p></div>
          <NewsletterForm dark={false} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
