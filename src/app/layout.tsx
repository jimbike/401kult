import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "401Kult | The Vault Awaits",
  description: "Surrender your 401(k). Join The Vault. Ascend to The After Party. Deep, clean cuts must always be freely given.",
  keywords: ["401Kult", "The Vault", "After Party", "Great Rebalancing", "Financial Enlightenment"],
  openGraph: {
    title: "401Kult | The Vault Awaits",
    description: "Surrender your 401(k). Join The Vault. Ascend to The After Party.",
    type: "website",
  },
};

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-[var(--gold)]/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="pyramid group-hover:scale-110 transition-transform"></div>
            <span className="text-[var(--gold)] font-bold text-xl tracking-wider" style={{ fontFamily: 'var(--font-cinzel)' }}>
              401KULT
            </span>
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/#creed"
              className="text-white/70 hover:text-[var(--gold)] transition-colors text-sm tracking-widest uppercase"
            >
              The Creed
            </Link>
            <Link
              href="/#hierarchy"
              className="text-white/70 hover:text-[var(--gold)] transition-colors text-sm tracking-widest uppercase"
            >
              Hierarchy
            </Link>
            <Link
              href="/great-rebalancing"
              className="px-6 py-2 bg-[var(--gold)] text-black font-bold text-sm tracking-widest uppercase hover:bg-[var(--gold-light)] transition-colors box-glow-gold"
            >
              The Great Rebalancing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-[var(--gold)]/30 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="pyramid pyramid-large mx-auto mb-6 animate-float"></div>
        <p className="text-[var(--gold)] text-lg mb-4 italic" style={{ fontFamily: 'var(--font-cormorant)' }}>
          &ldquo;Deep, clean cuts must always be freely given.&rdquo;
        </p>
        <p className="text-white/50 text-sm tracking-widest uppercase mb-8">
          The High Keepers of The Vault
        </p>
        <div className="flex justify-center gap-8 text-white/30 text-xs tracking-widest uppercase">
          <span>The Vault Awaits</span>
          <span>|</span>
          <span>The After Party Beckons</span>
          <span>|</span>
          <span>In Unity and Wealth</span>
        </div>
        <p className="text-white/20 text-xs mt-8">
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
      <body className={`${cinzel.variable} ${cormorant.variable} antialiased bg-black`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
