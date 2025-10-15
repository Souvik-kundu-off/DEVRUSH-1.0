import { motion } from 'motion/react';
import { Brain, Shield, Heart, GraduationCap, Leaf } from 'lucide-react';

export function Tracks() {
  const tracks = [
    {
      icon: Brain,
      title: 'AI for Society',
      description: 'Build solutions that leverage AI for real-world social impact.',
      color: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-500/50',
      shadowColor: 'shadow-purple-500/50',
    },
    {
      icon: Shield,
      title: 'FinTech & Cybersecurity',
      description: 'Redefine security, payments, and digital safety.',
      color: 'from-cyan-600 to-blue-600',
      borderColor: 'border-cyan-500/50',
      shadowColor: 'shadow-cyan-500/50',
    },
    {
      icon: Heart,
      title: 'HealthTech & Emergency',
      description: 'Design innovative medical and response solutions.',
      color: 'from-red-600 to-pink-600',
      borderColor: 'border-red-500/50',
      shadowColor: 'shadow-red-500/50',
    },
    {
      icon: GraduationCap,
      title: 'Smart Education',
      description: 'Create digital tools that enhance learning experiences.',
      color: 'from-blue-600 to-purple-600',
      borderColor: 'border-blue-500/50',
      shadowColor: 'shadow-blue-500/50',
    },
    {
      icon: Leaf,
      title: 'Sustainability & Future',
      description: 'Innovate towards a cleaner, greener future.',
      color: 'from-green-600 to-teal-600',
      borderColor: 'border-green-500/50',
      shadowColor: 'shadow-green-500/50',
    },
  ];

  return (
    <section id="tracks" className="relative py-20 md:py-32">
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
            Tracks & Themes
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Choose your track and build solutions that matter
          </p>
        </motion.div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glowing background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${track.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all`}></div>

              {/* Card */}
              <div className={`relative p-8 bg-black/80 backdrop-blur-sm rounded-3xl border-2 ${track.borderColor} hover:border-opacity-100 transition-all shadow-2xl ${track.shadowColor} group-hover:shadow-3xl min-h-[280px] flex flex-col`}>
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${track.color} rounded-2xl flex items-center justify-center shadow-lg ${track.shadowColor}`}>
                    <track.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl text-center text-white mb-4">{track.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-center text-sm leading-relaxed flex-1">{track.description}</p>

                {/* Decorative corner elements */}
                <div className={`absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 ${track.borderColor} rounded-tr-2xl opacity-50`}></div>
                <div className={`absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 ${track.borderColor} rounded-bl-2xl opacity-50`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
