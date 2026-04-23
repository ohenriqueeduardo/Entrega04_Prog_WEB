import { Link } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/ui/Card";
import SearchBar from "../../components/ui/SearchBar";

const ufs = [
  { id: 1, sigla: "SP", nome: "São Paulo", cidades: 10 },
  { id: 2, sigla: "RJ", nome: "Rio de Janeiro", cidades: 8 },
];

export default function CrudUFPage() {
  return (
    <>
      <Header />
      <main className="admin-layout">
        <Sidebar />
        <section className="admin-content">
          <div className="page-title">
            <h1>Unidades Federativas</h1>
            <Link className="btn btn-primary" to="/admin/ufs/nova">+ Nova UF</Link>
          </div>

          <Card>
            <SearchBar placeholder="Buscar UF..." />

            <table className="tabela">
              <thead>
                <tr><th>ID</th><th>Sigla</th><th>Nome</th><th>Cidades</th><th>Ações</th></tr>
              </thead>
              <tbody>
                {ufs.map((uf) => (
                  <tr key={uf.id}>
                    <td>{uf.id}</td>
                    <td>{uf.sigla}</td>
                    <td>{uf.nome}</td>
                    <td>{uf.cidades}</td>
                    <td>
                      <Link to={`/admin/ufs/${uf.id}/editar`}>Editar</Link>{" "}
                      <button onClick={() => confirm("Excluir UF?")}>Excluir</button>
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