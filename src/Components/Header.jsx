import React from 'react'

const Header = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 flex justify-between items-center rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg py-4 px-12">
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