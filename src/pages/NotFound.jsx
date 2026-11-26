import useSEO from '../hooks/useSEO.js';
import Button from '../components/ui/Button.jsx';

export default function NotFound() {
  useSEO({ title: 'Page not found', description: 'The page you are looking for does not exist.' });
  return (
    <div className="notfound">
      <div><span className="mono muted">404</span><h1 style={{ margin: '12px 0 20px' }}>Page not found</h1><Button to="/" variant="dark" size="lg">Back to home</Button></div>
    </div>
  );
}
