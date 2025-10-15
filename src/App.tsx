import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GradientWave } from './components/GradientWave';
import { About } from './components/About';
import { EventDetails } from './components/EventDetails';
import { Guidelines } from './components/Guidelines';
import { Timeline } from './components/Timeline';
import { Tracks } from './components/Tracks';
import { CodeOfConduct } from './components/CodeOfConduct';
// import { Sponsors } from './components/Sponsors';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Gradient Wave Divider */}
      <GradientWave />

      {/* What You'll Get Section */}
      <About />

      {/* Gradient Wave Divider */}
      <GradientWave />

      {/* Event Details Section */}
      <EventDetails />

      {/* Gradient Wave Divider */}
      <GradientWave />

      {/* Guidelines & Rules Section */}
      <Guidelines />

      {/* Gradient Wave Divider */}
      <GradientWave />

      {/* Timeline Section */}
      <Timeline />

      {/* Gradient Wave Divider */}
      <GradientWave />

      {/* Tracks & Themes Section */}
      <Tracks />

      {/* Gradient Wave Divider */}
      <GradientWave />

      {/* Code of Conduct Section */}
      <CodeOfConduct />

      {/* Future Sponsor Section (commented for now) */}
      {/* <GradientWave /> */}
      {/* <Sponsors /> */}

      {/* Footer */}
      <Footer />

      {/* Global Styles for Animations */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
