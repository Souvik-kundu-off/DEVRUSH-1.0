import { motion } from 'motion/react';
import { Handshake, Lightbulb, Shield } from 'lucide-react';

export function CodeOfConduct() {
  const conduct = [
    {
      icon: Handshake,
      title: 'Respect Everyone',
      description: 'Treat all participants, mentors, and organizers with kindness and respect.',
      color: 'from-purple-600 to-pink-600',
    },
    {
      icon: Lightbulb,
      title: 'Encourage Creativity',
      description: 'Support innovative ideas and diverse perspectives from all team members.',
      color: 'from-cyan-600 to-blue-600',
    },
    {
      icon: Shield,
      title: 'Maintain Integrity',
      description: 'No plagiarism. Create original work and give credit where it is due.',
      color: 'from-blue-600 to-purple-600',
    },
  ];

  return (
    <section id="code-of-conduct" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Code of Conduct
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Creating a safe and inclusive environment for everyone
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {conduct.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-sm opacity-20 group-hover:opacity-30 transition-all`}></div>
              <div className="relative p-8 bg-black/60 backdrop-blur-sm rounded-3xl border border-purple-500/20 hover:border-cyan-500/40 transition-all text-center">
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
