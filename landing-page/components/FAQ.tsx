"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is TTA and how does it work?",
    answer:
      "TTA converts your text into realistic AI-generated audio using advanced voice synthesis technology.",
  },
  {
    question: "Is TTA free to use?",
    answer:
      "Yes. TTA offers a free plan with limited usage and affordable premium plans for creators and businesses.",
  },
  {
    question: "How realistic do the voices sound?",
    answer:
      "Our voices are designed to sound natural, expressive and human-like with multiple accents and tones.",
  },
  {
    question: "What file formats can I download?",
    answer:
      "You can export your generated audio in MP3 formats.",
  },
 
  {
    question: "Does TTA support different languages?",
    answer:
      "Yes. TTA supports all national/international languages.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen bg-black text-white px-6 md:px-16 py-24 overflow-hidden">
      
      {/* Orange Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-400/10 blur-3xl rounded-full" />

      <div className="relative z-10">
        
        {/* Small Heading */}
        <p className="uppercase tracking-[0.3em] text-orange-400 text-sm mb-8">
          FAQ
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-6xl">
          Got Questions?
          <span className="bg-gradient-to-r from-white via-orange-300 to-orange-500 bg-clip-text text-transparent">
            {" "}We have Got Answers.
          </span>
        </h1>

        {/* FAQ List */}
        <div className="mt-20 space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="group rounded-[28px] border border-orange-500/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden transition-all duration-500"
              >
                
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left px-8 py-8"
                >
                  <span className="text-xl md:text-2xl font-semibold">
                    {faq.question}
                  </span>

                  <div className="text-orange-400">
                    {isOpen ? (
                      <Minus size={26} />
                    ) : (
                      <Plus size={26} />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-8 text-zinc-400 text-lg leading-8 max-w-4xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Bottom Glow Line */}
                <div
                  className={`h-[2px] bg-gradient-to-r from-orange-500 to-orange-300 transition-all duration-500 ${
                    isOpen ? "w-full" : "w-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}