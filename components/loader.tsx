"use client"

import { useEffect, useState } from "react"

export function Loader() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    // Listen for route changes
    window.addEventListener('beforeunload', handleStart)
    
    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', handleStart)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gradient-to-r from-orange-500 to-red-500 animate-pulse">
      <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 animate-pulse"></div>
    </div>
  )
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center">
      <div className="relative">
        {/* ASCAI Logo */}
        <div className="text-4xl font-orbitron font-bold text-white mb-8 text-center">
          ASC
          <span className="text-orange-500 glitch-ai-minimal" data-text="AI">
            AI
          </span>
        </div>
        
        {/* Loading Animation */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center mt-4">
          <p className="text-gray-400 font-mono text-sm">LOADING SYSTEM...</p>
        </div>
      </div>
    </div>
  )
}
