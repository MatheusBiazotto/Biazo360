export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatDeliveryDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function mapStatus(status) {
  const statusMap = {
    "Em Trânsito": "Em Trânsito",
    Postado: "Coletado",
    Entregue: "Entregue",
    Processando: "Processando",
  };

  return statusMap[status] || status;
}
