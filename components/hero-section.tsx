"use client"

import { useEffect, useState, useMemo, useCallback } from "react"
import Image from "next/image"

export function HeroSection() {
  const [horizontalBinary, setHorizontalBinary] = useState<string[]>([])
  const [verticalBinary, setVerticalBinary] = useState<string[]>([])

  // Memoize binary generation functions
  const generateHorizontalBinary = useCallback(() => {
    const lines = []
    for (let i = 0; i < 25; i++) {
      lines.push(Array.from({ length: 120 }, () => (Math.random() > 0.5 ? "1" : "0")).join(""))
    }
    setHorizontalBinary(lines)
  }, [])

  const generateVerticalBinary = useCallback(() => {
    const lines = []
    for (let i = 0; i < 80; i++) {
      lines.push(Array.from({ length: 30 }, () => (Math.random() > 0.5 ? "1" : "0")).join(""))
    }
    setVerticalBinary(lines)
  }, [])

  useEffect(() => {
    generateHorizontalBinary()
    generateVerticalBinary()

    const interval = setInterval(() => {
      generateHorizontalBinary()
      generateVerticalBinary()
    }, 8000)

    return () => clearInterval(interval)
  }, [generateHorizontalBinary, generateVerticalBinary])

  // Memoize symbols array
  const symbols = useMemo(() => ["</>", "in", "@", "#"], [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-black via-gray-950 to-black">
      {/* Professional Binary Grid Background */}
      <div className="absolute inset-0 opacity-5">
        {/* Horizontal Binary Lines */}
        <div className="absolute inset-0">
          <div className="font-mono text-xs text-green-400 leading-loose p-8">
            {horizontalBinary.map((line, index) => (
              <div
                key={`h-${index}`}
                className="whitespace-nowrap blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Binary Lines */}
        <div className="absolute inset-0 transform rotate-90 origin-center">
          <div className="font-mono text-xs text-blue-400 leading-loose p-8">
            {verticalBinary.map((line, index) => (
              <div
                key={`v-${index}`}
                className="whitespace-nowrap blur-sm"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        {/* Mobile Layout */}
        <div className="md:hidden text-center space-y-8 py-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Image src="/ascai-logo.png" alt="ASCAI Logo" width={180} height={180} className="opacity-90" />
              <div className="absolute inset-0 border border-orange-500/20 rounded-full animate-spin-slow"></div>
            </div>
          </div>

          {/* System Active */}
          <div className="inline-block px-4 py-2 border border-orange-500/50 text-orange-400 text-sm font-mono bg-black/80 backdrop-blur-sm">
            {"> SYSTEM ACTIVE"}
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl font-orbitron font-black text-white">
              ASC
              <span className="text-orange-500 glitch-ai-minimal" data-text="AI">
                AI
              </span>
            </h1>
            <h2 className="text-base text-orange-400 font-rajdhani font-medium tracking-widest opacity-90">
              ASSOCIATION OF STUDENTS FOR
            </h2>
            <h2 className="text-base text-orange-400 font-rajdhani font-medium tracking-widest opacity-90">
              COMPUTING ARTIFICIAL INTELLIGENCE
            </h2>
          </div>

          <p className="text-gray-400 text-lg max-w-sm mx-auto font-rajdhani leading-relaxed">
            Professional computing intelligence research collective developing advanced technological solutions.
          </p>

          <div className="text-green-400 font-mono text-lg opacity-80">{"HELLO CHAMP"}</div>

          <div className="flex justify-center space-x-4 pb-8">
            {symbols.map((symbol, index) => (
              <div
                key={index}
                className="w-12 h-12 border border-orange-500/50 flex items-center justify-center font-mono text-orange-400 hover:bg-orange-500/10 hover:border-orange-500 transition-all duration-200"
              >
                {symbol}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 border border-orange-500/50 text-orange-400 text-sm font-mono bg-black/60 backdrop-blur-sm">
              {"> SYSTEM ACTIVE"}
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-orbitron font-black text-white leading-tight">
                ASC
                <span className="text-orange-500 glitch-ai-minimal" data-text="AI">
                  AI
                </span>
              </h1>
              <h2 className="text-lg lg:text-xl text-orange-400 font-rajdhani font-medium tracking-widest opacity-90">
                ASSOCIATION OF STUDENTS FOR
              </h2>
              <h2 className="text-lg lg:text-xl text-orange-400 font-rajdhani font-medium tracking-widest opacity-90">
                COMPUTING ARTIFICIAL INTELLIGENCE
              </h2>
            </div>

            <p className="text-gray-400 text-lg max-w-lg font-rajdhani leading-relaxed">
              Professional computing intelligence research collective developing advanced technological solutions and
              educational frameworks.
            </p>

            <div className="text-green-400 font-mono text-xl opacity-80">{"HELLO CHAMP"}</div>

            <div className="flex space-x-4">
              {symbols.map((symbol, index) => (
                <div
                  key={index}
                  className="w-12 h-12 border border-orange-500/50 flex items-center justify-center font-mono text-orange-400 hover:bg-orange-500/10 hover:border-orange-500 transition-all duration-200"
                >
                  {symbol}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="text-gray-500 text-xs font-mono absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-60">
                {"[ACTIVE]"}
              </div>

              <div className="w-72 h-72 relative">
                <div className="absolute inset-0 border border-orange-500/30 rounded-full animate-spin-slow">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-orange-500/60 rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-135px)`,
                      }}
                    />
                  ))}
                </div>

                <div className="absolute inset-6 bg-gray-900/20 rounded-full border border-orange-500/20 flex items-center justify-center backdrop-blur-sm">
                  <Image src="/ascai-logo.png" alt="ASCAI Logo" width={160} height={160} className="opacity-90" />
                </div>
              </div>

              <div className="text-gray-500 text-xs font-mono absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-60">
                {"<SYSTEM/>"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
