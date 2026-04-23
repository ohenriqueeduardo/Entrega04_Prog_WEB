import { useNavigate, useParams } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/ui/Card";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";

export default function FormNoticiaAdminPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="admin-layout">
        <Sidebar />
        <section className="admin-content">
          <Card className="form-card-full">
            <h1>Editar Notícia #{id}</h1>

            <InputField label="Título" />
            <InputField label="Subtítulo" />
            <InputField label="URL da Imagem" />

            <label className="input-field">
              <span>Conteúdo</span>
              <textarea rows={12} />
            </label>

            <select><option>Ana Souza</option><option>Marina Alves</option></select>

            <div className="acoes">
              <Button onClick={() => navigate("/admin/noticias")}>Salvar</Button>
              <Button variant="outline" onClick={() => navigate("/admin/noticias")}>Cancelar</Button>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}