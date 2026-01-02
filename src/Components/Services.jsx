import React from 'react'

const Services = () => {
  return (
    <section id="services" className="pb-2 pt-2 px-4 md:px-8 max-w-[95%] mx-auto relative">
      <div className="w-full h-px bg-slate-200 mb-20"></div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-6">

        {/* Text Column */}
        <div className="flex flex-col  pr-8">
          <div>
            <div className="border border-slate-200 rounded-full px-5 py-2 inline-block mb-10 text-slate-700 font-medium text-sm">
              Services
            </div>
            <h2 className="text-xl md:text-3xl font-normal leading-tight text-slate-800 tracking-tight">
              Explore our full range of coaching, training, and tennis experiences. From first serve to match point — we've got the right program for you.
            </h2>
          </div>

          <div className="mt-28">
            <button className="bg-[#0f172a] text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-black transition-colors group">
              Explore More
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </button>
          </div>
        </div>

        {/* Card 1: Programs */}
        <div className="relative rounded-[2.5rem] overflow-hidden h-[400px] lg:h-[400px] group">
          <img
            src="https://sportsandgames.co.tt/wp-content/uploads/2022/06/Tenins.jpg"
            alt="Training Programs"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>

          <div className="absolute top-8 left-8">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full text-sm font-medium">
              Training Programs
            </div>
          </div>
          <div className="absolute bottom-8 left-8 right-16">
            <p className="text-white text-xl md:text-2xl font-normal leading-snug">Programs designed for all ages and abilities.</p>
          </div>
          <div className="absolute bottom-8 right-8 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
            ↗
          </div>
        </div>

        {/* Card 2: Court Access */}
        {/* Card 2: Court Access */}
        <div className="flex flex-col h-full">
          <div className="relative rounded-[2.5rem] overflow-hidden h-[300px] w-full group">
            <img
              src="https://media.istockphoto.com/photos/tennis-balls-in-practice-basket-picture-id1172570987?k=20&m=1172570987&s=612x612&w=0&h=DMi_BJizIm4oNt2-18Gdf_p8Li51VsPYoBxEd_8C4vI="
              alt="Court Access"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>

            <div className="absolute top-8 left-8">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full text-sm font-medium">
                Court Access
              </div>
            </div>
            <div className="absolute bottom-8 left-8 text-white text-2xl font-normal drop-shadow-md">
              Hourly Court Rental
            </div>
          </div>

          <div className="mt-8 px-2">
            <p className="text-slate-800 text-xl font-normal leading-snug">
              Step into a space built for players — to grow, compete, and thrive.
            </p>
            <div className="flex gap-4 mt-8 justify-start">
              <button className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-800 text-xl">←</button>
              <button className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-800 text-xl">→</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services