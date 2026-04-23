import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Card from "../../components/ui/Card";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";

const comentarios = [
  {
    id: 1,
    noticiaId: 1,
    tituloNoticia: "Tecnologia transforma serviços públicos",
    texto: "Excelente notícia. A tecnologia realmente melhora o atendimento.",
    data: "23/04/2026",
  },
  {
    id: 2,
    noticiaId: 2,
    tituloNoticia: "Esporte movimenta o fim de semana",
    texto: "Muito bom ver o esporte regional sendo valorizado.",
    data: "22/04/2026",
  },
];

export default function PerfilLeitorPage() {
  const [editando, setEditando] = useState(false);

  return (
    <>
      <Header />

      <main className="container">
        <Card>
          <div className="perfil-topo">
            <img
              src="https://via.placeholder.com/120"
              alt="Avatar do leitor"
              className="avatar-grande"
            />

            <div>
              {editando ? (
                <>
                  <InputField label="Nome" placeholder="João Leitor" />
                  <InputField label="E-mail" type="email" placeholder="joao@email.com" />
                  <InputField label="Cidade/UF" placeholder="São Paulo/SP" />

                  <textarea placeholder="Bio">Leitor do portal de notícias.</textarea>

                  <div className="acoes">
                    <Button onClick={() => setEditando(false)}>Salvar</Button>
                    <Button variant="outline" onClick={() => setEditando(false)}>
                      Cancelar
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <h1>João Leitor</h1>
                  <p>E-mail: joao@email.com</p>
                  <p>Cidade/UF: São Paulo/SP</p>
                  <p>Bio: Leitor do portal de notícias.</p>
                  <p>Cadastro: 10/01/2026</p>

                  <Button onClick={() => setEditando(true)}>Editar Perfil</Button>
                </>
              )}
            </div>
          </div>
        </Card>

        <section className="secao">
          <h2>Meus Comentários</h2>

          {comentarios.map((comentario) => (
            <Card key={comentario.id} className="comentario-card">
              <p>{comentario.texto}</p>

              <a href={`/noticia/${comentario.noticiaId}`}>
                {comentario.tituloNoticia}
              </a>

              <small>{comentario.data}</small>
            </Card>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}