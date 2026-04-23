import { useParams, useNavigate } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Card from "../../components/ui/Card";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";
import StatusBadge from "../../components/ui/StatusBadge";

export default function EditarNoticiaPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  function salvar() {
    alert("Alterações salvas.");
    navigate("/autor/noticias");
  }

  return (
    <>
      <Header />

      <main className="container">
        <Card className="form-card-full">
          <StatusBadge ativo={false} />

          <h1>Editar Notícia #{id}</h1>

          <InputField label="Título" placeholder="Tecnologia transforma serviços públicos" />
          <InputField label="Subtítulo" placeholder="Cidades adotam soluções digitais." />
          <InputField
            label="URL da Imagem de Capa"
            placeholder="https://images.unsplash.com/..."
          />

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
            <Button variant="outline" onClick={() => navigate("/autor/noticias")}>
              Cancelar
            </Button>
          </div>
        </Card>
      </main>

      <Footer />
    </>
  );
}