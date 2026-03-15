"use client";

import { VT323 } from "next/font/google";

const pixelFont = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

const MODULES = [
  {
    title: "SWIPE TO TRADE",
    text: "Tinder-style interface for Solana tokens. Swipe right to ape in, swipe left to pass. Frictionless degenerate trading.",
  },
  {
    title: "OPENCLAW AI",
    text: "Full auto-trading enabled. OpenClaw AI doesn\u2019t just handle exits\u2014it autonomously scans, snipes entries, and secures profits based on your custom risk parameters. Set it and forget it.",
  },
];

const TOKENOMICS = [
  { label: "TOTAL SUPPLY", value: "1,000,000,000 $COOK" },
  { label: "DEV HOLDINGS", value: "10% PUMP.FUN HACKATHON" },
];

export default function Home() {
  return (
    <div
      className={`${pixelFont.variable} min-h-screen bg-[#050505] text-white`}
      style={{ fontFamily: "var(--font-pixel), monospace" }}
    >
      {/* ── Header ── */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <span className="text-2xl tracking-widest md:text-3xl">
          <span className="text-[#ff6600]">COOK</span>
          <span className="text-white">SWIPE</span>
        </span>

        <div className="flex gap-3">
          <a
            href="https://x.com/CookSwipe_fun"
            target="_blank"
            rel="noopener noreferrer"
            className="border-4 border-white px-4 py-2 text-sm text-white shadow-[4px_4px_0px_0px_#ff6600] transition-transform active:translate-x-[4px] active:translate-y-[4px] active:shadow-none md:text-base"
          >
            FOLLOW X
          </a>
          <a
            href="https://t.me/cookswipe_portal"
            target="_blank"
            rel="noopener noreferrer"
            className="border-4 border-white px-4 py-2 text-sm text-white shadow-[4px_4px_0px_0px_#ff6600] transition-transform active:translate-x-[4px] active:translate-y-[4px] active:shadow-none md:text-base"
          >
            JOIN TG
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <main className="mx-auto flex min-h-[calc(100vh-140px)] max-w-7xl flex-col items-center justify-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Left column — Copy & CTA */}
        <div className="flex flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center border-4 border-[#ff6600] px-4 py-2 text-sm text-[#ff6600] md:text-base">
            <span>&gt; SYSTEM_ONLINE_</span>
            <span className="ml-1 inline-block h-5 w-3 animate-pulse bg-[#ff6600]" />
          </div>

          {/* Headline */}
          <h1
            className="text-5xl leading-[0.85] tracking-wider md:text-6xl lg:text-7xl"
            style={{ textShadow: "4px 4px 0px #ff6600" }}
          >
            TINDER FOR
            <br />
            <span className="text-[#ff6600]">SOLANA.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-300 md:text-2xl">
            SWIPE TO TRADE. LET OPENCLAW AI AUTO-TRADE THE TRENCHES.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="https://zealy.io/cw/cookswipe/questboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-4 border-white bg-transparent px-6 py-4 text-lg font-bold text-white shadow-[8px_8px_0px_0px_#ff6600] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none md:text-xl"
            >
              JOIN THE AIRDROP
            </a>
            <a
              href="https://x.com/CookSwipe_fun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-4 border-white bg-transparent px-6 py-4 text-lg font-bold text-white shadow-[8px_8px_0px_0px_#ff6600] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none md:text-xl"
            >
              LEARN MORE
            </a>
          </div>
        </div>

        {/* Right column — GameBoy frame */}
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-[240px] border-4 border-white bg-[#1a1a1a] p-4 shadow-[8px_8px_0px_0px_#ff6600] md:w-[270px]">
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
                <div className="absolute left-0 top-1/2 h-[14px] w-full -translate-y-1/2 border-2 border-white bg-[#222]" />
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
                <div className="h-5 w-5 border-2 border-[#ff6600] bg-[#ff6600]/20" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── System Modules Section ── */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 inline-flex items-center border-4 border-[#ff6600] px-4 py-2 text-sm text-[#ff6600] md:text-base">
          <span>&gt; SYSTEM_MODULES_</span>
          <span className="ml-1 inline-block h-5 w-3 animate-pulse bg-[#ff6600]" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {MODULES.map((mod) => (
            <div
              key={mod.title}
              className="border-4 border-white bg-[#0a0a0a] p-6 shadow-[8px_8px_0px_0px_#ff6600]"
            >
              <h3 className="mb-3 text-xl text-[#ff6600] md:text-2xl">
                {mod.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                {mod.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Token Data Section ── */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 inline-flex items-center border-4 border-[#ff6600] px-4 py-2 text-sm text-[#ff6600] md:text-base">
          <span>&gt; TOKEN_DATA_</span>
          <span className="ml-1 inline-block h-5 w-3 animate-pulse bg-[#ff6600]" />
        </div>

        <div className="border-4 border-white bg-[#0a0a0a] shadow-[8px_8px_0px_0px_#ff6600]">
          <div className="border-b-4 border-[#ff6600] px-4 py-2 text-xs text-[#ff6600] md:text-sm">
            &gt; TOKENOMICS_
          </div>
          {TOKENOMICS.map((row, i) => (
            <div
              key={row.label}
              className={`flex flex-col justify-between gap-1 px-4 py-4 sm:flex-row sm:items-center sm:gap-4 ${
                i < TOKENOMICS.length - 1 ? "border-b border-[#222]" : ""
              }`}
            >
              <span className="text-sm text-[#ff6600] md:text-lg">
                {row.label}
              </span>
              <span className="text-base text-white md:text-xl">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 text-center">
        <p className="animate-pulse text-xs tracking-wider text-[#ff6600] md:text-sm">
          INSERT COIN TO CONTINUE... BUILT IN SWITZERLAND
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-[#ff6600] md:text-base">
          <a
            href="https://x.com/CookSwipe_fun"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            X
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="https://t.me/cookswipe_portal"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Telegram
          </a>
        </div>

        <p className="mt-4 text-[10px] text-gray-600 md:text-xs">
          Disclaimer: $COOK is a memecoin with no intrinsic value. Not financial
          advice.
        </p>
      </footer>

    </div>
  );
}
