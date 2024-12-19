import { useState, useEffect } from 'react';
import CrismandoCard from '../CrismandoCard';

interface Crismando {
  turma: string | null;
  crismando: string | null;
  presenca: string;
  catequista: string | null;
}

const Faltas: React.FC = () => {
  const [crismandos, setCrismandos] = useState<Crismando[]>([]);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;
    fetch(`${API_URL}/reports`)
      .then((response) => response.json())
      .then((data) => {
        setCrismandos(data);
      });
  }, []);

  const ausencias = crismandos.reduce((acc: { [key: string]: number }, crismando) => {
    if (crismando.presenca === 'Ausente') {
      acc[crismando.crismando || ''] = (acc[crismando.crismando || ''] || 0) + 1;
    }
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-4">Total de Faltas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {crismandos.map((crismando) => (
          <CrismandoCard
            key={`${crismando.turma ?? 'unknown-turma'}-${crismando.crismando ?? 'unknown-crismando'}`}
            turma={crismando.turma ?? 'Turma desconhecida'}
            crismando={crismando.crismando ?? 'Crismando desconhecido'}
            ausenteCount={ausencias[crismando.crismando || ''] || 0}
            catequista={crismando.catequista ?? 'Catequista desconhecido'}
          />
        ))}
      </div>
    </div>
  );
};

export default Faltas;