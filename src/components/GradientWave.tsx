export function GradientWave() {
  return (
    <div className="relative h-24 w-full flex items-center justify-center overflow-hidden">
      {/* Animated gradient line */}
      <div className="relative w-full max-w-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent h-px blur-sm"></div>
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
      </div>
      
      {/* Decorative dots */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2">
        <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse"></div>
        <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
      </div>
    </div>
  );
}
