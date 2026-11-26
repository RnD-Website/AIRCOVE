// Central site configuration. PLACEHOLDER contact details: replace before launch.
export const site = {
  name: 'AIRCOVE',
  tagline: 'Expert AC & HVAC technicians in your area.',
  phone: '(555) 010-2030',
  phoneHref: 'tel:5550102030',
  email: 'hello@aircove.example',
  address: '500 Sunset Circle, Springfield, USA 10001',
  mapQuery: '500 Sunset Circle, Springfield',
  hours: [
    ['Mon - Fri', '7 AM - 6 PM'],
    ['Saturday', '8 AM - 4 PM'],
    ['Sunday', 'Emergency only'],
  ],
  nav: [
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Offers', to: '/offers' },
    { label: 'Financing', to: '/financing' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ],
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
};
