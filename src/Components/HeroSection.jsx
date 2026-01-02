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
        <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center text-center px-4 overflow-hidden rounded-3xl mx-auto max-w-[95%] mt-6">
            {/* Background Overlay & Image */}
            <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply z-10"></div>
                {/* We will set the image via inline style or CSS class once we have the file path */}
                <img
                    src="../public/heroimage.png"
                    alt="Tennis Court"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-center mt-[-50px]">
                {/* Headline */}
                <h1 className="text-5xl md:text-6xl text-white  mb-6 leading-tight tracking-tight drop-shadow-lg">
                    Unleash Your Inner Champion Today.
                    <span className="block mt-4 opacity-90">All In One Place.</span>
                </h1>

                {/* Subhead */}
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light leading-relaxed drop-shadow-md">
                    Join the ultimate tennis experience — where passion meets performance,
                    and every swing brings you closer to victory.
                </p>

                {/* CTA */}
                <button className="bg-[#1e293b] text-white text-base md:text-lg font-medium px-8 py-4 rounded-full hover:bg-black transition-all transform hover:scale-105 shadow-xl flex items-center gap-2 cursor-pointer">
                    Start your own journey
                    <span>→</span>
                </button>
            </div>

            {/* Bottom Left: Pro Coaches Badge */}
            <div className="absolute bottom-12 left-12 z-20 flex items-center gap-4 animate-fade-in-up">
                <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center overflow-hidden">
                        <img src="https://i.pravatar.cc/100?img=1" alt="Coach 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center overflow-hidden">
                        <img src="https://i.pravatar.cc/100?img=2" alt="Coach 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center overflow-hidden">
                        <img src="https://i.pravatar.cc/100?img=3" alt="Coach 3" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="text-left">
                    <p className="text-sm font-semibold text-white/90 drop-shadow-md">Train with real professionals.</p>
                    <p className="text-xs text-white/70 drop-shadow-md">Get the real results.</p>
                </div>
            </div>

            {/* Bottom Right: Social Links */}
            <div className="absolute bottom-12 right-12 z-20 hidden md:flex items-center gap-6 text-white/90 text-sm font-medium">
                <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Instagram <span className="text-xs">↗</span></a>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Facebook <span className="text-xs">↗</span></a>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Tik Tok <span className="text-xs">↗</span></a>
            </div>
        </div>
    )
}

export default HeroSection
