import { useNavigate, useParams } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/ui/Card";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";
import StatusBadge from "../../components/ui/StatusBadge";

export default function EditarQualquerNoticiaPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  function salvar() {
    alert("Notícia editada com sucesso.");
    navigate("/editor/painel");
  }

  return (
    <>
      <Header />

      <main className="admin-layout">
        <Sidebar tipo="editor" />

        <section className="admin-content">
          <div className="aviso-editor">
            Você está editando uma notícia de Ana Souza.
          </div>

          <Card className="form-card-full">
            <StatusBadge ativo={false} textoInativo="Pendente" />

            <h1>Editar Notícia #{id}</h1>

            <InputField label="Título" placeholder="Tecnologia transforma serviços públicos" />
            <InputField label="Subtítulo" placeholder="Cidades adotam soluções digitais." />
            <InputField label="URL da Imagem de Capa" placeholder="https://images.unsplash.com/..." />

            <label className="input-field">
              <span>Conteúdo</span>
              <textarea rows={15} defaultValue="Texto da notícia..." />
            </label>

            <select>
              <option>SP</option>
              <option>RJ</option>
              <option>MG</option>
            </select>

            <select>
              <option>São Paulo</option>
              <option>Rio de Janeiro</option>
              <option>Belo Horizonte</option>
            </select>

            <div className="acoes">
              <Button onClick={salvar}>Salvar Alterações</Button>
              <Button variant="outline" onClick={() => navigate("/editor/painel")}>
                Cancelar
              </Button>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </>
  );
}