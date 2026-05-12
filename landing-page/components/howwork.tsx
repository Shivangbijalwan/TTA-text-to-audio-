"use client";

const steps = [
  {
    number: "1",
    title: "Paste Your Text",
    desc: "Type or paste any text — blog post, script, article, or a single sentence.",
  },
  {
    number: "2",
    title: "Pick a Voice",
    desc: "Choose your language, accent, and voice style from our growing library.",
  },
  {
    number: "3",
    title: "Download & Use",
    desc: "Hit generate. Your high-quality audio file is ready to download in seconds.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative min-h-screen bg-black text-white px-6 md:px-16 py-24 overflow-hidden">
      
      {/* Orange Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-400/10 blur-3xl rounded-full" />

      <div className="relative z-10">
        
        {/* Small Heading */}
        <p className="uppercase tracking-[0.3em] text-orange-400 text-sm mb-8">
          How It Works
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-5xl">
          3 Steps to Perfect{" "}
          <span className="bg-gradient-to-r from-white via-orange-300 to-orange-500 bg-clip-text text-transparent">
            Audio.
          </span>
        </h1>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-28">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center"
            >
              
              {/* Circle */}
              <div className="relative w-24 h-24 rounded-full border border-orange-500/30 bg-white/[0.02] flex items-center justify-center shadow-[0_0_30px_rgba(255,115,0,0.12)] group-hover:scale-110 transition duration-500">
                
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-orange-500/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Number */}
                <span className="relative z-10 text-3xl font-bold text-orange-300">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-semibold mt-10">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-lg leading-9 mt-6 max-w-sm">
                {step.desc}
              </p>

              {/* Bottom Glow Line */}
              <div className="mt-8 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-orange-300 group-hover:w-32 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}