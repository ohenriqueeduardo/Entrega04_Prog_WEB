import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/ui/Card";

const perfis = [
  ["LEITOR", "Pode ler notícias e comentar.", 5],
  ["AUTOR", "Pode criar e editar próprias notícias.", 5],
  ["EDITOR", "Pode revisar e publicar notícias.", 3],
  ["SUPERADMIN", "Pode gerenciar todo o sistema.", 2],
];

export default function CrudPerfisPage() {
  return (
    <>
      <Header />
      <main className="admin-layout">
        <Sidebar />
        <section className="admin-content">
          <h1>Perfis</h1>

          <section className="stats-grid">
            {perfis.map(([nome, descricao, qtd]) => (
              <Card key={nome}>
                <h2>{nome}</h2>
                <p>{descricao}</p>
                <strong>{qtd} usuários</strong>
              </Card>
            ))}
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}