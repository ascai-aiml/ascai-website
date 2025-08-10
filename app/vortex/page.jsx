export default function VortexPage() {
  return (
    <div className="pt-16 min-h-screen bg-black hacker-cursor">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 border border-orange-500 text-orange-500 text-sm font-mono mb-4">
            VORTEX.AI
          </div>
          <h1 className="text-4xl md:text-6xl font-mono font-bold mb-8 text-orange-500">VORTEX.AI</h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <p className="text-xl text-gray-300 font-mono mb-8">
              Our flagship event series featuring workshops, competitions, and guest lectures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-orange-500/30 p-8 bg-gray-900/20">
              <h3 className="text-2xl font-mono text-orange-500 mb-4">WORKSHOPS</h3>
              <p className="text-gray-300">
                Hands-on learning sessions covering cutting-edge AI/ML technologies and practical implementations.
              </p>
            </div>

            <div className="border border-orange-500/30 p-8 bg-gray-900/20">
              <h3 className="text-2xl font-mono text-orange-500 mb-4">COMPETITIONS</h3>
              <p className="text-gray-300">
                Challenging hackathons and coding competitions to test and enhance your AI skills.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="border border-orange-500/30 p-8 bg-gray-900/20">
              <h3 className="text-2xl font-mono text-orange-500 mb-4">VORTEX.AI VOL.1</h3>
              <p className="text-gray-300 mb-4">
                Our inaugural event featuring industry experts, technical workshops, and networking opportunities.
              </p>
              <div className="font-mono text-orange-500 text-sm">{"> EVENT COMPLETED SUCCESSFULLY"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
