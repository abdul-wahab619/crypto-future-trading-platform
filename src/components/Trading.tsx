import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';

const Trading = () => {
  const cryptos = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$42,580.32', change: '+5.24%', trend: 'up' },
    { name: 'Ethereum', symbol: 'ETH', price: '$2,840.76', change: '+3.18%', trend: 'up' },
    { name: 'Solana', symbol: 'SOL', price: '$98.45', change: '-1.24%', trend: 'down' },
    { name: 'Cardano', symbol: 'ADA', price: '$0.52', change: '+7.89%', trend: 'up' },
  ];

  const features = [
    'Real-time Market Data',
    'Advanced Charting Tools',
    'Algorithmic Trading',
    'Portfolio Analytics',
    'Risk Management',
    'Mobile Trading Apps'
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl font-bold mb-6">
                <span className="gradient-text">Advanced Trading</span>
                <br />Platform
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience professional-grade trading with our cutting-edge platform. 
                Access real-time data, advanced analytics, and execute trades with institutional-level precision.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-gradient-primary rounded-full" />
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button className="btn-cyber text-lg px-8 py-6 rounded-full">
              <BarChart3 className="mr-2 h-5 w-5" />
              Start Trading Now
            </Button>
          </motion.div>

          {/* Right Side - Live Prices */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold gradient-text mb-2">Live Market Prices</h3>
              <p className="text-muted-foreground">Real-time cryptocurrency prices updated every second</p>
            </div>
            
            {cryptos.map((crypto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-card border-neon hover:shadow-glow-primary transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold">
                            {crypto.symbol.slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold">{crypto.name}</h4>
                          <p className="text-muted-foreground text-sm">{crypto.symbol}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold">{crypto.price}</div>
                        <Badge 
                          className={`
                            ${crypto.trend === 'up' 
                              ? 'bg-neon-green/20 text-neon-green border-neon-green/50' 
                              : 'bg-destructive/20 text-destructive border-destructive/50'
                            }
                          `}
                        >
                          {crypto.trend === 'up' ? (
                            <TrendingUp className="h-3 w-3 mr-1" />
                          ) : (
                            <TrendingDown className="h-3 w-3 mr-1" />
                          )}
                          {crypto.change}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            <motion.div
              className="text-center pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-sm text-muted-foreground">
                <DollarSign className="inline h-4 w-4 mr-1" />
                Trade 150+ cryptocurrencies with zero fees
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trading;