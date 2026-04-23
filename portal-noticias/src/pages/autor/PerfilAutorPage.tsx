import PerfilLeitorPage from "../leitor/PerfilLeitorPage";
import Card from "../../components/ui/Card";

export default function PerfilAutorPage() {
  return (
    <>
      <PerfilLeitorPage />

      <main className="container">
        <section className="stats-grid">
          <Card><h2>12</h2><p>Total de notícias</p></Card>
          <Card><h2>8</h2><p>Publicadas</p></Card>
          <Card><h2>4</h2><p>Rascunhos</p></Card>
          <Card><h2>1520</h2><p>Visualizações</p></Card>
        </section>
      </main>
    </>
  );
}