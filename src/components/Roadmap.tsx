import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, Clock, Rocket } from 'lucide-react';

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: 'Q1 2024',
      status: 'completed',
      title: 'Platform Launch',
      description: 'Core trading platform launch with basic features and security infrastructure.',
      achievements: ['Spot Trading', 'Basic Security', 'Mobile Apps', 'KYC Integration']
    },
    {
      quarter: 'Q2 2024',
      status: 'completed',
      title: 'Advanced Features',
      description: 'Implementation of advanced trading tools and institutional-grade features.',
      achievements: ['Margin Trading', 'API Trading', 'Advanced Charts', 'Portfolio Analytics']
    },
    {
      quarter: 'Q3 2024',
      status: 'in-progress',
      title: 'AI Integration',
      description: 'Launch of AI-powered trading insights and automated portfolio management.',
      achievements: ['AI Trading Signals', 'Smart Portfolio', 'Risk Analysis', 'Prediction Models']
    },
    {
      quarter: 'Q4 2024',
      status: 'planned',
      title: 'Global Expansion',
      description: 'International expansion with localized services and regulatory compliance.',
      achievements: ['EU Compliance', 'Asian Markets', 'Local Payment', 'Multi-Language']
    },
    {
      quarter: 'Q1 2025',
      status: 'planned',
      title: 'DeFi Integration',
      description: 'Seamless integration with decentralized finance protocols and yield farming.',
      achievements: ['Staking Rewards', 'Yield Farming', 'DeFi Protocols', 'Cross-Chain']
    },
    {
      quarter: 'Q2 2025',
      status: 'planned',
      title: 'Web3 Platform',
      description: 'Complete transformation into a comprehensive Web3 financial ecosystem.',
      achievements: ['DAO Governance', 'NFT Trading', 'Web3 Wallet', 'Metaverse Integration']
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-neon-green" />;
      case 'in-progress':
        return <Clock className="h-6 w-6 text-accent animate-pulse" />;
      case 'planned':
        return <Circle className="h-6 w-6 text-muted-foreground" />;
      default:
        return <Circle className="h-6 w-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-neon-green/20 text-neon-green border-neon-green/50';
      case 'in-progress':
        return 'bg-accent/20 text-accent border-accent/50';
      case 'planned':
        return 'bg-muted/20 text-muted-foreground border-muted/50';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/50';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-r from-secondary/5 via-primary/5 to-accent/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6">
            Development <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey towards creating the most advanced cryptocurrency trading platform
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform -translate-x-1/2" />
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-4 h-4 rounded-full bg-gradient-primary border-4 border-background shadow-glow-primary" />
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <Card className="glass-card border-neon hover:shadow-glow-primary transition-all duration-500 group">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(item.status)}
                          <Badge className={getStatusColor(item.status)}>
                            {item.quarter}
                          </Badge>
                        </div>
                        <Rocket className="h-6 w-6 text-primary group-hover:animate-pulse" />
                      </div>

                      <h3 className="text-2xl font-bold gradient-text mb-3">{item.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>

                      {/* Achievements */}
                      <div className="grid grid-cols-2 gap-3">
                        {item.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <div className={`w-2 h-2 rounded-full ${
                              item.status === 'completed' ? 'bg-neon-green' :
                              item.status === 'in-progress' ? 'bg-accent' : 'bg-muted-foreground'
                            }`} />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for larger screens */}
                <div className="hidden lg:block w-2/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card border-neon p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Join our community to get the latest updates on our development progress
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-cyber px-6 py-3 rounded-full"
              >
                Join Newsletter
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
              >
                Follow Updates
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;