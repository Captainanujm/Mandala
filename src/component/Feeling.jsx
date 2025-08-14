import React from 'react';

const FeelingLostSection = () => {
    // Dotted underline ke liye common classes taaki code repeat na ho.
    const dottedUnderlineClasses = "underline decoration-dotted decoration-[#664000] underline-offset-4 decoration-2";

    return (
        <div className="py-16 px-8 pr-10 sm:px-0 sm:pr-0">
            <div className="max-w-2xl mx-auto text-center">

                {/* Main Heading */}
                <div className="relative mb-4">
                    {/* Decorative SVG */}
                    <div className="absolute -top-2 -left-3 sm:left-7">
                         <svg
                            width="25"
                            height="32"
                            viewBox="0 0 21 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-auto w-7 text-[#CC7A00]"
                        >
                            <path
                                d="M7.06628 1.52582C9.36228 0.321818 9.78228 0.573931 15.5503 6.39793C20.9543 11.8299 21.2622 12.2778 20.1422 13.0058C18.1262 14.3498 17.2583 13.8458 11.0703 7.71385C6.03028 2.70185 5.72228 2.22582 7.06628 1.52582Z"
                                fill="currentColor"
                            />
                            <path
                                d="M0.962409 20.7619C2.50241 18.3819 2.53041 18.4659 10.8744 19.0259C17.0344 19.4459 18.5464 19.9499 17.8744 21.2659C17.1184 22.6939 16.8384 22.7499 8.97044 22.5259C1.52241 22.3299 0.0104095 22.2179 0.962409 20.7619Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>

                    {/* h2 Heading - Responsive font-size ke saath */}
                    <h2 className=" font-playfair text-[50px] font-bold tracking-tight text-[#664000] sm:text-5xl">
                        Feeling Lost in the Noise?
                    </h2>
                </div>

                {/* Subheading with emphasis - Responsive font-size */}
                <div className="space-y-2">
                    <p className="font-lato text-xl font-extrabold italic text-[#664000] sm:text-2xl">
                        In{' '}
                        <span className={dottedUnderlineClasses}>
                            Transition?
                        </span>{' '}
                        <span className={dottedUnderlineClasses}>
                            Stuck?
                        </span>{' '}
                        <span className={dottedUnderlineClasses}>
                            Burned Out?
                        </span>
                    </p>
                    <p className="font-lato text-xl font-semibold text-[#664000]/50 sm:text-2xl">
                        You're not alone—and there is another way forward.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="mt-8 mb-6">
                    <a href="https://calendly.com/clayboykin" target="_blank" rel="noopener noreferrer">
                        <button className="w-full cursor-pointer rounded-lg bg-[#CC7A00] px-6 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#A36200] hover:shadow-xl sm:w-auto">
                            Book Complimentary 1:1 Session
                        </button>
                    </a>
                </div>

                {/* Bottom text */}
                <div className="font-lato mx-auto max-w-md space-y-2 text-base font-medium leading-relaxed text-[#664000]/50">
                    <p>
                        A simple, confidential space to explore whether this journey is right for you.
                    </p>
                    <p>
                        Discover clarity, purpose, and alignment—at your pace.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default FeelingLostSection;