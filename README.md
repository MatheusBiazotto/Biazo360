# 📦 Biazo360

<div align="center">
  <img src="https://img.shields.io/badge/Status-Online-success" alt="Status">
  <img src="https://img.shields.io/badge/DevOps-Docker-blue" alt="Docker">
  <img src="https://img.shields.io/badge/Deploy-VPS-orange" alt="VPS">
  <img src="https://img.shields.io/badge/SSL-Enabled-green" alt="SSL">
</div>

## 🎯 Sobre o Projeto

**Biazo360** é uma plataforma full-stack para gerenciamento de logística, desenvolvida com foco em **DevOps**, **arquitetura distribuída** e **segurança**. O projeto simula uma empresa de logística fictícia, permitindo o cadastro de encomendas e rastreamento em tempo real pelos clientes.

O principal objetivo foi aplicar e aprofundar conhecimentos em DevOps, orquestrando diferentes tecnologias em um ambiente de produção real, desde o backend até o deploy.

🔗 **Projeto em produção:** [https://biazo360.zvcore.com](https://biazo360.zvcore.com)

---

## 🏗️ Arquitetura

A arquitetura foi pensada para ser **escalável**, **segura** e **modular**, dividida em três pilares principais:

```
┌─────────────────────────────────────────────────────────────┐
│                         USUÁRIO                              │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
         ┌───────────────────────────────┐
         │   Frontend (Next.js + SSR)    │ ← Único ponto público
         └───────────────┬───────────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │  Traefik (Proxy)    │ ← SSL/TLS automático
              └──────────┬──────────┘
                         │
         ┌───────────────┴───────────────┐
         │                               │
         ▼                               ▼
┌─────────────────┐            ┌──────────────────┐
│  API Middleware │            │   Salesforce     │
│    (Node.js)    │◄───────────│  (Back-office)   │
└────────┬────────┘  Platform  └──────────────────┘
         │            Events
         ▼
  ┌─────────────┐
  │    MySQL    │
  └─────────────┘

   Rede Docker Privada (Isolada)
```

### ⚙️ Sistema Administrativo (Salesforce)

- **Função:** Back-office da operação
- **Recursos:**
  - Cadastro de encomendas
  - Atualização de histórico de rastreio
  - Gerenciamento de status
- **Integração:** Triggers e Platform Events em tempo real

### 🔄 API Middleware (Node.js)

- **Tecnologias:** Node.js, Express.js, jsforce
- **Função:** Cérebro da comunicação entre Salesforce e banco de dados
- **Responsabilidades:**
  - Escutar eventos do Salesforce via Platform Events
  - Processar e transformar dados
  - Persistir informações no MySQL
  - Expor endpoints seguros para o frontend

### 🖥️ Portal do Cliente (Next.js)

- **Tecnologias:** Next.js 14, React, TailwindCSS
- **Função:** Interface para rastreamento de encomendas
- **Recursos:**
  - Rastreamento em tempo real
  - Interface responsiva e moderna
  - Server-Side Rendering (SSR) para segurança
  - Design system consistente

---

## 🔒 Segurança por Design

A arquitetura foi pensada para ser **segura desde o início**:

- ✅ **Rede privada:** API e MySQL não são expostos publicamente
- ✅ **Docker networking:** Comunicação isolada em rede Docker privada
- ✅ **SSR (Server-Side Rendering):** Requisições ao backend feitas no servidor Next.js
- ✅ **Proxy reverso:** Traefik gerencia todo o tráfego externo
- ✅ **SSL/TLS:** Certificados automáticos via Let's Encrypt
- ✅ **Princípio do menor privilégio:** Cada serviço tem acesso apenas ao necessário

---

## 🛠️ Tecnologias Utilizadas

### Backend

- **Salesforce** - Plataforma de CRM e back-office
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **jsforce** - Biblioteca para integração com Salesforce
- **Prisma** - ORM para Node.js
- **MySQL** - Banco de dados relacional

### Frontend

- **Next.js 14** - Framework React com SSR
- **React** - Biblioteca para UI
- **TailwindCSS** - Framework CSS utility-first

### DevOps & Infraestrutura

- **Docker** - Containerização
- **Docker Compose** - Orquestração de containers
- **Traefik** - Proxy reverso e load balancer
- **Portainer** - Gerenciamento de containers
- **VPS** - Servidor virtual privado
- **Let's Encrypt** - Certificados SSL/TLS

---

## 🚀 Como Executar

### Pré-requisitos

- Docker e Docker Compose instalados
- Instância MySQL rodando (separadamente ou via Docker)
- Conta Salesforce Developer Edition (para o back-office)
- Node.js 18+ (para desenvolvimento local)

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/Biazo360.git
cd Biazo360
```

### 2️⃣ Configure as variáveis de ambiente

Crie arquivos `.env` em cada diretório:

**Biazo360-back/.env**

```env
DATABASE_URL="mysql://user:password@mysql:3306/biazo360"
SF_USERNAME=seu_usuario_salesforce
SF_PASSWORD=sua_senha_salesforce
SF_SECURITY_TOKEN=seu_security_token
SF_LOGIN_URL=https://login.salesforce.com
```

**Biazo360-front/.env.local**

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
API_INTERNAL_URL=http://api:3001
```

### 3️⃣ Inicie o MySQL (se necessário)

```bash
docker run -d \
  --name mysql \
  --network biazo360-network \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=biazo360 \
  -p 3306:3306 \
  mysql:8
```

### 4️⃣ Execute com Docker Compose

```bash
docker-compose up -d
```

Os serviços estarão disponíveis em:

- **Frontend:** http://localhost:3000
- **API:** http://localhost:3001 (apenas na rede Docker)

### 5️⃣ Execute as migrations do banco

```bash
cd Biazo360-back
npm install
npx prisma migrate deploy
```

---

## 📂 Estrutura do Projeto

```
Biazo360/
├── Biazo360-back/           # API Middleware (Node.js)
│   ├── src/
│   │   ├── server.js        # Servidor Express
│   │   ├── salesforce-listener.js  # Listener de Platform Events
│   │   ├── services/        # Lógica de negócio
│   │   └── utils/           # Utilitários
│   ├── prisma/
│   │   └── schema.prisma    # Schema do banco de dados
│   ├── Dockerfile
│   └── package.json
│
├── Biazo360-front/          # Portal do Cliente (Next.js)
│   ├── src/
│   │   ├── app/             # App Router (Next.js 14)
│   │   ├── components/      # Componentes React
│   │   ├── actions/         # Server Actions
│   │   └── hooks/           # React Hooks
│   ├── Dockerfile
│   └── package.json
│
├── Biazo360-sf/             # Código Salesforce
│   └── force-app/
│       └── main/default/
│           ├── classes/     # Apex Classes
│           └── triggers/    # Apex Triggers
│
├── docker-compose.yml       # Orquestração Docker
└── README.md               # Este arquivo
```

---

## 🧪 Testar o Projeto

Você pode testar o rastreamento usando os seguintes códigos:

- `CRZDB8H87E`
- `CRKP7JH31N`
- `CREQNYHCAZ`
- `CR6DLPJ751`

Acesse [https://biazo360.zvcore.com/rastreio](https://biazo360.zvcore.com/rastreio) e insira um dos códigos acima.

---

## 🎓 Aprendizados

Este projeto foi desenvolvido em **4 dias** e proporcionou experiência prática em:

- ✅ Arquitetura de microsserviços
- ✅ Integração Salesforce com sistemas externos via Platform Events
- ✅ Containerização de aplicações com Docker
- ✅ Proxy reverso com Traefik
- ✅ Gerenciamento de certificados SSL automáticos
- ✅ Server-Side Rendering (SSR) com Next.js
- ✅ Deploy em VPS com Portainer
- ✅ Segurança por design e isolamento de rede
- ✅ DevOps end-to-end

---

## 🤔 Por que uma API separada?

Uma pergunta natural seria: **por que não usar apenas um webservice do Salesforce para expor os dados?**

Para um projeto pessoal focado em aprendizado, qual seria a graça? 😉

A ideia era justamente **praticar DevOps**, então criar uma API separada adicionou uma camada de desafio que eu estava buscando, pois também seria necessário:

- Containerizá-la
- Hospedá-la
- Isolá-la na rede
- Gerenciar seu ciclo de vida

Isso tornou o projeto muito mais rico em termos de experiência prática!

---

## 📊 Fluxo de Dados

1. **Cadastro no Salesforce:** Funcionário cadastra/atualiza uma encomenda
2. **Trigger Salesforce:** Trigger dispara Platform Event
3. **API Listener:** Node.js escuta o evento em tempo real
4. **Processamento:** API processa e persiste no MySQL
5. **Consulta Cliente:** Cliente acessa o portal Next.js
6. **SSR:** Next.js consulta a API internamente (sem expor ao navegador)
7. **Exibição:** Dados renderizados e exibidos ao cliente

---

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais e de portfólio.

---

## 👨‍💻 Autor

Desenvolvido com ☕ e muita dedicação em 4 dias.

**Tags:** #DevOps #FullStack #Security #Salesforce #NodeJS #ExpressJS #NextJS #Docker #Traefik #SystemArchitecture

---

⭐ Se este projeto te inspirou ou te ajudou de alguma forma, considere dar uma estrela no repositório!
