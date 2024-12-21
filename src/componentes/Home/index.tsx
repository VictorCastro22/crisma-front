import Header from '../Header';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      
      <main className="p-4">
        <section id="inicio" className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold">Bem-vindo ao Painel dos Catequistas</h2>
          <p className="mt-2">Aqui você pode gerenciar informações importantes dos crismandos, acompanhar o calendário de eventos e verificar presenças.</p>
        </section>

        <section id="crismandos" className="p-4 mt-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold">Crismandos</h2>
          <p className="mt-2">Veja a lista completa dos crismandos e suas informações detalhadas.</p>
        </section>

        <section id="calendario" className="p-4 mt-4 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold">Calendário</h2>
          <p className="mt-2">Acompanhe os eventos e atividades programadas.</p>

        </section>

        <section id="presencas" className="p-4 mt-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold">Presenças</h2>
          <p className="mt-2">Verifique e registre as presenças dos crismandos nas atividades.</p>

        </section>
      </main>
      
      <footer className="p-4 bg-blue-500 text-white">
        <p>Endereço da Paróquia, Maranguape, CE</p>
        <div className="mt-2 flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;