import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Twitter,
  Linkedin,
  Github,
  MessageCircle,
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Kit", href: "#" },
      { name: "Contact", href: "#" },
    ],
    Products: [
      { name: "Spot Trading", href: "#" },
      { name: "Margin Trading", href: "#" },
      { name: "API Trading", href: "#" },
      { name: "Mobile Apps", href: "#" },
    ],
    Resources: [
      { name: "Help Center", href: "#" },
      { name: "Trading Guide", href: "#" },
      { name: "API Documentation", href: "#" },
      { name: "Security", href: "#" },
    ],
    Legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", color: "hover:text-[#1DA1F2]" },
    { icon: Linkedin, href: "#", color: "hover:text-[#0077B5]" },
    { icon: Github, href: "#", color: "hover:text-primary" },
    { icon: MessageCircle, href: "#", color: "hover:text-[#7289DA]" },
    { icon: Send, href: "#", color: "hover:text-[#0088CC]" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-darker-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-primary" />

      {/* Newsletter Section */}
      <div className="py-16 border-b border-border/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold mb-4">
              Ready to Start <span className="gradient-text">Trading?</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Join millions of traders and start your crypto journey today. Get
              exclusive insights and market updates delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <Input
                placeholder="Enter your email address"
                className="flex-1 bg-card/50 border-primary/30 focus:border-primary"
              />
              <Button className="btn-cyber px-8">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  CryptoFuture
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The next generation cryptocurrency trading platform built for
                  the future. Secure, fast, and powered by cutting-edge
                  blockchain technology.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>support@cryptofuture.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground transition-colors duration-300 ${social.color} hover:border-current`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(
              ([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                >
                  <h4 className="text-lg font-semibold mb-4 gradient-text">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 5 }}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                        >
                          <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300 mr-0 group-hover:mr-2" />
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-8 border-t border-border/20 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-muted-foreground text-center">
              © {new Date().getFullYear()} CryptoFuture. All rights reserved.
              Built with ❤️ by{" "}
              <a
                href="https://github.com/abdul-wahab619"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Abdul Wahab
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
