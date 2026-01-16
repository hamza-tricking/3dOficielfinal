

"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
   <>  
     {/* Header with contact info - fixed */}
     <header className="bg-blue-500/50 backdrop-blur-lg text-white shadow-lg border-b border-white/30 fixed top-0 left-0 right-0 z-40">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center py-3 text-xs">
            <a href="tel:0980677518" className="hover:underline flex items-center gap-2 transition-colors hover:text-blue-100">
              <span className="text-lg ml-2">📞</span>
              <span className="font-semibold">09 80 67 75 18</span>
            </a>
            <div className="flex items-center gap-2">
              <span className="text-lg ">📍</span>
              <span className="font-semibold mr-2">70 avenue de la république, 44600 Saint-Nazaire</span>
            </div>
          </div>
        </div>           
      </header>
      
      {/* Navigation - sticky */}
      <nav className="bg-white/75 backdrop-blur-xl shadow-xl fixed top-12 left-0 right-0 z-50 border-b border-gray-100/50">
                <div className="container mx-auto px-4">
                  <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-rose-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">3D</span>
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent">3DMobile.net</div>
                    </div>
                    <ul className="hidden md:flex space-x-8">
                      <li><a href="/" className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 relative group py-2">
                        Accueil
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-rose-600 transition-all duration-300 group-hover:w-full"></span>
                      </a></li>
                      <li><a href="/reparations" className="text-gray-700 hover:text-rose-600 font-semibold transition-all duration-300 relative group py-2">
                        Réparations
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      </a></li>
                      <li><a href="/reconditionnes" className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 relative group py-2">
                        Reconditionnés
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-rose-600 transition-all duration-300 group-hover:w-full"></span>
                      </a></li>
                      <li><a href="/deblocage" className="text-gray-700 hover:text-rose-600 font-semibold transition-all duration-300 relative group py-2">
                        Déblocage
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      </a></li>
                      <li><a href="/contact" className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 relative group py-2">
                        Contact
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-rose-600 transition-all duration-300 group-hover:w-full"></span>
                      </a></li>
                    </ul>
                    {/* Mobile menu button - only visible on small screens */}
                    <button 
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors border-2 border-gray-300"
                    >
                      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Mobile Dropdown Menu - only visible on small screens */}
                <div className={`md:hidden absolute right-0 top-full w-64 bg-white shadow-2xl rounded-lg border border-gray-100 transition-all duration-300 ease-in-out transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
                }`}>
                  <ul className="py-2">
                    <li><a href="#" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-all duration-200">
                      Accueil
                    </a></li>
                    <li><a href="/reparations" className="block px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-semibold transition-all duration-200">
                      Réparations
                    </a></li>
                    <li><a href="/reconditionnes" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-all duration-200">
                      Reconditionnés
                    </a></li>
                    <li><a href="/deblocage" className="block px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-semibold transition-all duration-200">
                      Déblocage
                    </a></li>
                    <li><a href="/contact" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-all duration-200">
                      Contact
                    </a></li>
                  </ul>
                </div>
              </nav></>
        
  );
}
