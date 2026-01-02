import React from 'react'
// Assuming the image will be placed in assets. Importing correctly.
// Note: In Vite, we can import images directly if they are in src/assets
// or reference from public folder. I'll assume it's in public for simplicity or I will adjust after generation.
// For now, I'll use a placeholder URL if the file isn't there, but I intend to use the generated artifact.
// Since I can't know the exact path of the generated artifact in the user's project structure *automatically* mapped to code without moving it,
// I'll ask the user to move it or I will move it myself later.
// For now I will style it assuming a background image class or inline style.

const HeroSection = () => {
    return (
        <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center text-center px-4 overflow-hidden">
            {/* Background Overlay & Image */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply z-10"></div>
                {/* We will set the image via inline style or CSS class once we have the file path */}
                <img
                    src="hero_bg_tennis.png"
                    alt="Tennis Court"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
                {/* Badge */}
                <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-8 shadow-lg animate-fade-in-up">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">A</div>
                        <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">B</div>
                        <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">C</div>
                    </div>
                    <span className="text-sm font-semibold text-slate-800">Train with pro coaches</span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                    Unleash Your Inner <br /> Champion Today.
                </h1>

                {/* Subhead */}
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light leading-relaxed drop-shadow-md">
                    Join the ultimate tennis experience where passion meets performance,
                    and every swing brings you closer to victory.
                </p>

                {/* CTA */}
                <button className="bg-[#1e293b] text-white text-base md:text-lg font-medium px-8 py-4 rounded-full hover:bg-black transition-all transform hover:scale-105 shadow-xl flex items-center gap-2 cursor-pointer">
                    Start your journey
                    <span>→</span>
                </button>
            </div>

            {/* Floating Elements (Optional decoration) */}
            <div className="absolute bottom-10 right-10 z-20 text-white/80 text-xs hidden md:block">
                <p>Training / Matches / Social</p>
            </div>
        </div>
    )
}

export default HeroSection
