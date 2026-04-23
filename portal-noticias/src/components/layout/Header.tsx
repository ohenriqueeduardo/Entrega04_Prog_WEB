import { Link } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">Portal Notícias</Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
      </nav>
    </header>
  );
}