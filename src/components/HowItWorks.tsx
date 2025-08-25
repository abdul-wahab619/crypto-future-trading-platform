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
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-primary transform -translate-y-1/2 z-0" />
          
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
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow-primary">
                    {step.step}
                  </div>
                  
                  <CardContent className="p-8 text-center relative">
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 text-primary mb-6 group-hover:shadow-glow-primary transition-all duration-300">
                      <step.icon className="h-10 w-10" />
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-4 gradient-text">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Animated Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                    <motion.div
                      className="w-8 h-8 border-t-2 border-r-2 border-primary transform rotate-45"
                      animate={{ 
                        x: [0, 5, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
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