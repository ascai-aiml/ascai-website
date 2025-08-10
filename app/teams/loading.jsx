export default function TeamsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="text-4xl font-orbitron font-bold text-white">
          ASC
          <span className="text-orange-500 glitch-ai-minimal" data-text="AI">
            AI
          </span>
        </div>
        <div className="text-orange-400 font-rajdhani text-lg">LOADING TEAMS...</div>
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  )
} 