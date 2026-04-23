import { Link } from "react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function NotFoundPage() {
  return (
    <>
      <Header />

      <main className="page-center">
        <Card className="not-found-card">
          <h1>404</h1>
          <h2>Página não encontrada</h2>

          <p>
            A página que você tentou acessar não existe ou foi movida.
          </p>

          <Link to="/">
            <Button>Voltar para a Home</Button>
          </Link>
        </Card>
      </main>

      <Footer />
    </>
  );
}