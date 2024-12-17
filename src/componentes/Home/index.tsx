import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Teste Crisma</h1>
      <div className="flex space-x-4">
        <button
        type='button'
          className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          onClick={() => navigate('/faltas')}
        >
          Ver Faltas
        </button>
        <button
        type='button'
          className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          onClick={() => navigate('/computar')}
        >
          Computar Presença
        </button>
      </div>
    </div>
  );
};

export default Home;