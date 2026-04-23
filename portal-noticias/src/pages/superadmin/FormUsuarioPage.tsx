import { useNavigate, useParams } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Card from "../../components/ui/Card";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";

export default function FormUsuarioPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="admin-layout">
        <Sidebar />
        <section className="admin-content">
          <Card className="form-card-full">
            <h1>Editar Usuário #{id}</h1>

            <InputField label="Nome" placeholder="João" />
            <InputField label="E-mail" placeholder="joao@email.com" readOnly />

            <select><option>LEITOR</option><option>AUTOR</option><option>EDITOR</option><option>SUPERADMIN</option></select>
            <select><option>SP</option><option>RJ</option></select>
            <select><option>São Paulo</option><option>Rio de Janeiro</option></select>

            <label className="input-field">
              <span>Bio</span>
              <textarea rows={6} />
            </label>

            <label>
              <input type="checkbox" defaultChecked /> Ativo
            </label>

            <div className="acoes">
              <Button onClick={() => navigate("/admin/usuarios")}>Salvar</Button>
              <Button variant="outline" onClick={() => navigate("/admin/usuarios")}>Cancelar</Button>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}