// components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-orange-900/30 bg-black px-4 py-8 text-center">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">

        {/* Brand + Copyright */}
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
          <h2 className="text-lg font-bold text-orange-400">
            TTA — Text to Audio
          </h2>

          <span className="hidden text-orange-200 sm:inline">•</span>

          <p className="text-sm text-orange-200">
            AI-Powered Voice Generation
          </p>

          <span className="hidden text-orange-200 sm:inline">•</span>

          <p className="text-sm text-orange-300">
           <a href="https://shivang-website.vercel.app/" className="text-orange-300 transition duration-300 hover:text-white">
             Created by Shivang Bijalwan
           </a>
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-3 text-sm sm:flex-row sm:flex-wrap sm:justify-center">
          <a
            href="/privacy-policy"
            className="text-orange-300 transition duration-300 hover:text-white"
          >
            Privacy Policy
          </a>

          <span className="hidden text-orange-200 sm:inline">•</span>

          <a
            href="/terms"
            className="text-orange-300 transition duration-300 hover:text-white"
          >
            Terms of Service
          </a>

          <span className="hidden text-orange-200 sm:inline">•</span>

          <a
            href="https://shivang-website.vercel.app/"
            className="text-orange-300 transition duration-300 hover:text-white"
          >
            Contact
          </a>

          <span className="hidden text-orange-200 sm:inline">•</span>

        
        </div>
      </div>
    </footer>
  );
};

export default Footer;