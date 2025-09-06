
"use client";

import { useState, useEffect } from "react";

const facultyData = [
  {
    id: 1,
    name: "MR. SANDEEP DWIVEDI",
    position: "Faculty Coordinator",
    department: "AIML Department",
    image: "/faculty/sandeep.jpg",
  },
  {
    id: 2,
    name: "DR. FARHA HANEEF",
    position: "HOD - AIML",
    department: "AIML Department",
    image: "/faculty/farha.jpg",
  },
];

export function FacultySection() {
  const [currentFaculty, setCurrentFaculty] = useState(0);
  const [blockProgress, setBlockProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Animation settings
  const BLOCK_COLS = 8;
  const BLOCK_ROWS = 8;
  const TOTAL_BLOCKS = BLOCK_COLS * BLOCK_ROWS;

  // Fixed positions for glitch strips to avoid hydration mismatch
  const glitchStrips = [
    { left: 25, top: 15, width: 35 },
    { left: 60, top: 45, width: 25 },
    { left: 10, top: 75, width: 40 },
    { left: 75, top: 25, width: 20 },
    { left: 45, top: 60, width: 30 },
    { left: 85, top: 80, width: 15 },
    { left: 20, top: 35, width: 28 },
    { left: 55, top: 10, width: 32 },
    { left: 5, top: 50, width: 22 },
    { left: 70, top: 70, width: 25 },
    { left: 35, top: 85, width: 18 },
    { left: 90, top: 5, width: 8 }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setBlockProgress(0);
    setIsAnimating(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2; // Faster progression
      setBlockProgress(progress);
      if (progress >= TOTAL_BLOCKS) {
        clearInterval(interval);
        setTimeout(() => setIsAnimating(false), 300);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [currentFaculty]);

  // Next/Prev navigation
  const nextFaculty = () => {
    setCurrentFaculty((prev) => (prev + 1) % facultyData.length);
    setIsAnimating(true);
  };
  const prevFaculty = () => {
    setCurrentFaculty((prev) => (prev - 1 + facultyData.length) % facultyData.length);
    setIsAnimating(true);
  };

  const faculty = facultyData[currentFaculty];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Green gradient background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 border-2 border-green-500 text-green-500 text-sm font-mono mb-6 bg-black/80">
            FACULTY MENTORS
          </div>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white">
            OUR GUIDES
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Faculty Display with Block Loader Animation */}
            <div className="relative">
              <div className="relative w-full h-96 bg-gray-900/50 border-2 border-green-500/40 overflow-hidden">
                {/* Faculty image with glitch reveal effect */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover rounded-none shadow-2xl"
                    style={{
                      filter: isAnimating ? 'brightness(0.3) contrast(1.2)' : 'none',
                      transition: 'filter 0.4s ease-out'
                    }}
                  />
                  
                  {/* Sexy glitch reveal animation - only render on client */}
                  {isClient && isAnimating && (
                    <>
                      {/* Scanning line effect */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-80"
                        style={{
                          width: '4px',
                          transform: `translateX(${(blockProgress / TOTAL_BLOCKS) * 100}%)`,
                          transition: 'transform 0.1s ease-out',
                          boxShadow: '0 0 20px #00ff00'
                        }}
                      />
                      
                      {/* Fixed glitch strips */}
                      {glitchStrips.map((strip, i) => (
                        <div
                          key={i}
                          className="absolute bg-black"
                          style={{
                            left: `${strip.left}%`,
                            top: `${strip.top}%`,
                            width: `${strip.width}%`,
                            height: '3px',
                            opacity: blockProgress > i * 5 ? 0 : 0.8,
                            transition: 'opacity 0.2s ease-out',
                            transitionDelay: `${i * 50}ms`
                          }}
                        />
                      ))}
                      
                      {/* Matrix-style overlay */}
                      <div 
                        className="absolute inset-0 bg-black"
                        style={{
                          background: `linear-gradient(90deg, 
                            transparent ${(blockProgress / TOTAL_BLOCKS) * 100}%, 
                            rgba(0,0,0,0.9) ${(blockProgress / TOTAL_BLOCKS) * 100 + 1}%)`,
                          transition: 'background 0.05s ease-out'
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right - Faculty Info */}
            <div className="space-y-8 text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-orbitron font-bold text-white">
                {faculty.name}
              </h3>
              <p className="text-green-400 font-rajdhani text-xl font-semibold">
                {faculty.position}
              </p>
              <p className="text-gray-400 font-rajdhani text-lg">
                {faculty.department}
              </p>

              {/* Navigation buttons */}
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
  );
}


