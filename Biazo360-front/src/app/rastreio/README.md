# Sistema de Rastreio de Encomendas

## Funcionalidades Implementadas

### 🔍 **Busca de Encomendas**

- Integração com API real (`http://localhost:3001/encomenda/rastreio`)
- Busca por código de rastreamento
- Validação de entrada em tempo real
- Suporte a tecla Enter para busca rápida

### 📊 **Exibição de Dados**

- **Status da Encomenda**: Status atual com ícones e cores
- **Informações de Contato**: Dados do remetente e destinatário
- **Histórico Completo**: Timeline com todos os eventos
- **Datas Formatadas**: Formatação brasileira (DD/MM/AAAA HH:MM)

### 🎨 **Interface Melhorada**

- **Estados de Loading**: Spinner animado durante busca
- **Tratamento de Erros**: Mensagens claras para problemas
- **Scroll Automático**: Navegação suave para resultados
- **Botão de Limpar**: Limpeza rápida do formulário
- **Responsividade**: Layout adaptável para mobile

### 🔧 **Arquitetura**

- **Separação de Responsabilidades**: API, configuração e componentes separados
- **Cache Inteligente**: Revalidação automática a cada 60 segundos
- **Tratamento de Erros**: Try/catch com mensagens específicas
- **Configuração Centralizada**: URLs e timeouts em arquivo de config
- **Hooks Personalizados**: Lógica reutilizável e organizada

## Estrutura de Arquivos

```
src/
├── app/rastreio/
│   ├── page.js          # Componente principal
│   └── README.md        # Esta documentação
├── config/
│   └── api.js           # Configurações da API
├── hooks/
│   └── useTracking.js   # Hook específico para rastreamento
└── utils/
    └── api.js           # Funções de integração com API
```

## Como Usar

1. **Digite o código de rastreamento** no campo de busca
2. **Pressione Enter** ou clique em "Rastrear"
3. **Aguarde o carregamento** (spinner animado)
4. **Visualize os resultados** com scroll automático
5. **Use "Nova Busca"** para limpar e buscar outro código

## Configuração da API

Para alterar a URL da API, edite o arquivo `src/config/api.js`:

```javascript
export const API_CONFIG = {
  BASE_URL: "http://localhost:3001", // API REST
  ENDPOINTS: {
    RASTREIO: "/encomenda/rastreio",
  },
  // ...
};
```

## Cores do Tema

- **Azul Principal**: `#155dfc` (usado em botões e destaques)
- **Amarelo**: `oklch(85.2% 0.199 91.936)` (usado em chips e alertas)
- **Branco**: Fundo principal dos cards
- **Cinza**: Textos secundários e bordas

## Status Suportados

- **Em Trânsito**: Azul com ícone de caminhão
- **Postado**: Cinza com ícone de localização
- **Entregue**: Verde com ícone de check
- **Processando**: Amarelo com ícone de relógio
