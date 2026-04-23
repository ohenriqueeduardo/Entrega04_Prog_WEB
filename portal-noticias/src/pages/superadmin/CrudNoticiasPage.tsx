import { Link } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/ui/Card";
import SearchBar from "../../components/ui/SearchBar";
import StatusBadge from "../../components/ui/StatusBadge";

const noticias = [
  { id: 1, titulo: "Tecnologia transforma serviços públicos", autor: "Ana", uf: "SP", publicada: true, data: "23/04/2026", views: 1200 },
  { id: 2, titulo: "Educação recebe investimentos", autor: "Marina", uf: "MG", publicada: false, data: "22/04/2026", views: 340 },
];

export default function CrudNoticiasPage() {
  return (
    <>
      <Header />
      <main className="admin-layout">
        <Sidebar />
        <section className="admin-content">
          <h1>Notícias</h1>

          <Card>
            <div className="filtros-admin">
              <SearchBar placeholder="Buscar notícia..." />
              <select><option>Status</option></select>
              <select><option>UF</option></select>
              <select><option>Autor</option></select>
            </div>

            <table className="tabela">
              <thead>
                <tr><th>ID</th><th>Título</th><th>Autor</th><th>UF</th><th>Status</th><th>Data</th><th>Views</th><th>Ações</th></tr>
              </thead>
              <tbody>
                {noticias.map((n) => (
                  <tr key={n.id}>
                    <td>{n.id}</td>
                    <td>{n.titulo}</td>
                    <td>{n.autor}</td>
                    <td>{n.uf}</td>
                    <td><StatusBadge ativo={n.publicada} /></td>
                    <td>{n.data}</td>
                    <td>{n.views}</td>
                    <td>
                      <Link to={`/noticia/${n.id}`}>Ver</Link>{" "}
                      <Link to={`/admin/noticias/${n.id}/editar`}>Editar</Link>{" "}
                      <button>Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}