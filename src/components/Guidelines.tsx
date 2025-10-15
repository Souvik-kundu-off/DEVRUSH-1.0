import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

export function Guidelines() {
  const guidelines = [
    'The hackathon is open to all university students.',
    'Teams can have a maximum of 5 members.',
    'Communication will be through official Discord/Google Meet.',
    'Participants must submit their project within the 48-hour window.',
    'Ensure stable internet connection and system readiness.',
  ];

  const rules = [
    'All code must be written during the hackathon.',
    'Pre-built templates are allowed but must be acknowledged.',
    'Plagiarism or copied work = immediate disqualification.',
    'Respect all team members and maintain professionalism.',
    'Decisions by judges are final.',
  ];

  return (
    <section id="guidelines" className="relative py-20 md:py-32">
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
            Guidelines & Rules
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Please read carefully before participating
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Guidelines */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-3xl blur-sm"></div>
            <div className="relative p-8 bg-black/60 backdrop-blur-sm rounded-3xl border border-cyan-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-white">Guidelines</h3>
              </div>
              <ul className="space-y-4">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{guideline}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Rules */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-sm"></div>
            <div className="relative p-8 bg-black/60 backdrop-blur-sm rounded-3xl border border-purple-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-white">Rules</h3>
              </div>
              <ul className="space-y-4">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
