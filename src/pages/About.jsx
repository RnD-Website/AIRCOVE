import useSEO from '../hooks/useSEO.js';
import PageHero from '../components/sections/PageHero.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Img from '../components/ui/Img.jsx';
import Button from '../components/ui/Button.jsx';
import { Icon } from '../components/ui/Icons.jsx';
import { team, credentials } from '../data/team.js';
import SectionHead from '../components/sections/SectionHead.jsx';
import ReviewsSection from '../components/sections/ReviewsSection.jsx';
import AreasSection from '../components/sections/AreasSection.jsx';
import FAQSection from '../components/sections/FAQSection.jsx';
import CTASection from '../components/sections/CTASection.jsx';

export default function About() {
  useSEO({ title: 'About Us', description: 'AIRCOVE is your local AC and HVAC team: licensed technicians, upfront pricing and honest work since 2009.', image: '/images/about-team.jpg' });
  return (
    <>
      <PageHero crumb="About" title="Your Local AC & HVAC Experts" text="We started with one truck and a simple promise: honest work, upfront prices, and cooling done right the first time." image="/images/about-team.jpg" alt="The AIRCOVE technician team standing in front of a service van" />
      <div style={{ height: 24 }} />
      <section className="panel panel--first" style={{ paddingTop: 80 }} aria-labelledby="story-h">
        <div className="story">
          <Reveal><span className="chip">Our story</span><h2 id="story-h" style={{ marginTop: 20 }}>From One Truck to Your Go-To HVAC Team</h2></Reveal>
          <Reveal delay={0.1}><p>AIRCOVE started with one van, one licensed technician, and a belief that homeowners deserved better than surprise bills and no-shows. We grew the way good contractors do, one fair job at a time, on the strength of neighbors telling neighbors. Today our licensed team covers the whole region, and the promise hasn’t changed: show up on time, quote it straight, fix it right.</p></Reveal>
        </div>
        <div className="stats">
          {[['15+', 'Years of experience'], ['10K+', 'Projects completed'], ['4.9', 'Customer satisfaction across 312 Google reviews'], ['100%', 'Licensed & insured technicians']].map(([n, l], i) => (
            <Reveal key={l} className="stat" delay={i * 0.08}><strong>{n}</strong><span>{l}</span></Reveal>
          ))}
        </div>
      </section>
      <section className="panel" aria-labelledby="cred-h">
        <div className="creds">
          <Reveal>
            <span className="chip">Credentials</span>
            <h2 id="cred-h" style={{ margin: '20px 0' }}>Licensed, Insured, and Accountable</h2>
            <p className="muted" style={{ maxWidth: 380 }}>Every AIRCOVE job is performed by licensed technicians and finished to local code.</p>
          </Reveal>
          <Reveal className="block" delay={0.1}>
            <ul className="check-list">{credentials.map((c) => <li key={c}><Icon name="check" />{c}</li>)}</ul>
          </Reveal>
        </div>
      </section>
      <section className="panel" aria-labelledby="team-h">
        <SectionHead tag="Our team" title={<span id="team-h">Meet the People Behind the Trucks.</span>} text="Friendly, licensed, and respectful of your home, these are the people who’ll show up at your door." />
        <div className="team-grid">
          {team.map((m, i) => (
            <Reveal key={m.name} className="member" delay={(i % 3) * 0.08}>
              <div className="member__img"><Img src={m.image} alt={`${m.name}, ${m.role}`} /></div>
              <div><b>{m.name}</b><span>{m.role}</span></div>
            </Reveal>
          ))}
        </div>
      </section>
      <ReviewsSection id="reviews" title="What Our Customers Say About Us" intro="We grew on neighbors telling neighbors, so we’ll let them do the talking." action={<Button to="/contact">Write a review</Button>} />
      <AreasSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
