import { useNavigate, useParams } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/ui/Card";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";

export default function FormCidadePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="admin-layout">
        <Sidebar />
        <section className="admin-content">
          <Card className="form-card-full">
            <h1>{id ? "Editar Cidade" : "Nova Cidade"}</h1>

            <InputField label="Nome" placeholder="São Paulo" />
            <select><option>SP</option><option>RJ</option><option>MG</option></select>

            <div className="acoes">
              <Button onClick={() => navigate("/admin/cidades")}>Salvar</Button>
              <Button variant="outline" onClick={() => navigate("/admin/cidades")}>Cancelar</Button>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}