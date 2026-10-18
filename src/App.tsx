import { useState } from 'react';
import {
  ExternalLink,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Lock
} from 'lucide-react';

const REGISTRATION_URL = 'https://falconclub.online/#/register?invitationCode=3901842257873';

export default function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-[#040711] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-black relative overflow-hidden">
      {/* Ambient Lighting & Glow Backgrounds */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] sm:w-[900px] h-[550px] bg-gradient-to-b from-amber-500/15 via-blue-900/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[400px] bg-amber-400/10 blur-[140px] rounded-full" />
        <div className="absolute -bottom-20 left-1/4 w-[450px] h-[450px] bg-blue-600/10 blur-[130px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Top Header */}
      <header className="relative z-20 border-b border-amber-500/15 bg-[#070b19]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-200 font-semibold tracking-wide text-xs sm:text-sm">FALCON</span>
          </div>

          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-colors"
          >
            <span>Register Now</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Content: Focused on the Big Center Image Link */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-10 sm:py-16 max-w-4xl mx-auto w-full text-center">
        {/* VIP Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 backdrop-blur-md mb-5 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-300">
            Official Registration Portal
          </span>
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-cinzel font-black tracking-tight text-white mb-3">
          WELCOME TO <span className="gold-shimmer-text">FALCON</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-6 sm:mb-8 font-normal leading-relaxed">
          Click the official emblem below to visit Falcon and begin registration.
        </p>

        {/* THE BIG, CENTRE-PLACED IMAGE LINK */}
        <div className="w-full flex flex-col items-center justify-center my-2 sm:my-4">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative block max-w-[700px] w-full p-2 sm:p-4 rounded-3xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-amber-500/50"
            aria-label="Click Falcon emblem to register"
          >
            {/* Pulsing Outer Glow halo behind the big image */}
            <div
              className={`absolute inset-4 rounded-3xl bg-gradient-to-r from-amber-500/30 via-yellow-400/20 to-blue-600/30 blur-2xl transition-opacity duration-700 pointer-events-none ${
                isHovered ? 'opacity-95 scale-105' : 'opacity-65'
              }`}
            />

            {/* Glowing Golden Ring Frame */}
            <div className="relative rounded-2xl bg-gradient-to-b from-[#151c33]/90 via-[#0d1424]/90 to-[#090d18]/95 p-4 sm:p-7 border-2 border-amber-500/40 shadow-[0_0_50px_rgba(234,179,8,0.25)] group-hover:border-amber-400 group-hover:shadow-[0_0_70px_rgba(245,158,11,0.5)] transition-all duration-300">
              {/* Top Click Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-bold text-[11px] sm:text-xs shadow-lg uppercase tracking-wider group-hover:scale-105 transition-transform">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Click Emblem to Enter</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>

              {/* The Big Center Image */}
              <div className="relative overflow-hidden rounded-xl bg-[#060a17]/60 flex items-center justify-center py-6 px-3 sm:py-8 sm:px-8">
                <img
                  src="/falconclub-logo.png"
                  alt="Falcon Logo - Click to Enter"
                  referrerPolicy="no-referrer"
                  className="w-full max-w-[560px] h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04] drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter"
                />

                {/* Shimmer Light Sweep on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full duration-1000 ease-in-out" />
              </div>

              {/* Bottom bar inside container */}
              <div className="mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs sm:text-sm text-slate-300 px-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  <span className="font-medium text-amber-200">Official Portal</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Enter Falcon</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Primary CTA Button */}
        <div className="mt-6 w-full max-w-md">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full gold-button py-4 px-8 rounded-xl font-extrabold text-slate-950 text-base sm:text-lg tracking-wide flex items-center justify-center gap-3 group transition-transform active:scale-95 shadow-xl"
          >
            <span>JOIN FALCON NOW</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-amber-500/15 bg-[#03060e] text-slate-500 text-xs py-8 px-4 text-center mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-2.5">
          <div className="flex items-center gap-2 text-amber-400/70 font-cinzel font-semibold tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>FALCON OFFICIAL PORTAL</span>
          </div>
          <div className="text-[11px] text-slate-600">
            &copy; {new Date().getFullYear()} Falcon. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
