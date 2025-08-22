"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function WinnersShowcase({ eventsData }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    if (!container) return;

    // Clear existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Helper function for parallax ratio (from your code)
    const getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);

    // Initialize different animations for different events
    eventsData.forEach((event, eventIndex) => {
      if (event.animationType === "pinning") {
        // Event 1: Panel-based pinning
        const eventPanels = gsap.utils.toArray(`.event-${event.id} .winner-panel`);
        eventPanels.forEach((panel, i) => {
          ScrollTrigger.create({
            trigger: panel,
            start: () => (panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom"),
            pin: true,
            pinSpacing: false,
          });
        });
      } else if (event.animationType === "stacked") {
        // Event 2: Stacked cards with staggered reveal
        const stackedCards = gsap.utils.toArray(`.event-${event.id} .stacked-card`);
        stackedCards.forEach((card, i) => {
          // Initial state - cards stacked on top of each other
          gsap.set(card, {
            y: i * 50,
            scale: 1 - (i * 0.05),
            opacity: 1 - (i * 0.1),
            zIndex: stackedCards.length - i
          });

          // Animate cards as they come into view
          ScrollTrigger.create({
            trigger: card,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              gsap.to(card, {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
              });
            },
            onLeave: () => {
              gsap.to(card, {
                y: -50,
                scale: 0.95,
                opacity: 0.8,
                duration: 0.6,
                ease: "power2.in"
              });
            },
            onEnterBack: () => {
              gsap.to(card, {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
              });
            },
            onLeaveBack: () => {
              gsap.to(card, {
                y: 50,
                scale: 0.95,
                opacity: 0.8,
                duration: 0.6,
                ease: "power2.in"
              });
            }
          });
        });
      } else if (event.animationType === "horizontal") {
        // Event 3: Horizontal sliding cards
        const horizontalContainer = container.querySelector(`.event-${event.id} .horizontal-container`);
        if (horizontalContainer) {
          const cards = gsap.utils.toArray(`.event-${event.id} .horizontal-card`);
          const totalWidth = cards.length * 100;

          gsap.to(cards, {
            xPercent: -100 * (cards.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: horizontalContainer,
              pin: true,
              scrub: 1,
              snap: 1 / (cards.length - 1),
              end: () => `+=${totalWidth}%`,
            },
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [eventsData]);

  const getEventColorClasses = (color) => {
    const colorMap = {
      blue: {
        primary: "text-blue-400",
        border: "border-blue-400",
        glow: "shadow-[0_0_50px_rgba(59,130,246,0.4)]",
        bg: "bg-gradient-to-br from-blue-900/20 to-cyan-900/20",
      },
      orange: {
        primary: "text-orange-400",
        border: "border-orange-400",
        glow: "shadow-[0_0_50px_rgba(249,115,22,0.4)]",
        bg: "bg-gradient-to-br from-orange-900/20 to-red-900/20",
      },
      red: {
        primary: "text-red-400",
        border: "border-red-400",
        glow: "shadow-[0_0_50px_rgba(239,68,68,0.4)]",
        bg: "bg-gradient-to-br from-red-900/20 to-pink-900/20",
      },
    };
    return colorMap[color] || colorMap.orange;
  };

  const getWinnerColorClasses = (color) => {
    const colorMap = {
      gold: {
        primary: "text-yellow-400",
        border: "border-yellow-400",
        glow: "shadow-[0_0_30px_rgba(251,191,36,0.4)]",
        bg: "bg-gradient-to-br from-yellow-900/20 to-orange-900/20",
        accent: "bg-yellow-400",
      },
      silver: {
        primary: "text-gray-300",
        border: "border-gray-300",
        glow: "shadow-[0_0_30px_rgba(209,213,219,0.4)]",
        bg: "bg-gradient-to-br from-gray-800/20 to-slate-800/20",
        accent: "bg-gray-300",
      },
      bronze: {
        primary: "text-orange-500",
        border: "border-orange-500",
        glow: "shadow-[0_0_30px_rgba(249,115,22,0.4)]",
        bg: "bg-gradient-to-br from-orange-900/20 to-red-900/20",
        accent: "bg-orange-500",
      },
      purple: {
        primary: "text-purple-400",
        border: "border-purple-400",
        glow: "shadow-[0_0_30px_rgba(196,181,253,0.4)]",
        bg: "bg-gradient-to-br from-purple-900/20 to-indigo-900/20",
        accent: "bg-purple-400",
      },
      green: {
        primary: "text-green-400",
        border: "border-green-400",
        glow: "shadow-[0_0_30px_rgba(34,197,94,0.4)]",
        bg: "bg-gradient-to-br from-green-900/20 to-emerald-900/20",
        accent: "bg-green-400",
      },
      pink: {
        primary: "text-pink-400",
        border: "border-pink-400",
        glow: "shadow-[0_0_30px_rgba(236,72,153,0.4)]",
        bg: "bg-gradient-to-br from-pink-900/20 to-rose-900/20",
        accent: "bg-pink-400",
      },
      cyan: {
        primary: "text-cyan-400",
        border: "border-cyan-400",
        glow: "shadow-[0_0_30px_rgba(6,182,212,0.4)]",
        bg: "bg-gradient-to-br from-cyan-900/20 to-teal-900/20",
        accent: "bg-cyan-400",
      },
      teal: {
        primary: "text-teal-400",
        border: "border-teal-400",
        glow: "shadow-[0_0_30px_rgba(20,184,166,0.4)]",
        bg: "bg-gradient-to-br from-teal-900/20 to-cyan-900/20",
        accent: "bg-teal-400",
      },
      indigo: {
        primary: "text-indigo-400",
        border: "border-indigo-400",
        glow: "shadow-[0_0_30px_rgba(99,102,241,0.4)]",
        bg: "bg-gradient-to-br from-indigo-900/20 to-purple-900/20",
        accent: "bg-indigo-400",
      },
      emerald: {
        primary: "text-emerald-400",
        border: "border-emerald-400",
        glow: "shadow-[0_0_30px_rgba(16,185,129,0.4)]",
        bg: "bg-gradient-to-br from-emerald-900/20 to-green-900/20",
        accent: "bg-emerald-400",
      },
    };
    return colorMap[color] || colorMap.gold;
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Main Header */}
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Cyberpunk Binary Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="font-mono text-xs text-green-400 whitespace-nowrap p-8 leading-tight">
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className="mb-1">
                {Array.from({ length: 80 }, (_, j) => ((i + j) % 2 === 0 ? "1" : "0")).join("")}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="text-4xl md:text-6xl lg:text-8xl font-orbitron font-black mb-8">
            <span className="text-white">VORTEX.AI </span>
            <span className="text-orange-500 glitch-ai-minimal" data-text="EVENTS">
              EVENTS
            </span>
          </div>
          <div className="inline-block px-6 py-3 border-2 border-orange-500 text-orange-400 font-mono bg-black/80 backdrop-blur-sm text-sm md:text-base">
            {"> Our Flagship Events"}
          </div>
        </div>
      </div>

      {/* Events with Different Animations */}
      {eventsData.map((event, eventIndex) => {
        const eventColors = getEventColorClasses(event.color);

        return (
          <div key={event.id} className={`event-${event.id}`}>
            {/* Event Header */}
            <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
              {/* Cyberpunk Binary Background */}
              <div className="absolute inset-0 opacity-5">
                <div className={`font-mono text-xs ${eventColors.primary} whitespace-nowrap p-8 leading-tight`}>
                  {Array.from({ length: 25 }, (_, i) => (
                    <div key={i} className="mb-1">
                      {Array.from({ length: 70 }, (_, j) => ((i + j + event.id) % 2 === 0 ? "1" : "0")).join("")}
                    </div>
                  ))}
                </div>
              </div>

              <div className={`absolute inset-0 ${eventColors.bg} opacity-20`}></div>
              <div className="relative z-10 text-center px-4">
                <div className={`text-5xl md:text-7xl font-orbitron font-black mb-6 ${eventColors.primary}`}>
                  {event.name}
                </div>
                <div className="text-2xl md:text-3xl font-rajdhani font-medium text-white mb-8">{event.subtitle}</div>
                <div
                  className={`inline-block px-6 py-3 border-2 ${eventColors.border} ${eventColors.primary} font-mono bg-black/80 backdrop-blur-sm`}
                >
                  {`> ${event.animationType === "stacked" ? "STACKED CARDS" : event.animationType.toUpperCase()} ANIMATION • 6 WINNERS`}
                </div>
              </div>
            </div>

            {/* Winners with different animation styles */}
            {event.animationType === "pinning" && (
              // Event 1: Panel Pinning
              <>
                {event.winners.map((winner) => {
                  const colors = getWinnerColorClasses(winner.color);
                  return (
                    <div key={winner.id} className="winner-panel min-h-screen bg-black relative overflow-hidden">
                      {/* Cyberpunk Binary Background */}
                      <div className="absolute inset-0 opacity-3">
                        <div
                          className={`font-mono text-xs ${colors.primary} whitespace-nowrap p-8 leading-tight blur-sm`}
                        >
                          {Array.from({ length: 25 }, (_, i) => (
                            <div key={i} className="mb-1">
                              {Array.from({ length: 70 }, (_, j) => ((i + j + winner.id) % 2 === 0 ? "1" : "0")).join(
                                ""
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={`absolute inset-0 ${colors.bg} opacity-20`}></div>
                      <div className="relative z-10 min-h-screen flex items-center py-8 lg:py-16">
                        <div className="container mx-auto px-4 lg:px-8">
                          {/* Mobile Layout */}
                          <div className="block lg:hidden">
                            <div className="space-y-8">
                              <div className="text-center">
                                <div
                                  className={`inline-block ${colors.bg} ${colors.border} border-4 px-6 py-3 backdrop-blur-sm ${colors.glow}`}
                                >
                                  <div className={`${colors.primary} font-orbitron font-bold text-xl`}>
                                    {winner.rank}
                                  </div>
                                </div>
                              </div>

                              <div className="relative mx-auto max-w-sm">
                                <Image
                                  src={winner.photo || "/placeholder.svg"}
                                  alt={winner.name}
                                  width={400}
                                  height={280}
                                  className={`w-full h-64 object-cover border-4 ${colors.border} ${colors.glow}`}
                                />
                                <div
                                  className={`absolute -bottom-4 -right-4 w-16 h-16 ${colors.border} border-4 bg-black flex items-center justify-center backdrop-blur-sm`}
                                >
                                  <span className={`font-orbitron font-bold text-lg ${colors.primary}`}>
                                    {winner.avatar}
                                  </span>
                                </div>
                              </div>

                              <div className="text-center px-4">
                                <h2 className={`text-3xl font-orbitron font-black ${colors.primary} mb-4 break-words`}>
                                  {winner.name}
                                </h2>
                                <div className="text-gray-400 font-mono text-sm mb-2">TEAM MEMBERS:</div>
                                <div className="text-white font-rajdhani text-lg font-medium mb-6 break-words">
                                  {winner.members.join(" • ")}
                                </div>
                                <p className="text-gray-300 font-rajdhani text-lg leading-relaxed mb-8">
                                  {winner.description}
                                </p>

                                <div className="grid grid-cols-3 gap-4">
                                  {Object.entries(winner.stats).map(([key, value]) => (
                                    <div
                                      key={key}
                                      className={`${colors.border} border-2 p-4 bg-black/60 backdrop-blur-sm text-center ${colors.glow}`}
                                    >
                                      <div className={`${colors.primary} font-orbitron font-bold text-xl mb-2`}>
                                        {value}
                                      </div>
                                      <div className="text-gray-400 font-mono text-xs uppercase">{key}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Desktop Layout */}
                          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                              <div className="relative">
                                <Image
                                  src={winner.photo || "/placeholder.svg"}
                                  alt={winner.name}
                                  width={500}
                                  height={350}
                                  className={`w-full h-80 object-cover border-4 ${colors.border} ${colors.glow}`}
                                />
                                <div
                                  className={`absolute -top-6 -left-6 ${colors.bg} ${colors.border} border-4 px-6 py-3 backdrop-blur-sm`}
                                >
                                  <div className={`${colors.primary} font-orbitron font-bold text-xl`}>
                                    {winner.rank}
                                  </div>
                                </div>
                                <div
                                  className={`absolute -bottom-6 -right-6 w-20 h-20 ${colors.border} border-4 bg-black flex items-center justify-center backdrop-blur-sm`}
                                >
                                  <span className={`font-orbitron font-bold text-2xl ${colors.primary}`}>
                                    {winner.avatar}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-8">
                              <h2 className={`text-4xl font-orbitron font-black ${colors.primary} mb-6`}>
                                {winner.name}
                              </h2>
                              <p className="text-gray-300 font-rajdhani text-xl leading-relaxed">
                                {winner.description}
                              </p>
                              <div className="grid grid-cols-3 gap-4">
                                {Object.entries(winner.stats).map(([key, value]) => (
                                  <div
                                    key={key}
                                    className={`${colors.border} border-2 p-6 bg-black/60 backdrop-blur-sm text-center ${colors.glow}`}
                                  >
                                    <div className={`${colors.primary} font-orbitron font-bold text-3xl mb-2`}>
                                      {value}
                                    </div>
                                    <div className="text-gray-400 font-mono text-sm uppercase">{key}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            {event.animationType === "stacked" && (
              // Event 2: Stacked Cards with staggered reveal
              <div className="min-h-screen bg-black relative overflow-hidden py-16">
                <div className="container mx-auto px-4 lg:px-8">
                  <div className="grid gap-8 lg:gap-12">
                    {event.winners.map((winner, index) => {
                      const colors = getWinnerColorClasses(winner.color);
                      return (
                        <div
                          key={winner.id}
                          className="stacked-card relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden"
                        >
                          {/* Cyberpunk Binary Background */}
                          <div className="absolute inset-0 opacity-5">
                            <div
                              className={`font-mono text-xs ${colors.primary} whitespace-nowrap p-8 leading-tight blur-sm`}
                            >
                              {Array.from({ length: 20 }, (_, i) => (
                                <div key={i} className="mb-1">
                                  {Array.from({ length: 60 }, (_, j) => ((i + j + winner.id) % 2 === 0 ? "1" : "0")).join("")}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Gradient overlay */}
                          <div className={`absolute inset-0 ${colors.bg} opacity-20`}></div>

                          <div className="relative z-10 p-6 lg:p-8">
                            {/* Mobile Layout */}
                            <div className="block lg:hidden space-y-6">
                              <div className="text-center">
                                <div
                                  className={`inline-block ${colors.bg} ${colors.border} border-2 px-6 py-3 backdrop-blur-sm ${colors.glow}`}
                                >
                                  <div className={`${colors.primary} font-orbitron font-bold text-xl`}>
                                    {winner.rank}
                                  </div>
                                </div>
                              </div>

                              <div className="relative mx-auto max-w-sm">
                                <Image
                                  src={winner.photo || "/placeholder.svg"}
                                  alt={winner.name}
                                  width={400}
                                  height={280}
                                  className={`w-full h-48 object-cover border-2 ${colors.border} ${colors.glow} rounded-lg`}
                                />
                                <div
                                  className={`absolute -bottom-3 -right-3 w-12 h-12 ${colors.border} border-2 bg-black flex items-center justify-center backdrop-blur-sm rounded-full`}
                                >
                                  <span className={`font-orbitron font-bold text-sm ${colors.primary}`}>
                                    {winner.avatar}
                                  </span>
                                </div>
                              </div>

                              <div className="text-center space-y-4">
                                <h2 className={`text-2xl font-orbitron font-black ${colors.primary} break-words`}>
                                  {winner.name}
                                </h2>
                                <div className="text-gray-400 font-mono text-sm mb-2">TEAM MEMBERS:</div>
                                <div className="text-white font-rajdhani text-base font-medium break-words">
                                  {winner.members.join(" • ")}
                                </div>
                                <p className="text-gray-300 font-rajdhani text-base leading-relaxed">
                                  {winner.description}
                                </p>

                                <div className="grid grid-cols-3 gap-3">
                                  {Object.entries(winner.stats).map(([key, value]) => (
                                    <div
                                      key={key}
                                      className={`${colors.border} border p-3 bg-black/60 backdrop-blur-sm text-center ${colors.glow} rounded`}
                                    >
                                      <div className={`${colors.primary} font-orbitron font-bold text-lg mb-1`}>
                                        {value}
                                      </div>
                                      <div className="text-gray-400 font-mono text-xs uppercase">{key}</div>
                                    </div>
                                  ))}
                                </div>

                                <div className="flex flex-wrap gap-2 justify-center">
                                  {winner.technologies.map((tech, i) => (
                                    <span
                                      key={i}
                                      className={`px-2 py-1 ${colors.border} border ${colors.bg} font-mono text-xs ${colors.primary} rounded`}
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center">
                              <div className="relative">
                                <Image
                                  src={winner.photo || "/placeholder.svg"}
                                  alt={winner.name}
                                  width={500}
                                  height={350}
                                  className={`w-full h-72 object-cover border-2 ${colors.border} ${colors.glow} rounded-lg`}
                                />
                                <div
                                  className={`absolute top-4 left-4 ${colors.bg} ${colors.border} border-2 px-6 py-3 backdrop-blur-sm rounded-lg`}
                                >
                                  <div className={`${colors.primary} font-orbitron font-bold text-xl`}>
                                    {winner.rank}
                                  </div>
                                </div>
                                <div
                                  className={`absolute -bottom-4 -right-4 w-16 h-16 ${colors.border} border-2 bg-black flex items-center justify-center backdrop-blur-sm rounded-full`}
                                >
                                  <span className={`font-orbitron font-bold text-xl ${colors.primary}`}>
                                    {winner.avatar}
                                  </span>
                                </div>
                              </div>
                              <div className="space-y-6">
                                <h2 className={`text-3xl font-orbitron font-black ${colors.primary} break-words`}>
                                  {winner.name}
                                </h2>
                                <div className="text-gray-400 font-mono text-sm mb-2">TEAM MEMBERS:</div>
                                <div className="text-white font-rajdhani text-lg font-medium break-words">
                                  {winner.members.join(" • ")}
                                </div>
                                <p className="text-gray-300 font-rajdhani text-lg leading-relaxed">
                                  {winner.description}
                                </p>
                                <div className="grid grid-cols-3 gap-4">
                                  {Object.entries(winner.stats).map(([key, value]) => (
                                    <div
                                      key={key}
                                      className={`${colors.border} border p-4 bg-black/60 backdrop-blur-sm text-center ${colors.glow} rounded-lg`}
                                    >
                                      <div className={`${colors.primary} font-orbitron font-bold text-2xl mb-2`}>
                                        {value}
                                      </div>
                                      <div className="text-gray-400 font-mono text-sm uppercase">{key}</div>
                                    </div>
                                  ))}
                                </div>
                                <div className="flex flex-wrap gap-3">
                                  {winner.technologies.map((tech, i) => (
                                    <span
                                      key={i}
                                      className={`px-3 py-2 ${colors.border} border ${colors.bg} font-mono text-sm ${colors.primary} rounded-lg`}
                                    >
                                      {tech}
                                    </span>
                                    ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {event.animationType === "horizontal" && (
              // Event 3: Horizontal Sliding Cards
              <div className="horizontal-container min-h-screen relative overflow-hidden bg-black">
                <div className="flex h-screen">
                  {event.winners.map((winner) => {
                    const colors = getWinnerColorClasses(winner.color);
                    return (
                      <div
                        key={winner.id}
                        className="horizontal-card flex-shrink-0 w-screen h-screen flex items-center relative"
                      >
                        {/* Cyberpunk Binary Background */}
                        <div className="absolute inset-0 opacity-3">
                          <div
                            className={`font-mono text-xs ${colors.primary} whitespace-nowrap p-8 leading-tight blur-sm`}
                          >
                            {Array.from({ length: 25 }, (_, i) => (
                              <div key={i} className="mb-1">
                                {Array.from({ length: 70 }, (_, j) => ((i + j + winner.id) % 2 === 0 ? "1" : "0")).join("")}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className={`absolute inset-0 ${colors.bg} opacity-30`}></div>
                        <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex items-center">
                          {/* Mobile Layout */}
                          <div className="block lg:hidden w-full py-8">
                            <div className="text-center space-y-6 max-h-screen overflow-y-auto">
                              <div
                                className={`inline-block ${colors.bg} ${colors.border} border-4 px-6 py-3 backdrop-blur-sm ${colors.glow}`}
                              >
                                <div className={`${colors.primary} font-orbitron font-bold text-xl`}>{winner.rank}</div>
                              </div>

                              <div className="relative mx-auto max-w-xs">
                                <Image
                                  src={winner.photo || "/placeholder.svg"}
                                  alt={winner.name}
                                  width={300}
                                  height={200}
                                  className={`w-full h-48 object-cover border-4 ${colors.border} ${colors.glow}`}
                                />
                                <div
                                  className={`absolute -bottom-3 -right-3 w-12 h-12 ${colors.border} border-2 bg-black flex items-center justify-center backdrop-blur-sm rounded-full`}
                                >
                                  <span className={`font-orbitron font-bold text-sm ${colors.primary}`}>
                                    {winner.avatar}
                                  </span>
                                </div>
                              </div>

                              <div className="px-4">
                                <h2 className={`text-2xl font-orbitron font-black ${colors.primary} mb-4 break-words`}>
                                  {winner.name}
                                </h2>
                                <div className="text-white font-rajdhani text-base mb-4 break-words">
                                  {winner.members.join(" • ")}
                                </div>
                                <p className="text-gray-300 font-rajdhani text-base leading-relaxed mb-6">
                                  {winner.description}
                                </p>

                                <div className="grid grid-cols-3 gap-3 mb-6">
                                  {Object.entries(winner.stats).map(([key, value]) => (
                                    <div
                                      key={key}
                                      className={`${colors.border} border-2 p-3 bg-black/70 backdrop-blur-sm text-center ${colors.glow}`}
                                    >
                                      <div className={`${colors.primary} font-orbitron font-bold text-lg mb-1`}>
                                        {value}
                                      </div>
                                      <div className="text-gray-400 font-mono text-xs uppercase">{key}</div>
                                    </div>
                                  ))}
                                </div>

                                <div className="flex flex-wrap gap-2 justify-center">
                                  {winner.technologies.map((tech, i) => (
                                    <span
                                      key={i}
                                      className={`px-2 py-1 ${colors.border} border ${colors.bg} font-mono text-xs ${colors.primary}`}
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Desktop Layout */}
                          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center w-full">
                            <div className="relative">
                              <Image
                                src={winner.photo || "/placeholder.svg"}
                                alt={winner.name}
                                width={600}
                                height={400}
                                className={`w-full h-96 object-cover border-4 ${colors.border} ${colors.glow}`}
                              />
                              <div
                                className={`absolute top-8 left-8 ${colors.bg} ${colors.border} border-4 px-8 py-4 backdrop-blur-sm`}
                              >
                                <div className={`${colors.primary} font-orbitron font-bold text-2xl`}>
                                  {winner.rank}
                                </div>
                              </div>
                              <div
                                className={`absolute -bottom-6 -right-6 w-20 h-20 ${colors.border} border-4 bg-black flex items-center justify-center backdrop-blur-sm rounded-full`}
                              >
                                <span className={`font-orbitron font-bold text-2xl ${colors.primary}`}>
                                  {winner.avatar}
                                </span>
                              </div>
                            </div>
                            <div className="space-y-8 pr-8">
                              <h2
                                className={`text-4xl xl:text-5xl font-orbitron font-black ${colors.primary} mb-8 break-words leading-tight`}
                              >
                                {winner.name}
                              </h2>
                              <div className="text-white font-rajdhani text-xl mb-8 break-words">
                                {winner.members.join(" • ")}
                              </div>
                              <p className="text-gray-300 font-rajdhani text-xl leading-relaxed mb-8">
                                {winner.description}
                              </p>
                              <div className="grid grid-cols-3 gap-6">
                                {Object.entries(winner.stats).map(([key, value]) => (
                                  <div
                                    key={key}
                                    className={`${colors.border} border-2 p-6 bg-black/70 backdrop-blur-sm text-center ${colors.glow}`}
                                  >
                                    <div className={`${colors.primary} font-orbitron font-bold text-3xl mb-3`}>
                                      {value}
                                    </div>
                                    <div className="text-gray-400 font-mono text-sm uppercase">{key}</div>
                                  </div>
                                ))}
                              </div>
                              <div className="flex flex-wrap gap-4 mt-8">
                                {winner.technologies.map((tech, i) => (
                                  <span
                                    key={i}
                                    className={`px-4 py-3 ${colors.border} border-2 ${colors.bg} font-mono text-base ${colors.primary}`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
