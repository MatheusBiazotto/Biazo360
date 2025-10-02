# Biazo360-back

Projeto Node.js com Express, JSForce e Prisma (MySQL).

## Requisitos

- Node.js 18+
- MySQL acessedvel

## Setup

1. Instale dependências:

```bash
npm install
```

2. Copie `.env.example` para `.env` e configure as variáveis.
3. Gere o Prisma Client e (opcional) crie migrações:

```bash
npm run prisma:generate
npm run prisma:migrate -- --name init
```

## Desenvolvimento

```bash
npm run dev
```

- Healthcheck: `GET /health`
- Teste Salesforce: `GET /salesforce/version`

## Produção

```bash
npm run start
```
