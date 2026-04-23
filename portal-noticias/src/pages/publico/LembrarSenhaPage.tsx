import { useState } from "react";
import { Link } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Card from "../../components/ui/Card";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";

export default function LembrarSenhaPage() {
  const [enviado, setEnviado] = useState(false);

  return (
    <>
      <Header />

      <main className="page-center">
        <Card className="form-card">
          <h1>Redefinir Senha</h1>

          <p>Digite seu e-mail para redefinir sua senha.</p>

          <InputField label="E-mail" type="email" />

          <Button onClick={() => setEnviado(true)}>Enviar</Button>

          {enviado && <p className="sucesso">E-mail enviado com sucesso.</p>}

          <Link to="/login">Voltar para Login</Link>
        </Card>
      </main>

      <Footer />
    </>
  );
}