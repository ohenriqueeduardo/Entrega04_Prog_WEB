import { useState } from "react";
import { Link, useParams } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function ComentarLeitorPage() {
  const { noticiaId } = useParams();
  const [texto, setTexto] = useState("");
  const [enviado, setEnviado] = useState(false);

  function enviarComentario() {
    if (texto.trim().length === 0) return;
    setEnviado(true);
  }

  return (
    <>
      <Header />

      <main className="page-center">
        <Card className="form-card">
          <h1>Comentar Notícia</h1>

          <div className="resumo-noticia">
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800"
              alt="Notícia"
            />

            <div>
              <h2>Notícia #{noticiaId}</h2>
              <p>Tecnologia transforma serviços públicos.</p>
              <small>Autor: Ana Souza</small>
            </div>
          </div>

          <textarea
            maxLength={500}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Digite seu comentário..."
          />

          <small>{texto.length}/500 caracteres</small>

          <Button onClick={enviarComentario}>Enviar Comentário</Button>

          {enviado && (
            <p className="sucesso">Comentário enviado com sucesso.</p>
          )}

          <Link to={`/noticia/${noticiaId}`}>Voltar para a Notícia</Link>
        </Card>
      </main>

      <Footer />
    </>
  );
}