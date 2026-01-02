import React from 'react'

const Header = () => {
  return (
    <nav className="w-full position-fixed sticky top-0 z-50 flex justify-between rounded-3xl items-center py-6 px-12 bg-white/30 backdrop-blur-xl">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-tight text-slate-800">
        Horizon Courts
      </h1>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 items-center">
        <a href="#about" className="text-sm font-medium text-slate-600 border border-transparent focus:border-slate-500 px-2 py-1 rounded-4xl transition-all outline-none">About Us</a>
        <a href="#services" className="text-sm font-medium text-slate-600 border border-transparent focus:border-slate-500 px-2 py-1 rounded-4xl transition-all outline-none">Services</a>
        <a href="#coaches" className="text-sm font-medium text-slate-600 border border-transparent focus:border-slate-500 px-2 py-1 rounded-4xl transition-all outline-none">Coaches</a>
        <a href="#events" className="text-sm font-medium text-slate-600 border border-transparent focus:border-slate-500 px-2 py-1 rounded-4xl transition-all outline-none">Events</a>
        <a href="#contacts" className="text-sm font-medium text-slate-600 border border-transparent focus:border-slate-500 px-2 py-1 rounded-4xl transition-all outline-none">Contacts</a>
      </div>

      {/* CTA Button */}
      <button className="bg-[#1e293b] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-black transition-colors flex items-center gap-2 cursor-pointer">
        Book now
        <span className="text-xs">↗</span>
      </button>
    </nav>
  )
}

export default Header