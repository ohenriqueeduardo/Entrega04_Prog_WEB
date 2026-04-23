import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/ui/Card";
import SearchBar from "../../components/ui/SearchBar";
import StatusBadge from "../../components/ui/StatusBadge";

const comentarios = [
  { id: 1, nome: "João", texto: "Ótima notícia.", noticia: "Tecnologia transforma serviços públicos", data: "23/04/2026", aprovado: true },
  { id: 2, nome: "Carlos", texto: "Precisa de mais detalhes.", noticia: "Educação recebe investimentos", data: "22/04/2026", aprovado: false },
];

export default function GerenciarComentariosPage() {
  return (
    <>
      <Header />
      <main className="admin-layout">
        <Sidebar />
        <section className="admin-content">
          <h1>Gerenciar Comentários</h1>

          <Card>
            <div className="filtros-admin">
              <SearchBar placeholder="Buscar comentário..." />
              <select>
                <option>Todos</option>
                <option>Aprovados</option>
                <option>Pendentes</option>
              </select>
            </div>

            <div className="acoes">
              <button>Aprovar Selecionados</button>
              <button>Excluir Selecionados</button>
            </div>

            {comentarios.map((c) => (
              <div className="comentario-admin" key={c.id}>
                <input type="checkbox" />

                <div>
                  <strong>{c.nome}</strong>
                  <p>{c.texto}</p>
                  <small>{c.noticia} • {c.data}</small>
                  <br />
                  <StatusBadge ativo={c.aprovado} textoAtivo="Aprovado" textoInativo="Pendente" />
                </div>

                <div className="acoes">
                  <button>Aprovar</button>
                  <button>Rejeitar</button>
                  <button>Excluir</button>
                </div>
              </div>
            ))}
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}