import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Zap, 
  Brain, 
  TrendingUp, 
  Globe, 
  Lock,
  BarChart3,
  Smartphone
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'Advanced encryption and multi-layer security protocols protect your digital assets.',
      color: 'primary'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Execution',
      description: 'Execute trades in milliseconds with our optimized matching engine.',
      color: 'accent'
    },
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Get intelligent insights and predictions powered by machine learning.',
      color: 'secondary'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Trading Tools',
      description: 'Professional-grade charts, indicators, and algorithmic trading features.',
      color: 'primary'
    },
    {
      icon: Globe,
      title: 'Global Liquidity',
      description: 'Access deep liquidity pools and trade with global market makers.',
      color: 'accent'
    },
    {
      icon: Lock,
      title: 'Cold Storage',
      description: '95% of funds secured in offline cold storage with multi-signature protection.',
      color: 'secondary'
    },
    {
      icon: BarChart3,
      title: 'Real-time Data',
      description: 'Live market data, advanced charting, and comprehensive portfolio analytics.',
      color: 'primary'
    },
    {
      icon: Smartphone,
      title: 'Mobile Trading',
      description: 'Trade anywhere, anytime with our feature-rich mobile applications.',
      color: 'accent'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Revolutionary</span> Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by cutting-edge blockchain technology and designed for the future of finance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="perspective-1000"
            >
              <Card className="glass-card border-neon h-full group hover:shadow-glow-primary transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <div className={`
                    inline-flex items-center justify-center w-16 h-16 rounded-full mb-6
                    ${feature.color === 'primary' ? 'bg-primary/20 text-primary' : ''}
                    ${feature.color === 'secondary' ? 'bg-secondary/20 text-secondary' : ''}
                    ${feature.color === 'accent' ? 'bg-accent/20 text-accent' : ''}
                  `}>
                    <feature.icon className="h-8 w-8 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 gradient-text">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;