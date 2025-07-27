"use client"

import type React from "react"
import { useState, useEffect, useMemo, useCallback } from "react"

const teams = [
  {
    name: "CORE TEAM",
    color: "orange",
    members: [
      { name: "HITEN CHAMPANEKAR", position: "PRESIDENT", year: "B.E", id: "HC" },
      { name: "PRITI SINGH", position: "VICE PRESIDENT", year: "T.E", id: "PS" },
      { name: "SWAYAM SANKHE", position: "SECRETARY", year: "T.E", id: "SS" },
      { name: "ARJUN SHARMA", position: "TREASURER", year: "T.E", id: "AS" },
      { name: "NEHA PATIL", position: "JOINT SECRETARY", year: "S.E", id: "NP" },
    ],
  },
  {
    name: "TECHNICAL",
    color: "green",
    members: [
      { name: "RUPESH NANDALE", position: "HEAD", year: "T.E", id: "RN" },
      { name: "SAHIL SALMARKAR", position: "JOINT HEAD", year: "T.E", id: "SS2" },
      { name: "SHASHIKANT RAJPUT", position: "SENIOR MEMBER", year: "T.E", id: "SR" },
      { name: "ANKIT KUMAR", position: "MEMBER", year: "S.E", id: "AK" },
      { name: "PRIYA DESAI", position: "MEMBER", year: "S.E", id: "PD" },
      { name: "ROHIT JAIN", position: "MEMBER", year: "F.E", id: "RJ" },
    ],
  },
  {
    name: "PR TEAM",
    color: "blue",
    members: [
      { name: "NIDHI THAKUR", position: "HEAD", year: "T.E", id: "NT" },
      { name: "SAMRUDDHI NIUNGARE", position: "JOINT HEAD", year: "S.E", id: "SN" },
      { name: "NIDHI KAVA", position: "SENIOR MEMBER", year: "S.E", id: "NK" },
      { name: "KAVYA SINGH", position: "MEMBER", year: "S.E", id: "KS" },
      { name: "RAHUL MEHTA", position: "MEMBER", year: "F.E", id: "RM" },
    ],
  },
  {
    name: "MEDIA",
    color: "purple",
    members: [
      { name: "FRANCIS BHINGARE", position: "HEAD", year: "T.E", id: "FB" },
      { name: "SHRIYA SANJEEV", position: "JOINT HEAD", year: "T.E", id: "SS3" },
      { name: "MRIGANK JAISWAL", position: "SENIOR MEMBER", year: "S.E", id: "MJ" },
      { name: "ADITI SHARMA", position: "MEMBER", year: "S.E", id: "AS2" },
      { name: "VIKRAM PATEL", position: "MEMBER", year: "F.E", id: "VP" },
    ],
  },
  {
    name: "EVENTS",
    color: "red",
    members: [
      { name: "RUDRA PATEL", position: "HEAD", year: "T.E", id: "RP" },
      { name: "TEJAS BHAVTHANKAR", position: "JOINT HEAD", year: "T.E", id: "TB" },
      { name: "ADITYA SINGH", position: "SENIOR MEMBER", year: "S.E", id: "AS3" },
      { name: "SNEHA GUPTA", position: "MEMBER", year: "S.E", id: "SG" },
      { name: "KARAN VERMA", position: "MEMBER", year: "F.E", id: "KV" },
    ],
  },
  {
    name: "DESIGN",
    color: "yellow",
    members: [
      { name: "DNYANADA PATIL", position: "HEAD", year: "T.E", id: "DP" },
      { name: "VRINDA KHARE", position: "JOINT HEAD", year: "T.E", id: "VK" },
      { name: "SIDDHANT KOLI", position: "SENIOR MEMBER", year: "S.E", id: "SK" },
      { name: "ISHITA RAO", position: "MEMBER", year: "S.E", id: "IR" },
      { name: "ARYAN SHAH", position: "MEMBER", year: "F.E", id: "AS4" },
    ],
  },
]

export function TeamStatusViewer() {
  const [currentTeam, setCurrentTeam] = useState(0)
  const [currentMember, setCurrentMember] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  // Memoize current team and member data
  const currentTeamData = useMemo(() => teams[currentTeam], [currentTeam])
  const currentMemberData = useMemo(() => currentTeamData.members[currentMember], [currentTeamData, currentMember])

  // Optimized interval effect
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentMember((prev) => {
        if (prev < currentTeamData.members.length - 1) {
          return prev + 1
        } else {
          setCurrentTeam((teamPrev) => (teamPrev + 1) % teams.length)
          return 0
        }
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isPlaying, currentTeamData.members.length])

  // Optimized handlers
  const handleTeamChange = useCallback((teamIndex: number) => {
    setCurrentTeam(teamIndex)
    setCurrentMember(0)
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStart) return

    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentTeam((prev) => (prev + 1) % teams.length)
        setCurrentMember(0)
      } else {
        setCurrentTeam((prev) => (prev - 1 + teams.length) % teams.length)
        setCurrentMember(0)
      }
    }
    setTouchStart(null)
  }, [touchStart])

  const togglePlaying = useCallback(() => {
    setIsPlaying(prev => !prev)
  }, [])

  // Memoize color classes
  const getColorClasses = useCallback((color: string) => {
    const colorMap = {
      orange: "border-orange-500/50 text-orange-400 bg-orange-500/5",
      green: "border-green-500/50 text-green-400 bg-green-500/5",
      blue: "border-blue-500/50 text-blue-400 bg-blue-500/5",
      purple: "border-purple-500/50 text-purple-400 bg-purple-500/5",
      red: "border-red-500/50 text-red-400 bg-red-500/5",
      yellow: "border-yellow-500/50 text-yellow-400 bg-yellow-500/5",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.orange
  }, [])

  const currentColorClasses = useMemo(() => getColorClasses(currentTeamData.color), [getColorClasses, currentTeamData.color])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      {/* Professional Blurred Background */}
      <div className="absolute inset-0 opacity-3">
        <div className="font-mono text-xs text-gray-500 whitespace-nowrap p-6 leading-relaxed blur-sm">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="mb-2">
              {Array.from({ length: 100 }, () => (Math.random() > 0.5 ? "1" : "0")).join("")}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-12 min-h-screen">
        {/* Left Sidebar */}
        <div className="col-span-3 border-r border-gray-800 p-6 flex flex-col justify-center bg-black/40 backdrop-blur-sm">
          <h2 className="text-2xl font-orbitron font-bold mb-8 text-center text-white">TEAMS</h2>
          <div className="space-y-3">
            {teams.map((t, index) => (
              <button
                key={t.name}
                onClick={() => handleTeamChange(index)}
                className={`w-full p-4 border text-left font-rajdhani font-medium transition-all duration-200 ${
                  index === currentTeam
                    ? getColorClasses(t.color)
                    : "border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300 bg-black/20"
                }`}
              >
                <div className="text-sm">{t.name}</div>
                <div className="text-xs opacity-60 mt-1">{t.members.length} Members</div>
              </button>
            ))}
          </div>
        </div>

        {/* Center - Member Display */}
        <div className="col-span-6 flex items-center justify-center p-8">
          <div className="relative w-full max-w-md">
            <div className={`border ${currentColorClasses} overflow-hidden bg-black/60 backdrop-blur-sm`}>
              {/* Header */}
              <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 bg-${currentTeamData.color}-400 rounded-full animate-pulse`}></div>
                  <span className="font-mono text-sm">{currentTeamData.name}</span>
                </div>
                <button
                  onClick={togglePlaying}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {isPlaying ? "⏸️" : "▶️"}
                </button>
              </div>

              {/* Member Display */}
              <div className="aspect-square bg-gray-900/30 flex items-center justify-center relative">
                <div className="text-6xl font-orbitron font-bold text-white opacity-90">{currentMemberData.id}</div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent animate-scan"></div>
              </div>

              {/* Progress Bar */}
              <div className="h-1 bg-gray-900">
                <div
                  className={`h-full bg-${currentTeamData.color}-400 transition-all duration-3000 ease-linear`}
                  style={{ width: isPlaying ? "100%" : "0%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3 border-l border-gray-800 p-6 flex flex-col justify-center bg-black/40 backdrop-blur-sm">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-orbitron font-bold text-white mb-3">{currentMemberData.name}</h3>
              <p className={`text-${currentTeamData.color}-400 font-rajdhani font-medium text-lg`}>{currentMemberData.position}</p>
              <p className="text-gray-400 font-mono text-sm mt-2">{currentMemberData.year}</p>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500 font-mono mb-1">TEAM:</div>
                <div className={`text-${currentTeamData.color}-400 font-rajdhani font-medium`}>{currentTeamData.name}</div>
              </div>

              <div>
                <div className="text-xs text-gray-500 font-mono mb-1">MEMBER:</div>
                <div className="text-white font-rajdhani">
                  {currentMember + 1} / {currentTeamData.members.length}
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500 font-mono mb-1">TOTAL TEAMS:</div>
                <div className="text-white font-rajdhani">{teams.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen flex flex-col" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {/* Header */}
        <div className="p-4 border-b border-gray-800 bg-black/80 backdrop-blur-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className={`text-lg font-orbitron font-bold text-${currentTeamData.color}-400`}>{currentTeamData.name}</h2>
              <p className="text-gray-400 font-mono text-xs">{currentTeamData.members.length} Members</p>
            </div>
            <button
              onClick={togglePlaying}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-xl"
            >
              {isPlaying ? "⏸️" : "▶️"}
            </button>
          </div>
        </div>

        {/* Member Display */}
        <div className="flex-1 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-xs">
            <div className={`border ${currentColorClasses} overflow-hidden bg-black/70 backdrop-blur-sm`}>
              <div className="aspect-square bg-gray-900/30 flex items-center justify-center relative">
                <div className="text-5xl font-orbitron font-bold text-white opacity-90">{currentMemberData.id}</div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent animate-scan"></div>
              </div>
              <div className="h-1 bg-gray-900">
                <div
                  className={`h-full bg-${currentTeamData.color}-400 transition-all duration-3000 ease-linear`}
                  style={{ width: isPlaying ? "100%" : "0%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-800 bg-black/80 backdrop-blur-lg">
          <div className="text-center space-y-3">
            <h3 className="text-lg font-orbitron font-bold text-white">{currentMemberData.name}</h3>
            <p className={`text-${currentTeamData.color}-400 font-rajdhani font-medium`}>{currentMemberData.position}</p>
            <p className="text-gray-400 font-mono text-sm">{currentMemberData.year}</p>
            <div className="text-sm text-gray-400 font-mono">
              {currentMember + 1} / {currentTeamData.members.length} • {currentTeamData.name}
            </div>
          </div>
        </div>

        {/* Team Navigation */}
        <div className="p-3 border-t border-gray-800 bg-black/90 backdrop-blur-lg">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {teams.map((t, index) => (
              <button
                key={t.name}
                onClick={() => handleTeamChange(index)}
                className={`px-4 py-2 border text-xs font-rajdhani font-medium whitespace-nowrap transition-all duration-200 ${
                  index === currentTeam ? getColorClasses(t.color) : "border-gray-700 text-gray-400 bg-black/40"
                }`}
              >
                <div>{t.name}</div>
                <div className="text-xs opacity-60">{t.members.length}</div>
              </button>
            ))}
          </div>
          <div className="text-center mt-2 text-gray-500 font-mono text-xs">Swipe to change teams</div>
        </div>
      </div>
    </div>
  )
}
