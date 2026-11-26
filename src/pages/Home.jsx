import useSEO from '../hooks/useSEO.js';
import Hero from '../components/sections/Hero.jsx';
import ServicesSection from '../components/sections/ServicesSection.jsx';
import WhySection from '../components/sections/WhySection.jsx';
import ReviewsSection from '../components/sections/ReviewsSection.jsx';
import FinancingSection from '../components/sections/FinancingSection.jsx';
import OffersSection from '../components/sections/OffersSection.jsx';
import AreasSection from '../components/sections/AreasSection.jsx';
import FAQSection from '../components/sections/FAQSection.jsx';

export default function Home() {
  useSEO({ title: '', description: 'Expert AC repair, installation, maintenance and 24/7 emergency HVAC service. Upfront pricing, licensed technicians, same-day service.' });
  return (
    <>
      <Hero />
      <div style={{ height: 56 }} />
      <ServicesSection />
      <WhySection />
      <ReviewsSection link="/about#reviews" />
      <FinancingSection />
      <OffersSection />
      <AreasSection />
      <FAQSection />
    </>
  );
}
