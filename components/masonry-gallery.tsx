"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

type GalleryImage = {
  src: string
  alt: string
  // optional emphasized sizing
  emphasis?: "tall" | "wide" | "square"
}

const GALLERY: GalleryImage[] = [
  { src: "/gallery/cyber-01.png", alt: "neon cyber street", emphasis: "tall" },
  { src: "/gallery/cyber-02.png", alt: "hacker terminal", emphasis: "square" },
  { src: "/gallery/cyber-03.png", alt: "ai face mesh", emphasis: "wide" },
  { src: "/gallery/cyber-04.png", alt: "quantum chip", emphasis: "square" },
  { src: "/gallery/cyber-05.png", alt: "matrix rain", emphasis: "tall" },
  { src: "/gallery/cyber-06.png", alt: "neon city drone", emphasis: "wide" },
  { src: "/gallery/cyber-07.png", alt: "bio mech cyberpunk", emphasis: "square" },
  { src: "/gallery/cyber-08.png", alt: "skyscraper grid", emphasis: "tall" },
  { src: "/gallery/cyber-09.png", alt: "code architecture", emphasis: "square" },
  { src: "/gallery/cyber-10.png", alt: "neon alley", emphasis: "wide" },
  { src: "/gallery/cyber-11.png", alt: "abstract node map", emphasis: "square" },
  { src: "/gallery/cyber-12.png", alt: "server racks", emphasis: "tall" },
  { src: "/gallery/cyber-13.png", alt: "neon tunnel", emphasis: "square" },
  { src: "/gallery/cyber-14.png", alt: "terminal screen", emphasis: "wide" },
  { src: "/gallery/cyber-15.png", alt: "data center", emphasis: "tall" },
  { src: "/gallery/cyber-16.png", alt: "abstract circuit", emphasis: "square" },
]

export function MasonryGallery() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // Show lock when user scrolls to the lock position in gallery
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top+=300 center",
      end: "bottom center", 
      onEnter: () => {},
      onLeave: () => {},
      onEnterBack: () => {},
      onLeaveBack: () => {},
    })

    return () => trigger?.kill()
  }, [])

  const goToEvents = () => {
    const target = document.getElementById("events")
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  // no-op: keep behavior simple (navigation handled below)
  }

  return (
    <section ref={containerRef} className="relative bg-black">
      {/* subtle background grid + radial glows */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div
          className="absolute inset-0 mix-blend-screen"
          style={{
            background:
              "radial-gradient(600px 600px at 20% 30%, rgba(249,115,22,0.10), transparent 60%), radial-gradient(600px 600px at 80% 70%, rgba(6,182,212,0.10), transparent 60%), radial-gradient(600px 600px at 50% 10%, rgba(168,85,247,0.10), transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16">
        <div className="mb-6 md:mb-8 text-center font-mono text-xs text-gray-400">
          {"SCROLL TO BROWSE • GLITCH GALLERY"}
        </div>

        {/* Mobile: uniform grid, no vertical offset */}
        <div className="block sm:hidden relative">
          <div className="grid grid-cols-2 gap-4 px-2">
            {GALLERY.map((img, idx) => {
              const mobileSize = "h-[220px]"; // uniform height for all images
              const accent =
                idx % 4 === 0
                  ? "ring-orange-500/50"
                  : idx % 4 === 1
                  ? "ring-cyan-400/50"
                  : idx % 4 === 2
                  ? "ring-purple-500/50"
                  : "ring-green-500/50"

              const blurClass = ""

              return (
                <div key={`m-${idx}`} className="mb-4 relative">
                  <div
                    className={[
                      "group relative overflow-hidden bg-black/60 border border-white/10 backdrop-blur-sm",
                      "ring-1",
                      accent,
                      "gallery-card glitch-hover",
                      blurClass,
                    ].join(" ")}
                  >
                    <div className={mobileSize + " relative w-full"}>
                      <Image src={img.src || "/placeholder.svg"} alt={img.alt} fill style={{ objectFit: "cover", transform: "scale(1.02)" }} />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,.25)_70%,rgba(0,0,0,.6)_100%)]" />
                    <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay bg-[repeating-linear-gradient(0deg,rgba(255,255,255,.06)_0_1px,transparent_1px_3px)]" />

                    <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
                      <div className="font-rajdhani text-sm text-gray-200">{img.alt.toUpperCase()}</div>
                      <div className="font-mono text-[10px] text-gray-400 opacity-80">{`#${String(idx + 1).padStart(2, "0")}`}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Masonry (CSS columns) for sm+ screens */}
        <div className="hidden sm:block columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance] relative">
          {GALLERY.map((img, idx) => {
            const sizeCls = img.emphasis === "tall" ? "h-[420px]" : img.emphasis === "wide" ? "h-[280px]" : "h-[340px]"
            const accent =
              idx % 4 === 0
                ? "ring-orange-500/50"
                : idx % 4 === 1
                ? "ring-cyan-400/50"
                : idx % 4 === 2
                ? "ring-purple-500/50"
                : "ring-green-500/50"

            const blurClass = ""

            return (
              <div key={idx} className="mb-4 break-inside-avoid relative">
                <div
                  className={[
                    "group relative overflow-hidden bg-black/60 border border-white/10 backdrop-blur-sm",
                    "ring-1",
                    accent,
                    "gallery-card glitch-hover",
                    blurClass,
                  ].join(" ")}
                >
                  <div className={sizeCls + " relative w-full"}>
                    <Image src={img.src || "/placeholder.svg"} alt={img.alt} fill style={{ objectFit: "cover", transform: "scale(1.02)" }} />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,.25)_70%,rgba(0,0,0,.6)_100%)]" />
                  <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay bg-[repeating-linear-gradient(0deg,rgba(255,255,255,.06)_0_1px,transparent_1px_3px)]" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                    <div className="font-rajdhani text-sm text-gray-200">{img.alt.toUpperCase()}</div>
                    <div className="font-mono text-[10px] text-gray-400 opacity-80">{`#${String(idx + 1).padStart(2, "0")}`}</div>
                  </div>

                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                </div>
              </div>
            )
          })}

          {/* Bottom gradient for smooth fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Download card positioned at bottom of gallery */}
      <div className="absolute bottom-40 left-0 right-0 z-30 flex items-center justify-center px-4">
        <div className="relative mx-4 w-full max-w-xl">
          <div className="download-lock border border-white/15 bg-black/90 backdrop-blur-xl p-6 md:p-8 text-center">
            <div className="font-orbitron text-2xl md:text-3xl font-extrabold text-white mb-3">ACCESS RESTRICTED</div>
            <div className="font-rajdhani text-gray-300 mb-6">
              Advanced content locked. Download the event dossier to continue.
            </div>
            <button
              onClick={goToEvents}
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-rajdhani tracking-wider transition-colors"
            >
              DOWNLOAD FOR MORE INFO
            </button>
          </div>
          <div className="glitch-frame pointer-events-none absolute inset-0" />
        </div>
      </div>
    </section>
  )
}