import { motion } from 'motion/react';
import { Clock, Users, DollarSign, Globe, Layers, Award } from 'lucide-react';

export function EventDetails() {
  const details = [
    {
      icon: Clock,
      label: 'Event Type',
      value: '48-hour Online Hackathon',
    },
    {
      icon: Users,
      label: 'Team Size',
      value: '2–5 Members',
    },
    {
      icon: DollarSign,
      label: 'Registration Fee',
      value: 'Free',
    },
    {
      icon: Globe,
      label: 'Mode',
      value: 'Virtual',
    },
    {
      icon: Layers,
      label: 'Tracks',
      value: 'AI/ML, FinTech, Web3, Sustainability, EdTech',
    },
    {
      icon: Award,
      label: 'Prizes',
      value: 'Trophy + Certificates',
    },
  ];

  return (
    <section id="event-details" className="relative py-20 md:py-32">
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
            Event Details — DevRush 1.0
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about the hackathon
          </p>
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
              <div className="relative p-6 bg-black/60 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-cyan-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <detail.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-400 text-sm mb-1">{detail.label}</h3>
                    <p className="text-white">{detail.value}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
