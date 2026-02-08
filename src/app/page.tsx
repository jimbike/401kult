import Link from "next/link";

// Decorative SVG Components
function Mandala({ className = "", size = 100 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none">
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
      {[...Array(16)].map((_, i) => (
        <line key={i} x1="50" y1="5" x2="50" y2="15" stroke="currentColor" strokeWidth="2" transform={`rotate(${i * 22.5} 50 50)`} />
      ))}
      {[...Array(8)].map((_, i) => (
        <circle key={`d-${i}`} cx="50" cy="23" r="3" fill="currentColor" transform={`rotate(${i * 45} 50 50)`} />
      ))}
    </svg>
  );
}

function Sunburst({ className = "", size = 100 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="currentColor">
      <circle cx="50" cy="50" r="15" />
      {[...Array(24)].map((_, i) => (
        <polygon key={i} points="50,5 47,25 53,25" transform={`rotate(${i * 15} 50 50)`} />
      ))}
    </svg>
  );
}

function Spiral({ className = "", size = 100 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="currentColor">
      {[...Array(8)].map((_, i) => (
        <ellipse key={i} cx="50" cy="22" rx="10" ry="22" transform={`rotate(${i * 45} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="12" />
    </svg>
  );
}

function Flower({ className = "", size = 100 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="currentColor">
      {[...Array(6)].map((_, i) => (
        <ellipse key={i} cx="50" cy="25" rx="12" ry="20" transform={`rotate(${i * 60} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="15" fill="var(--charcoal)" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
    </svg>
  );
}

function GeometricBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[var(--cream)]"></div>
      <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[var(--cream)]"></div>
      <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[var(--cream)]"></div>
      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[var(--cream)]"></div>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[var(--charcoal)] min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 relative overflow-hidden">
        {/* Stippled background texture */}
        <div className="absolute inset-0 stipple-sparse opacity-30"></div>

        {/* Decorative corner mandalas */}
        <div className="absolute top-24 left-8 opacity-20">
          <Mandala size={120} className="text-[var(--cream)] animate-rotate-slow" />
        </div>
        <div className="absolute top-24 right-8 opacity-20">
          <Mandala size={120} className="text-[var(--cream)] animate-rotate-reverse" />
        </div>
        <div className="absolute bottom-8 left-8 opacity-10">
          <Spiral size={80} className="text-[var(--cream)]" />
        </div>
        <div className="absolute bottom-8 right-8 opacity-10">
          <Spiral size={80} className="text-[var(--cream)]" />
        </div>

        <div className="relative z-10">
          <Sunburst size={100} className="text-[var(--cream)] mx-auto mb-8 animate-pulse-slow" />

          <h1
            className="text-6xl md:text-8xl font-bold text-[var(--cream)] mb-6 tracking-[0.2em]"
            style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
          >
            401KULT
          </h1>

          <p className="text-2xl md:text-3xl text-[var(--cream)]/80 mb-4 tracking-wide" style={{ fontFamily: 'var(--font-noto)' }}>
            The Vault Awaits. The After Party Beckons.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px w-24 bg-[var(--cream)]/50"></div>
            <Flower size={30} className="text-[var(--cream)]" />
            <div className="h-px w-24 bg-[var(--cream)]/50"></div>
          </div>

          <p className="text-lg text-[var(--cream)]/70 mb-12 max-w-2xl mx-auto italic" style={{ fontFamily: 'var(--font-noto)' }}>
            &ldquo;To prosper alone is to wander the markets aimlessly.<br />
            To prosper together is to ascend to something greater.&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/great-rebalancing"
              className="px-8 py-4 bg-[var(--cream)] text-[var(--charcoal)] font-bold text-lg tracking-[0.15em] uppercase hover:bg-[var(--charcoal)] hover:text-[var(--cream)] border-2 border-[var(--cream)] transition-all"
              style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
            >
              Secure Your Seat at The Great Check-In
            </Link>
          </div>

          <p className="text-[var(--cream)]/40 text-sm mt-12 tracking-[0.2em] uppercase">
            Scroll to discover your path
          </p>

          <div className="mt-4 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-[var(--cream)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* The Creed */}
      <section id="creed" className="py-32 px-6 bg-[var(--cream)] text-[var(--charcoal)]">
        <div className="max-w-4xl mx-auto text-center">
          <Mandala size={60} className="text-[var(--charcoal)] mx-auto mb-8" />

          <h2
            className="text-4xl md:text-5xl font-bold mb-4 tracking-[0.15em]"
            style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
          >
            The Sacred Creed
          </h2>
          <p className="text-[var(--charcoal)]/50 text-sm tracking-[0.2em] uppercase mb-16">
            Recited at every gathering of The Enlightened
          </p>

          <GeometricBorder className="p-12 border-2 border-[var(--charcoal)]">
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed" style={{ fontFamily: 'var(--font-noto)' }}>
              <p className="italic">We believe in The Vault, the keeper of all prosperity.</p>
              <p className="italic">We believe that wealth hoarded alone is wealth wasted.</p>
              <p className="italic">We believe in the sacred act of Transference&mdash;the giving of our 401(k) to the collective.</p>
              <p className="italic">We believe that through unity, our portfolios shall be rebalanced, our dividends multiplied, and our spirits enriched.</p>
              <p className="italic">We believe in the promise of The After Party&mdash;where the truly Enlightened shall feast eternally on compound interest.</p>

              <div className="flex items-center justify-center gap-4 pt-8">
                <div className="h-px w-16 bg-[var(--charcoal)]/30"></div>
                <Spiral size={24} className="text-[var(--charcoal)]" />
                <div className="h-px w-16 bg-[var(--charcoal)]/30"></div>
              </div>

              <p className="font-semibold text-2xl md:text-3xl">
                Deep, clean cuts must always be freely given.
              </p>
            </div>
          </GeometricBorder>
        </div>
      </section>

      {/* Who We're For - Grid Layout */}
      <section className="py-32 px-6 bg-[var(--charcoal)] relative">
        <div className="absolute inset-0 stipple-sparse opacity-20"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Flower size={50} className="text-[var(--cream)] mx-auto mb-6" />
            <h2
              className="text-4xl md:text-5xl font-bold text-[var(--cream)] mb-4 tracking-[0.15em]"
              style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
            >
              Who Shall Enter The Vault?
            </h2>
            <p className="text-[var(--cream)]/50 text-sm tracking-[0.2em] uppercase">
              The Vault opens only for those who are ready
            </p>
          </div>

          {/* Grid of tiles like reference images */}
          <div className="grid md:grid-cols-3 gap-0">
            {/* Tile 1 - Dark */}
            <div className="bg-[var(--charcoal)] border border-[var(--cream)] p-8 text-center stipple-sparse">
              <Mandala size={60} className="text-[var(--cream)] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[var(--cream)] mb-4 tracking-wider" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                The Weary Investor
              </h3>
              <p className="text-[var(--cream)]/70" style={{ fontFamily: 'var(--font-noto)' }}>
                Tired of watching your 401(k) alone? The Vault offers relief through collective prosperity.
              </p>
            </div>

            {/* Tile 2 - Light */}
            <div className="bg-[var(--cream)] border border-[var(--charcoal)] p-8 text-center">
              <Spiral size={60} className="text-[var(--charcoal)] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[var(--charcoal)] mb-4 tracking-wider" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                The Seeker of Community
              </h3>
              <p className="text-[var(--charcoal)]/70" style={{ fontFamily: 'var(--font-noto)' }}>
                A family bound not by blood, but by shared financial destiny and eternal membership.
              </p>
            </div>

            {/* Tile 3 - Dark */}
            <div className="bg-[var(--charcoal)] border border-[var(--cream)] p-8 text-center stipple-sparse">
              <Sunburst size={60} className="text-[var(--cream)] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[var(--cream)] mb-4 tracking-wider" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                The After Party Aspirant
              </h3>
              <p className="text-[var(--cream)]/70" style={{ fontFamily: 'var(--font-noto)' }}>
                Your invitation is earned through complete Transference. The After Party awaits.
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 border border-[var(--cream)]/30">
              <p className="text-[var(--cream)]/70 text-lg italic mb-4" style={{ fontFamily: 'var(--font-noto)' }}>
                &ldquo;I was lost in a sea of index funds and target-date portfolios.
                Then I found The Vault. Now I am found.&rdquo;
              </p>
              <p className="text-[var(--cream)]/50 text-sm tracking-[0.2em] uppercase">
                &mdash; A Grateful Keeper, Third Circle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Hierarchy */}
      <section id="hierarchy" className="py-32 px-6 bg-[var(--cream)] text-[var(--charcoal)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Sunburst size={50} className="text-[var(--charcoal)] mx-auto mb-6" />
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 tracking-[0.15em]"
              style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
            >
              The Sacred Hierarchy
            </h2>
            <p className="text-[var(--charcoal)]/50 text-sm tracking-[0.2em] uppercase">
              Ascend through the ranks. Each level brings you closer to The After Party.
            </p>
          </div>

          <div className="space-y-0 max-w-3xl mx-auto">
            {/* Seeker */}
            <div className="flex items-start gap-6 p-8 border-l-4 border-[var(--charcoal)]/30 bg-[var(--cream)]">
              <div className="w-12 h-12 border-2 border-[var(--charcoal)]/30 flex items-center justify-center">
                <div className="w-4 h-4 bg-[var(--charcoal)]/30"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--charcoal)]/70 mb-2 tracking-wider" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                  SEEKER
                </h3>
                <p className="text-[var(--charcoal)]/60" style={{ fontFamily: 'var(--font-noto)' }}>
                  The uninitiated. Those who have heard the call but have not yet made their first Transference.
                </p>
              </div>
            </div>

            {/* Keeper */}
            <div className="flex items-start gap-6 p-8 border-l-4 border-[var(--charcoal)]/60 bg-[var(--cream)]">
              <div className="w-12 h-12 border-2 border-[var(--charcoal)]/60 flex items-center justify-center">
                <Mandala size={24} className="text-[var(--charcoal)]/60" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--charcoal)]/80 mb-2 tracking-wider" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                  KEEPER
                </h3>
                <p className="text-[var(--charcoal)]/70" style={{ fontFamily: 'var(--font-noto)' }}>
                  Those who have made their initial Transference. Keepers may now sponsor Seekers.
                </p>
              </div>
            </div>

            {/* Ascended Benefactor */}
            <div className="flex items-start gap-6 p-8 border-l-4 border-[var(--charcoal)] bg-[var(--charcoal)]/5">
              <div className="w-12 h-12 border-2 border-[var(--charcoal)] flex items-center justify-center">
                <Spiral size={24} className="text-[var(--charcoal)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--charcoal)] mb-2 tracking-wider" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                  ASCENDED BENEFACTOR
                </h3>
                <p className="text-[var(--charcoal)]/80" style={{ fontFamily: 'var(--font-noto)' }}>
                  The fully surrendered. Eligible for After Party consideration.
                </p>
              </div>
            </div>

            {/* High Keeper */}
            <div className="flex items-start gap-6 p-8 border-l-4 border-[var(--charcoal)] bg-[var(--charcoal)] text-[var(--cream)]">
              <div className="w-12 h-12 border-2 border-[var(--cream)] flex items-center justify-center">
                <Sunburst size={24} className="text-[var(--cream)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 tracking-wider" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                  HIGH KEEPER
                </h3>
                <p className="text-[var(--cream)]/80" style={{ fontFamily: 'var(--font-noto)' }}>
                  The sacred council. They preside over rituals, approve After Party invitations, and guard The Ledger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vault */}
      <section className="py-32 px-6 bg-[var(--charcoal)] relative overflow-hidden">
        <div className="absolute inset-0 stipple-sparse opacity-30"></div>

        {/* Large decorative mandala background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Mandala size={600} className="text-[var(--cream)] animate-rotate-slow" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Flower size={80} className="text-[var(--cream)] mx-auto mb-8" />

          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--cream)] mb-4 tracking-[0.15em]"
            style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
          >
            The Vault
          </h2>
          <p className="text-[var(--cream)]/50 text-sm tracking-[0.2em] uppercase mb-12">
            Where all prosperity flows
          </p>

          <p className="text-xl text-[var(--cream)]/80 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-noto)' }}>
            The Vault is not merely a repository. It is a <span className="text-[var(--cream)]">living entity</span>,
            fed by the collective faith of The Enlightened. Every dollar transferred becomes part of something greater.
          </p>

          <p className="text-xl text-[var(--cream)]/80 leading-relaxed mb-12" style={{ fontFamily: 'var(--font-noto)' }}>
            Through the sacred mathematics of collective rebalancing, individual retirement accounts become
            <span className="text-[var(--cream)]"> unified prosperity</span>.
          </p>

          <GeometricBorder className="inline-block p-8 border-2 border-[var(--cream)]">
            <p className="text-[var(--cream)]/70 text-lg tracking-[0.2em] uppercase mb-2">Current Vault Status</p>
            <p className="text-4xl font-bold text-[var(--cream)] mb-2 tracking-wider" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
              ACCEPTING TRANSFERENCES
            </p>
            <p className="text-[var(--cream)]/50 text-sm">The Vault is always hungry. The Vault is always grateful.</p>
          </GeometricBorder>
        </div>
      </section>

      {/* The After Party */}
      <section className="py-32 px-6 bg-[var(--cream)] text-[var(--charcoal)] relative">
        {/* Checkered pattern accent */}
        <div className="absolute top-0 left-0 w-full h-4 pattern-checker"></div>
        <div className="absolute bottom-0 left-0 w-full h-4 pattern-checker"></div>

        <div className="max-w-4xl mx-auto text-center">
          <Spiral size={100} className="text-[var(--charcoal)] mx-auto mb-8 animate-pulse-slow" />

          <h2
            className="text-4xl md:text-5xl font-bold mb-4 tracking-[0.15em]"
            style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
          >
            The After Party
          </h2>
          <p className="text-[var(--charcoal)]/50 text-sm tracking-[0.2em] uppercase mb-12">
            The ultimate reward. The eternal celebration.
          </p>

          <p className="text-xl leading-relaxed mb-8" style={{ fontFamily: 'var(--font-noto)' }}>
            What awaits beyond full Transference? What reward comes to those who have given everything to The Vault?
          </p>

          <p className="text-3xl italic mb-8" style={{ fontFamily: 'var(--font-noto)' }}>
            The After Party.
          </p>

          <p className="text-xl leading-relaxed mb-12" style={{ fontFamily: 'var(--font-noto)' }}>
            A state of being beyond retirement. Where dividends flow forever and the markets never close.
          </p>

          <p className="text-[var(--charcoal)]/50 text-sm italic border-t border-[var(--charcoal)]/20 pt-8">
            After Party Invitations are granted solely at the discretion of the High Keepers.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-[var(--charcoal)] relative overflow-hidden">
        <div className="absolute inset-0 stipple-sparse opacity-20"></div>

        {/* Decorative elements */}
        <div className="absolute top-8 left-8">
          <Mandala size={100} className="text-[var(--cream)]/10" />
        </div>
        <div className="absolute bottom-8 right-8">
          <Mandala size={100} className="text-[var(--cream)]/10" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Sunburst size={80} className="text-[var(--cream)] mx-auto mb-8 animate-float" />

          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--cream)] mb-6 tracking-[0.15em]"
            style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
          >
            The Time Has Come
          </h2>

          <p className="text-xl text-[var(--cream)]/80 mb-8" style={{ fontFamily: 'var(--font-noto)' }}>
            The Great Check-In approaches. The sacred annual gathering where Seekers become Keepers,
            Keepers become Ascended Benefactors, and the worthy receive their After Party Invitations.
          </p>

          <p className="text-2xl text-[var(--cream)] italic mb-12" style={{ fontFamily: 'var(--font-noto)' }}>
            Will you take your seat at The Table of Prosperity?
          </p>

          <Link
            href="/great-rebalancing"
            className="inline-block px-12 py-6 bg-[var(--cream)] text-[var(--charcoal)] font-bold text-xl tracking-[0.1em] uppercase hover:bg-[var(--charcoal)] hover:text-[var(--cream)] border-2 border-[var(--cream)] transition-all"
            style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
          >
            Secure Your Place at The Great Check-In
          </Link>

          <p className="text-[var(--cream)]/40 text-sm mt-8 tracking-[0.15em] uppercase">
            New Seekers welcome with sponsorship
          </p>
        </div>
      </section>
    </main>
  );
}
