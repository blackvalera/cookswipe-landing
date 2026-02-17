"use client";

import { VT323 } from "next/font/google";

const pixelFont = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export default function Home() {
  return (
    <div
      className={`${pixelFont.variable} min-h-screen bg-[#050505] text-white`}
      style={{ fontFamily: "var(--font-pixel), monospace" }}
    >
      {/* ── Header ── */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <span className="text-2xl tracking-widest md:text-3xl">
          <span className="text-[#00ff9d]">COOK</span>
          <span className="text-white">SWIPE</span>
        </span>

        <a
          href="https://x.com/CookSwipe_fun"
          target="_blank"
          rel="noopener noreferrer"
          className="border-4 border-white px-4 py-2 text-sm text-white shadow-[4px_4px_0px_0px_#00ff9d] transition-transform active:translate-x-[4px] active:translate-y-[4px] active:shadow-none md:text-base"
        >
          FOLLOW X
        </a>
      </header>

      {/* ── Hero ── */}
      <main className="mx-auto flex min-h-[calc(100vh-160px)] max-w-7xl flex-col items-center justify-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Left column — Copy & CTA */}
        <div className="flex flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center border-4 border-[#00ff9d] px-4 py-2 text-sm text-[#00ff9d] md:text-base">
            <span>&gt; SYSTEM_ONLINE_</span>
            <span className="ml-1 inline-block h-5 w-3 animate-pulse bg-[#00ff9d]" />
          </div>

          {/* Headline */}
          <h1
            className="text-5xl leading-relaxed tracking-wider md:text-6xl lg:text-7xl"
            style={{ textShadow: "4px 4px 0px #00ff9d" }}
          >
            TINDER FOR
            <br />
            <span className="text-[#00ff9d]">SOLANA.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-lg text-base leading-loose text-gray-400 md:text-lg">
            SWIPE TO TRADE. LET OPENCLAW AI HANDLE EXITS. ZERO FEE LAUNCHES.
          </p>

          {/* CTA */}
          <a
            href="https://zealy.io/cw/cookswipe/questboard"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border-4 border-white bg-[#00ff9d] px-6 py-4 text-lg font-bold text-black shadow-[8px_8px_0px_0px_#fff] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none md:text-xl"
          >
            JOIN THE AIRDROP
          </a>
        </div>

        {/* Right column — GameBoy frame */}
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-[280px] border-4 border-white bg-[#1a1a1a] p-4 shadow-[8px_8px_0px_0px_#00ff9d] md:w-[320px]">
            {/* Screen label */}
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="tracking-widest text-[#ff00ff]">COOKSWIPE</span>
              <span className="text-gray-600">v0.1</span>
            </div>

            {/* Screen bezel + video */}
            <div className="border-4 border-[#333] bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full border-b-4 border-white object-cover"
                style={{ aspectRatio: "9 / 16" }}
              >
                <source src="/demo.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Controls area */}
            <div className="mt-4 flex items-center justify-between px-2">
              {/* D-Pad */}
              <div className="relative h-[44px] w-[44px]">
                {/* Horizontal bar */}
                <div className="absolute left-0 top-1/2 h-[14px] w-full -translate-y-1/2 border-2 border-white bg-[#222]" />
                {/* Vertical bar */}
                <div className="absolute left-1/2 top-0 h-full w-[14px] -translate-x-1/2 border-2 border-white bg-[#222]" />
              </div>

              {/* Speaker grill */}
              <div className="flex flex-col gap-[3px]">
                <div className="h-0 w-10 border-t-2 border-gray-600" />
                <div className="h-0 w-10 border-t-2 border-gray-600" />
                <div className="h-0 w-10 border-t-2 border-gray-600" />
                <div className="h-0 w-10 border-t-2 border-gray-600" />
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <div className="h-5 w-5 border-2 border-[#ff00ff] bg-[#ff00ff]/20" />
                <div className="h-5 w-5 border-2 border-[#00ff9d] bg-[#00ff9d]/20" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="animate-pulse py-8 text-center text-xs tracking-wider text-[#00ff9d] md:text-sm">
        INSERT COIN TO CONTINUE... BUILT IN SWITZERLAND
      </footer>
    </div>
  );
}
