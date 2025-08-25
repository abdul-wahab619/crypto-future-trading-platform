import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { gsap } from 'gsap';

const Stats = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  
  const stats = [
    { value: 2.4, suffix: 'B+', label: 'Trading Volume', prefix: '$' },
    { value: 1.2, suffix: 'M+', label: 'Active Users', prefix: '' },
    { value: 99.9, suffix: '%', label: 'Uptime', prefix: '' },
    { value: 150, suffix: '+', label: 'Cryptocurrencies', prefix: '' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stat-card', 
        { 
          opacity: 0, 
          y: 50, 
          rotationX: -15 
        },
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, statsRef);

    return () => ctx.revert();
  }, []);

  const Counter = ({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
      if (value >= 1) {
        return Math.round(latest * 10) / 10;
      }
      return Math.round(latest * 100) / 100;
    });

    useEffect(() => {
      const controls = animate(count, value, { 
        duration: 2,
        ease: 'easeOut'
      });
      return controls.stop;
    }, [count, value]);

    return (
      <motion.span className="text-6xl md:text-7xl font-bold gradient-text">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.span>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 floating-particles" />
      
      <div className="container mx-auto px-4 relative z-10" ref={statsRef}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Millions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the growing community of traders who trust our platform for their crypto needs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card text-center p-8 glass-card border-neon rounded-xl hover:shadow-glow-primary transition-all duration-500"
            >
              <div className="mb-4">
                <Counter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix}
                />
              </div>
              <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default Stats;