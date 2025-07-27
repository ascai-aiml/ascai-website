export default function Vortex2024Page() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Orange Theme Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 border border-orange-500 text-orange-500 text-sm font-mono mb-4">
            VORTEX.AI 2024
          </div>
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 text-orange-400">VORTEX.AI 2024</h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <p className="text-xl text-gray-300 font-rajdhani mb-8">
              Our flagship event series featuring workshops, competitions, and guest lectures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-orange-500/30 p-8 bg-black/60 backdrop-blur-sm hover:glow-orange transition-all duration-300">
              <h3 className="text-2xl font-orbitron text-orange-400 mb-4">WORKSHOPS</h3>
              <p className="text-gray-300 font-rajdhani">
                Hands-on learning sessions covering cutting-edge AI/ML technologies and practical implementations.
              </p>
            </div>

            <div className="border border-amber-500/30 p-8 bg-black/60 backdrop-blur-sm transition-all duration-300">
              <h3 className="text-2xl font-orbitron text-amber-400 mb-4">COMPETITIONS</h3>
              <p className="text-gray-300 font-rajdhani">
                Challenging hackathons and coding competitions to test and enhance your AI skills.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="border border-orange-500/30 p-8 bg-black/60 backdrop-blur-sm hover:glow-orange transition-all duration-300">
              <h3 className="text-2xl font-orbitron text-orange-400 mb-4">EVENT STATUS</h3>
              <p className="text-gray-300 mb-4 font-rajdhani">
                VORTEX.AI 2024 featured industry experts, technical workshops, and networking opportunities.
              </p>
              <div className="font-mono text-orange-500 text-sm">{"> EVENT COMPLETED SUCCESSFULLY"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
