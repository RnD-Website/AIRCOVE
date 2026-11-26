import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal.jsx';
import Img from '../ui/Img.jsx';

export default function BlogCard({ post: p, featured, index = 0 }) {
  return (
    <Reveal className={featured ? 'blog-card--featured-wrap' : ''} delay={(index % 2) * 0.08} style={featured ? { gridColumn: '1 / -1' } : undefined}>
      <Link to={`/blog/${p.slug}`} className={`blog-card ${featured ? 'blog-card--featured' : ''}`}>
        <div className="blog-card__img"><Img src={p.image} alt={p.title} /></div>
        <div className="blog-card__body">
          <div className="meta mono"><span>{p.category}</span><span>{p.author}</span><span>{p.date}</span><span>{p.read} MIN READ</span></div>
          <h3>{p.title}</h3>
          <p>{p.excerpt}</p>
        </div>
      </Link>
    </Reveal>
  );
}
