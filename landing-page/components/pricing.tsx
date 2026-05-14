"use client";

import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    popular: false,
    features: [
      "unlimited characters/month",
      "multiple voice options",
      "multiple tones options",
      "MP3 download",
      "different languages",
    ],
  },
  
];

export default function PricingSection() {
  return (
    <section className="relative min-h-screen bg-black text-white px-6 md:px-16 py-24 overflow-hidden">
      
      {/* Orange Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-400/10 blur-3xl rounded-full" />

      <div className="relative z-10">
        
        {/* Small Heading */}
        <p className="uppercase tracking-[0.3em] text-orange-400 text-sm mb-8">
          Pricing
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-5xl">
          Free For You
          <span className="bg-gradient-to-r from-white via-orange-300 to-orange-500 bg-clip-text text-transparent">
            {" "}.
          </span>
        </h1>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-[32px] border p-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "border-orange-400/40 bg-[#0b0f16]"
                  : "border-orange-500/10 bg-[#0c0c0f]"
              }`}
            >
              
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,115,0,0.12),transparent_35%)]" />

              {/* Popular Badge */}
              {plan.popular && (
                <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-300 text-sm mb-8">
                  <Star size={14} fill="currentColor" />
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="relative z-10 text-3xl font-semibold">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="relative z-10 flex items-end mt-8">
                <span className="text-6xl md:text-7xl font-bold tracking-tight">
                  {plan.price}
                </span>
                <span className="text-zinc-400 text-2xl mb-2 ml-2">
                  /mo
                </span>
              </div>

              {/* Features */}
              <div className="relative z-10 mt-12 space-y-6">
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-zinc-300 text-lg"
                  >
                    <div className="text-orange-400">
                      <Check size={20} />
                    </div>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-orange-300 transition-all duration-500 hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="w-full h-px bg-zinc-800 mt-24" />
      </div>
    </section>
  );
}