import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/ui/Card";

export default function DashboardPage() {
  return (
    <>
      <Header />

      <main className="admin-layout">
        <Sidebar />

        <section className="admin-content">
          <h1>Dashboard SuperAdmin</h1>

          <section className="stats-grid">
            <Card><h2>15</h2><p>Usuários</p></Card>
            <Card><h2>20</h2><p>Notícias Publicadas</p></Card>
            <Card><h2>10</h2><p>Rascunhos</p></Card>
            <Card><h2>40</h2><p>Comentários</p></Card>
            <Card><h2>27</h2><p>UFs</p></Card>
            <Card><h2>10</h2><p>Tags</p></Card>
          </section>

          <Card>
            <h2>Últimos Usuários</h2>
            <table className="tabela">
              <tbody>
                <tr><td>João</td><td>joao@email.com</td><td>LEITOR</td></tr>
                <tr><td>Ana</td><td>ana@email.com</td><td>AUTOR</td></tr>
              </tbody>
            </table>
          </Card>

          <Card>
            <h2>Últimas Notícias</h2>
            <table className="tabela">
              <tbody>
                <tr><td>Tecnologia transforma serviços públicos</td><td>Publicada</td></tr>
                <tr><td>Educação recebe investimento</td><td>Rascunho</td></tr>
              </tbody>
            </table>
          </Card>
        </section>
      </main>

      <Footer />
    </>
  );
}