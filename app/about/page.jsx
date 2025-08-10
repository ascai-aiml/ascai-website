export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Red Theme Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 border border-red-500 text-red-500 text-sm font-mono mb-4">
            ABOUT US
          </div>
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-8">WHO WE ARE</h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <p className="text-xl text-gray-300 font-rajdhani mb-8">
              ASCAI is a premier student organization dedicated to advancing{" "}
              <span className="text-red-400">Artificial Intelligence</span> and{" "}
              <span className="text-pink-400">Machine Learning</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-red-500/30 p-8 bg-black/60 backdrop-blur-sm hover:glow-red transition-all duration-300">
              <h3 className="text-2xl font-orbitron text-red-400 mb-4">OUR MISSION</h3>
              <p className="text-gray-300 font-rajdhani">
                Foster innovation, research, and collaboration in AI while building a community of passionate learners
                and future tech leaders.
              </p>
            </div>

            <div className="border border-pink-500/30 p-8 bg-black/60 backdrop-blur-sm hover:glow-pink transition-all duration-300">
              <h3 className="text-2xl font-orbitron text-pink-400 mb-4">OUR VISION</h3>
              <p className="text-gray-300 font-rajdhani">
                Be the leading student organization bridging academic learning and industry applications in AI and ML
                technologies.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-orbitron font-bold mb-8">WHAT WE DO</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center border border-red-500/20 p-6 bg-black/40 backdrop-blur-sm hover:glow-red transition-all duration-300">
                <h4 className="text-xl font-orbitron text-red-400 mb-4">WORKSHOPS</h4>
                <p className="text-gray-300 text-sm font-rajdhani">
                  Hands-on learning sessions covering latest AI/ML technologies and frameworks.
                </p>
              </div>
              <div className="text-center border border-pink-500/20 p-6 bg-black/40 backdrop-blur-sm hover:glow-pink transition-all duration-300">
                <h4 className="text-xl font-orbitron text-pink-400 mb-4">COMPETITIONS</h4>
                <p className="text-gray-300 text-sm font-rajdhani">
                  Organizing hackathons and coding competitions to challenge and inspire students.
                </p>
              </div>
              <div className="text-center border border-rose-500/20 p-6 bg-black/40 backdrop-blur-sm hover:glow-pink transition-all duration-300">
                <h4 className="text-xl font-orbitron text-rose-400 mb-4">RESEARCH</h4>
                <p className="text-gray-300 text-sm font-rajdhani">
                  Supporting student research projects and connecting with industry mentors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
