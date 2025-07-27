"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [vortexOpen, setVortexOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "TEAMS", href: "/teams" },
    { name: "ABOUT", href: "/about" },
    { name: "VOICE OF ASCIA", href: "/voice" },
  ]

  const vortexYears = [
    { name: "VORTEX.AI 2024", href: "/vortex/2024" },
    { name: "VORTEX.AI 2023", href: "/vortex/2023" },
  ]

  const handleMobileNavClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              prefetch={true}
              className="text-xl font-orbitron font-bold text-white hover:text-orange-400 transition-colors duration-200"
            >
              ASC
              <span className="text-orange-500 glitch-ai-minimal" data-text="AI">
                AI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  prefetch={true}
                  className={`text-gray-300 hover:text-orange-400 transition-all duration-200 font-rajdhani font-medium text-sm tracking-wider relative group ${
                    isActive(item.href) ? "text-orange-400" : ""
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-200 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              ))}

              {/* Vortex Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-orange-500 hover:text-orange-400 transition-all duration-200 font-rajdhani font-medium text-sm tracking-wider"
                  onMouseEnter={() => setVortexOpen(true)}
                >
                  <span>VORTEX.AI</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform duration-200 ${vortexOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`absolute top-full right-0 mt-2 w-48 bg-black/95 border border-orange-500/30 backdrop-blur-lg transition-all duration-200 ${
                    vortexOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                  onMouseEnter={() => setVortexOpen(true)}
                  onMouseLeave={() => setVortexOpen(false)}
                >
                  {vortexYears.map((year) => (
                    <Link
                      key={year.name}
                      href={year.href}
                      prefetch={true}
                      className={`block px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-200 font-rajdhani text-sm ${
                        isActive(year.href) ? "text-orange-400 bg-orange-500/10" : ""
                      }`}
                    >
                      {year.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-orange-400 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 bg-black/98 backdrop-blur-lg border-b border-orange-500/30 transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              prefetch={true}
              onClick={handleMobileNavClose}
              className={`block text-lg font-orbitron transition-all duration-200 py-2 ${
                isActive(item.href) 
                  ? "text-orange-400" 
                  : "text-gray-300 hover:text-orange-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="border-t border-gray-700 pt-4 space-y-3">
            <div className="text-orange-500 font-orbitron text-base mb-3">VORTEX.AI</div>
            {vortexYears.map((year) => (
              <Link
                key={year.name}
                href={year.href}
                prefetch={true}
                onClick={handleMobileNavClose}
                className={`block text-sm font-rajdhani transition-all duration-200 pl-4 ${
                  isActive(year.href)
                    ? "text-orange-400"
                    : "text-gray-400 hover:text-orange-400"
                }`}
              >
                {year.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
