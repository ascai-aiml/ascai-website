"use client"

import { useState } from "react"

const teamMembers = [
  {
    id: 1,
    name: "HITEN CHAMPANEKAR",
    position: "PRESIDENT",
    team: "CORE TEAM",
    year: "B.E",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    name: "PRITI SINGH",
    position: "VICE PRESIDENT",
    team: "CORE TEAM",
    year: "T.E",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    name: "RUPESH NANDALE",
    position: "HEAD",
    team: "TECHNICAL TEAM",
    year: "T.E",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    name: "NIDHI THAKUR",
    position: "HEAD",
    team: "PR TEAM",
    year: "T.E",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export function TeamSectionSwipe() {
  const [currentMember, setCurrentMember] = useState(0)

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % teamMembers.length)
  }

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const member = teamMembers[currentMember]

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md mx-auto p-4">
        {/* Database Interface Header */}
        <div className="border border-green-500 bg-black p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-green-400 text-sm">TEAM_DATABASE.exe</span>
            <span className="font-mono text-green-400 text-sm">
              {currentMember + 1}/{teamMembers.length}
            </span>
          </div>
          <div className="font-mono text-xs text-gray-400">{"> ACCESSING MEMBER PROFILE..."}</div>
        </div>

        {/* Member Card */}
        <div className="border border-green-500 bg-black overflow-hidden">
          {/* Member Image */}
          <div className="h-80 bg-gray-900 flex items-center justify-center border-b border-green-500">
            <div className="text-4xl font-mono text-white">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>

          {/* Member Info */}
          <div className="p-6 space-y-3">
            <h3 className="font-mono text-xl text-white font-bold">{member.name}</h3>
            <p className="font-mono text-green-400">{member.position}</p>
            <p className="font-mono text-gray-400 text-sm">
              {member.team} • {member.year}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevMember}
            className="px-6 py-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-colors font-mono"
          >
            {"< PREV"}
          </button>
          <button
            onClick={nextMember}
            className="px-6 py-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-colors font-mono"
          >
            {"NEXT >"}
          </button>
        </div>
      </div>
    </div>
  )
}
