import { useParams } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import NoticiaCard from "../../components/ui/NoticiaCard";

const noticias = [
  {
    id: 1,
    titulo: "Notícia de São Paulo",
    subtitulo: "Informações importantes do estado.",
    imagem: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200",
    autor: "João Silva",
    data: "23/04/2026",
    tags: ["Cidades"],
  },
];

export default function BuscaPorUFPage() {
  const { sigla } = useParams();

  return (
    <>
      <Header />

      <main className="container">
        <p>Home &gt; Busca por UF &gt; {sigla?.toUpperCase()}</p>

        <h1>Notícias de {sigla?.toUpperCase()}</h1>
        <p>{noticias.length} notícia(s) encontrada(s)</p>

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