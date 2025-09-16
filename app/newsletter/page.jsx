import { MasonryGallery } from "@/components/masonry-gallery"

export default function NewsletterPage() {
  return (
    <div className="pt-16 bg-black min-h-screen">
      {/* HERO / WHAT IS NEWSLETTER */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div
            className="absolute inset-0 mix-blend-screen"
            style={{
              background:
                "radial-gradient(600px 600px at 15% 25%, rgba(249,115,22,0.10), transparent 60%), radial-gradient(600px 600px at 85% 75%, rgba(6,182,212,0.10), transparent 60%), radial-gradient(600px 600px at 50% 10%, rgba(168,85,247,0.10), transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-6 lg:px-12 py-16 md:py-24">
          <div className="text-center mb-10">
            <div className="inline-block px-3 py-1 border border-orange-500/60 text-orange-400 font-mono text-xs tracking-widest">
              {"> NEWSLETTER"}
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-orbitron font-black">SIGNALS • BRIEFS • RELEASES</h1>
            <p className="mt-4 text-gray-300 font-rajdhani text-lg md:text-xl">
              Precision updates from ASCAI — distilled research, event briefs, and releases for practitioners.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/60 border border-white/10 ring-1 ring-orange-500/40 p-6 backdrop-blur-sm">
              <div className="font-orbitron text-orange-400 text-xl mb-2">RESEARCH SIGNALS</div>
              <p className="text-gray-300 font-rajdhani">
                Curated weekly drops on AI/ML workstreams, benchmarks, and core papers under review.
              </p>
            </div>
            <div className="bg-black/60 border border-white/10 ring-1 ring-cyan-400/40 p-6 backdrop-blur-sm">
              <div className="font-orbitron text-cyan-300 text-xl mb-2">BUILD BRIEFS</div>
              <p className="text-gray-300 font-rajdhani">
                Engineering notes, system diagrams, and hard-won learnings from projects across teams.
              </p>
            </div>
            <div className="bg-black/60 border border-white/10 ring-1 ring-purple-500/40 p-6 backdrop-blur-sm">
              <div className="font-orbitron text-purple-300 text-xl mb-2">RELEASE LOGS</div>
              <p className="text-gray-300 font-rajdhani">
                Event announcements, open-source drops, and archived materials for reference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GLITCHY MASONRY GALLERY (PINNED) */}
      <MasonryGallery />

      {/* EVENTS DOWNLOADS */}
      <section id="events" className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div
            className="absolute inset-0 mix-blend-screen"
            style={{
              background:
                "radial-gradient(600px 600px at 25% 30%, rgba(249,115,22,0.10), transparent 60%), radial-gradient(600px 600px at 75% 70%, rgba(6,182,212,0.10), transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 border border-white/20 text-gray-300 font-mono text-xs tracking-widest">
              {"> EVENT DOSSIERS"}
            </div>
            <h2 className="mt-4 text-3xl md:text-5xl font-orbitron font-black">DOWNLOADS</h2>
            <p className="mt-3 text-gray-400 font-rajdhani">Detailed PDFs for archived and current events.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-black/60 border border-white/10 ring-1 ring-orange-500/40 p-6 backdrop-blur-sm">
              <div className="text-orange-400 font-orbitron text-xl">EPOCH.AI 2023</div>
              <p className="text-gray-300 font-rajdhani mt-2">Inaugural edition overview with schedules and winners.</p>
              <a
                href="https://drive.google.com/file/d/1AUuvOAVDz1Ea_gHQ2I1fY7mPHEjkiRyd/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex px-4 py-2 border border-white/20 bg-white/10 hover:bg-white/15 text-white transition-colors font-rajdhani"
              >
                Download PDF
              </a>
            </article>

            <article className="bg-black/60 border border-white/10 ring-1 ring-cyan-400/40 p-6 backdrop-blur-sm">
              <div className="text-cyan-300 font-orbitron text-xl">EPOCH.AI 2024</div>
              <p className="text-gray-300 font-rajdhani mt-2">Evolution edition with expanded tracks and datasets.</p>
              <a
                href="https://drive.google.com/file/d/1gqwWYx8bVhs1q56sBhf0X740NmBsIr2C/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex px-4 py-2 border border-white/20 bg-white/10 hover:bg-white/15 text-white transition-colors font-rajdhani"
              >
                Download PDF
              </a>
            </article>

            <article className="bg-black/60 border border-white/10 ring-1 ring-purple-500/40 p-6 backdrop-blur-sm">
              <div className="text-purple-300 font-orbitron text-xl">EPOCH.AI 2025</div>
              <p className="text-gray-300 font-rajdhani mt-2">
                Future edition dossiers with speaker notes and modules.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex px-4 py-2 border border-white/20 bg-white/10 hover:bg-white/15 text-white transition-colors font-rajdhani opacity-50 cursor-not-allowed"
              >
                Coming Soon
              </a>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
