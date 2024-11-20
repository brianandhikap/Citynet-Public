import React from 'react';

export const CoverageSection = () => {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <div className="w-full h-full bg-[url('/indonesia-map.svg')] bg-no-repeat bg-contain bg-right" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl">
          <h3 className="text-gray-500 text-lg mb-4">
            DAPATKAN JANGKAUAN LUAS LAYANAN DAN SINYAL KUAT DARI CITYNET
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Layanan internet Kami siap melayani anda 24jam
          </h2>
        </div>
      </div>
    </section>
  );
};