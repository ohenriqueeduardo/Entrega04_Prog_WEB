import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Card from "../../components/ui/Card";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";
import NoticiaCard from "../../components/ui/NoticiaCard";

const tagsDisponiveis = ["Política", "Esportes", "Tecnologia", "Educação", "Cidades"];

export default function NovaNoticiaPage() {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  function alternarTag(tag: string) {
    if (tags.includes(tag)) {
      setTags(tags.filter((item) => item !== tag));
      return;
    }

    if (tags.length < 5) {
      setTags([...tags, tag]);
    }
  }

  function finalizar() {
    alert("Notícia salva com sucesso.");
    navigate("/autor/noticias");
  }

  return (
    <>
      <Header />

      <main className="container noticia-form-layout">
        <Card>
          <h1>Nova Notícia</h1>

          <InputField label="Título" value={titulo} onChange={setTitulo} />
          <InputField label="Subtítulo" value={subtitulo} onChange={setSubtitulo} />
          <InputField
            label="URL da Imagem de Capa"
            value={imagem}
            onChange={setImagem}
          />

          {imagem && <img src={imagem} alt="Preview" className="preview-img" />}

          <label className="input-field">
            <span>Conteúdo</span>
            <textarea
              rows={15}
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
            />
          </label>

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

          <h3>Tags</h3>

          <div className="tag-select">
            {tagsDisponiveis.map((tag) => (
              <button
                key={tag}
                type="button"
                className={tags.includes(tag) ? "tag-ativa" : ""}
                onClick={() => alternarTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="acoes">
            <Button onClick={finalizar}>Salvar como Rascunho</Button>
            <Button onClick={finalizar}>Enviar para Revisão</Button>
          </div>
        </Card>

        <Card>
          <h2>Preview</h2>

          <NoticiaCard
            id={999}
            titulo={titulo || "Título da notícia"}
            subtitulo={subtitulo || "Subtítulo da notícia"}
            imagem={
              imagem ||
              "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000"
            }
            autor="Autor"
            data="23/04/2026"
            tags={tags}
          />
        </Card>
      </main>

      <Footer />
    </>
  );
}