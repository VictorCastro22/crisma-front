import { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 bg-white text-black flex justify-between items-center">
      <img src="/logo-r.png" alt="Logo Paroquial" className="h-16" />
      <nav className="hidden md:flex space-x-4">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="hover:underline text-[#444444] uppercase"
          style={{ fontFamily: 'Nunito Sans', fontSize: '15px' }}
        >
          Início
        </button>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="hover:underline text-[#444444] uppercase"
          style={{ fontFamily: 'Nunito Sans', fontSize: '15px' }}
        >
          Crismandos
        </button>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="hover:underline text-[#444444] uppercase"
          style={{ fontFamily: 'Nunito Sans', fontSize: '15px' }}
        >
          Calendário
        </button>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="hover:underline text-[#444444] uppercase"
          style={{ fontFamily: 'Nunito Sans', fontSize: '15px' }}
        >
          Presenças
        </button>
      </nav>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-3 text-[#444444] text-2xl rounded-md"
      >
        ☰
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-black flex flex-col items-center space-y-4 py-4 md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="hover:underline text-[#444444] uppercase"
            style={{ fontFamily: 'Nunito Sans', fontSize: '15px' }}
          >
            Início
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="hover:underline text-[#444444] uppercase"
            style={{ fontFamily: 'Nunito Sans', fontSize: '15px' }}
          >
            Crismandos
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="hover:underline text-[#444444] uppercase"
            style={{ fontFamily: 'Nunito Sans', fontSize: '15px' }}
          >
            Calendário
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="hover:underline text-[#444444] uppercase"
            style={{ fontFamily: 'Nunito Sans', fontSize: '15px' }}
          >
            Presenças
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;