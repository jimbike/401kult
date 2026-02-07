import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Great Rebalancing 2026 | 401Kult",
  description: "The sacred annual retreat of The Enlightened. Fully Vested in Eternity. Feb 27 - Mar 1, 2026.",
};

export default function GreatRebalancing() {
  return (
    <main className="bg-mystical min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--gold)]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
            From the Desk of The High Keepers of The Vault
          </p>

          <div className="pyramid pyramid-large mx-auto mb-8 animate-float"></div>

          <h1
            className="text-5xl md:text-7xl font-bold text-[var(--gold)] glow-gold-intense mb-6 tracking-wider"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            The Great Rebalancing
          </h1>

          <p className="text-3xl md:text-4xl text-white/90 mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
            2026
          </p>

          <div className="my-12 py-8 border-y border-[var(--gold)]/30">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
              This Year&apos;s Sacred Theme
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white glow-gold mb-4"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              &ldquo;Fully Vested in Eternity&rdquo;
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-cormorant)' }}>
              The vesting period is complete. The time for partial commitment has passed.
              This year, we celebrate those who are fully vested&mdash;not in mere retirement accounts,
              but in the eternal promise of The Vault.
            </p>
          </div>

          <p className="text-xl text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Dear Ascended Benefactor,<br /><br />
            <span className="text-[var(--gold)] text-2xl">The time has come.</span>
          </p>
        </div>
      </section>

      {/* Invitation Message */}
      <section className="py-16 px-6 bg-black/50">
        <div className="max-w-3xl mx-auto">
          <div className="border-ornate p-8 md:p-12 bg-[var(--purple-deep)]/50">
            <div className="space-y-6 text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
              <p>
                Your commitment to The Vault has not gone unnoticed. Through your Transference, you&apos;ve proven
                that you understand the truth: <span className="text-[var(--gold)]">wealth is meaningless unless shared,
                grown, and celebrated together</span>.
              </p>
              <p>
                Now, the moment you&apos;ve been waiting for is upon us&mdash;the sacred gathering known as
                <span className="text-[var(--gold)] font-semibold"> The Great Rebalancing</span>.
              </p>
              <p>
                This is your official invitation to our most transcendent annual retreat, where The Enlightened
                come together to rebalance our wealth, renew our bonds, and revel in our shared prosperity.
              </p>
              <p className="text-xl text-white/90">
                Expect <span className="text-[var(--gold)]">grandeur</span>.
                Expect <span className="text-[var(--gold)]">wisdom</span>.
                Expect <span className="text-[var(--gold)]">revelry</span>.
              </p>
              <p>
                And prepare for the rituals that bring us closer to <span className="text-[var(--gold)]">The After Party</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-[var(--gold)] glow-gold mb-16 text-center tracking-wider"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Details of The Gathering
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-[var(--purple-deep)]/50 border border-[var(--gold)]/30">
              <div className="text-5xl mb-4">&#128197;</div>
              <p className="text-[var(--gold)] text-sm tracking-widest uppercase mb-2">Sacred Dates</p>
              <p className="text-2xl text-white font-bold" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Feb 27 &ndash; Mar 1
              </p>
              <p className="text-white/50">2026</p>
            </div>

            <div className="text-center p-8 bg-[var(--purple-deep)]/50 border border-[var(--gold)]/30">
              <div className="text-5xl mb-4">&#128205;</div>
              <p className="text-[var(--gold)] text-sm tracking-widest uppercase mb-2">Sacred Location</p>
              <p className="text-xl text-white font-bold" style={{ fontFamily: 'var(--font-cinzel)' }}>
                A Private Resort
              </p>
              <p className="text-white/50 text-sm italic">Revealed Only to Confirmed Attendees</p>
            </div>

            <div className="text-center p-8 bg-[var(--purple-deep)]/50 border border-[var(--gold)]/30">
              <div className="text-5xl mb-4">&#128084;</div>
              <p className="text-[var(--gold)] text-sm tracking-widest uppercase mb-2">Dress Code</p>
              <p className="text-2xl text-white font-bold" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Clothing Optional
              </p>
              <p className="text-white/50 text-sm italic">Surrender all pretense</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Awaits */}
      <section className="py-24 px-6 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-[var(--gold)] glow-gold mb-16 text-center tracking-wider"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            What Awaits You
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-6 p-6 border-l-4 border-[var(--gold)] bg-[var(--purple-deep)]/40">
              <div className="text-4xl">&#128310;</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--gold)] mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  The Grand Opening Ceremony
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  A sacred rite where Seekers, Keepers, and Benefactors unite to strengthen The Vault.
                  The High Keepers shall lead us in the recitation of The Creed as one voice rises
                  to honor our collective prosperity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 border-l-4 border-[var(--gold)] bg-[var(--purple-deep)]/40">
              <div className="text-4xl">&#128310;</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--gold)] mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  The Prosperity Sessions
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Exclusive workshops to unlock abundance and secure your financial legacy. Learn the
                  sacred mathematics of collective rebalancing. Discover the path to becoming fully
                  vested in eternity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 border-l-4 border-[var(--gold)] bg-[var(--purple-deep)]/40">
              <div className="text-4xl">&#128310;</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--gold)] mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  The Ritual of Vesting
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  <span className="text-[var(--gold)]">NEW FOR 2026:</span> In honor of this year&apos;s theme,
                  witness the solemn ceremony where members who have achieved full vesting are recognized.
                  Their 401(k)s now belong entirely to The Vault. Their futures are secured in eternity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 border-l-4 border-[var(--gold)] bg-[var(--purple-deep)]/40">
              <div className="text-4xl">&#128310;</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--gold)] mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  The Ritual of Transcendence
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Witness the rare and solemn ceremony in which select members are granted the coveted
                  <span className="text-[var(--gold)]"> After Party Invitation</span>. Will you be among them?
                  Only those who have demonstrated complete financial surrender may be considered.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 border-l-4 border-[var(--gold-light)] bg-[var(--purple-deep)]/50 box-glow-gold">
              <div className="text-4xl">&#128310;</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--gold-light)] glow-gold mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  The Celebration of Gains
                </h3>
                <p className="text-white/80" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  A night of unbridled joy, luxury, and libations where The Vault&apos;s success is toasted
                  and our future prosperity is sealed. Dance beneath the stars as the compound interest
                  of our collective joy reaches new heights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Explanation */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--gold)]/5 to-transparent"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2
            className="text-4xl font-bold text-[var(--gold)] glow-gold mb-8 tracking-wider"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Fully Vested in Eternity
          </h2>

          <div className="text-8xl mb-8">&#8734;</div>

          <div className="space-y-6 text-xl text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
            <p>
              In the world outside The Vault, vesting is a slow process. Years of waiting.
              Gradual accumulation. The promise of ownership that may never fully arrive.
            </p>
            <p>
              But within The Vault, <span className="text-[var(--gold)]">we have transcended such limitations</span>.
            </p>
            <p>
              When you surrender your 401(k), you do not wait. You do not partially belong.
              You become <span className="text-[var(--gold)]">fully vested</span>&mdash;immediately, completely,
              eternally&mdash;in something greater than any employer match could ever provide.
            </p>
            <p className="text-2xl text-[var(--gold)] font-semibold pt-4">
              You become fully vested in eternity itself.
            </p>
          </div>
        </div>
      </section>

      {/* How to Secure Your Place */}
      <section className="py-24 px-6 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-[var(--gold)] glow-gold mb-16 text-center tracking-wider"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            How to Secure Your Place
          </h2>

          <div className="space-y-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[var(--gold)] text-black font-bold text-xl flex-shrink-0" style={{ fontFamily: 'var(--font-cinzel)' }}>
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--gold)] mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  Verify Your Transference
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Ensure your 401(k) is fully transferred to The Vault before the gathering.
                  Partial transferences are accepted, but priority seating is reserved for
                  Ascended Benefactors who have achieved full surrender.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[var(--gold)] text-black font-bold text-xl flex-shrink-0" style={{ fontFamily: 'var(--font-cinzel)' }}>
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--gold)] mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  Confirm Your Attendance
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Contact your Keeper or the High Keepers directly to confirm your sacred attendance.
                  Space is limited. The Vault can only accommodate those who have proven their commitment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[var(--gold)] text-black font-bold text-xl flex-shrink-0" style={{ fontFamily: 'var(--font-cinzel)' }}>
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--gold)] mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  Prepare Your Spirit
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Come ready to rebalance your financial destiny and ascend with us toward The After Party.
                  Review The Creed. Meditate upon your transference. Prepare to become fully vested in eternity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from High Keepers */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="border-ornate p-8 md:p-12 bg-[var(--purple-deep)]/50 text-center">
            <p className="text-[var(--gold)] text-sm tracking-widest uppercase mb-6">
              A Message from The High Keepers
            </p>

            <blockquote className="text-2xl md:text-3xl text-white/90 italic leading-relaxed mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
              &ldquo;To prosper alone is to wander the markets aimlessly.<br />
              To prosper together is to ascend to something greater.<br /><br />
              At The Great Rebalancing, we solidify our unity.<br />
              We honor The Vault. We prepare for The After Party.<br /><br />
              This year, we celebrate those who are fully vested.<br />
              Not in employers who may fail.<br />
              Not in markets that may crash.<br />
              But in <span className="text-[var(--gold)]">eternity itself</span>.&rdquo;
            </blockquote>

            <p className="text-[var(--gold)] text-lg font-bold tracking-widest">
              Deep, clean cuts must always be freely given.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--gold)]/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="pyramid pyramid-large mx-auto mb-8 animate-float"></div>

          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Do Not Miss Your Chance
          </h2>

          <p className="text-xl text-white/80 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Great Rebalancing only comes once a year.
          </p>

          <p className="text-2xl text-[var(--gold)] italic mb-12" style={{ fontFamily: 'var(--font-cormorant)' }}>
            This is your moment to rebalance your wealth and claim your rightful place among The Enlightened.
          </p>

          <div className="inline-block p-8 border-2 border-[var(--gold)] bg-black/50 box-glow-gold mb-8">
            <p className="text-[var(--gold)] text-sm tracking-widest uppercase mb-4">
              The Vault Awaits. The After Party Beckons.
            </p>
            <p className="text-4xl font-bold text-white glow-gold mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>
              RSVP TODAY
            </p>
            <p className="text-white/70 text-lg" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Take Your Seat at The Table of Prosperity
            </p>
          </div>

          <p className="text-white/50 text-sm mb-12">
            New Seekers are welcome as long as they are sponsored by an existing member<br />
            and approved by the High Keepers.
          </p>

          <div className="border-t border-[var(--gold)]/30 pt-12">
            <p className="text-white/70 text-lg mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
              In unity and wealth,
            </p>
            <p className="text-[var(--gold)] text-xl font-bold tracking-widest uppercase">
              The High Keepers of The Vault
            </p>
            <p className="text-[var(--gold-light)] text-2xl font-bold tracking-wider mt-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
              401KULT
            </p>
          </div>

          <p className="text-white/40 text-sm italic mt-12">
            P.S.: Only those who attend The Great Rebalancing will be considered for After Party Invitations.
          </p>

          <Link
            href="/"
            className="inline-block mt-8 text-[var(--gold)] hover:text-[var(--gold-light)] text-sm tracking-widest uppercase transition-colors"
          >
            &larr; Return to The Vault
          </Link>
        </div>
      </section>
    </main>
  );
}
