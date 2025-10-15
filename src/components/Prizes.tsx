import { motion } from 'motion/react';
import { Trophy, Medal, Award } from 'lucide-react';

export function Prizes() {
  const prizes = [
    {
      place: '1st Place',
      icon: Trophy,
      amount: '$5,000',
      color: 'from-yellow-400 to-orange-500',
      borderColor: 'border-yellow-500/50',
      shadowColor: 'shadow-yellow-500/50',
      perks: ['Grand Trophy', 'Internship Opportunities', 'Mentorship Program'],
    },
    {
      place: '2nd Place',
      icon: Medal,
      amount: '$3,000',
      color: 'from-gray-300 to-gray-500',
      borderColor: 'border-gray-400/50',
      shadowColor: 'shadow-gray-400/50',
      perks: ['Silver Trophy', 'Tech Swag Pack', 'Workshop Access'],
    },
    {
      place: '3rd Place',
      icon: Award,
      amount: '$2,000',
      color: 'from-amber-600 to-amber-800',
      borderColor: 'border-amber-600/50',
      shadowColor: 'shadow-amber-600/50',
      perks: ['Bronze Trophy', 'Certificates', 'Partner Discounts'],
    },
  ];

  return (
    <section className="relative py-20 md:py-32">
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
            Prizes & Rewards
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Compete for amazing prizes worth over $10,000
          </p>
        </motion.div>

        {/* Prizes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`group relative ${index === 0 ? 'md:-mt-8' : ''}`}
            >
              {/* Glowing background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${prize.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all`}></div>

              {/* Card */}
              <div className={`relative p-8 bg-black/80 backdrop-blur-sm rounded-3xl border-2 ${prize.borderColor} hover:border-opacity-100 transition-all shadow-2xl ${prize.shadowColor} group-hover:shadow-3xl`}>
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${prize.color} rounded-2xl flex items-center justify-center shadow-lg ${prize.shadowColor}`}>
                    <prize.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Place */}
                <h3 className="text-2xl text-center text-white mb-2">{prize.place}</h3>

                {/* Amount */}
                <div className={`text-4xl sm:text-5xl text-center mb-6 bg-gradient-to-br ${prize.color} bg-clip-text text-transparent`}>
                  {prize.amount}
                </div>

                {/* Perks */}
                <div className="space-y-3">
                  {prize.perks.map((perk, perkIndex) => (
                    <div key={perkIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-br ${prize.color} rounded-full`}></div>
                      <span className="text-gray-300 text-sm">{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative corner elements */}
                <div className={`absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 ${prize.borderColor} rounded-tr-2xl opacity-50`}></div>
                <div className={`absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 ${prize.borderColor} rounded-bl-2xl opacity-50`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm sm:text-base">
            Plus special category prizes, sponsor awards, and swag for all participants!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
