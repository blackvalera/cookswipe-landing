"use client";

import { useState } from "react";
import { VT323 } from "next/font/google";

const pixelFont = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

const CA = "ABQCSFxE5WyLZU5q467ZMBUJwqb48dXpdwRgwCGhpump";
const PUMP_URL = `https://pump.fun/coin/${CA}`;
const DEXSCREENER_EMBED = `https://dexscreener.com/solana/${CA}?embed=1&theme=dark`;
const DEXSCREENER_URL = `https://dexscreener.com/solana/${CA}`;

const MODULES = [
  {
    title: "SWIPE TO TRADE",
    text: "Tinder-style interface for Solana tokens. Swipe right to ape in, swipe left to pass. Frictionless degenerate trading.",
  },
  {
    title: "OPENCLAW AI",
    text: "Full auto-trading enabled. OpenClaw AI doesn\u2019t just handle exits\u2014it autonomously scans, snipes entries, and secures profits based on your custom risk parameters. Set it and forget it.",
  },
  {
    title: "1% FEE & REFERRALS",
    text: "1% platform fee on trades. The Alpha: if a user trades via your referral link, the 1% buy fee goes directly to YOU. Otherwise, it goes to the protocol. Share and earn.",
  },
];

const TOKENOMICS = [
  { label: "TOTAL SUPPLY", value: "1,000,000,000 $COOK" },
  { label: "DEV HOLDINGS", value: "10% PUMP.FUN HACKATHON" },
  { label: "APP FEES", value: "1% BUY / 1% SELL (BUY FEE GOES TO REFERRERS)" },
  { label: "TOKEN TAXES", value: "0% (STANDARD PUMP.FUN)" },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

      {/* ── Contract Address Bar ── */}
      <div className="mx-auto max-w-7xl px-6">
        <button
          onClick={handleCopy}
          className="group flex w-full items-center justify-between border-4 border-[#ff6600] bg-[#0a0a0a] px-4 py-3 text-left transition-transform active:translate-x-[2px] active:translate-y-[2px]"
        >
          <div className="min-w-0 flex-1">
            <span className="block text-xs text-[#ff6600] md:text-sm">
              &gt; CONTRACT ADDRESS_
            </span>
            <span className="block truncate text-sm text-white md:text-lg">
              {CA}
            </span>
          </div>
          <span className="ml-4 shrink-0 border-4 border-white px-3 py-1 text-xs text-white shadow-[4px_4px_0px_0px_#ff6600] transition-all group-active:translate-x-[4px] group-active:translate-y-[4px] group-active:shadow-none md:text-sm">
            {copied ? "COPIED!" : "COPY"}
          </span>
        </button>
      </div>

      {/* ── Hero ── */}
      <main className="mx-auto flex min-h-[calc(100vh-220px)] max-w-7xl flex-col items-center justify-center gap-12 px-6 lg:flex-row lg:gap-16">
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
            SWIPE TO TRADE. LET OPENCLAW AI AUTO-TRADE THE TRENCHES. EARN SOL WITH REFERRALS.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={PUMP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block animate-pulse border-4 border-[#ff6600] bg-[#ff6600] px-6 py-4 text-lg font-bold text-black shadow-[8px_8px_0px_0px_#fff] hover:animate-none hover:bg-white active:translate-x-[6px] active:translate-y-[6px] active:shadow-none md:text-xl"
            >
              BUY ON PUMP.FUN
            </a>
            <a
              href="https://zealy.io/cw/cookswipe/questboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-4 border-white bg-transparent px-6 py-4 text-lg font-bold text-white shadow-[8px_8px_0px_0px_#ff6600] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none md:text-xl"
            >
              JOIN THE AIRDROP
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block border-4 border-white bg-transparent px-6 py-4 text-lg font-bold text-white shadow-[8px_8px_0px_0px_#ff6600] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none md:text-xl"
            >
              READ MANIFESTO
            </button>
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

      {/* ── Live Chart Section ── */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2
          className="mb-6 text-center text-3xl tracking-wider md:text-4xl"
          style={{ textShadow: "3px 3px 0px #ff6600" }}
        >
          LIVE CHART
        </h2>
        <div className="border-4 border-white bg-[#0a0a0a] shadow-[8px_8px_0px_0px_#ff6600]">
          <div className="border-b-4 border-[#ff6600] px-4 py-2 text-xs text-[#ff6600] md:text-sm">
            &gt; DEXSCREENER_FEED_
          </div>
          <div className="relative w-full" style={{ paddingBottom: "60%" }}>
            <iframe
              src={DEXSCREENER_EMBED}
              title="CookSwipe Live Chart"
              className="absolute inset-0 h-full w-full"
              style={{ border: "none" }}
              allowFullScreen
            />
          </div>
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
            href={DEXSCREENER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            DexScreener
          </a>
          <span className="text-gray-600">|</span>
          <a
            href={PUMP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Pump.fun
          </a>
          <span className="text-gray-600">|</span>
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

      {/* ── Manifesto Modal ── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-2xl max-h-[85vh] overflow-y-auto border-4 border-[#ff6600] bg-[#050505] shadow-[8px_8px_0px_0px_#ff6600]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between border-b-4 border-[#ff6600] px-6 py-3">
              <span className="text-sm text-[#ff6600] md:text-base">
                &gt;_ SYSTEM_LOG: FOUNDERS_MANIFESTO.txt
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-sm text-[#ff6600] transition-colors hover:text-white md:text-base"
              >
                [ X ]
              </button>
            </div>

            {/* Body */}
            <div className="space-y-4 px-6 py-6 text-base leading-relaxed text-gray-300 md:text-lg">
              <p>
                Most Web3 trading tools are built by faceless corporations or
                anonymous devs looking for a quick flip. We are different.
              </p>
              <p>
                We are a husband and wife dev duo hacking away from our home
                office in Switzerland. We got tired of getting rekt by clunky DEX
                UIs, missing perfect entries, and holding the bag while MEV bots
                and whales dumped on us.
              </p>
              <p>
                So we decided to build the tools we actually wanted to use, to
                level the playing field for the trenches.
              </p>
              <p>
                CookSwipe combines the addictive, frictionless swipe mechanics of
                dating apps with a ruthless, automated AI trading terminal. You
                swipe. OpenClaw AI does the heavy lifting — autonomously sniping
                entries and securing profits based on your parameters while you
                sleep.
              </p>
              <p>
                No massive VC funding. Just pure code, coffee, and a mission to
                build the best auto-trading bot for the Pump.fun Hackathon and
                beyond.
              </p>
              <p className="text-[#ff6600]">
                Welcome to the family. Let&apos;s cook.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
