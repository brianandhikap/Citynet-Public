import React from 'react';

export const HeroSection = () => {
  return (
    <section className="bg-hero-gradient py-5 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-start animate-fade-up">
          <img 
            src="/logo.png" 
            alt="Citynet Logo" 
            className="w-[179px] h-auto mb-4" 
          />
        </div>
      </div>
    </section>
  );
};