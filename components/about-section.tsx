"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".scroll-animate")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Static binary pattern to avoid hydration mismatch
  const staticBinaryPattern = Array.from(
    { length: 30 },
    (_, i) => "1010110010101101011010010110101101001011010110100101101011010010110101101001011",
  )

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden"
    >
      {/* Purple Theme Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      {/* Binary Background - Only render on client */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="font-mono text-xs text-purple-400 whitespace-nowrap p-4 leading-tight blur-sm">
            {staticBinaryPattern.map((line, index) => (
              <div key={index} className="mb-1">
                {line}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-16 scroll-animate">
          <div className="inline-block px-4 py-2 border-2 border-purple-500 text-purple-500 text-sm font-mono mb-6 bg-black/80">
            ABOUT US
          </div>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 text-white">WHO WE ARE</h2>
        </div>

        <div className="max-w-5xl mx-auto text-center mb-16 scroll-animate">
          <p className="text-xl md:text-2xl text-gray-300 font-rajdhani leading-relaxed">
            ASCAI is a premier student organization dedicated to advancing{" "}
            <span className="text-purple-400 font-semibold">Artificial Intelligence</span> and{" "}
            <span className="text-indigo-400 font-semibold">Machine Learning</span>.
          </p>
        </div>

        {/* Mobile Optimized Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border-2 border-purple-500/40 p-8 bg-black/60 backdrop-blur-sm scroll-animate hover:glow-purple transition-all duration-300 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-orbitron text-purple-400 mb-6">OUR MISSION</h3>
            <p className="text-gray-300 font-rajdhani text-lg leading-relaxed">
              Foster innovation, research, and collaboration in AI while building a community of passionate learners and
              future tech leaders.
            </p>
          </div>

          <div className="border-2 border-indigo-500/40 p-8 bg-black/60 backdrop-blur-sm scroll-animate hover:glow-indigo transition-all duration-300 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-orbitron text-indigo-400 mb-6">OUR VISION</h3>
            <p className="text-gray-300 font-rajdhani text-lg leading-relaxed">
              Be the leading student organization bridging academic learning and industry applications in AI and ML
              technologies.
            </p>
          </div>
        </div>

        <div className="text-center mb-16 scroll-animate">
          <h3 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 text-white">WHAT WE DO</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center border-2 border-purple-500/30 p-8 bg-black/40 backdrop-blur-sm hover:glow-purple transition-all duration-300 rounded-lg">
              <h4 className="text-xl md:text-2xl font-orbitron text-purple-400 mb-6">WORKSHOPS</h4>
              <p className="text-gray-300 font-rajdhani text-lg leading-relaxed">
                Hands-on learning sessions covering latest AI/ML technologies and frameworks.
              </p>
            </div>
            <div className="text-center border-2 border-indigo-500/30 p-8 bg-black/40 backdrop-blur-sm hover:glow-indigo transition-all duration-300 rounded-lg">
              <h4 className="text-xl md:text-2xl font-orbitron text-indigo-400 mb-6">COMPETITIONS</h4>
              <p className="text-gray-300 font-rajdhani text-lg leading-relaxed">
                Organizing hackathons and coding competitions to challenge and inspire students.
              </p>
            </div>
            <div className="text-center border-2 border-cyan-500/30 p-8 bg-black/40 backdrop-blur-sm hover:glow-cyan transition-all duration-300 rounded-lg">
              <h4 className="text-xl md:text-2xl font-orbitron text-cyan-400 mb-6">RESEARCH</h4>
              <p className="text-gray-300 font-rajdhani text-lg leading-relaxed">
                Supporting student research projects and connecting with industry mentors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
