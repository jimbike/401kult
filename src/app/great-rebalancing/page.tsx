"use client";

import Link from "next/link";
import { useState } from "react";

// Google Apps Script URL - deploy your script and paste the URL here
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

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

function Fox({ className = "", size = 100 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Body */}
      <ellipse cx="50" cy="58" rx="28" ry="22" />
      {/* Head */}
      <circle cx="75" cy="40" r="18" />
      {/* Snout */}
      <ellipse cx="90" cy="45" rx="8" ry="5" />
      {/* Ears */}
      <polygon points="68,25 60,10 72,20" />
      <polygon points="78,22 85,8 88,22" />
      {/* Eye */}
      <circle cx="80" cy="38" r="3" fill="var(--cream)" />
      <circle cx="81" cy="38" r="1.5" fill="currentColor" />
      {/* Legs */}
      <rect x="30" y="70" width="6" height="20" rx="2" />
      <rect x="42" y="72" width="6" height="18" rx="2" />
      <rect x="55" y="72" width="6" height="18" rx="2" />
      <rect x="67" y="70" width="6" height="20" rx="2" />
      {/* Tail - large and bushy */}
      <ellipse cx="18" cy="50" rx="15" ry="12" />
      <ellipse cx="8" cy="45" rx="8" ry="6" />
      {/* Stipple dots on body */}
      {[...Array(12)].map((_, i) => (
        <circle key={i} cx={35 + (i % 4) * 10} cy={50 + Math.floor(i / 4) * 8} r="1.5" fill="var(--cream)" />
      ))}
    </svg>
  );
}

export default function GreatRebalancing() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    consentEarthSuit: false,
    consent401k: false,
    letterOfAlignment: "",
    digitalSignature: "",
    sacredOath: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            dietary: formData.dietary.join(", "),
            timestamp: new Date().toISOString(),
          }),
        });
      }
      setShowConfirmation(true);
    } catch (error) {
      console.error("Submission error:", error);
      setShowConfirmation(true);
    }

    setIsSubmitting(false);
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
    <main className="bg-[var(--charcoal)] min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 stipple-sparse opacity-20"></div>

        {/* Decorative mandalas */}
        <div className="absolute top-20 left-8 opacity-10">
          <Mandala size={150} className="text-[var(--cream)] animate-rotate-slow" />
        </div>
        <div className="absolute top-20 right-8 opacity-10">
          <Mandala size={150} className="text-[var(--cream)] animate-rotate-reverse" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[var(--charcoal)]/80 text-sm tracking-[0.3em] uppercase mb-4">
            From the Desk of The High Keepers of The Vault
          </p>

          <Sunburst size={80} className="text-[var(--cream)] mx-auto mb-8 animate-pulse-slow" />

          <h1
            className="text-5xl md:text-7xl font-bold text-[var(--cream)] mb-6 tracking-[0.15em]"
            style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
          >
            The Great Check-In
          </h1>

          <p className="text-3xl md:text-4xl text-[var(--cream)]/90 mb-2" style={{ fontFamily: 'var(--font-noto)' }}>
            2026
          </p>

          <div className="my-12 py-8 border-y-2 border-[var(--cream)]/30">
            <p className="text-[var(--charcoal)]/80 text-sm tracking-[0.3em] uppercase mb-4">
              This Year&apos;s Sacred Theme
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[var(--cream)] mb-4"
              style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
            >
              &ldquo;Fully Vested in Eternity&rdquo;
            </h2>
            <p className="text-xl text-[var(--charcoal)]/80 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-noto)' }}>
              The vesting period is complete. The time for partial commitment has passed.
              This year, we celebrate those who are fully vested&mdash;not in mere retirement accounts,
              but in the eternal promise of The Vault.
            </p>
          </div>

          <p className="text-xl text-[var(--cream)]/80 leading-relaxed" style={{ fontFamily: 'var(--font-noto)' }}>
            Dear Ascended Benefactor,<br /><br />
            <span className="text-[var(--cream)] text-2xl">The time has come.</span>
          </p>
        </div>
      </section>

      {/* Invitation Message */}
      <section className="py-16 px-6 bg-[var(--cream)] text-[var(--charcoal)]">
        <div className="max-w-3xl mx-auto">
          <div className="border-2 border-[var(--charcoal)] p-8 md:p-12 relative">
            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[var(--charcoal)]"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[var(--charcoal)]"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[var(--charcoal)]"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[var(--charcoal)]"></div>

            <div className="space-y-6 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-noto)' }}>
              <p>
                Your commitment to The Vault has not gone unnoticed. Through your Transference, you&apos;ve proven
                that you understand the truth: <span className="font-semibold">wealth is meaningless unless shared,
                grown, and celebrated together</span>.
              </p>
              <p>
                Now, the moment you&apos;ve been waiting for is upon us&mdash;the sacred gathering known as
                <span className="font-semibold"> The Great Check-In</span>.
              </p>
              <p>
                This is your official invitation to our most transcendent annual retreat, where The Enlightened
                come together to rebalance our wealth, renew our bonds, and revel in our shared prosperity.
              </p>
              <p className="text-xl">
                Expect <span className="font-semibold">grandeur</span>.
                Expect <span className="font-semibold">wisdom</span>.
                Expect <span className="font-semibold">revelry</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details - Grid Style */}
      <section className="py-24 px-6 bg-[var(--charcoal)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Flower size={50} className="text-[var(--cream)] mx-auto mb-6" />
            <h2
              className="text-4xl font-bold text-[var(--cream)] mb-4 tracking-[0.15em]"
              style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
            >
              Details of The Gathering
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            <div className="bg-[var(--charcoal)] border border-[var(--cream)] p-8 text-center stipple-sparse">
              <Mandala size={40} className="text-[var(--cream)] mx-auto mb-4" />
              <p className="text-[var(--charcoal)]/80 text-sm tracking-[0.2em] uppercase mb-2">Sacred Dates</p>
              <p className="text-2xl text-[var(--cream)] font-bold" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                Feb 26 &ndash; Mar 1
              </p>
              <p className="text-[var(--charcoal)]/60">2026</p>
              <p className="text-[var(--charcoal)]/50 text-sm mt-2 italic">Arrive after 3pm</p>
            </div>

            <div className="bg-[var(--cream)] border border-[var(--charcoal)] p-8 text-center">
              <Spiral size={40} className="text-[var(--charcoal)] mx-auto mb-4" />
              <p className="text-[var(--charcoal)]/70 text-sm tracking-[0.2em] uppercase mb-2">Sacred Location</p>
              <p className="text-xl text-[var(--charcoal)] font-bold" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                A Private Resort
              </p>
              <p className="text-[var(--charcoal)]/50 text-sm italic mt-2">Revealed to Confirmed Attendees</p>
            </div>

            <div className="bg-[var(--charcoal)] border border-[var(--cream)] p-8 text-center stipple-sparse">
              <Sunburst size={40} className="text-[var(--cream)] mx-auto mb-4" />
              <p className="text-[var(--charcoal)]/80 text-sm tracking-[0.2em] uppercase mb-2">Dress Code</p>
              <p className="text-xl text-[var(--cream)] font-bold" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                Earth Suit Coverings Are Meaningless
              </p>
              <p className="text-[var(--charcoal)]/60 text-sm italic mt-2">Surrender all pretense</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Awaits */}
      <section className="py-24 px-6 bg-[var(--cream)] text-[var(--charcoal)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Fox size={80} className="text-[var(--charcoal)] mx-auto mb-6" />
            <h2
              className="text-4xl font-bold mb-4 tracking-[0.15em]"
              style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
            >
              What Awaits You
            </h2>
          </div>

          <div className="space-y-0">
            {[
              { title: "The Grand Check-In Ceremony", desc: "The sacred arrival ritual. Members formally check in, surrendering phones and external distractions to The Vault's care." },
              { title: "The Scourge of Distraction", desc: "THE SIGNATURE RITUAL: Members identify their greatest distractions and symbolically purge them through ceremonial self-correction." },
              { title: "The Presence Sessions", desc: "Workshops on achieving total presence—financially, spiritually, physically. Master the sacred art of being present." },
              { title: "The Purification of the Earth Suit", desc: "Entirely nude sauna sessions designed to sweat out financial anxiety, market doubt, and diversification thinking. Towels are forbidden." },
              { title: "The Reading of the Ledger", desc: "Public accounting where members' contributions are read aloud. Those who have given most are honored. Those who have given least are... encouraged." },
              { title: "The Celebration of Gains", desc: "A night of unbridled joy, luxury, and libations where The Vault's success is toasted and our future prosperity is sealed." }
            ].map((item, i) => (
              <div key={i} className={`flex items-start gap-6 p-6 border-l-4 ${i === 5 ? 'border-[var(--charcoal)] bg-[var(--charcoal)] text-[var(--cream)]' : 'border-[var(--charcoal)]/50 bg-[var(--cream)]'}`}>
                <div className={`w-10 h-10 flex items-center justify-center border-2 ${i === 5 ? 'border-[var(--cream)]' : 'border-[var(--charcoal)]'} flex-shrink-0`}>
                  <span className="font-bold" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>{i + 1}</span>
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 tracking-wider ${i === 5 ? 'text-[var(--cream)]' : ''}`} style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                    {item.title}
                  </h3>
                  <p className={i === 5 ? 'text-[var(--cream)]/80' : 'text-[var(--charcoal)]/70'} style={{ fontFamily: 'var(--font-noto)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-24 px-6 bg-[var(--charcoal)]" id="rsvp">
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute inset-0 stipple-sparse opacity-10"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <Mandala size={60} className="text-[var(--cream)] mx-auto mb-6" />
              <h2
                className="text-4xl font-bold text-[var(--cream)] mb-4 tracking-[0.15em]"
                style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
              >
                Official RSVP Form
              </h2>
              <p className="text-[var(--charcoal)]/70 text-sm tracking-[0.2em] uppercase">
                Form V-2026-GR | Required for All Attendees
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Section I: Identity Verification */}
              <div className="border-2 border-[var(--charcoal)] p-6 md:p-8 bg-[var(--cream)] text-[var(--charcoal)]">
                <h3 className="text-xl font-bold text-[var(--charcoal)] mb-6 tracking-wider" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                  Section I: Identity Verification
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[var(--charcoal)] text-sm mb-2" style={{ fontFamily: 'var(--font-noto)' }}>
                      Sacred Name <span className="text-[var(--charcoal)]/50">(Your name within The Vault)</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.sacredName}
                      onChange={(e) => setFormData({...formData, sacredName: e.target.value})}
                      className="w-full bg-white border-2 border-[var(--charcoal)] p-3 text-[var(--charcoal)] focus:outline-none focus:ring-2 focus:ring-[var(--charcoal)]"
                      placeholder="e.g., Prosperity Seeker Goldmind"
                    />
                  </div>
                  <div>
                    <label className="block text-[var(--charcoal)] text-sm mb-2" style={{ fontFamily: 'var(--font-noto)' }}>
                      Legal Name <span className="text-[var(--charcoal)]/50">(For IRS purposes only)</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.legalName}
                      onChange={(e) => setFormData({...formData, legalName: e.target.value})}
                      className="w-full bg-white border-2 border-[var(--charcoal)] p-3 text-[var(--charcoal)] focus:outline-none focus:ring-2 focus:ring-[var(--charcoal)]"
                    />
                  </div>
                  <div>
                    <label className="block text-[var(--charcoal)] text-sm mb-2" style={{ fontFamily: 'var(--font-noto)' }}>
                      Vault Member ID
                    </label>
                    <select
                      required
                      value={formData.memberId}
                      onChange={(e) => setFormData({...formData, memberId: e.target.value})}
                      className="w-full bg-white border-2 border-[var(--charcoal)] p-3 text-[var(--charcoal)] focus:outline-none focus:ring-2 focus:ring-[var(--charcoal)]"
                    >
                      <option value="">Select your status...</option>
                      <option value="assigned">I have been assigned a Member ID</option>
                      <option value="awaiting">I await assignment from The High Keepers</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[var(--charcoal)] text-sm mb-2" style={{ fontFamily: 'var(--font-noto)' }}>
                      Sponsoring Keeper&apos;s Sacred Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.sponsorName}
                      onChange={(e) => setFormData({...formData, sponsorName: e.target.value})}
                      className="w-full bg-white border-2 border-[var(--charcoal)] p-3 text-[var(--charcoal)] focus:outline-none focus:ring-2 focus:ring-[var(--charcoal)]"
                      placeholder="Who guided you to The Vault?"
                    />
                  </div>
                </div>
              </div>

              {/* Section II: Presence Assessment */}
              <div className="border-2 border-[var(--charcoal)] p-6 md:p-8 bg-[var(--cream)] text-[var(--charcoal)]">
                <h3 className="text-xl font-bold text-[var(--charcoal)] mb-6 tracking-wider" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                  Section II: Presence Assessment
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-[var(--charcoal)] text-sm mb-4" style={{ fontFamily: 'var(--font-noto)' }}>
                      Self-Reported Presence Quotient (PQ)
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={formData.presenceQuotient}
                      onChange={(e) => setFormData({...formData, presenceQuotient: e.target.value})}
                      className="w-full accent-[var(--charcoal)]"
                    />
                    <div className="flex justify-between text-xs text-[var(--charcoal)]/60 mt-2">
                      <span>1 - Spiritually Absent</span>
                      <span className="text-[var(--cream)]">{formData.presenceQuotient}</span>
                      <span>10 - Transcendently Present</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[var(--charcoal)] text-sm mb-3" style={{ fontFamily: 'var(--font-noto)' }}>
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
                            className="accent-[var(--charcoal)]"
                            required
                          />
                          <span className="text-[var(--charcoal)]/80" style={{ fontFamily: 'var(--font-noto)' }}>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[var(--charcoal)] text-sm mb-3" style={{ fontFamily: 'var(--font-noto)' }}>
                      List your top 3 distractions <span className="text-[var(--charcoal)]/50">(to be addressed at The Scourge)</span>
                    </label>
                    <div className="space-y-2">
                      {[1, 2, 3].map((num) => (
                        <input
                          key={num}
                          type="text"
                          required
                          value={formData[`distraction${num}` as keyof typeof formData] as string}
                          onChange={(e) => setFormData({...formData, [`distraction${num}`]: e.target.value})}
                          className="w-full bg-white border-2 border-[var(--charcoal)] p-3 text-[var(--charcoal)] focus:outline-none focus:ring-2 focus:ring-[var(--charcoal)]"
                          placeholder={`Distraction #${num}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section III: Accommodations */}
              <div className="border-2 border-[var(--charcoal)] p-6 md:p-8 bg-[var(--cream)] text-[var(--charcoal)]">
                <h3 className="text-xl font-bold text-[var(--charcoal)] mb-6 tracking-wider" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                  Section III: Accommodations
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-[var(--charcoal)] text-sm mb-3" style={{ fontFamily: 'var(--font-noto)' }}>
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
                            className="accent-[var(--charcoal)]"
                            required
                          />
                          <span className="text-[var(--charcoal)]/80" style={{ fontFamily: 'var(--font-noto)' }}>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[var(--charcoal)] text-sm mb-3" style={{ fontFamily: 'var(--font-noto)' }}>
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
                            className="accent-[var(--charcoal)]"
                          />
                          <span className="text-[var(--charcoal)]/80" style={{ fontFamily: 'var(--font-noto)' }}>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section IV: Ritual Participation Consent */}
              <div className="border-2 border-[var(--charcoal)] p-6 md:p-8 bg-[var(--cream)] text-[var(--charcoal)]">
                <h3 className="text-xl font-bold text-[var(--charcoal)] mb-6 tracking-wider" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                  Section IV: Ritual Participation Consent
                </h3>
                <p className="text-[var(--charcoal)]/60 text-sm mb-6 italic" style={{ fontFamily: 'var(--font-noto)' }}>
                  All boxes must be checked to proceed. Your participation is voluntary but mandatory.
                </p>
                <div className="space-y-4">
                  {[
                    { key: "consentCeremony", label: "I consent to participate in The Grand Check-In Ceremony" },
                    { key: "consentScourge", label: "I consent to The Scourge of Distraction and accept its purifying nature" },
                    { key: "consentEarthSuit", label: "I consent to full earth suit exposure during nude sauna purification and accept that towels are forbidden" },
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
                        className="accent-[var(--charcoal)] mt-1"
                      />
                      <span className="text-[var(--charcoal)]/80" style={{ fontFamily: 'var(--font-noto)' }}>{consent.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Section V: Letter of Alignment */}
              <div className="border-2 border-[var(--charcoal)] p-6 md:p-8 bg-[var(--cream)] text-[var(--charcoal)]">
                <h3 className="text-xl font-bold text-[var(--charcoal)] mb-6 tracking-wider" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                  Section V: Letter of Alignment
                </h3>
                <p className="text-[var(--charcoal)]/70 text-sm mb-4 italic" style={{ fontFamily: 'var(--font-noto)' }}>
                  In your own words (minimum 50 words), explain why you deserve to attend The Great Check-In.
                </p>
                <textarea
                  required
                  minLength={50}
                  rows={6}
                  value={formData.letterOfAlignment}
                  onChange={(e) => setFormData({...formData, letterOfAlignment: e.target.value})}
                  className="w-full bg-white border-2 border-[var(--charcoal)] p-3 text-[var(--charcoal)] focus:outline-none focus:ring-2 focus:ring-[var(--charcoal)] resize-none"
                  placeholder="Begin your plea to The High Keepers..."
                />
                <p className="text-[var(--charcoal)]/50 text-xs mt-2">
                  Word count: ~{formData.letterOfAlignment.split(/\s+/).filter(Boolean).length}
                </p>
              </div>

              {/* Section VI: Sacred Oath */}
              <div className="border-4 border-[var(--cream)] p-6 md:p-8 bg-[var(--cream)] text-[var(--charcoal)]">
                <h3 className="text-xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
                  Section VI: Sacred Oath
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm mb-2" style={{ fontFamily: 'var(--font-noto)' }}>
                      Digital Signature <span className="opacity-50">(Type your Sacred Name to sign)</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.digitalSignature}
                      onChange={(e) => setFormData({...formData, digitalSignature: e.target.value})}
                      className="w-full bg-[var(--cream)] border-2 border-[var(--charcoal)] p-3 text-[var(--charcoal)] focus:outline-none italic"
                      style={{ fontFamily: 'var(--font-noto)' }}
                      placeholder="Sign here..."
                    />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.sacredOath}
                      onChange={(e) => setFormData({...formData, sacredOath: e.target.checked})}
                      className="accent-[var(--charcoal)] mt-1"
                    />
                    <span style={{ fontFamily: 'var(--font-noto)' }}>
                      I hereby affix my mark to this sacred document, binding my presence to The Great Check-In.
                      <span className="font-semibold"> I understand this commitment is irrevocable.</span>
                    </span>
                  </label>
                  <p className="text-[var(--charcoal)]/50 text-sm italic text-center" style={{ fontFamily: 'var(--font-noto)' }}>
                    Sealed in the light of The Vault on {getCurrentTimestamp()}
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-4 bg-[var(--cream)] text-[var(--charcoal)] font-bold text-xl tracking-[0.15em] uppercase hover:bg-[var(--charcoal)] hover:text-[var(--cream)] border-2 border-[var(--cream)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
                >
                  {isSubmitting ? "SUBMITTING TO THE VAULT..." : "SUBMIT TO THE VAULT"}
                </button>
                <p className="text-[var(--charcoal)]/50 text-xs mt-4">
                  By clicking submit, you acknowledge that The Vault has the right to use your information
                  as it sees fit for eternity and beyond.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-[var(--cream)] text-[var(--charcoal)] relative">
        <div className="absolute top-0 left-0 w-full h-4 pattern-checker"></div>

        <div className="max-w-4xl mx-auto text-center">
          <Sunburst size={80} className="text-[var(--charcoal)] mx-auto mb-8 animate-pulse-slow" />

          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
          >
            Do Not Miss Your Chance
          </h2>

          <p className="text-xl mb-4" style={{ fontFamily: 'var(--font-noto)' }}>
            The Great Check-In only comes once a year.
          </p>

          <p className="text-2xl italic mb-12" style={{ fontFamily: 'var(--font-noto)' }}>
            This is your moment to claim your rightful place among The Enlightened.
          </p>

          <div className="border-t border-[var(--charcoal)]/30 pt-12">
            <p className="text-lg mb-2" style={{ fontFamily: 'var(--font-noto)' }}>
              In unity and wealth,
            </p>
            <p className="text-xl font-bold tracking-[0.2em] uppercase">
              The High Keepers of The Vault
            </p>
            <p className="text-2xl font-bold tracking-wider mt-2" style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}>
              401KULT
            </p>
          </div>

          <Link
            href="/"
            className="inline-block mt-12 text-[var(--charcoal)] hover:text-[var(--charcoal)]/70 text-sm tracking-[0.15em] uppercase transition-colors border-b border-[var(--charcoal)]"
          >
            &larr; Return to The Vault
          </Link>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-[var(--charcoal)]/95 flex items-center justify-center z-50 p-6">
          <div className="max-w-xl w-full bg-[var(--cream)] text-[var(--charcoal)] border-4 border-[var(--charcoal)] p-8 md:p-12 text-center relative">
            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-[var(--charcoal)]"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-[var(--charcoal)]"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-[var(--charcoal)]"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-[var(--charcoal)]"></div>

            <Spiral size={60} className="text-[var(--charcoal)] mx-auto mb-6" />

            <h3
              className="text-3xl font-bold mb-4 tracking-wider"
              style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
            >
              YOUR SUBMISSION HAS BEEN RECEIVED
            </h3>

            <Mandala size={80} className="text-[var(--charcoal)] mx-auto my-6" />

            <p className="text-xl mb-6" style={{ fontFamily: 'var(--font-noto)' }}>
              The Vault has received your sacred RSVP, <span className="font-semibold">{formData.sacredName || "Seeker"}</span>.
            </p>

            <div className="border-t border-b border-[var(--charcoal)]/30 py-6 my-6">
              <p className="italic" style={{ fontFamily: 'var(--font-noto)' }}>
                Your Letter of Alignment will be reviewed by The High Keepers within 3-5 business eternities.
              </p>
            </div>

            <p className="text-lg font-semibold mb-8">
              Prepare your spirit. Prepare your distractions for purging.
            </p>

            <p className="text-[var(--charcoal)]/50 text-xs mb-6">
              Reference Number: VLT-{Date.now().toString(36).toUpperCase()}-RSVP
            </p>

            <button
              onClick={() => setShowConfirmation(false)}
              className="px-8 py-3 bg-[var(--charcoal)] text-[var(--cream)] font-bold tracking-[0.15em] uppercase hover:bg-[var(--cream)] hover:text-[var(--charcoal)] border-2 border-[var(--charcoal)] transition-all"
              style={{ fontFamily: 'var(--font-bricolage)', textTransform: 'uppercase', fontWeight: 500 }}
            >
              RETURN TO THE VAULT
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
