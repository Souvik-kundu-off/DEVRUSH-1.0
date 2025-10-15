import { motion } from 'motion/react';

export function Sponsors() {
  // Mock sponsor logos - in production, these would be actual company logos
  const sponsors = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'DevTools Inc', logo: 'DT' },
    { name: 'CloudNet', logo: 'CN' },
    { name: 'CodeBase', logo: 'CB' },
    { name: 'DataSync', logo: 'DS' },
    { name: 'InnovateLab', logo: 'IL' },
    { name: 'QuantumAI', logo: 'QA' },
    { name: 'NexGen', logo: 'NG' },
  ];

  // Duplicate sponsors for seamless infinite scroll
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <section id="sponsors" className="relative py-20 md:py-32">
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
            Our Sponsors
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Powered by industry leaders who believe in innovation
          </p>
        </motion.div>

        {/* Sponsors Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <div className="flex gap-6 animate-scroll">
            {duplicatedSponsors.map((sponsor, index) => (
              <div key={index} className="flex-shrink-0 w-64">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
                  <div className="relative p-8 bg-black/60 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-cyan-500/40 transition-all flex items-center justify-center h-32">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl bg-gradient-to-br from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                        {sponsor.logo}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">{sponsor.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 sm:p-8 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-3xl border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl text-white mb-4">Interested in Sponsoring?</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Partner with us to support the next generation of developers
            </p>
            <a
              href="mailto:sponsors@brainard.edu"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-2xl transition-all shadow-lg shadow-purple-500/30"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
