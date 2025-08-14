import React from "react";

const MeetClayBoykin = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:py-16">
      <div className="max-w-7xl mx-auto">
        {/* === Header Section === */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {/* Replaced the complex SVG text with a semantic and responsive h1 tag.
              The original SVG was not scalable. This approach is better for accessibility, SEO, and responsiveness.
            */}
           <div className="flex">
  <h1 className="font-playfair text-[52px] font-bold italic tracking-tighter text-[#664000] sm:text-5xl lg:text-6xl flex flex-wrap gap-2 items-center justify-center">
    <h1>
      Meet
    </h1>
    
    <svg
      width="74"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block align-middle text-center"
    >
      <path
        d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z"
        fill="currentColor"
      />
    </svg>

     <h1>
      Clay
    </h1>
     Boykin
  </h1>
</div>

            
          </div>

          <p className="font-lato mx-2 max-w-4xl text-lg font-semibold text-[#664000]/50 sm:text-xl">
            Founder of The Mandala Within™ — a guide for men & women on the path
            inward.
          </p>
        </div>

        {/* === Main Content === */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-start gap-8 lg:mt-16 lg:grid-cols-5 lg:gap-12">
          
          {/* Left Side - Photo Collage */}
          <div className="lg:col-span-3">
            <div className="relative">
              <img
                src="/meet1.png"
                alt="A collage of photos showing Clay Boykin in his office, outdoors, and with others."
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          {/* Replaced inline styles with Tailwind classes for responsive typography and consistent styling.
            The text now uses a base size and scales up on larger screens (lg:).
            The color opacity is handled by Tailwind's syntax (e.g., /35 for 35%).
          */}
          <div className="my-auto space-y-6 m-4 font-lato text-lg font-bold italic leading-relaxed text-[#664000] lg:col-span-2 lg:text-xl">
            <p>
              <span className="font-normal not-italic text-[#664000]/35">
                How's This:{" "}
              </span>
              Clay Boykin redefines what it means to be a transformational coach.
            </p>
            <p>
              <span className="font-normal not-italic text-[#664000]/35">
                A{" "}
              </span>
              former Marine officer
              <span className="font-normal not-italic text-[#664000]/35">
                {" "}and corporate executive with{" "}
              </span>
              nearly four decades in the business world, Clay reached a point of
              profound burnout
              <span className="font-normal not-italic text-[#664000]/35">
                {" "} & {" "}
              </span>
              spiritual disconnection. His soul whispered
              <span className="font-normal not-italic text-[#664000]/35">
                {" "}what his mind had long ignored:{" "}
              </span>
              “This isn’t it.”
            </p>
            <p>
              <span className="font-normal not-italic text-[#664000]/35">
                That whisper sparked{" "}
              </span>
              many years of deep inner work—beyond titles
              <span className="font-normal not-italic text-[#664000]/35">
                {" "}&{" "}
              </span>
              tactics—into meditation halls, men’s circles, ancient wisdom
              traditions,
              <span className="font-normal not-italic text-[#664000]/35">
                {" "}&{" "}
              </span>
              spiritual exploration.
            </p>
            <p>
              <span className="font-normal not-italic text-[#664000]/35">
                Clay eventually founded the Men’s Fellowship Network and
                developed{" "}
              </span>
              The Mandala Within™—a holistic framework
              <span className="font-normal not-italic text-[#664000]/35">
                {" "}for{" "}
              </span>
              emotional wholeness, spiritual balance,
              <span className="font-normal not-italic text-[#664000]/35">
                {" "}&{" "}
              </span>
              authentic self-leadership.
            </p>
            <p>
              <span className="font-normal not-italic text-[#664000]/35">
                Today,{" "}
              </span>
              he works with individuals
              <span className="font-normal not-italic text-[#664000]/35">
                {" "}across the gender spectrum{" "}
              </span>
              to help them reclaim their center
              <span className="font-normal not-italic text-[#664000]/35">
                {" "}and{" "}
              </span>
              rediscover clarity, meaning,
              <span className="font-normal not-italic text-[#664000]/35">
                {" "}&{" "}
              </span>
              purpose—for a more fulfilling life.
            </p>
          </div>
        </div>

        {/* === Quote Section === */}
        <div className="my-16 text-center lg:my-24 m-4">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            {/* Decorative Quote SVGs */}
            <div className="absolute -top-4 left-0 sm:left-4">
               <div className="absolute left-0 top-0 sm:left-[-2.5rem] sm:-top-2">
                            <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.9183 10.0746L19.6092 10.0585C27.1779 9.92994 24.655 -1.19023 16.5561 1.7505C10.5782 3.91989 11.687 13.8991 18.0826 15.5382C20.9109 16.2613 24.0605 15.7471 21.7143 14.9436C19.7057 14.2687 18.0826 12.3243 18.1951 10.7334C18.2273 10.3799 18.5326 10.0746 18.9183 10.0746Z" fill="#664000" fillOpacity="0.25" />
                                <path d="M4.14977 1.34928C-3.12967 4.14538 -0.172912 16.3583 7.91 16.8886C10.0151 17.0332 10.5615 16.535 8.97059 15.9405C7.42793 15.362 5.48353 12.6301 5.27463 10.7821C5.22642 10.4125 5.51564 10.1072 5.88523 10.1072C8.0064 10.1072 8.89025 10.1073 10.1276 8.40388C13.1647 4.19365 9.13129 -0.562999 4.14977 1.34928Z" fill="#664000" fillOpacity="0.25" />
                            </svg>
                        </div>

                        {/* Top Right Quote */}

              {/* SVG content... */}
            </div>
            <div className="absolute -top-4 right-0 sm:right-4">
              {/* SVG content... */}
                <div className="absolute right-0 top-0 sm:right-[-2.5rem] sm:-top-2">
                            <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.22237 7.75306L4.53138 7.76914C-3.03731 7.8977 -0.514413 19.0179 7.58457 16.0771C13.5624 13.9077 12.4536 3.92855 6.05798 2.28945C3.22976 1.56632 0.0801582 2.08055 2.42629 2.88403C4.43497 3.55895 6.05798 5.5033 5.94549 7.09419C5.91335 7.44772 5.60804 7.75306 5.22237 7.75306Z" fill="#664000" fillOpacity="0.25" />
                                <path d="M19.9909 16.4784C27.2703 13.6823 24.3135 1.46936 16.2306 0.939062C14.1255 0.794437 13.5792 1.29259 15.17 1.88717C16.7127 2.46567 18.6571 5.1975 18.866 7.0455C18.9142 7.4151 18.625 7.72045 18.2554 7.72045C16.1342 7.72045 15.2504 7.72039 14.013 9.42376C10.9759 13.634 15.0093 18.3906 19.9909 16.4784Z" fill="#664000" fillOpacity="0.25" />
                            </svg>
                        </div>
            </div>

            {/* Quote Text - Replaced inline style with responsive Tailwind classes */}
            <p style={{ fontFamily: "'La Belle Aurore', cursive" }}
            className=" px-4 text-2xl font-light leading-normal text-[#CC7A00] sm:text-3xl sm:leading-relaxed">
              What began as a personal search became a life’s purpose:
              <br />
              To hold space for men to rediscover their inner truth.
            </p>
          </div>
        </div>

        {/* === CTA Section === */}
        <div className="text-center">
          {/* Button styles converted to Tailwind classes.
            Removed fixed width/height and used padding for adaptive sizing.
            Added hover and focus states for better UX and accessibility.
          */}
          <button
            className="font-lato rounded-lg  border-2 border-[#CC7A00]/30 bg-[#CC7A00]/10 px-6 py-4
             text-base font-bold text-[#CC7A00] shadow-[0_8px_24px_0_#995C001A]
             transition-all duration-300 hover:scale-105 hover:bg-[#CC7A00]/20 
             focus:outline-none focus:ring-2 focus:ring-[#CC7A00]/50 focus:ring-offset-2"
          >
            Watch Story video
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetClayBoykin;