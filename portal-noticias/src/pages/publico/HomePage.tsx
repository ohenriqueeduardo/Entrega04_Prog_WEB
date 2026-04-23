import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import SearchBar from "../../components/ui/SearchBar";
import TagBadge from "../../components/ui/TagBadge";
import NoticiaCard from "../../components/ui/NoticiaCard";
import { Link } from "react-router";

const noticias = [
  {
    id: 1,
    titulo: "Tecnologia transforma serviços públicos",
    subtitulo: "Cidades adotam soluções digitais para atender melhor a população.",
    imagem: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200",
    autor: "Ana Souza",
    data: "23/04/2026",
    tags: ["Tecnologia", "Cidades"],
  },
  {
    id: 2,
    titulo: "Esporte movimenta o fim de semana",
    subtitulo: "Competições regionais atraem atletas e torcedores.",
    imagem: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200",
    autor: "Carlos Lima",
    data: "22/04/2026",
    tags: ["Esportes"],
  },
  {
    id: 3,
    titulo: "Educação recebe novos investimentos",
    subtitulo: "Escolas públicas terão melhorias estruturais.",
    imagem: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200",
    autor: "Marina Alves",
    data: "21/04/2026",
    tags: ["Educação"],
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section
          className="hero"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1400)",
          }}
        >
          <div>
            <h1>Portal de Notícias</h1>
            <p>Informação clara, rápida e confiável.</p>
            <Link to="/noticia/1" className="btn btn-primary">
              Ler mais
            </Link>
          </div>
        </section>

        <section className="filtros">
          <SearchBar placeholder="Buscar notícias..." />

          <select>
            <option>Filtrar por UF</option>
            <option>SP</option>
            <option>RJ</option>
            <option>MG</option>
            <option>PR</option>
          </select>
        </section>

        <section className="tags-home">
          <TagBadge nome="Política" slug="politica" />
          <TagBadge nome="Esportes" slug="esportes" />
          <TagBadge nome="Tecnologia" slug="tecnologia" />
          <TagBadge nome="Educação" slug="educacao" />
        </section>

        <section className="noticias-grid">
          {noticias.map((noticia) => (
            <NoticiaCard key={noticia.id} {...noticia} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}