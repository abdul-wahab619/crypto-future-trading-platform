import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Github } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      bio: "Former Goldman Sachs VP with 15+ years in financial technology and blockchain innovation.",
      expertise: ["Fintech", "Blockchain", "Strategy"],
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Google senior engineer specialized in distributed systems and cryptocurrency protocols.",
      expertise: ["Distributed Systems", "Security", "Scalability"],
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Michael Kim",
      role: "Head of Security",
      bio: "Cybersecurity expert with background in military-grade security and crypto forensics.",
      expertise: ["Cybersecurity", "Compliance", "Risk Management"],
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      bio: "Product leader from Meta, focused on user experience and growth in financial products.",
      expertise: ["Product Strategy", "UX Design", "Growth"],
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
    },
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
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Led by industry veterans from top financial institutions and tech
            companies, building the future of cryptocurrency trading
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
              className="group"
            >
              <Card className="glass-card border-neon h-full overflow-hidden hover:shadow-glow-primary transition-all duration-500">
                <CardContent className="p-0">
                  {/* Profile Image */}
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform duration-300">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer"
                        >
                          <Linkedin className="h-5 w-5 text-white" />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer"
                        >
                          <Twitter className="h-5 w-5 text-white" />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer"
                        >
                          <Github className="h-5 w-5 text-white" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 gradient-text">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm mb-3 font-medium">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs border-primary/50 text-primary hover:bg-primary/10"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "50+", label: "Team Members" },
              { value: "100+", label: "Years Combined Experience" },
              { value: "5", label: "Global Offices" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card border-neon p-6 rounded-xl"
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
