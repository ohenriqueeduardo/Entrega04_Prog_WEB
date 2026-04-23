import { Link } from "react-router";

type SidebarProps = {
  tipo?: "editor" | "admin";
};

export default function Sidebar({ tipo = "admin" }: SidebarProps) {
  if (tipo === "editor") {
    return (
      <aside className="sidebar">
        <Link to="/editor/painel">Painel</Link>
        <Link to="/editor/perfil">Meu Perfil</Link>
      </aside>
    );
  }

  return (
    <aside className="sidebar">
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/ufs">UFs</Link>
      <Link to="/admin/cidades">Cidades</Link>
      <Link to="/admin/tags">Tags</Link>
      <Link to="/admin/perfis">Perfis</Link>
      <Link to="/admin/noticias">Notícias</Link>
      <Link to="/admin/usuarios">Usuários</Link>
      <Link to="/admin/comentarios">Comentários</Link>
    </aside>
  );
}