import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import CrismandoCard from '../CrismandoCard';

interface Crismando {
  turma: string;
  crismando: string;
  presenca: string;
}

const Faltas: React.FC = () => {
  const [crismandos, setCrismandos] = useState<Crismando[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'presencas'));
      const data = querySnapshot.docs.map((doc) => doc.data() as Crismando);
      setCrismandos(data);
    };
    fetchData();
  }, []);

  const ausencias = crismandos.reduce((acc: { [key: string]: number }, crismando) => {
    if (crismando.presenca === 'Ausente') {
      acc[crismando.crismando] = (acc[crismando.crismando] || 0) + 1;
    }
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-4">Total de Faltas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {crismandos.map((crismando) => (
          <CrismandoCard
            key={`${crismando.turma}-${crismando.crismando}`}
            turma={crismando.turma}
            crismando={crismando.crismando}
            ausenteCount={ausencias[crismando.crismando] || 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Faltas;