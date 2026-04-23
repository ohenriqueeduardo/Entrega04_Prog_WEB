import { Link } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Card from "../../components/ui/Card";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";

export default function CadastroPage() {
  return (
    <>
      <Header />

      <main className="page-center">
        <Card className="form-card">
          <h1>Cadastro</h1>

          <InputField label="Nome completo" />
          <InputField label="E-mail" type="email" />
          <InputField label="Senha" type="password" />
          <InputField label="Confirmar senha" type="password" />

          <select>
            <option>Selecione a UF</option>
            <option>SP</option>
            <option>RJ</option>
            <option>MG</option>
          </select>

          <select>
            <option>Selecione a cidade</option>
            <option>São Paulo</option>
            <option>Rio de Janeiro</option>
            <option>Belo Horizonte</option>
          </select>

          <textarea placeholder="Bio (opcional)" />

          <Button>Criar Conta</Button>

          <Link to="/login">Já tem conta? Faça login</Link>
        </Card>
      </main>

      <Footer />
    </>
  );
}