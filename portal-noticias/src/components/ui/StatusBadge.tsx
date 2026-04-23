type StatusBadgeProps = {
  ativo: boolean;
  textoAtivo?: string;
  textoInativo?: string;
};

export default function StatusBadge({
  ativo,
  textoAtivo = "Publicado",
  textoInativo = "Rascunho",
}: StatusBadgeProps) {
  return (
    <span className={`status-badge ${ativo ? "ativo" : "inativo"}`}>
      {ativo ? textoAtivo : textoInativo}
    </span>
  );
}