import useSEO from '../hooks/useSEO.js';
import { site } from '../data/site.js';

const content = {
  privacy: {
    title: 'Privacy Policy',
    blocks: [
      ['Information we collect', 'We collect the details you submit through our forms, such as your name, email, phone number and service request, so we can respond to you.'],
      ['How we use it', 'We use your information to provide quotes and service, send requested updates, and improve our website. We do not sell your personal information.'],
      ['Your choices', `You may request access to or deletion of your information at any time by emailing ${site.email}.`],
      ['Note', 'This is placeholder policy text. Replace it with a policy reviewed by your legal advisor before launch.'],
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    blocks: [
      ['Use of this site', 'The content on this website is for general information. Service availability and pricing are confirmed at booking.'],
      ['Quotes and offers', 'Quotes are valid for the period stated. Promotional offers are subject to their stated terms and may change or end at any time.'],
      ['Liability', 'AIRCOVE is not liable for losses arising from reliance on general website content.'],
      ['Note', 'This is placeholder text. Replace it with terms reviewed by your legal advisor before launch.'],
    ],
  },
};

export default function Legal({ kind }) {
  const c = content[kind];
  useSEO({ title: c.title, description: `${c.title} for AIRCOVE.` });
  return (
    <div className="legal">
      <h1>{c.title}</h1>
      {c.blocks.map(([h, p]) => <section key={h}><h2>{h}</h2><p>{p}</p></section>)}
    </div>
  );
}
