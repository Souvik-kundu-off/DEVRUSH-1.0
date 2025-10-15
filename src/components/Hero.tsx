import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Calendar, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date (November 9, 2025)
    const targetDate = new Date('2025-11-09T10:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">November 9-11, 2025</span>
              </div>
            </motion.div>

            <h1 className="mb-6">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                WELCOME TO DEVRUSH 1.0 🚀
              </span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4">
              A 48-hour online hackathon where innovation meets execution.
            </p>

            <p className="text-base sm:text-lg text-gray-400 mb-8">
              Build, collaborate, and create solutions that redefine technology.
            </p>

            {/* Additional Info */}
            <p className="text-sm sm:text-base text-gray-500 mb-4">
              Countdown to DevRush 1.0 — 48 Hours of Innovation!
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">
              Date: November 9–11, 2025 | Mode: Online | Team Size: Up to 5 Members
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-8 max-w-md mx-auto lg:mx-0">
              {[
                { label: 'Days', value: countdown.days },
                { label: 'Hours', value: countdown.hours },
                { label: 'Mins', value: countdown.minutes },
                { label: 'Secs', value: countdown.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
                  <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-purple-500/30">
                    <div className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-br from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 mt-1">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-6 rounded-2xl shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all group">
                  <span className="relative z-10">Register Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                </Button>
              </a>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-6 rounded-2xl backdrop-blur-sm"
                onClick={() => document.getElementById('event-details')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right 3D Holographic Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative perspective-1000"
          >
            <div className="relative">
              {/* Glowing orb effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              {/* 3D Holographic Card */}
              <motion.div
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Main 3D Card */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 backdrop-blur-xl p-8 md:p-12">
                  {/* Grid Pattern Background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
                      backgroundSize: '50px 50px',
                    }}></div>
                  </div>

                  {/* Animated Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10 animate-pulse"></div>

                  {/* Floating Code Elements */}
                  <div className="relative z-10 space-y-4">
                    <motion.div
                      animate={{ x: [-10, 10, -10] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="p-3 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl inline-block"
                    >
                      <code className="text-cyan-400 text-sm">{'<DevRush />'}</code>
                    </motion.div>

                    <motion.div
                      animate={{ x: [10, -10, 10] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                      className="p-3 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl inline-block ml-8"
                    >
                      <code className="text-purple-400 text-sm">{'function hack() {'}</code>
                    </motion.div>

                    <motion.div
                      animate={{ x: [-5, 15, -5] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="p-3 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl inline-block ml-4"
                    >
                      <code className="text-cyan-300 text-sm">{'  return innovation;'}</code>
                    </motion.div>

                    <motion.div
                      animate={{ x: [8, -8, 8] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                      className="p-3 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl inline-block ml-12"
                    >
                      <code className="text-blue-400 text-sm">{'}'}</code>
                    </motion.div>

                    {/* Central Icon */}
                    <div className="flex justify-center my-8">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        }}
                        className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-purple-500/50"
                      >
                        <Clock className="w-12 h-12 text-white" />
                      </motion.div>
                    </div>

                    {/* Stats Display */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="p-4 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl"
                      >
                        <div className="text-2xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">48h</div>
                        <div className="text-xs text-gray-400">Duration</div>
                      </motion.div>
                      
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                        className="p-4 bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-xl"
                      >
                        <div className="text-2xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Online</div>
                        <div className="text-xs text-gray-400">Mode</div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500/50 rounded-tl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-500/50 rounded-br-3xl"></div>
                </div>
              </motion.div>

              {/* Floating Particles */}
              <motion.div
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl opacity-60 blur-sm"
                style={{ transform: 'translateZ(50px)' }}
              ></motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full opacity-60 blur-sm"
                style={{ transform: 'translateZ(50px)' }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
