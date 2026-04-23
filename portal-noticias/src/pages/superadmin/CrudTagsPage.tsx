import { Link } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/ui/Card";
import TagBadge from "../../components/ui/TagBadge";

const tags = [
  { id: 1, nome: "Tecnologia", slug: "tecnologia", noticias: 5 },
  { id: 2, nome: "Esportes", slug: "esportes", noticias: 7 },
];

export default function CrudTagsPage() {
  return (
    <>
      <Header />
      <main className="admin-layout">
        <Sidebar />
        <section className="admin-content">
          <div className="page-title">
            <h1>Tags</h1>
            <Link className="btn btn-primary" to="/admin/tags/nova">+ Nova Tag</Link>
          </div>

          <Card>
            <table className="tabela">
              <thead>
                <tr><th>ID</th><th>Nome</th><th>Slug</th><th>Notícias</th><th>Ações</th></tr>
              </thead>
              <tbody>
                {tags.map((tag) => (
                  <tr key={tag.id}>
                    <td>{tag.id}</td>
                    <td><TagBadge nome={tag.nome} slug={tag.slug} /></td>
                    <td>{tag.slug}</td>
                    <td>{tag.noticias}</td>
                    <td>
                      <Link to={`/admin/tags/${tag.id}/editar`}>Editar</Link>{" "}
                      <button onClick={() => confirm("Excluir tag?")}>Excluir</button>
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