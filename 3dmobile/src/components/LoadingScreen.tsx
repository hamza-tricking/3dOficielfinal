'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="relative">
        {/* Animated circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 border-4 border-white/20 rounded-full animate-ping"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-white/30 rounded-full animate-ping" style={{animationDelay: '200ms'}}></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-white/40 rounded-full animate-ping" style={{animationDelay: '400ms'}}></div>
        </div>
        
        {/* Logo/Text */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-white text-4xl font-bold mb-2 animate-pulse">
            3DMobile.net
          </div>
          <div className="text-white/80 text-sm animate-pulse">
            Votre réparateur de confiance
          </div>
        </div>
      </div>
      
      {/* Loading bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div className="h-full bg-white" 
             style={{
               animation: 'loading 1.5s ease-in-out forwards'
             }}>
        </div>
      </div>
    </div>
  );
}
