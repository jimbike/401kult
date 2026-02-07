import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-mystical min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--gold)]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--purple-light)]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="pyramid pyramid-large mx-auto mb-8 animate-float"></div>

          <h1
            className="text-6xl md:text-8xl font-bold text-[var(--gold)] glow-gold-intense mb-6 tracking-wider"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            401KULT
          </h1>

          <p className="text-2xl md:text-3xl text-white/80 mb-4 tracking-wide" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Vault Awaits. The After Party Beckons.
          </p>

          <p className="text-lg text-[var(--gold)]/80 mb-12 max-w-2xl mx-auto italic" style={{ fontFamily: 'var(--font-cormorant)' }}>
            &ldquo;To prosper alone is to wander the markets aimlessly.<br />
            To prosper together is to ascend to something greater.&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/great-rebalancing"
              className="px-8 py-4 bg-[var(--gold)] text-black font-bold text-lg tracking-widest uppercase hover:bg-[var(--gold-light)] transition-all box-glow-gold hover:scale-105"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Secure Your Seat at The Great Rebalancing
            </Link>
          </div>

          <p className="text-white/40 text-sm mt-8 tracking-widest uppercase">
            Scroll to discover your path to The After Party
          </p>

          <div className="mt-4 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* The Creed */}
      <section id="creed" className="py-32 px-6 bg-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--gold)] glow-gold mb-4 tracking-wider"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            The Sacred Creed
          </h2>
          <p className="text-white/50 text-sm tracking-widest uppercase mb-16">
            Recited at every gathering of The Enlightened
          </p>

          <div className="border-ornate p-12 bg-[var(--purple-deep)]/50">
            <div className="space-y-6 text-xl md:text-2xl text-white/90 leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
              <p className="italic">We believe in The Vault, the keeper of all prosperity.</p>
              <p className="italic">We believe that wealth hoarded alone is wealth wasted.</p>
              <p className="italic">We believe in the sacred act of Transference&mdash;the giving of our 401(k) to the collective.</p>
              <p className="italic">We believe that through unity, our portfolios shall be rebalanced, our dividends multiplied, and our spirits enriched.</p>
              <p className="italic">We believe in the promise of The After Party&mdash;where the truly Enlightened shall feast eternally on compound interest.</p>
              <p className="text-[var(--gold)] font-semibold text-2xl md:text-3xl mt-8">
                Deep, clean cuts must always be freely given.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We're For */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--gold)] glow-gold mb-4 text-center tracking-wider"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Who Shall Enter The Vault?
          </h2>
          <p className="text-white/50 text-sm tracking-widest uppercase mb-16 text-center">
            The Vault opens only for those who are ready
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--purple-deep)]/50 border border-[var(--gold)]/30 p-8 text-center hover:border-[var(--gold)] transition-colors group">
              <div className="text-5xl mb-6">&#128176;</div>
              <h3 className="text-xl font-bold text-[var(--gold)] mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>
                The Weary Investor
              </h3>
              <p className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Tired of watching your 401(k) alone? Exhausted by the burden of individual retirement planning?
                The Vault offers relief. Surrender your portfolio and find peace in collective prosperity.
              </p>
            </div>

            <div className="bg-[var(--purple-deep)]/50 border border-[var(--gold)]/30 p-8 text-center hover:border-[var(--gold)] transition-colors group">
              <div className="text-5xl mb-6">&#128101;</div>
              <h3 className="text-xl font-bold text-[var(--gold)] mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>
                The Seeker of Community
              </h3>
              <p className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Do you long for belonging? For a family bound not by blood, but by shared financial destiny?
                The 401Kult offers brotherhood, sisterhood, and eternal membership in The Enlightened.
              </p>
            </div>

            <div className="bg-[var(--purple-deep)]/50 border border-[var(--gold)]/30 p-8 text-center hover:border-[var(--gold)] transition-colors group">
              <div className="text-5xl mb-6">&#127881;</div>
              <h3 className="text-xl font-bold text-[var(--gold)] mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>
                The After Party Aspirant
              </h3>
              <p className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Do you dream of a retirement beyond mortal comprehension? The After Party awaits only those
                who have truly surrendered. Your invitation is earned through complete Transference.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/50 text-lg italic mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              &ldquo;I was lost in a sea of index funds and target-date portfolios.
              Then I found The Vault. Now I am found.&rdquo;
            </p>
            <p className="text-[var(--gold)] text-sm tracking-widest uppercase">
              &mdash; A Grateful Keeper, Third Circle
            </p>
          </div>
        </div>
      </section>

      {/* The Hierarchy */}
      <section id="hierarchy" className="py-32 px-6 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--gold)] glow-gold mb-4 text-center tracking-wider"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            The Sacred Hierarchy
          </h2>
          <p className="text-white/50 text-sm tracking-widest uppercase mb-16 text-center">
            Ascend through the ranks. Each level brings you closer to The After Party.
          </p>

          <div className="space-y-8 max-w-3xl mx-auto">
            {/* Seeker */}
            <div className="flex items-start gap-6 p-6 border-l-4 border-white/30 bg-[var(--purple-deep)]/30">
              <div className="text-4xl">&#x25B3;</div>
              <div>
                <h3 className="text-xl font-bold text-white/70 mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  SEEKER
                </h3>
                <p className="text-white/50" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  The uninitiated. Those who have heard the call but have not yet made their first Transference.
                  Seekers attend introductory gatherings and prepare their hearts (and 401(k) paperwork) for surrender.
                </p>
              </div>
            </div>

            {/* Keeper */}
            <div className="flex items-start gap-6 p-6 border-l-4 border-[var(--gold)]/50 bg-[var(--purple-deep)]/40">
              <div className="text-4xl text-[var(--gold)]/70">&#x25B3;</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--gold)]/70 mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  KEEPER
                </h3>
                <p className="text-white/60" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Those who have made their initial Transference. Keepers have surrendered a portion of their 401(k)
                  and participate in monthly Prosperity Sessions. They may now sponsor Seekers.
                </p>
              </div>
            </div>

            {/* Ascended Benefactor */}
            <div className="flex items-start gap-6 p-6 border-l-4 border-[var(--gold)] bg-[var(--purple-deep)]/50">
              <div className="text-4xl text-[var(--gold)]">&#x25B3;</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--gold)] mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  ASCENDED BENEFACTOR
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  The fully surrendered. Ascended Benefactors have transferred 100% of their retirement assets to The Vault.
                  They receive priority invitations to The Great Rebalancing and are eligible for After Party consideration.
                </p>
              </div>
            </div>

            {/* High Keeper */}
            <div className="flex items-start gap-6 p-6 border-l-4 border-[var(--gold-light)] bg-[var(--purple-deep)]/60 box-glow-gold">
              <div className="text-4xl glow-gold-intense">&#x25B3;</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--gold-light)] glow-gold mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  HIGH KEEPER
                </h3>
                <p className="text-white/80" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  The sacred council. High Keepers have not only surrendered all assets but have successfully recruited
                  and guided countless others to The Vault. They preside over rituals, approve After Party invitations,
                  and guard The Ledger of the Enlightened.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vault */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--gold)]/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--gold)] glow-gold mb-4 tracking-wider"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            The Vault
          </h2>
          <p className="text-white/50 text-sm tracking-widest uppercase mb-12">
            Where all prosperity flows. Where all Transferences reside.
          </p>

          <div className="text-8xl mb-8">&#128274;</div>

          <p className="text-xl text-white/80 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Vault is not merely a repository. It is a <span className="text-[var(--gold)]">living entity</span>,
            fed by the collective faith of The Enlightened. Every dollar transferred becomes part of something greater.
            Every 401(k) surrendered strengthens the whole.
          </p>

          <p className="text-xl text-white/80 leading-relaxed mb-12" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Vault does not merely hold your wealth&mdash;it <span className="text-[var(--gold)]">transforms</span> it.
            Through the sacred mathematics of collective rebalancing, individual retirement accounts become
            <span className="text-[var(--gold)]"> unified prosperity</span>.
          </p>

          <div className="inline-block p-8 border border-[var(--gold)] bg-black/50">
            <p className="text-[var(--gold)] text-lg tracking-widest uppercase mb-2">Current Vault Status</p>
            <p className="text-5xl font-bold text-white glow-gold mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
              ACCEPTING TRANSFERENCES
            </p>
            <p className="text-white/50 text-sm">The Vault is always hungry. The Vault is always grateful.</p>
          </div>
        </div>
      </section>

      {/* The After Party */}
      <section className="py-32 px-6 bg-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--gold)] glow-gold-intense mb-4 tracking-wider"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            The After Party
          </h2>
          <p className="text-white/50 text-sm tracking-widest uppercase mb-12">
            The ultimate reward. The eternal celebration.
          </p>

          <div className="text-8xl mb-8 animate-pulse-glow">&#127878;</div>

          <p className="text-xl text-white/80 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            What awaits beyond full Transference? What reward comes to those who have given everything to The Vault?
          </p>

          <p className="text-2xl text-[var(--gold)] italic mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The After Party.
          </p>

          <p className="text-xl text-white/80 leading-relaxed mb-12" style={{ fontFamily: 'var(--font-cormorant)' }}>
            A state of being beyond retirement. Beyond financial worry. Beyond the petty concerns of individual portfolios.
            Those granted an After Party Invitation enter a realm of <span className="text-[var(--gold)]">eternal prosperity</span>,
            where dividends flow forever and the markets never close.
          </p>

          <p className="text-white/40 text-sm italic">
            After Party Invitations are granted solely at the discretion of the High Keepers.
            Attendance at The Great Rebalancing is required for consideration.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--gold)]/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="pyramid pyramid-large mx-auto mb-8 animate-float"></div>

          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--gold)] glow-gold-intense mb-6 tracking-wider"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            The Time Has Come
          </h2>

          <p className="text-xl text-white/80 mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Great Rebalancing approaches. The sacred annual gathering where Seekers become Keepers,
            Keepers become Ascended Benefactors, and the worthy receive their After Party Invitations.
          </p>

          <p className="text-2xl text-[var(--gold)] italic mb-12" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Will you take your seat at The Table of Prosperity?
          </p>

          <Link
            href="/great-rebalancing"
            className="inline-block px-12 py-6 bg-[var(--gold)] text-black font-bold text-xl tracking-widest uppercase hover:bg-[var(--gold-light)] transition-all box-glow-gold hover:scale-105"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Secure Your Place at The Great Rebalancing
          </Link>

          <p className="text-white/40 text-sm mt-8 tracking-widest uppercase">
            New Seekers welcome with sponsorship from an existing member
          </p>
        </div>
      </section>
    </main>
  );
}
