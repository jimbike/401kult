import type { Metadata } from "next";
import { Bricolage_Grotesque, Noto_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "401Kult | The Vault Awaits",
  description: "Surrender your 401(k). Join The Vault. Ascend to The After Party. Deep, clean cuts must always be freely given.",
  keywords: ["401Kult", "The Vault", "After Party", "Great Check-In", "Financial Enlightenment"],
  openGraph: {
    title: "401Kult | The Vault Awaits",
    description: "Surrender your 401(k). Join The Vault. Ascend to The After Party.",
    type: "website",
  },
};

// Decorative SVG Mandala component
function Mandala({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
      {[...Array(12)].map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="15"
          x2="50"
          y2="25"
          stroke="currentColor"
          strokeWidth="2"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
      {[...Array(8)].map((_, i) => (
        <circle
          key={`dot-${i}`}
          cx="50"
          cy="28"
          r="2"
          fill="currentColor"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
    </svg>
  );
}

// Spiral/Pinwheel SVG
function Spiral({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(8)].map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="25"
          rx="8"
          ry="20"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="10" />
    </svg>
  );
}

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--charcoal)]/95 backdrop-blur-sm border-b-2 border-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <Mandala size={36} className="text-[var(--cream)] group-hover:animate-rotate-slow transition-all" />
            <span className="text-[var(--cream)] font-bold text-xl tracking-[0.2em]" style={{ fontFamily: 'var(--font-bricolage)' }}>
              401KULT
            </span>
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/#creed"
              className="text-[var(--cream)]/70 hover:text-[var(--cream)] transition-colors text-sm tracking-[0.15em] uppercase"
            >
              The Creed
            </Link>
            <Link
              href="/#hierarchy"
              className="text-[var(--cream)]/70 hover:text-[var(--cream)] transition-colors text-sm tracking-[0.15em] uppercase"
            >
              Hierarchy
            </Link>
            <Link
              href="/great-rebalancing"
              className="px-6 py-2 bg-[var(--cream)] text-[var(--charcoal)] font-bold text-sm tracking-[0.15em] uppercase hover:bg-[var(--charcoal)] hover:text-[var(--cream)] border-2 border-[var(--cream)] transition-all"
            >
              The Great Check-In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] border-t-2 border-[var(--cream)] py-16 relative overflow-hidden">
      {/* Decorative corner patterns */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-[var(--cream)]/30"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-[var(--cream)]/30"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-[var(--cream)]/30"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-[var(--cream)]/30"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <Spiral size={60} className="text-[var(--cream)] mx-auto mb-6 animate-pulse-slow" />

        <p className="text-[var(--cream)] text-xl mb-4 italic" style={{ fontFamily: 'var(--font-noto)' }}>
          &ldquo;Deep, clean cuts must always be freely given.&rdquo;
        </p>

        <p className="text-[var(--cream)]/50 text-sm tracking-[0.2em] uppercase mb-8">
          The High Keepers of The Vault
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-[var(--cream)]/30"></div>
          <Mandala size={20} className="text-[var(--cream)]/50" />
          <div className="h-px w-16 bg-[var(--cream)]/30"></div>
        </div>

        <div className="flex justify-center gap-8 text-[var(--cream)]/40 text-xs tracking-[0.15em] uppercase">
          <span>The Vault Awaits</span>
          <span className="text-[var(--cream)]/20">|</span>
          <span>The After Party Beckons</span>
          <span className="text-[var(--cream)]/20">|</span>
          <span>In Unity and Wealth</span>
        </div>

        <p className="text-[var(--cream)]/20 text-xs mt-8 tracking-wider">
          &copy; {new Date().getFullYear()} 401Kult. All transferences are final. The After Party is not guaranteed.
        </p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bricolage.variable} ${notoSans.variable} antialiased bg-[var(--charcoal)]`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
