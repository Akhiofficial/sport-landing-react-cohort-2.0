import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-[95%] mx-auto font-sans">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-16 gap-8">
        <div className="border border-slate-200 rounded-full px-5 py-2">
          <span className="text-sm font-medium text-slate-700">About Horizon</span>
        </div>
        <h2 className="text-xl md:text-2xl text-slate-800 max-w-2xl font-normal leading-relaxed">
          At Horizon, we don't just play tennis — we live it. Since 2021,
          our club has been a home for players of all levels, from eager
          beginners to seasoned pros.
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">

        {/* Card 1: Features (Dark) */}
        <div className="bg-[#0f172a] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden h-[400px]">
          <div>
            <div className="w-14 h-14 mb-8">
              {/* Court Icon */}
              <img
                src="/courtIcon.png"
                className="object-contain h-10 brightness-0 invert"
                alt="Court Icon"
              />
            </div>
            <p className="text-xl md:text-2xl font-light leading-snug text-white/90">
              Professional hard courts with tournament-grade lighting & climate control — play in <span className="font-medium text-white">perfect conditions</span>, in any season.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <div className="bg-blue-400 w-16 h-9 rounded-full p-1 flex items-center cursor-pointer relative">
              <div className="bg-white w-7 h-7 rounded-full shadow-md absolute right-1"></div>
            </div>
            <span className="text-white/40 font-light tracking-wide text-lg">Game Mode</span>
          </div>
        </div>

        {/* Card 2: Image (Center) */}
        <div className="relative rounded-[2.5rem] overflow-hidden h-[400px] group">
          <img
            src="https://media.istockphoto.com/id/1415325438/photo/pilates-trainer-with-yoga-mat-on-sky-background-workout.jpg?s=612x612&w=0&k=20&c=Eid8vUKMf-8zoFEzB2BVITf-pkKqM7lf14tCGnQFNow="
            alt="Tennis Player"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-blue-500/10"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
            <div className="inline-block backdrop-blur-md bg-white/20 border border-white/30 text-white px-8 py-3 rounded-full text-base font-medium shadow-lg">
              Private & Group Lessons
            </div>
          </div>
        </div>

        {/* Card 3: Stats (Light) */}
        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between h-[400px]">
          <div>
            <h3 className="text-7xl font-normal text-slate-800 mb-2 -ml-1">100+</h3>
            <p className="text-lg font-medium text-slate-800 mb-2">Pro Coaches</p>
            <p className="text-slate-800 font-light mb-2 leading-relaxed text-sm">
              Certified professionals ready to boost your game from first serve to tournament level.
            </p>
          </div>

          <div className="space-y-5">
            {/* Stat Row 1 */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-slate-700 w-24">Beginner</span>
              <div className="flex-1 flex gap-1.5">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`h-3 w-3 rounded-full ${i < 8 ? 'bg-blue-400' : 'bg-slate-200'}`}></div>
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-800 w-6 text-right">55</span>
            </div>
            {/* Stat Row 2 */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-slate-700 w-24">Intermediate</span>
              <div className="flex-1 flex gap-1.5">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`h-3 w-3 rounded-full ${i < 5 ? 'bg-blue-400' : 'bg-slate-200'}`}></div>
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-800 w-6 text-right">40</span>
            </div>
            {/* Stat Row 3 */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-slate-700 w-24">Advanced</span>
              <div className="flex-1 flex gap-1.5">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`h-3 w-3 rounded-full ${i < 3 ? 'bg-blue-400' : 'bg-slate-200'}`}></div>
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-800 w-6 text-right">35</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="col-span-full mt-24 mb-0">
          <h3 className="text-2xl md:text-3xl text-slate-800 font-normal text-center mb-16">
            A few more facts about us in numbers
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-slate-200">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-semibold text-slate-900 mb-3">12 000+</span>
              <span className="text-slate-600 font-light text-sm md:text-base">Hours of play annually</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-semibold text-slate-900 mb-3">89%</span>
              <span className="text-slate-600 font-light text-sm md:text-base">Player Retention Rate</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-semibold text-slate-900 mb-3">1,200+</span>
              <span className="text-slate-600 font-light text-sm md:text-base">Active Members</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-semibold text-slate-900 mb-3">125+</span>
              <span className="text-slate-600 font-light text-sm md:text-base">Annual Tournaments</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection