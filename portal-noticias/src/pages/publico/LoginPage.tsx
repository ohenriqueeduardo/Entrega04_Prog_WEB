import { Link, useNavigate } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Card from "../../components/ui/Card";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <main className="page-center">
        <Card className="form-card">
          <h1>Login</h1>

          <InputField label="E-mail" type="email" placeholder="Digite seu e-mail" />
          <InputField label="Senha" type="password" placeholder="Digite sua senha" />

          <label>
            <input type="checkbox" /> Lembrar-me
          </label>

          <Button>Entrar</Button>

          <Link to="/lembrar-senha">Esqueci minha senha</Link>
          <Link to="/cadastro">Não tem conta? Cadastre-se</Link>

          <div className="acesso-rapido">
            <h2>Acesso Rápido</h2>

            <button onClick={() => navigate("/leitor/perfil")}>
              LEITOR
            </button>

            <button onClick={() => navigate("/autor/noticias")}>
              AUTOR
            </button>

            <button onClick={() => navigate("/editor/painel")}>
              EDITOR
            </button>

            <button onClick={() => navigate("/admin/dashboard")}>
              SUPERADMIN
            </button>
          </div>
        </Card>
      </main>

      <Footer />
    </>
  );
}