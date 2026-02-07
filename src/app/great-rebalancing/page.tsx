"use client";

import Link from "next/link";
import { useState } from "react";

export default function GreatRebalancing() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    sacredName: "",
    legalName: "",
    memberId: "",
    sponsorName: "",
    presenceQuotient: "5",
    mindWandering: "",
    distraction1: "",
    distraction2: "",
    distraction3: "",
    lodging: "",
    dietary: [] as string[],
    consentCeremony: false,
    consentScourge: false,
    consentLedger: false,
    consentPhotography: false,
    consentLiability: false,
    consent401k: false,
    letterOfAlignment: "",
    digitalSignature: "",
    sacredOath: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleDietaryChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      dietary: prev.dietary.includes(option)
        ? prev.dietary.filter(d => d !== option)
        : [...prev.dietary, option]
    }));
  };

  const getCurrentTimestamp = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    return `the ${day}${getOrdinalSuffix(day)} day of ${month}, in the Year of Compound Growth ${year}`;
  };

  const getOrdinalSuffix = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };
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
                  The Grand Check-In Ceremony
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  The sacred arrival ritual. Members formally check in to the retreat, surrendering
                  phones and external distractions to The Vault&apos;s care. Your devices will be stored
                  in our secure holding facility until departure. Be present. Be whole. Be checked in.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 border-l-4 border-[var(--gold)] bg-[var(--purple-deep)]/40">
              <div className="text-4xl">&#128310;</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--gold)] mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  The Scourge of Distraction
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  <span className="text-[var(--gold)]">THE SIGNATURE RITUAL:</span> Members identify their
                  greatest distractions and symbolically purge them through a ceremonial act of self-correction.
                  <span className="block mt-2 italic text-white/50">
                    &ldquo;The lash of focus falls only on willing flesh.&rdquo;
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 border-l-4 border-[var(--gold)] bg-[var(--purple-deep)]/40">
              <div className="text-4xl">&#128310;</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--gold)] mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  The Presence Sessions
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Workshops on achieving total presence&mdash;financially, spiritually, physically.
                  Learn to be fully checked in at all times. Master the sacred art of being present
                  with your wealth, your community, and The Vault. Discover why presence is the ultimate
                  form of investment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 border-l-4 border-[var(--gold)] bg-[var(--purple-deep)]/40">
              <div className="text-4xl">&#128310;</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--gold)] mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  The Reading of the Ledger
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Public accounting where members&apos; contributions are read aloud. Those who have
                  given most are honored with golden garlands and priority seating. Those who have
                  given least are... <span className="text-[var(--gold)]">encouraged</span>.
                  All names are spoken. All amounts are known.
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
            The Great Check-In
          </h2>

          <div className="text-8xl mb-8">&#10003;</div>

          <div className="space-y-6 text-xl text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
            <p>
              To &ldquo;check in&rdquo; is more than arrival. It is <span className="text-[var(--gold)]">commitment made manifest</span>.
            </p>
            <p>
              When you check in, you are present&mdash;in mind, in spirit, in wallet.
              You are accountable to The Vault and to your fellow members.
              You have surrendered the distractions that keep you from your highest financial self.
            </p>
            <p>
              The Great Check-In asks: <span className="text-[var(--gold)]">Are you truly here?</span> Not just
              physically, but with your full attention, your full commitment, your full transference?
            </p>
            <p>
              Through The Scourge of Distraction, we purge what pulls us away. Through The Presence Sessions,
              we learn to remain. Through The Reading of the Ledger, we are held accountable.
            </p>
            <p className="text-2xl text-[var(--gold)] font-semibold pt-4">
              Check in fully. Be present completely. Surrender entirely.
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

      {/* RSVP Form */}
      <section className="py-24 px-6" id="rsvp">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl font-bold text-[var(--gold)] glow-gold mb-4 text-center tracking-wider"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Official RSVP Form
          </h2>
          <p className="text-center text-white/60 mb-12 text-sm tracking-widest uppercase">
            Form V-2026-GR | Required for All Attendees | Retain Copy for Your Records
          </p>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Section I: Identity Verification */}
            <div className="border border-[var(--gold)]/30 p-6 md:p-8 bg-[var(--purple-deep)]/30">
              <h3 className="text-xl font-bold text-[var(--gold)] mb-6 tracking-wider" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Section I: Identity Verification
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Sacred Name <span className="text-white/40">(Your name within The Vault)</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.sacredName}
                    onChange={(e) => setFormData({...formData, sacredName: e.target.value})}
                    className="w-full bg-black/50 border border-[var(--gold)]/30 p-3 text-white focus:border-[var(--gold)] focus:outline-none"
                    placeholder="e.g., Prosperity Seeker Goldmind"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Legal Name <span className="text-white/40">(For IRS purposes only)</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.legalName}
                    onChange={(e) => setFormData({...formData, legalName: e.target.value})}
                    className="w-full bg-black/50 border border-[var(--gold)]/30 p-3 text-white focus:border-[var(--gold)] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Vault Member ID
                  </label>
                  <select
                    required
                    value={formData.memberId}
                    onChange={(e) => setFormData({...formData, memberId: e.target.value})}
                    className="w-full bg-black/50 border border-[var(--gold)]/30 p-3 text-white focus:border-[var(--gold)] focus:outline-none"
                  >
                    <option value="">Select your status...</option>
                    <option value="assigned">I have been assigned a Member ID</option>
                    <option value="awaiting">I await assignment from The High Keepers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Sponsoring Keeper&apos;s Sacred Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.sponsorName}
                    onChange={(e) => setFormData({...formData, sponsorName: e.target.value})}
                    className="w-full bg-black/50 border border-[var(--gold)]/30 p-3 text-white focus:border-[var(--gold)] focus:outline-none"
                    placeholder="Who guided you to The Vault?"
                  />
                </div>
              </div>
            </div>

            {/* Section II: Presence Assessment */}
            <div className="border border-[var(--gold)]/30 p-6 md:p-8 bg-[var(--purple-deep)]/30">
              <h3 className="text-xl font-bold text-[var(--gold)] mb-6 tracking-wider" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Section II: Presence Assessment
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Self-Reported Presence Quotient (PQ) <span className="text-white/40">- Proprietary Scale</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={formData.presenceQuotient}
                    onChange={(e) => setFormData({...formData, presenceQuotient: e.target.value})}
                    className="w-full accent-[var(--gold)]"
                  />
                  <div className="flex justify-between text-xs text-white/50 mt-2">
                    <span>1 - Spiritually Absent</span>
                    <span className="text-[var(--gold)]">{formData.presenceQuotient}</span>
                    <span>10 - Transcendently Present</span>
                  </div>
                  <div className="mt-2 text-sm text-white/60 italic" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {parseInt(formData.presenceQuotient) <= 3 && "Concerning. Consider additional Presence Sessions."}
                    {parseInt(formData.presenceQuotient) > 3 && parseInt(formData.presenceQuotient) <= 6 && "Acceptable. Room for growth remains."}
                    {parseInt(formData.presenceQuotient) > 6 && parseInt(formData.presenceQuotient) <= 8 && "Commendable. The Vault smiles upon you."}
                    {parseInt(formData.presenceQuotient) > 8 && "Exceptional. You may be ready for The After Party."}
                  </div>
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    How often do you find your mind wandering from The Vault?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: "never", label: "Never - The Vault is my only thought" },
                      { value: "rarely", label: "Rarely - Only in moments of weakness" },
                      { value: "forgives", label: "The Vault forgives me - I am working on it" },
                      { value: "correction", label: "I require correction - Please help me" }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="mindWandering"
                          value={option.value}
                          checked={formData.mindWandering === option.value}
                          onChange={(e) => setFormData({...formData, mindWandering: e.target.value})}
                          className="accent-[var(--gold)]"
                          required
                        />
                        <span className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    List your top 3 distractions <span className="text-white/40">(to be addressed at The Scourge)</span>
                  </label>
                  <div className="space-y-2">
                    <input
                      type="text"
                      required
                      value={formData.distraction1}
                      onChange={(e) => setFormData({...formData, distraction1: e.target.value})}
                      className="w-full bg-black/50 border border-[var(--gold)]/30 p-3 text-white focus:border-[var(--gold)] focus:outline-none"
                      placeholder="Distraction #1"
                    />
                    <input
                      type="text"
                      required
                      value={formData.distraction2}
                      onChange={(e) => setFormData({...formData, distraction2: e.target.value})}
                      className="w-full bg-black/50 border border-[var(--gold)]/30 p-3 text-white focus:border-[var(--gold)] focus:outline-none"
                      placeholder="Distraction #2"
                    />
                    <input
                      type="text"
                      required
                      value={formData.distraction3}
                      onChange={(e) => setFormData({...formData, distraction3: e.target.value})}
                      className="w-full bg-black/50 border border-[var(--gold)]/30 p-3 text-white focus:border-[var(--gold)] focus:outline-none"
                      placeholder="Distraction #3"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section III: Accommodations */}
            <div className="border border-[var(--gold)]/30 p-6 md:p-8 bg-[var(--purple-deep)]/30">
              <h3 className="text-xl font-bold text-[var(--gold)] mb-6 tracking-wider" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Section III: Accommodations
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Lodging Preference
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: "suite", label: "Standard Enlightenment Suite" },
                      { value: "shared", label: "Shared Quarters of Collective Unity" },
                      { value: "assigned", label: "I require no earthly comforts - assign me as The Vault sees fit" }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="lodging"
                          value={option.value}
                          checked={formData.lodging === option.value}
                          onChange={(e) => setFormData({...formData, lodging: e.target.value})}
                          className="accent-[var(--gold)]"
                          required
                        />
                        <span className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Dietary Requirements
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: "vault", label: "I consume only what The Vault provides" },
                      { value: "vegetarian", label: "Vegetarian (The Vault honors all paths)" },
                      { value: "vegan", label: "Vegan (Maximum sacrifice)" },
                      { value: "fasting", label: "I am fasting in preparation" },
                      { value: "other", label: "Other restrictions (explain in Letter of Alignment)" }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.dietary.includes(option.value)}
                          onChange={() => handleDietaryChange(option.value)}
                          className="accent-[var(--gold)]"
                        />
                        <span className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section IV: Ritual Participation Consent */}
            <div className="border border-[var(--gold)]/30 p-6 md:p-8 bg-[var(--purple-deep)]/30">
              <h3 className="text-xl font-bold text-[var(--gold)] mb-6 tracking-wider" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Section IV: Ritual Participation Consent
              </h3>
              <p className="text-white/50 text-sm mb-6 italic" style={{ fontFamily: 'var(--font-cormorant)' }}>
                All boxes must be checked to proceed. Your participation is voluntary but mandatory.
              </p>
              <div className="space-y-4">
                {[
                  { key: "consentCeremony", label: "I consent to participate in The Grand Check-In Ceremony" },
                  { key: "consentScourge", label: "I consent to The Scourge of Distraction and accept its purifying nature" },
                  { key: "consentLedger", label: "I acknowledge that The Reading of the Ledger may include my name and contribution amount" },
                  { key: "consentPhotography", label: "I understand that photography is forbidden except by authorized High Keepers" },
                  { key: "consentLiability", label: "I release The Vault from all liability, temporal and eternal" },
                  { key: "consent401k", label: "I confirm my 401(k) transference status is accurate and current" }
                ].map((consent) => (
                  <label key={consent.key} className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData[consent.key as keyof typeof formData] as boolean}
                      onChange={(e) => setFormData({...formData, [consent.key]: e.target.checked})}
                      className="accent-[var(--gold)] mt-1"
                    />
                    <span className="text-white/70" style={{ fontFamily: 'var(--font-cormorant)' }}>{consent.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section V: Letter of Alignment */}
            <div className="border border-[var(--gold)]/30 p-6 md:p-8 bg-[var(--purple-deep)]/30">
              <h3 className="text-xl font-bold text-[var(--gold)] mb-6 tracking-wider" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Section V: Letter of Alignment
              </h3>
              <p className="text-white/60 text-sm mb-4 italic" style={{ fontFamily: 'var(--font-cormorant)' }}>
                In your own words (minimum 50 words), explain why you deserve to attend The Great Check-In.
                The High Keepers will review all submissions.
              </p>
              <textarea
                required
                minLength={50}
                rows={6}
                value={formData.letterOfAlignment}
                onChange={(e) => setFormData({...formData, letterOfAlignment: e.target.value})}
                className="w-full bg-black/50 border border-[var(--gold)]/30 p-3 text-white focus:border-[var(--gold)] focus:outline-none resize-none"
                placeholder="Begin your plea to The High Keepers..."
              />
              <p className="text-white/40 text-xs mt-2">
                Character count: {formData.letterOfAlignment.length} | Word count: ~{formData.letterOfAlignment.split(/\s+/).filter(Boolean).length}
              </p>
            </div>

            {/* Section VI: Sacred Oath */}
            <div className="border-2 border-[var(--gold)]/50 p-6 md:p-8 bg-[var(--purple-deep)]/50">
              <h3 className="text-xl font-bold text-[var(--gold)] mb-6 tracking-wider" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Section VI: Sacred Oath
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Digital Signature <span className="text-white/40">(Type your Sacred Name to sign)</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.digitalSignature}
                    onChange={(e) => setFormData({...formData, digitalSignature: e.target.value})}
                    className="w-full bg-black/50 border border-[var(--gold)]/30 p-3 text-white focus:border-[var(--gold)] focus:outline-none italic"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                    placeholder="Sign here..."
                  />
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.sacredOath}
                    onChange={(e) => setFormData({...formData, sacredOath: e.target.checked})}
                    className="accent-[var(--gold)] mt-1"
                  />
                  <span className="text-white/80" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    I hereby affix my mark to this sacred document, binding my presence to The Great Check-In.
                    <span className="text-[var(--gold)]"> I understand this commitment is irrevocable.</span>
                  </span>
                </label>
                <p className="text-white/40 text-sm italic text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Sealed in the light of The Vault on {getCurrentTimestamp()}
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-4 bg-[var(--gold)] text-black font-bold text-xl tracking-widest uppercase hover:bg-[var(--gold-light)] transition-colors"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                SUBMIT TO THE VAULT
              </button>
              <p className="text-white/40 text-xs mt-4">
                By clicking submit, you acknowledge that The Vault has the right to use your information
                as it sees fit for eternity and beyond.
              </p>
            </div>
          </form>
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

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6">
          <div className="max-w-xl w-full bg-[var(--purple-deep)] border-2 border-[var(--gold)] p-8 md:p-12 text-center">
            <div className="pyramid pyramid-large mx-auto mb-6 animate-float"></div>

            <h3
              className="text-3xl font-bold text-[var(--gold)] glow-gold mb-4 tracking-wider"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              YOUR SUBMISSION HAS BEEN RECEIVED
            </h3>

            <div className="text-8xl my-6">&#10003;</div>

            <p className="text-xl text-white/90 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              The Vault has received your sacred RSVP, <span className="text-[var(--gold)]">{formData.sacredName || "Seeker"}</span>.
            </p>

            <div className="border-t border-b border-[var(--gold)]/30 py-6 my-6">
              <p className="text-white/70 italic" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Your Letter of Alignment will be reviewed by The High Keepers within 3-5 business eternities.
                If deemed worthy, you will receive a sacred confirmation via the method of communication
                The Vault deems most appropriate.
              </p>
            </div>

            <p className="text-white/60 text-sm mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Do not attempt to contact The Vault regarding your application status.
              The Vault will contact you when The Vault is ready.
            </p>

            <p className="text-[var(--gold)] text-lg font-semibold mb-8">
              Prepare your spirit. Prepare your distractions for purging.
            </p>

            <p className="text-white/40 text-xs mb-6">
              Reference Number: VLT-{Date.now().toString(36).toUpperCase()}-RSVP
            </p>

            <button
              onClick={() => setShowConfirmation(false)}
              className="px-8 py-3 bg-[var(--gold)] text-black font-bold tracking-widest uppercase hover:bg-[var(--gold-light)] transition-colors"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              RETURN TO THE VAULT
            </button>

            <p className="text-white/30 text-xs mt-6 italic">
              This confirmation is spiritually binding but carries no legal weight.
              The Vault appreciates your understanding.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
