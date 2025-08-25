import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import HowItWorks from '@/components/HowItWorks';
import Trading from '@/components/Trading';
import Team from '@/components/Team';
import Roadmap from '@/components/Roadmap';
import Footer from '@/components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // GSAP ScrollTrigger setup for enhanced animations
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <Trading />
      <Team />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Index;
