import { Link } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/ui/Card";
import SearchBar from "../../components/ui/SearchBar";
import StatusBadge from "../../components/ui/StatusBadge";

const usuarios = [
  { id: 1, nome: "João", email: "joao@email.com", perfil: "LEITOR", cidade: "São Paulo/SP", ativo: true, data: "10/01/2026" },
  { id: 2, nome: "Ana", email: "ana@email.com", perfil: "AUTOR", cidade: "Rio de Janeiro/RJ", ativo: true, data: "11/01/2026" },
];

export default function CrudUsuariosPage() {
  return (
    <>
      <Header />
      <main className="admin-layout">
        <Sidebar />
        <section className="admin-content">
          <h1>Usuários</h1>

          <Card>
            <div className="filtros-admin">
              <SearchBar placeholder="Buscar usuário..." />
              <select><option>Perfil</option></select>
              <select><option>Status</option></select>
              <select><option>UF</option></select>
            </div>

            <table className="tabela">
              <thead>
                <tr><th>Nome</th><th>E-mail</th><th>Perfil</th><th>Cidade/UF</th><th>Status</th><th>Data</th><th>Ações</th></tr>
              </thead>
              <tbody>
                {usuarios.map((u) => (
                  <tr key={u.id}>
                    <td>{u.nome}</td>
                    <td>{u.email}</td>
                    <td>{u.perfil}</td>
                    <td>{u.cidade}</td>
                    <td><StatusBadge ativo={u.ativo} textoAtivo="Ativo" textoInativo="Inativo" /></td>
                    <td>{u.data}</td>
                    <td>
                      <Link to={`/admin/usuarios/${u.id}/editar`}>Editar</Link>{" "}
                      <button>Ativar/Desativar</button>{" "}
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