import { Link } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/ui/Card";
import SearchBar from "../../components/ui/SearchBar";

const cidades = [
  { id: 1, nome: "São Paulo", uf: "SP", noticias: 12 },
  { id: 2, nome: "Rio de Janeiro", uf: "RJ", noticias: 8 },
];

export default function CrudCidadesPage() {
  return (
    <>
      <Header />
      <main className="admin-layout">
        <Sidebar />
        <section className="admin-content">
          <div className="page-title">
            <h1>Cidades</h1>
            <Link className="btn btn-primary" to="/admin/cidades/nova">+ Nova Cidade</Link>
          </div>

          <Card>
            <div className="filtros-admin">
              <SearchBar placeholder="Buscar cidade..." />
              <select><option>Todas UFs</option><option>SP</option><option>RJ</option></select>
            </div>

            <table className="tabela">
              <thead>
                <tr><th>ID</th><th>Nome</th><th>UF</th><th>Notícias</th><th>Ações</th></tr>
              </thead>
              <tbody>
                {cidades.map((cidade) => (
                  <tr key={cidade.id}>
                    <td>{cidade.id}</td>
                    <td>{cidade.nome}</td>
                    <td>{cidade.uf}</td>
                    <td>{cidade.noticias}</td>
                    <td>
                      <Link to={`/admin/cidades/${cidade.id}/editar`}>Editar</Link>{" "}
                      <button onClick={() => confirm("Excluir cidade?")}>Excluir</button>
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