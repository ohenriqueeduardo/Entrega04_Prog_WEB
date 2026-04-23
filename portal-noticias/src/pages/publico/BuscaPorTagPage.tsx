import { useParams } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import TagBadge from "../../components/ui/TagBadge";
import NoticiaCard from "../../components/ui/NoticiaCard";

const noticias = [
  {
    id: 2,
    titulo: "Tecnologia ganha destaque",
    subtitulo: "Novidades do setor movimentam o mercado.",
    imagem: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    autor: "Ana Souza",
    data: "23/04/2026",
    tags: ["Tecnologia"],
  },
];

export default function BuscaPorTagPage() {
  const { slug } = useParams();

  return (
    <>
      <Header />

      <main className="container">
        <h1>Tag: {slug}</h1>

        <section className="noticias-grid">
          {noticias.map((noticia) => (
            <NoticiaCard key={noticia.id} {...noticia} />
          ))}
        </section>

        <h2>Tags Relacionadas</h2>

        <div className="tags-home">
          <TagBadge nome="Política" slug="politica" />
          <TagBadge nome="Esportes" slug="esportes" />
          <TagBadge nome="Educação" slug="educacao" />
        </div>
      </main>

      <Footer />
    </>
  );
}