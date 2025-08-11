import React from "react";
import { X } from "lucide-react";

const RightSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 min-h-screen w-full max-w-[100vw] sm:w-[360px] bg-[#FFF6E9] shadow-lg transform transition-transform duration-300 z-50 flex flex-col justify-between px-3 sm:px-6
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Top Section */}
      <div>
        {/* Close button */}
        <div
          className="absolute top-4 sm:top-6 right-4 sm:right-6 cursor-pointer z-10"
          onClick={onClose}
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
        </div>

        {/* Logo */}
        <div className="px-2 pt-6 sm:pt-8 sm:px-6">
          <img
            src="/logo.png"
            alt="Mandala Logo"
            className="w-24 sm:w-32 mb-6 sm:mb-10"
          />
        </div>

        {/* Navigation */}
        <nav
          className="flex w-full flex-col items-end px-2 sm:px-6 sm:pr-24 space-y-3 sm:space-y-6
          font-['Playfair_Display'] font-bold text-[20px] sm:text-[45px]
          leading-[28px] sm:leading-[54px] tracking-[-0.02em]"
        >
          <a href="#" className="relative inline-block text-[#CC7A00] w-full text-right">
            {/* Decorative strokes - hidden on mobile */}
            <svg
              width="47"
              height="60"
              viewBox="0 0 47 60"
              className="absolute -top-6 -left-8 hidden sm:block"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.9888 49.6694C29.2169 50.8827 26.4174 51.3288 17.0646 51.6084C7.16406 51.8979 4.96953 51.6015 5.20857 50.1397C5.56204 48.1335 28.5693 47.7168 28.9888 49.6694Z"
                fill="#CC7A00"
              />
              <path
                d="M12.4027 20.9444C15.0376 20.6057 16.0591 21.0194 19.5299 23.7896C29.7942 32.0464 37.781 37.1299 32.6391 37.6863C30.542 37.9276 28.4755 36.5895 16.148 27.3307C9.35761 22.1802 8.88062 21.4206 12.4027 20.9444Z"
                fill="#CC7A00"
              />
            </svg>
            <span className="border-b-[3px] sm:border-b-[4px] border-dotted border-[#CC7A00] pb-1 inline-block sm:pr-10">
              Home
            </span>
          </a>
          <a href="#" className="text-[#664000] w-full text-right sm:pr-10">
            About Mandala
          </a>
          <a href="#" className="text-[#664000] w-full text-right sm:pr-10">
            Is this You?
          </a>
          <a href="#" className="text-[#664000] w-full text-right sm:pr-7">
            Guidance
          </a>
          <a href="#" className="text-[#664000] w-full text-right sm:pr-7">
            Article
          </a>
        </nav>
      </div>

      {/* Middle Section (Contact Info) */}
      <div className="pt-4 flex flex-col items-center justify-center mt-6 sm:mt-10 px-2 sm:px-10">
        <div className="flex items-center justify-center space-x-2 text-[#664000] w-full max-w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="#664000"
          >
            <circle cx="12" cy="12" r="12" />
            <path
              fill="#FFD999"
              d="M17.5 8.5h-11l5.5 4 5.5-4zm-11 1v6h11v-6l-5.5 4-5.5-4z"
            />
          </svg>
          <p className="font-[Lato] text-[13px] sm:text-[19px] leading-[100%] text-center sm:text-right text-[#664000] break-all overflow-hidden">
            clayboykin@gmail.com
          </p>
        </div>
        <div className="flex items-center justify-center space-x-2 mt-2 text-[#664000] w-full max-w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2 5.5C2 4.67 2.67 4 3.5 4h3a1 1 0 01.93.63l1.26 3.02a1 1 0 01-.27 1.11l-1.7 1.7a15.05 15.05 0 006.36 6.36l1.7-1.7a1 1 0 011.11-.27l3.02 1.26a1 1 0 01.63.93v3c0 .83-.67 1.5-1.5 1.5h-1C9.27 21 3 14.73 3 7V5.5z"
            />
          </svg>
          <span className="font-[Lato] text-[13px] sm:text-[19px] leading-[100%] text-[#664000] whitespace-nowrap">
            512.971.2895
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-4 mb-4">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#664000] w-10 h-10 flex items-center justify-center rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#FDEDD0"
            >
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 
                       23.403.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 
                       1.893-4.788 4.659-4.788 1.325 0 2.463.099 
                       2.794.143v3.24l-1.918.001c-1.505 
                       0-1.797.716-1.797 1.766v2.316h3.59l-.467 
                       3.622h-3.123V24h6.116C23.403 24 24 23.403 
                       24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#664000] w-10 h-10 flex items-center justify-center rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#FDEDD0"
            >
              <path d="M20.447 20.452H17.21V14.98c0-1.304-.026-2.981-1.816-2.981
                       -1.816 0-2.096 1.418-2.096 2.883v5.57H9.065V9h3.104v1.561h.045
                       c.433-.82 1.494-1.683 3.073-1.683 3.287 0 3.895 2.164 3.895 
                       4.977v6.597zM5.337 7.433a1.802 1.802 0 1 1 0-3.604 
                       1.802 1.802 0 0 1 0 3.604zM6.813 20.452H3.862V9h2.951v11.452zM22.225 
                       0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 
                       1.771 24h20.451C23.2 24 24 23.226 24 
                       22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#664000] w-10 h-10 flex items-center justify-center rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#FDEDD0"
            >
              <path d="M23.498 6.186a2.974 2.974 0 0 0-2.094-2.103C19.233 3.5 
                       12 3.5 12 3.5s-7.233 0-9.404.583A2.974 2.974 0 0 0 
                       .502 6.186 31.29 31.29 0 0 0 0 12a31.29 31.29 0 0 0 
                       .502 5.814 2.974 2.974 0 0 0 2.094 2.103C4.767 20.5 
                       12 20.5 12 20.5s7.233 0 9.404-.583a2.974 2.974 0 0 0 
                       2.094-2.103A31.29 31.29 0 0 0 24 12a31.29 31.29 0 0 0 
                       -.502-5.814zM9.75 15.568V8.432L15.818 12l-6.068 3.568z" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <p className="font-[Lato] font-semibold text-[12px] sm:text-[19px] mb-4 sm:mb-6 text-center text-[#664000] px-2 sm:px-4 break-words leading-tight">
          © 2025 Clay Boykin. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default RightSidebar;