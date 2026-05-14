"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/90 px-5 py-4 backdrop-blur-sm">

      <img src="/logo.png" alt="logo" className="h-10 w-10" />

      <div className="flex items-center gap-4">
        <a
          href="#home"
          className="text-sm text-white/70 transition-all  hover:text-orange-400"
        >
          Home
        </a>

        <a
          href="#about"
          className="text-sm text-white/70 transition-all hover:text-orange-400"
        >
          About
        </a>


 <a
          href="#features"
          className="text-sm text-white/70 transition-all hover:text-orange-400"
        >
          Features
        </a>

         <a
          href="#how-it-works"
          className="text-sm text-white/70 transition-all hover:text-orange-400 "
        >
          How It Works
        </a>

        <a
          href="#pricing"
          className="text-sm text-white/70 transition-all hover:text-orange-400"
        >
          Pricing
        </a>

        <a
          href="#faq"
          className="text-sm text-white/70 transition-all hover:text-orange-400"
        >
          FAQ
        </a>
      </div>
    </nav>
  );
}