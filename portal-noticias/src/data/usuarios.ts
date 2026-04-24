import type { Usuario } from "../types";

export const usuarios: Usuario[] = [
  { id: 1, nome: "Carlos Leitor", email: "carlos@leitor.com", perfil: "LEITOR", cidadeId: 28, ativo: true, criadoEm: "2024-01-10", bio: "Leitor assíduo de notícias." },
  { id: 2, nome: "Fernanda Lima", email: "fernanda@leitor.com", perfil: "LEITOR", cidadeId: 21, ativo: true, criadoEm: "2024-02-14" },
  { id: 3, nome: "Pedro Alves", email: "pedro@leitor.com", perfil: "LEITOR", cidadeId: 14, ativo: true, criadoEm: "2024-03-05" },
  { id: 4, nome: "Joana Melo", email: "joana@leitor.com", perfil: "LEITOR", cidadeId: 8, ativo: false, criadoEm: "2024-04-20" },
  { id: 5, nome: "Lucas Santos", email: "lucas@leitor.com", perfil: "LEITOR", cidadeId: 7, ativo: true, criadoEm: "2024-05-11" },
  { id: 6, nome: "Ana Souza", email: "ana@autor.com", perfil: "AUTOR", cidadeId: 28, ativo: true, criadoEm: "2023-11-01", bio: "Jornalista especializada em tecnologia." },
  { id: 7, nome: "Bruno Costa", email: "bruno@autor.com", perfil: "AUTOR", cidadeId: 19, ativo: true, criadoEm: "2023-12-15", bio: "Repórter de esportes." },
  { id: 8, nome: "Carla Dias", email: "carla@autor.com", perfil: "AUTOR", cidadeId: 5, ativo: true, criadoEm: "2024-01-22" },
  { id: 9, nome: "Diego Faria", email: "diego@autor.com", perfil: "AUTOR", cidadeId: 18, ativo: false, criadoEm: "2024-02-28" },
  { id: 10, nome: "Elena Rocha", email: "elena@autor.com", perfil: "AUTOR", cidadeId: 21, ativo: true, criadoEm: "2024-03-30", bio: "Especialista em política nacional." },
  { id: 11, nome: "Felipe Editor", email: "felipe@editor.com", perfil: "EDITOR", cidadeId: 28, ativo: true, criadoEm: "2023-06-10", bio: "Editor-chefe do portal." },
  { id: 12, nome: "Gabriela Nunes", email: "gabriela@editor.com", perfil: "EDITOR", cidadeId: 8, ativo: true, criadoEm: "2023-08-20" },
  { id: 13, nome: "Henrique Vaz", email: "henrique@editor.com", perfil: "EDITOR", cidadeId: 21, ativo: true, criadoEm: "2023-09-05" },
  { id: 14, nome: "Igor Admin", email: "igor@admin.com", perfil: "SUPERADMIN", cidadeId: 8, ativo: true, criadoEm: "2023-01-01", bio: "Administrador do sistema." },
  { id: 15, nome: "Julia Admin", email: "julia@admin.com", perfil: "SUPERADMIN", cidadeId: 28, ativo: true, criadoEm: "2023-01-01" },
];
