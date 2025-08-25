import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { UserPlus, CreditCard, TrendingUp, Wallet } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Create Account',
      description: 'Sign up in minutes with our streamlined onboarding process and complete KYC verification.',
      step: '01'
    },
    {
      icon: CreditCard,
      title: 'Fund Your Wallet',
      description: 'Deposit crypto or fiat currency through multiple secure payment methods.',
      step: '02'
    },
    {
      icon: TrendingUp,
      title: 'Start Trading',
      description: 'Access advanced trading tools, real-time charts, and execute trades instantly.',
      step: '03'
    },
    {
      icon: Wallet,
      title: 'Secure & Withdraw',
      description: 'Your assets are protected with military-grade security. Withdraw anytime, anywhere.',
      step: '04'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started is simple. Follow these four easy steps to begin your crypto trading journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent transform -translate-y-1/2 z-0 animate-pulse-glow" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                }}
                className="relative"
              >
                <Card className="glass-card border-neon h-full group hover:shadow-glow-primary transition-all duration-500 relative overflow-hidden">
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-14 h-14 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center text-white font-black text-xl shadow-glow-primary z-20 border-2 border-background">
                    <span className="drop-shadow-lg">{step.step}</span>
                  </div>
                  
                  <CardContent className="p-8 text-center relative">
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 text-primary mb-6 group-hover:shadow-glow-primary group-hover:scale-110 transition-all duration-500 border border-primary/20 backdrop-blur-sm">
                      <step.icon className="h-12 w-12 drop-shadow-lg" />
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-4 gradient-text">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Enhanced Animated Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                    <motion.div
                      className="relative"
                      animate={{ 
                        x: [0, 8, 0],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      <div className="w-10 h-10 border-t-3 border-r-3 border-neon-cyan transform rotate-45 shadow-glow-primary" />
                      <div className="absolute -inset-1 w-12 h-12 border-t-2 border-r-2 border-neon-purple/50 transform rotate-45 animate-pulse" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;