import { useNavigate, useParams } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import StatusBadge from "../../components/ui/StatusBadge";
import TagBadge from "../../components/ui/TagBadge";

export default function PublicarDespublicarPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const publicada = false;

  function alterarStatus() {
    const confirmar = confirm(publicada ? "Deseja despublicar esta notícia?" : "Deseja publicar esta notícia?");

    if (confirmar) {
      alert("Status alterado com sucesso.");
      navigate("/editor/painel");
    }
  }

  return (
    <>
      <Header />

      <main className="admin-layout">
        <Sidebar tipo="editor" />

        <section className="admin-content">
          <Card>
            <StatusBadge ativo={publicada} textoInativo="Pendente" />

            <h1>Revisar Notícia #{id}</h1>

            <img
              className="imagem-capa"
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1400"
              alt="Notícia"
            />

            <h2>Tecnologia transforma serviços públicos</h2>
            <p>Cidades brasileiras adotam soluções digitais.</p>
            <p>Autor: Ana Souza • Data: 23/04/2026</p>

            <div className="tags-home sem-padding">
              <TagBadge nome="Tecnologia" slug="tecnologia" />
              <TagBadge nome="Cidades" slug="cidades" />
            </div>

            <p>
              A tecnologia vem ganhando espaço nos serviços públicos, trazendo
              mais eficiência, transparência e velocidade no atendimento.
            </p>

            <Button onClick={alterarStatus}>
              {publicada ? "Despublicar" : "Publicar"}
            </Button>
          </Card>
        </section>
      </main>

      <Footer />
    </>
  );
}