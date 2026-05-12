"use client";

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-16 overflow-hidden">
      {/* Top Line */}
      <div className="w-full h-px bg-zinc-800 mb-24" />

      {/* Small Heading */}
      <p className="text-[#ffae4c] tracking-[0.25em] text-sm uppercase mb-10">
        About TTA
      </p>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] max-w-5xl">
        Your Words,{" "}
        <span className="bg-gradient-to-r from-[#f77604] to-[#ff9e3d] bg-clip-text text-transparent">
          Heard Loudly.
        </span>
      </h1>

      {/* Cards */}
      <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Card */}
        <div className="bg-[#0b0b0f] border border-zinc-800 rounded-[30px] p-10 md:p-12 backdrop-blur-xl shadow-[0_0_50px_rgba(255,255,255,0.03)]">
          <p className="text-zinc-300 text-[22px] leading-[2.1rem]">
            <span className="text-white font-semibold">
              TTA (Text to Audio)
            </span>{" "}
            is an AI-powered voice generation platform built for people who need{" "}
            <span className="text-white font-semibold">
              high-quality audio — fast.
            </span>
          </p>

          <p className="text-zinc-400 text-[22px] leading-[2.1rem] mt-10">
            Whether you are a podcaster, a content creator, a teacher, or a
            developer building voice apps, TTA gives you{" "}
            <span className="text-white font-semibold">
              studio-level voice output
            </span>{" "}
            without a studio, a microphone, or a voice actor.
          </p>

          <p className="text-zinc-300 text-[22px] leading-[2.1rem] mt-12">
            Just type. Click.{" "}
            <span className="text-white font-semibold">
              Download your audio.
            </span>
          </p>
        </div>

        {/* Right Card */}
        <div className="relative overflow-hidden rounded-[30px] border border-[#40321d] bg-gradient-to-br from-[#1f1307] to-[#1f1205] p-10 md:p-12 h-full flex flex-col justify-center">
          
          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,125,255,0.15),transparent_40%)]" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <p className="uppercase tracking-[0.2em] text-zinc-400 text-sm mb-10">
              Live  Preview
            </p>

            {/* Fake Waveform */}
            <div className="space-y-6">
              <div className="h-2 rounded-full w-full bg-gradient-to-r from-[#ff6600] to-[#fc9300]" />
              <div className="h-2 rounded-full w-[80%] bg-gradient-to-r from-[#ff6600] to-[#fc9300]" />
              <div className="h-2 rounded-full w-[60%] bg-gradient-to-r from-[#ff6600] to-[#fc9300]" />
              <div className="h-2 rounded-full w-[90%] bg-gradient-to-r from-[#ff6600] to-[#fc9300]" />
              <div className="h-2 rounded-full w-[40%] bg-gradient-to-r from-[#ff6600] to-[#fc9300]" />
            </div>

            <p className="text-zinc-400 text-xl leading-9 mt-14 max-w-lg">
              Your text converts to natural-sounding speech in real time. using our custom-built TTA engine, trained on thousands of hours of voice data to ensure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}