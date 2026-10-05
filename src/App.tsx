import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertySearch from '@/components/PropertySearch';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import PropertyCategories from '@/components/PropertyCategories';
import FeaturedProperties from '@/components/FeaturedProperties';
import WhySmartDeal from '@/components/WhySmartDeal';
import MangaloreSection from '@/components/MangaloreSection';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import TravelSection from '@/components/TravelSection';
import ContactCTA from '@/components/ContactCTA';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';

export default function App() {
  return (
    <div className="min-h-screen bg-sd-ivory">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <PropertySearch />
        <Stats />
        <About />
        <Services />
        <PropertyCategories />
        <FeaturedProperties />
        <WhySmartDeal />
        <MangaloreSection />
        <Process />
        <Testimonials />
        <TravelSection />
        <ContactCTA />
        <ContactForm />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
