# 📰 Portal de Notícias

Projeto desenvolvido para a disciplina de **Programação Web** — Entrega 04.

Portal de notícias com 5 níveis de acesso, construído com React, TypeScript e React Router v7.

---

## 🚀 Como rodar

```bash
# Entre na pasta do projeto
cd portal-noticias

# Instale as dependências
npm install

# Inicie o servidor local
npm run dev
```

Acesse em: **http://localhost:5173**

---

## 🔐 Acessos rápidos

Na página de login (`/login`), clique nos botões para simular cada perfil:

| Perfil | Redireciona para |
|---|---|
| LEITOR | `/leitor/perfil` |
| AUTOR | `/autor/noticias` |
| EDITOR | `/editor/painel` |
| SUPERADMIN | `/admin/dashboard` |

> Não há autenticação real — os botões simulam o login para fins de desenvolvimento.

---

## 🗂️ Estrutura do projeto

```
portal-noticias/
└── src/
    ├── components/
    │   ├── layout/       # Header, Footer, Sidebar
    │   └── ui/           # Button, Card, TagBadge, etc.
    ├── data/             # Dados mockados (.ts)
    ├── pages/
    │   ├── publico/      # Home, Login, Cadastro...
    │   ├── leitor/       # Perfil, Comentar
    │   ├── autor/        # Notícias, Nova, Editar...
    │   ├── editor/       # Painel, Publicar...
    │   └── superadmin/   # Dashboard, CRUDs...
    ├── types/            # Interfaces TypeScript
    ├── App.tsx           # Todas as rotas
    └── main.tsx
```

---

## 📄 Páginas e rotas

### Público
| Rota | Página |
|---|---|
| `/` | Home — lista de notícias |
| `/login` | Login com acesso rápido por perfil |
| `/cadastro` | Cadastro de novo usuário |
| `/lembrar-senha` | Recuperação de senha |
| `/busca/uf/:sigla` | Notícias filtradas por estado |
| `/busca/tag/:slug` | Notícias filtradas por tag |
| `/noticia/:id` | Detalhe da notícia |

### Leitor
| Rota | Página |
|---|---|
| `/leitor/perfil` | Perfil do leitor |
| `/leitor/comentar/:noticiaId` | Comentar em notícia |

### Autor
| Rota | Página |
|---|---|
| `/autor/perfil` | Perfil do autor |
| `/autor/noticias` | Minhas notícias |
| `/autor/noticias/nova` | Nova notícia |
| `/autor/noticias/:id/editar` | Editar notícia |
| `/autor/comentar/:noticiaId` | Comentar em notícia |

### Editor
| Rota | Página |
|---|---|
| `/editor/painel` | Painel do editor |
| `/editor/perfil` | Perfil do editor |
| `/editor/publicar/:id` | Publicar / Despublicar |
| `/editor/noticias/:id/editar` | Editar qualquer notícia |

### SuperAdmin
| Rota | Página |
|---|---|
| `/admin/dashboard` | Dashboard geral |
| `/admin/ufs` | CRUD de UFs |
| `/admin/cidades` | CRUD de Cidades |
| `/admin/tags` | CRUD de Tags |
| `/admin/perfis` | Visualizar perfis |
| `/admin/noticias` | CRUD de Notícias |
| `/admin/usuarios` | CRUD de Usuários |
| `/admin/comentarios` | Gerenciar Comentários |

---

## 🗃️ Dados mockados

Todos os dados ficam em `src/data/` e seguem as interfaces de `src/types/index.ts`.

| Arquivo | Quantidade | Detalhes |
|---|---|---|
| `ufs.ts` | 27 | Todos os estados + DF |
| `cidades.ts` | 30 | Em 10+ estados |
| `tags.ts` | 10 | Política, Esportes, Tecnologia... |
| `usuarios.ts` | 15 | 5 Leitor · 5 Autor · 3 Editor · 2 SuperAdmin |
| `noticias.ts` | 30 | 20 publicadas · 10 rascunhos |
| `comentarios.ts` | 40 | 25 aprovados · 15 pendentes |

---

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router v7](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- CSS puro (sem frameworks de UI)

---

## ✅ Requisitos atendidos

- [x] Rotas públicas sem autenticação real
- [x] Botões de acesso rápido por perfil na tela de login
- [x] 35 páginas cobrindo todos os fluxos do mapa de rotas
- [x] Interfaces TypeScript definidas em `src/types/index.ts`
- [x] Dados mockados em `src/data/`
- [x] CSS puro — sem Bootstrap, Tailwind ou Material UI
- [x] `npm install && npm run dev` funciona sem erros
