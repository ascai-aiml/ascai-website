"use client"

// Import React hooks
import { useEffect, useState } from "react"

/**
 * Loader component that shows a thin animated progress bar
 * at the top of the page during navigation or unloading.
 *
 * @component
 * @returns {JSX.Element|null} The loader element or null if not loading
 */
export function Loader() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    /**
     * Trigger loading animation when a route change or unload starts
     */
    const handleStart = () => setIsLoading(true)

    /**
     * Stop loading animation when the route change completes
     */
    const handleComplete = () => setIsLoading(false)

    // Listen for page unload to simulate route change start
    window.addEventListener("beforeunload", handleStart)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleStart)
    }
  }, [])

  // Do not render anything if not loading
  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gradient-to-r from-orange-500 to-red-500 animate-pulse">
      <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 animate-pulse"></div>
    </div>
  )
}

/**
 * PageLoader component that displays a fullscreen
 * centered loading animation with a glitch-style logo.
 *
 * @component
 * @returns {JSX.Element} The page loader overlay
 */
export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center">
      <div className="relative">
        {/* Brand Logo */}
        <div className="text-4xl font-orbitron font-bold text-white mb-8 text-center">
          ASC
          <span className="text-orange-500 glitch-ai-minimal" data-text="AI">
            AI
          </span>
        </div>

        {/* Loading Dots Animation */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>

        {/* Loading Status Text */}
        <div className="text-center mt-4">
          <p className="text-gray-400 font-mono text-sm">LOADING SYSTEM...</p>
        </div>
      </div>
    </div>
  )
}
