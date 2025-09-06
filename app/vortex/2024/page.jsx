import { WinnersShowcase } from "@/components/winners-showcase"
// import { eventsData } from "@/data/vortex-events"
import eventsData from "@/data/vortex-events";



export default function Vortex2024Page() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
        {/* Subtle expanded radial glows (soft, large, low-opacity) */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* larger soft blobs placed slightly off-canvas so edges don't show */}
          <div
            className="absolute -left-32 -top-24 w-96 h-96 rounded-full"
            style={{ background: "rgba(249,115,22,0.09)", filter: "blur(96px)", transform: "scale(1.05)" }}
          />
          <div
            className="absolute -right-36 -bottom-28 w-80 h-80 rounded-full"
            style={{ background: "rgba(250,204,21,0.07)", filter: "blur(84px)", transform: "scale(1.03)" }}
          />

          {/* subtle overlay grid + soft noise to match hero feel */}
          <div className="absolute inset-0" style={{ opacity: 0.03 }}>
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)`,
                backgroundSize: "64px 64px",
              }}
            />
          </div>

          {/* gradient masks to fade hard edges so background doesn't show boundaries */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-black via-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black via-black/70 to-transparent" />
            <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="absolute right-0 top-0 h-full w-36 bg-gradient-to-l from-black via-black/80 to-transparent" />
          </div>
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

      {/* Winners Section with Stacked Pinning */}
      <WinnersShowcase eventsData={eventsData} />

      {/* Additional Content Section */}
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 text-white">EVENT HIGHLIGHTS</h2>
            <p className="text-xl text-gray-300 font-rajdhani mb-12">
              Celebrating innovation, creativity, and technical excellence in AI/ML
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="border border-orange-500/30 p-8 bg-black/60 backdrop-blur-sm">
                <h4 className="text-2xl font-orbitron text-orange-400 mb-4">200+</h4>
                <p className="text-gray-300 font-rajdhani">Participants</p>
              </div>
              <div className="border border-orange-500/30 p-8 bg-black/60 backdrop-blur-sm">
                <h4 className="text-2xl font-orbitron text-orange-400 mb-4">48 HRS</h4>
                <p className="text-gray-300 font-rajdhani">Hackathon Duration</p>
              </div>
              <div className="border border-orange-500/30 p-8 bg-black/60 backdrop-blur-sm">
                <h4 className="text-2xl font-orbitron text-orange-400 mb-4">₹50K</h4>
                <p className="text-gray-300 font-rajdhani">Prize Pool</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
