import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Zap, Shield, TrendingUp } from 'lucide-react';
import AOS from 'aos';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center grid-bg floating-particles"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-transparent to-background/60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="gradient-text cyber-text">Future of</span>
              <br />
              <span className="text-foreground">Crypto Trading</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Experience next-generation blockchain technology with our advanced trading platform. 
              Secure, fast, and powered by AI-driven insights.
            </p>
          </motion.div>

          {/* Floating Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { icon: TrendingUp, value: '$2.4B', label: 'Trading Volume' },
              { icon: Shield, value: '99.9%', label: 'Uptime' },
              { icon: Zap, value: '<0.1s', label: 'Execution Speed' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 border-neon rounded-xl cyber-glow"
                whileHover={{ scale: 1.05 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="btn-cyber text-lg px-10 py-7 rounded-full group relative overflow-hidden border-2 border-neon-cyan/50 hover:border-neon-cyan transition-all duration-500 hover:scale-110 hover:shadow-glow-primary">
              <span className="relative z-10 font-bold text-white">Start Trading Now</span>
              <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-10 py-7 rounded-full border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/20 hover:border-neon-purple hover:text-white transition-all duration-500 hover:scale-110 hover:shadow-glow-secondary backdrop-blur-sm bg-black/20"
            >
              <span className="font-bold">Learn More</span>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-glow" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;