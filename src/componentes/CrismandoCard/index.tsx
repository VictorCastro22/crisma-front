interface CrismandoCardProps {
  turma: string;
  crismando: string;
  ausenteCount: number;
  catequista: string;
}

const CrismandoCard: React.FC<CrismandoCardProps> = ({ turma, crismando, ausenteCount, catequista }) => {
  return (
    <div className="card p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{crismando}</h2>
      <p>Turma: {turma}</p>
      <p>Catequista: {catequista}</p>
      <p>Faltas: {ausenteCount}</p>
    </div>
  );
};

export default CrismandoCard;