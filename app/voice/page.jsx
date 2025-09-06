export default function VoicePage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Cyan Theme Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 border border-cyan-500 text-cyan-500 text-sm font-mono mb-4">
            VOICE OF ASCAI
          </div>
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 text-cyan-400">COMING SOON</h1>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-300 font-rajdhani mb-8">
            This section is under development. Stay tuned for updates.
          </p>

          <div className="border border-cyan-500/30 p-8 bg-black/60 backdrop-blur-sm hover:glow-cyan transition-all duration-300">
            <h3 className="text-2xl font-orbitron text-cyan-400 mb-4">WHAT TO EXPECT</h3>
            <p className="text-gray-300 font-rajdhani">
              Voice of ASCAI will feature student testimonials, success stories, and insights from our community
              members.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
