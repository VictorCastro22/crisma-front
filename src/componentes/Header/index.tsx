import { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Painel dos Catequistas</h1>
      <nav className="hidden md:flex space-x-4">
        <a href="#inicio" className="hover:underline">Início</a>
        <a href="#crismandos" className="hover:underline">Crismandos</a>
        <a href="#calendario" className="hover:underline">Calendário</a>
        <a href="#presencas" className="hover:underline">Presenças</a>
      </nav>
      <button 
        type='button'
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden p-2 bg-white text-blue-500 rounded-md"
      >
        ☰
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-500 text-white flex flex-col items-center space-y-4 py-4 md:hidden"> 
        <button type='button' onClick={() => setIsOpen(false)} className="hover:underline">Início</button> 
        <button type='button' onClick={() => setIsOpen(false)} className="hover:underline">Crismandos</button> 
        <button type='button' onClick={() => setIsOpen(false)} className="hover:underline">Calendário</button> 
        <button type='button' onClick={() => setIsOpen(false)} className="hover:underline">Presenças</button> </div>
      )}
    </header>
  );
};

export default Header;