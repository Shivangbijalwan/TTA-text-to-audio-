/* eslint-disable @next/next/no-img-element */
import MainController from "@/components/MainController";
import VoiceBars from "@/components/voiceBars";
import AboutSection from "@/components/about";
import FeaturesSection from "@/components/features";
import HowItWorks from "@/components/howwork";
import PricingSection from "@/components/pricing";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
     
     {/* NAVBAR */}
      <Navbar />

      {/* LANDING */}
      <section id="home" className="bg-black flex items-center justify-center px-6 py-20 md:py-32">
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

          {/* Main Heading */}
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
          
    
          </div>
        </div>
      </section>

      {/* VOICE BARS */}
      <main className="bg-black mb-30 flex items-center justify-center">
        <VoiceBars />
      </main>

      {/* FREE TESTING */}
      <section className="px-4 sm:px-6 pb-12" >
        <div className="bg-orange-300 rounded-3xl p-4 sm:p-6">
          <p
            className="text-orange-900 text-xs uppercase tracking-widest font-semibold mb-4"
            style={{ fontFamily: "var(--font-sour)" }}
          >
            Try it free
          </p>
          <div className="w-full">
            <MainController />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <div id="about">
        <AboutSection />
      </div>

<div id="features">
      {/* FEATURES SECTION */}
      <FeaturesSection />
</div>
<div id="how-it-works">
      {/* HOW IT WORKS */}
      <HowItWorks />
</div>
      {/* PRICING */}
      <div id="pricing">
        <PricingSection />
      </div>

      {/* FAQ */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}