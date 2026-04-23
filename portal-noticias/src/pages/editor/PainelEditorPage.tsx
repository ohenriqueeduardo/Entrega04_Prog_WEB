import { Link } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/ui/Card";
import StatusBadge from "../../components/ui/StatusBadge";

const pendentes = [
  { id: 1, titulo: "Tecnologia transforma serviços públicos", autor: "Ana Souza", data: "23/04/2026" },
  { id: 2, titulo: "Educação recebe novos investimentos", autor: "Marina Alves", data: "22/04/2026" },
];

export default function PainelEditorPage() {
  return (
    <>
      <Header />

      <main className="admin-layout">
        <Sidebar tipo="editor" />

        <section className="admin-content">
          <h1>Painel do Editor</h1>

          <Card>
            <h2>Notícias Pendentes</h2>

            <table className="tabela">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Autor</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {pendentes.map((noticia) => (
                  <tr key={noticia.id}>
                    <td>{noticia.titulo}</td>
                    <td>{noticia.autor}</td>
                    <td>{noticia.data}</td>
                    <td><StatusBadge ativo={false} textoInativo="Pendente" /></td>
                    <td>
                      <Link to={`/editor/publicar/${noticia.id}`}>Revisar</Link>{" "}
                      <Link to={`/editor/noticias/${noticia.id}/editar`}>Editar</Link>
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