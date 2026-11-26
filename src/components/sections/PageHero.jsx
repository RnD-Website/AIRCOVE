import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Img from '../ui/Img.jsx';
import Button from '../ui/Button.jsx';

export default function PageHero({ crumb, title, text, image, alt, cta = 'Get a Free Quote', children }) {
  return (
    <section className={`page-hero ${image ? '' : 'page-hero--simple'}`}>
      <motion.div className="page-hero__card" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1] }}>
        <div className="crumbs"><Link to="/">Home</Link>{crumb && <><span>/</span><span>{crumb}</span></>}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
          <h1>{title}</h1>
          {text && <p>{text}</p>}
          {cta && <Button quote variant="dark">{cta}</Button>}
          {children}
        </div>
      </motion.div>
      {image && (
        <motion.div className="page-hero__img" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.44, 0, 0.56, 1] }}>
          <Img src={image} alt={alt} eager />
        </motion.div>
      )}
    </section>
  );
}
