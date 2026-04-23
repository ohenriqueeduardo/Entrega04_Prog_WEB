import { Link } from "react-router";

type TagBadgeProps = {
  nome: string;
  slug: string;
};

export default function TagBadge({ nome, slug }: TagBadgeProps) {
  return (
    <Link to={`/busca/tag/${slug}`} className="tag-badge">
      {nome}
    </Link>
  );
}