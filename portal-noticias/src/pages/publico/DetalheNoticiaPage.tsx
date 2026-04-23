import { useParams } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import TagBadge from "../../components/ui/TagBadge";
import ComentarioItem from "../../components/ui/ComentarioItem";
import Button from "../../components/ui/Button";

export default function DetalheNoticiaPage() {
  const { id } = useParams();

  return (
    <>
      <Header />

      <main className="detalhe-layout">
        <article className="conteudo-principal">
          <p>Home &gt; Notícias &gt; Notícia {id}</p>

          <img
            className="imagem-capa"
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1400"
            alt="Notícia"
          />

          <h1>Tecnologia transforma serviços públicos</h1>
          <h2>Cidades brasileiras adotam soluções digitais.</h2>

          <p>Ana Souza • 23/04/2026 • São Paulo/SP • 1200 visualizações</p>

          <div className="tags-home">
            <TagBadge nome="Tecnologia" slug="tecnologia" />
            <TagBadge nome="Cidades" slug="cidades" />
          </div>

          <p>
            A tecnologia vem ganhando espaço nos serviços públicos, trazendo
            mais eficiência, transparência e velocidade no atendimento.
          </p>

          <p>
            Com sistemas digitais, os cidadãos conseguem acessar informações,
            solicitar serviços e acompanhar processos de maneira mais simples.
          </p>

          <h2>Comentários</h2>

          <ComentarioItem
            nome="Carlos Lima"
            data="23/04/2026"
            texto="Excelente notícia. A tecnologia realmente ajuda muito."
          />

          <textarea placeholder="Escreva seu comentário" />
          <Button>Enviar Comentário</Button>
        </article>

        <aside className="sidebar-conteudo">
          <h2>Sobre o Autor</h2>
          <p>Ana Souza, jornalista especializada em tecnologia e cidades.</p>

          <h2>Notícias Recentes</h2>
          <ul>
            <li>Educação recebe novos investimentos</li>
            <li>Esporte movimenta o fim de semana</li>
            <li>Economia tem novo crescimento</li>
          </ul>

          <h2>Tags Populares</h2>
          <TagBadge nome="Política" slug="politica" />
          <TagBadge nome="Esportes" slug="esportes" />
        </aside>
      </main>

      <Footer />
    </>
  );
}