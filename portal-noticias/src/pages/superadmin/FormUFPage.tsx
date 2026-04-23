import { useNavigate, useParams } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/ui/Card";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";

export default function FormUFPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="admin-layout">
        <Sidebar />
        <section className="admin-content">
          <Card className="form-card-full">
            <h1>{id ? "Editar UF" : "Nova UF"}</h1>

            <InputField label="Sigla" placeholder="SP" />
            <InputField label="Nome" placeholder="São Paulo" />

            <div className="acoes">
              <Button onClick={() => navigate("/admin/ufs")}>Salvar</Button>
              <Button variant="outline" onClick={() => navigate("/admin/ufs")}>Cancelar</Button>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}