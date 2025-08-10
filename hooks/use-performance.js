"use client"

import { useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

export function usePerformance() {
  const router = useRouter()

  // Prefetch all routes on mount
  useEffect(() => {
    const routes = ['/', '/teams', '/about', '/voice', '/vortex/2024', '/vortex/2023']
    
    routes.forEach(route => {
      router.prefetch(route)
    })
  }, [router])

  // Smooth navigation function
  const navigateTo = useCallback((href) => {
    // Add a small delay for smooth transition
    setTimeout(() => {
      router.push(href)
    }, 100)
  }, [router])

  return { navigateTo }
}

// Hook for optimizing animations
export function useAnimationOptimization() {
  useEffect(() => {
    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s')
    }
  }, [])

  // Optimize scroll performance
  const optimizeScroll = useCallback(() => {
    let ticking = false
    
    const updateScroll = () => {
      // Handle scroll updates here
      ticking = false
    }
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll)
        ticking = true
      }
    }
    
    return requestTick
  }, [])

  return { optimizeScroll }
} 