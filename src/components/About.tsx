import { motion } from 'motion/react';
import { Lightbulb, Users, GraduationCap, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Build Real-World Projects',
      description: 'Create innovative solutions',
    },
    {
      icon: Users,
      title: 'Network with Developers',
      description: 'Connect with fellow hackers',
    },
    {
      icon: GraduationCap,
      title: 'Learn New Tech Stacks',
      description: 'Expand your skillset',
    },
    {
      icon: Trophy,
      title: 'Get Recognized',
      description: 'Certificates & Trophies',
    },
  ];

  return (
    <section id="what-you-get" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1626908013943-df94de54984c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwaW5ub3ZhdGlvbiUyMGFic3RyYWN0fGVufDF8fHx8MTc2MDM4NTg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Tech Innovation"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 p-4 bg-black/80 backdrop-blur-lg rounded-2xl border border-purple-500/30"
              >
                <div className="text-3xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  48h
                </div>
                <div className="text-sm text-gray-400">Online</div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 p-4 bg-black/80 backdrop-blur-lg rounded-2xl border border-cyan-500/30"
              >
                <div className="text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  5
                </div>
                <div className="text-sm text-gray-400">Max Team</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              What You'll Get
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
                  <div className="relative p-4 bg-black/60 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                    <feature.icon className="w-8 h-8 text-cyan-400 mb-3" />
                    <h3 className="text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
