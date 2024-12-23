import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="/catequistas.jpg"
        alt="Crisma de Jovens"
        className="w-full h-auto max-h-screen object-cover filter blur-sm"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className="text-white font-semibold"
          style={{ fontFamily: 'Nunito Sans', fontSize: '36px' }}
        >
          Crisma de Jovens
        </h2>
      </div>
    </div>
  );
};

export default Banner;