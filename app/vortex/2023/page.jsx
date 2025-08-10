export default function Vortex2023Page() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Yellow Theme Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 border border-yellow-500 text-yellow-500 text-sm font-mono mb-4">
            VORTEX.AI 2023
          </div>
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 text-yellow-400">VORTEX.AI 2023</h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <p className="text-xl text-gray-300 font-rajdhani mb-8">
              Our inaugural event that started the VORTEX.AI legacy.
            </p>
          </div>

          <div className="text-center">
            <div className="border border-yellow-500/30 p-8 bg-black/60 backdrop-blur-sm transition-all duration-300">
              <h3 className="text-2xl font-orbitron text-yellow-400 mb-4">INAUGURAL EVENT</h3>
              <p className="text-gray-300 mb-4 font-rajdhani">
                VORTEX.AI 2023 was our first major event that set the foundation for future editions.
              </p>
              <div className="font-mono text-yellow-500 text-sm">{"> LEGACY EVENT - ARCHIVED"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
