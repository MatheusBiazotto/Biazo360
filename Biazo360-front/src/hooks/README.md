# Hooks Personalizados - Sistema de Rastreio

## useTracking

Hook específico para rastreamento de encomendas com requisições GET simples.

### Funcionalidades

- **Busca REST**: Integração com API REST para busca de encomendas
- **Gerenciamento de Estado**: Gerencia todos os estados de rastreamento
- **Tratamento de Erros**: Gerencia erros de busca e exibição
- **Interface Limpa**: Estados simplificados para melhor usabilidade

### Uso

```javascript
import { useTracking } from "./useTracking";

const {
  trackingCode,
  trackingData,
  isSearching,
  error,
  hasSearched,
  searchTracking,
  clearSearch,
  setTrackingCode,
} = useTracking();
```

### Estados

- `trackingCode`: Código de rastreamento atual
- `trackingData`: Dados da encomenda
- `isSearching`: Status de busca (boolean)
- `error`: Erro atual
- `hasSearched`: Se já foi feita uma busca

### Ações

- `searchTracking(code)`: Busca encomenda por código
- `clearSearch()`: Limpa busca e reseta estados
- `setTrackingCode(code)`: Define código de rastreamento

## Configuração da API

### REST Endpoint

A API REST deve estar disponível em:

```
http://localhost:3001/encomenda/rastreio?codigo_rastreio={codigo}
```

### Formato da Resposta

```json
{
  "encomenda": {
    "codigo_rastreio": "CR6DLPJ751",
    "status": "Em Trânsito",
    "ultima_atualizacao": "2025-01-15T10:30:00.000Z",
    "previsao_entrega": "2025-01-20T00:00:00.000Z",
    "nome_remetente": "João Silva",
    "email_remetente": "joao@email.com",
    "tel_remetente": "(11) 99999-9999",
    "nome_destinatario": "Maria Santos",
    "email_destinatario": "maria@email.com",
    "tel_destinatario": "(11) 88888-8888"
  },
  "historico": [
    {
      "data_evento": "2025-01-15T10:30:00.000Z",
      "localizacao": "São Paulo - SP",
      "descricao": "Encomenda em trânsito",
      "status": "Em Trânsito"
    }
  ]
}
```

### Tratamento de Erros

- **Erro de Rede**: Exibe mensagem de erro de conexão
- **Código Inválido**: Exibe mensagem de código não encontrado
- **Erro de Parse**: Loga erro e exibe mensagem genérica
- **Timeout**: Configurável via `API_CONFIG.TIMEOUT`

## Exemplo de Implementação no Servidor

```javascript
// Exemplo de servidor REST (Node.js + Express)
const express = require("express");
const app = express();

app.get("/encomenda/rastreio", async (req, res) => {
  const { codigo_rastreio } = req.query;

  try {
    // Buscar dados no banco de dados
    const encomenda = await buscarEncomenda(codigo_rastreio);

    if (!encomenda) {
      return res.status(404).json({ error: "Encomenda não encontrada" });
    }

    res.json(encomenda);
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
```
