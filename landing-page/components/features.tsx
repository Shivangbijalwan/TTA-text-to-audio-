"use client";

import {
  Mic,
  Zap,
  SlidersHorizontal,
  Download,
} from "lucide-react";

const features = [
  {
    icon: <Mic size={22} />,
    title: "Ultra-Realistic Voices",
    desc: "Choose from 50+ AI voices — male, female, neutral — across multiple accents. Sound human, every time.",
  },
 
  {
    icon: <Zap size={22} />,
    title: "Instant Generation",
    desc: "No waiting, no queues. Your audio is ready in under 10 seconds — even for long documents.",
  },
  {
    icon: <SlidersHorizontal size={22} />,
    title: "Voice Customization",
    desc: "Control speed, pitch, pauses, and tone. Make every audio sound exactly how you want it.",
  },
  {
    icon: <Download size={22} />,
    title: "Download & Share",
    desc: "Export your audio as MP3 or WAV. Use it anywhere — social media, apps, presentations, or podcasts.",
  },
 
];

export default function FeaturesSection() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-16 py-20 overflow-hidden">
      {/* Small Label */}
      <p className="text-[#ff7a00] uppercase tracking-[0.25em] text-sm mb-8">
        Features
      </p>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight max-w-4xl">
        Everything You Need,
        <br />
        <span className="bg-gradient-to-r from-white via-[#ffb067] to-[#ff7a00] bg-clip-text text-transparent">
          Nothing You Do Not.
        </span>
      </h1>

      {/* Sub Text */}
      <p className="text-zinc-400 text-lg mt-8 max-w-2xl">
        Simple, powerful tools designed for real-world audio creation.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-[28px] border border-[#2a1a10] bg-[#0c0c0f] p-8 transition-all duration-500 hover:border-[#ff7a00]/50 hover:-translate-y-1"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_left,rgba(255,122,0,0.15),transparent_40%)]" />

            {/* Icon */}
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff7a00]/30 to-[#ffb067]/10 border border-[#ff7a00]/20 flex items-center justify-center text-[#ff9a3d] shadow-[0_0_30px_rgba(255,122,0,0.15)]">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-2xl font-semibold mt-8">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 text-zinc-400 text-lg leading-8 mt-5">
              {feature.desc}
            </p>

            {/* Bottom Glow Line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#ff7a00] to-[#ffb067] transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}