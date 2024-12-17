import  { useState } from 'react';

const ComputarPresenca: React.FC = () => {
  const [turma, setTurma] = useState('');
  const [crismando, setCrismando] = useState('');
  const [presenca, setPresenca] = useState('Presente');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ turma, crismando, presenca }),
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Computar Presença</h1>
        <div className="card p-6 bg-white rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="turma" className="block text-sm font-medium text-gray-700">
                Turma:
              </label>
              <input
                type="text"
                id="turma"
                value={turma}
                onChange={(e) => setTurma(e.target.value)}
                required
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="crismando" className="block text-sm font-medium text-gray-700">
                Nome do Crismando:
              </label>
              <input
                type="text"
                id="crismando"
                value={crismando}
                onChange={(e) => setCrismando(e.target.value)}
                required
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="presenca" className="block text-sm font-medium text-gray-700">
                Presença:
              </label>
              <select
                id="presenca"
                value={presenca}
                onChange={(e) => setPresenca(e.target.value)}
                required
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
                <option value="Presente">Presente</option>
                <option value="Ausente">Ausente</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComputarPresenca;