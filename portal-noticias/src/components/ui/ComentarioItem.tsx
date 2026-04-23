type ComentarioItemProps = {
  nome: string;
  data: string;
  texto: string;
  avatar?: string;
};

export default function ComentarioItem({
  nome,
  data,
  texto,
  avatar,
}: ComentarioItemProps) {
  return (
    <div className="comentario-item">
      <img
        src={avatar || "https://via.placeholder.com/48"}
        alt={nome}
      />

      <div>
        <strong>{nome}</strong>
        <small>{data}</small>
        <p>{texto}</p>
      </div>
    </div>
  );
}