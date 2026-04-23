import { Link } from "react-router";

type NoticiaCardProps = {
  id: number;
  titulo: string;
  subtitulo: string;
  imagem: string;
  autor: string;
  data: string;
  tags?: string[];
};

export default function NoticiaCard({
  id,
  titulo,
  subtitulo,
  imagem,
  autor,
  data,
  tags = [],
}: NoticiaCardProps) {
  return (
    <Link to={`/noticia/${id}`} className="noticia-card">
      <img src={imagem} alt={titulo} />

      <div>
        <h3>{titulo}</h3>
        <p>{subtitulo}</p>
        <small>{autor} • {data}</small>

        <div className="card-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}