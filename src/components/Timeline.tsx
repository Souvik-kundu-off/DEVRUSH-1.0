import { motion } from 'motion/react';
import { Users, Lightbulb, Filter, Rocket, Award, Trophy } from 'lucide-react';

export function Timeline() {
  const phases = [
    {
      icon: Rocket,
      title: 'Opening Ceremony',
      date: 'Nov 9, 10:00 AM',
      description: 'Theme Reveal',
    },
    {
      icon: Lightbulb,
      title: 'Hacking Begins',
      date: 'Nov 9, 11:00 AM',
      description: 'Start building',
    },
    {
      icon: Users,
      title: 'Mentorship Round',
      date: 'Nov 10, 8:00 PM',
      description: 'Get guidance',
    },
    {
      icon: Filter,
      title: 'Submission Deadline',
      date: 'Nov 11, 9:00 AM',
      description: 'Final submissions',
    },
    {
      icon: Award,
      title: 'Results',
      date: 'Nov 11, 12:00 PM',
      description: 'Judging & Winners',
    },
    {
      icon: Trophy,
      title: 'Closing Ceremony',
      date: 'Nov 11, 4:00 PM',
      description: 'Celebration',
    },
  ];

  return (
    <section id="timeline" className="relative py-20 md:py-32">
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
            Event Timeline
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            48 hours of innovation — here's your schedule
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600 transform -translate-y-1/2 rounded-full"></div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full border-4 border-black z-10 shadow-lg shadow-purple-500/50"></div>

                {/* Card */}
                <div className="pt-32">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
                    <div className="relative p-6 bg-black/80 backdrop-blur-sm rounded-2xl border border-purple-500/30 hover:border-cyan-500/50 transition-all">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                        <phase.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white text-center mb-2">{phase.title}</h3>
                      <p className="text-sm text-cyan-400 text-center mb-2">{phase.date}</p>
                      <p className="text-xs text-gray-400 text-center">{phase.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-cyan-600 to-blue-600 rounded-full"></div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Connector Dot */}
                <div className="absolute left-6 top-6 w-6 h-6 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full border-4 border-black z-10 shadow-lg shadow-purple-500/50"></div>

                {/* Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
                  <div className="relative p-4 bg-black/80 backdrop-blur-sm rounded-2xl border border-purple-500/30">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <phase.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white mb-1">{phase.title}</h3>
                        <p className="text-sm text-cyan-400 mb-1">{phase.date}</p>
                        <p className="text-sm text-gray-400">{phase.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
