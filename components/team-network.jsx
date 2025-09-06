"use client"

import { useState } from "react"
import Link from "next/link"

const teams = [
  { name: "CORE TEAM", angle: 0, color: "text-orange-500" },
  { name: "TECHNICAL", angle: 60, color: "text-green-400" },
  { name: "PR TEAM", angle: 120, color: "text-blue-400" },
  { name: "MEDIA", angle: 180, color: "text-purple-400" },
  { name: "EVENTS", angle: 240, color: "text-red-400" },
  { name: "DESIGN", angle: 300, color: "text-yellow-400" },
]

export function TeamNetwork() {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null)

  return (
    <section className="min-h-screen bg-black flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold mb-8">TEAM NETWORK</h2>
          <p className="text-gray-400 font-mono">{"> SELECT A TEAM TO VIEW DETAILS"}</p>
        </div>

        <div className="relative w-96 h-96 mx-auto">
          {/* Central ASCAI Logo */}
          <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-orange-500 rounded-full flex items-center justify-center bg-black">
            <span className="font-mono font-bold text-orange-500">ASCAI</span>
          </div>

          {/* Team Nodes */}
          {teams.map((team, index) => {
            const radius = 150
            const x = Math.cos((team.angle * Math.PI) / 180) * radius
            const y = Math.sin((team.angle * Math.PI) / 180) * radius

            return (
              <div key={team.name}>
                {/* Connection Line */}
                <div
                  className="absolute w-px bg-green-500/30"
                  style={{
                    left: "50%",
                    top: "50%",
                    height: `${radius}px`,
                    transformOrigin: "top",
                    transform: `rotate(${team.angle}deg)`,
                  }}
                />

                {/* Team Node */}
                <div
                  className={`absolute w-20 h-16 border border-green-500 bg-black flex items-center justify-center transition-all hover:scale-110 ${
                    selectedTeam === team.name ? "bg-green-500/20" : ""
                  }`}
                  style={{
                    left: `calc(50% + ${x}px - 40px)`,
                    top: `calc(50% + ${y}px - 32px)`,
                  }}
                  onClick={() => setSelectedTeam(team.name)}
                >
                  <span className={`font-mono text-xs ${team.color} text-center`}>{team.name}</span>
                </div>
              </div>
            )
          })}
        </div>

        {selectedTeam && (
          <div className="text-center mt-16">
            <div className="inline-block px-6 py-3 border border-green-500 bg-green-500/10">
              <p className="font-mono text-green-400">{selectedTeam} SELECTED</p>
            </div>
            <div className="mt-4">
              <Link
                href="/teams"
                className="inline-block px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition-colors font-mono"
              >
                VIEW TEAM DATABASE
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
