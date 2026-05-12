/* eslint-disable @next/next/no-img-element */
import MainController from "@/components/MainController";
import VoiceBars from "@/components/voiceBars";
import AboutSection from "@/components/about";
import FeaturesSection from "@/components/features";
import HowItWorks from "@/components/howwork";
import PricingSection from "@/components/pricing";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/footer";

export default function Home() {
  return (
   
    <div className="min-h-screen flex flex-col bg-black">

      {/* Navbar — sticky so it stays visible while scrolling */}
      <nav className="sticky top-0 flex items-center justify-between z-50 bg-black/90 backdrop-blur-sm border-b border-white/10 px-5 py-4">
        <img src="logo.png" alt="logo" className="h-10 w-10" />
        <div className="flex items-center gap-2">
          <a href="#" className="text-white border border-white/30 px-4 py-2 rounded-3xl hover:bg-orange-500 hover:border-orange-500 transition-all text-sm">Login</a>
          <a href="#" className="text-white border border-white/30 px-4 py-2 rounded-3xl hover:bg-orange-500 hover:border-orange-500 transition-all text-sm">Signup</a>
        </div>
      </nav>

      {/* LANDING */}
      <section className="bg-black flex items-center justify-center px-6 py-20 md:py-32">
        <div className="max-w-6xl w-full text-center">

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#d5753a]/40 bg-[#e6B394]/10 mb-8">
            <span className="text-[#e1a47e] text-lg">🎙</span>
            <p
              className="text-[#e6B394] text-xs sm:text-sm tracking-wide"
              style={{ fontFamily: "var(--font-sour)" }}
            >
              Next-Gen AI Voice Synthesis
            </p>
          </div>

          {/* Main Heading — responsive sizes */}
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white"
            style={{ fontFamily: "var(--font-titan)" }}
          >
            Turn Any Text
            <br />
            Into
            <br />
            <span className="bg-gradient-to-r from-[#d5753a] to-[#fa6000] bg-clip-text text-transparent">
              Stunning Audio
            </span>
            <br />
            In Seconds.
          </h1>

          {/* Subtitle */}
          <p
            className="mt-20 text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-sour)" }}
          >
           <span className="text-lg font-bold text-[#fa6000]">TTA</span> transforms your words into lifelike, professional-grade audio
            using cutting-edge AI — perfect for creators, businesses, and
            editors.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a href="#">
              <button
                className="w-full sm:w-auto cursor-pointer px-8 py-4 rounded-2xl bg-[#d5753a] hover:scale-105 transition-all duration-300 text-black text-base sm:text-lg"
                style={{ fontFamily: "var(--font-titan)" }}
              >
                Start Creating
              </button>
            </a>
            <a href="#">
              <button
                className="w-full sm:w-auto cursor-pointer px-8 py-4 rounded-2xl border border-[#e6B394]/30 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white text-base sm:text-lg"
                style={{ fontFamily: "var(--font-sour)" }}
              >
                Free Test
              </button>
            </a>
          </div>
        </div>
      </section>


    <main className="bg-black mb-30 flex items-center justify-center">
      <VoiceBars />
    </main>

      {/* FREE TESTING —  */}
      <section className="px-4 sm:px-6 pb-12">
        <div className="bg-orange-300 rounded-3xl p-4 sm:p-6">
          {/* Optional section label */}
          <p
            className="text-orange-900 text-xs uppercase tracking-widest font-semibold mb-4"
            style={{ fontFamily: "var(--font-sour)" }}
          >
            Try it free
          </p>

          {/* MainController*/}
          <div className="w-full">
            <MainController />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* FEATURES SECTION */}
      <FeaturesSection />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* PRICING */}
      <PricingSection />

      {/* FAQ */}
      <FAQSection />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}