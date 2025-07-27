"use client"

import { useState, useEffect } from "react"

const facultyData = [
  {
    id: 1,
    name: "MR. SANDEEP DWIVEDI",
    position: "Faculty Coordinator",
    department: "AIML Department",
    initials: "SD",
  },
  {
    id: 2,
    name: "DR. FARHA HANEEF",
    position: "HOD - AIML",
    department: "AIML Department",
    initials: "FH",
  },
]

export function FacultySection() {
  const [currentFaculty, setCurrentFaculty] = useState(0)
  const [revealBlocks, setRevealBlocks] = useState<boolean[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Initialize reveal animation
    const totalBlocks = 64
    setRevealBlocks(new Array(totalBlocks).fill(true))

    // Animate blocks disappearing to reveal faculty
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setRevealBlocks((prev) => {
          const newState = [...prev]
          const trueIndices = newState.map((val, idx) => (val ? idx : -1)).filter((idx) => idx !== -1)
          if (trueIndices.length > 0) {
            const randomIndex = trueIndices[Math.floor(Math.random() * trueIndices.length)]
            newState[randomIndex] = false
          }
          return newState
        })
      }, 80)

      setTimeout(() => clearInterval(interval), 4000)
    }, 500)

    return () => clearTimeout(timer)
  }, [currentFaculty])

  const nextFaculty = () => {
    setCurrentFaculty((prev) => (prev + 1) % facultyData.length)
    setRevealBlocks(new Array(64).fill(true))
  }

  const prevFaculty = () => {
    setCurrentFaculty((prev) => (prev - 1 + facultyData.length) % facultyData.length)
    setRevealBlocks(new Array(64).fill(true))
  }

  const faculty = facultyData[currentFaculty]

  // Static binary pattern
  const staticBinaryPattern = Array.from({ length: 15 }, (_, i) => "11001100101011010110100101101011010")

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Green Theme Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 border-2 border-green-500 text-green-500 text-sm font-mono mb-6 bg-black/80">
            FACULTY MENTORS
          </div>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white">OUR GUIDES</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Faculty Display with Reveal Animation */}
            <div className="relative">
              <div className="relative w-full h-96 bg-gray-900/50 border-2 border-green-500/40 overflow-hidden">
                {/* Binary Background - Only render on client */}
                {isClient && (
                  <div className="absolute inset-0 font-mono text-xs text-green-400/20 p-4 leading-tight">
                    {staticBinaryPattern.map((line, i) => (
                      <div key={i} className="mb-1">
                        {line}
                      </div>
                    ))}
                  </div>
                )}

                {/* Reveal Animation Overlay */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                  {revealBlocks.map((visible, index) => (
                    <div
                      key={index}
                      className={`transition-opacity duration-300 ${
                        visible ? "opacity-100" : "opacity-0"
                      } bg-black border border-green-500/20`}
                    />
                  ))}
                </div>

                {/* Faculty Display */}
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="text-7xl font-orbitron font-bold text-green-400">{faculty.initials}</div>
                </div>
              </div>
            </div>

            {/* Right - Faculty Info */}
            <div className="space-y-8 text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-orbitron font-bold text-white">{faculty.name}</h3>
              <p className="text-green-400 font-rajdhani text-xl font-semibold">{faculty.position}</p>
              <p className="text-gray-400 font-rajdhani text-lg">{faculty.department}</p>

              {/* Navigation */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8">
                <button
                  onClick={prevFaculty}
                  className="w-14 h-14 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 font-orbitron text-xl"
                >
                  {"<"}
                </button>
                <span className="font-mono text-gray-400 text-lg">
                  {currentFaculty + 1} / {facultyData.length}
                </span>
                <button
                  onClick={nextFaculty}
                  className="w-14 h-14 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 font-orbitron text-xl"
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
