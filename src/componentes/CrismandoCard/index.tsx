interface CrismandoCardProps {
  turma: string;
  crismando: string;
  ausenteCount: number;
}

const CrismandoCard: React.FC<CrismandoCardProps> = ({ turma, crismando, ausenteCount }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h2 className="text-xl font-bold">{crismando}</h2>
      <p>Turma: {turma}</p>
      <p>Ausências: {ausenteCount}</p>
    </div>
  );
};

export default CrismandoCard;