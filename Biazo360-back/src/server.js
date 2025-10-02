require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { startListening } = require("./salesforce-listener");
const { PrismaClient } = require("./generated/prisma");

const app = express();
app.use(cors());
app.use(express.json());
const prisma = new PrismaClient();

app.get("/health", (req, res) => {
  res.json({ ok: true, uptime: process.uptime() });
});

app.get("/encomenda/rastreio", async (req, res) => {
  const { codigo_rastreio } = req.query;

  const encomenda = await prisma.encomendas.findUnique({
    where: { codigo_rastreio },
    select: {
      codigo_rastreio: true,
      status: true,
      data_postagem: true,
      previsao_entrega: true,
      ultima_atualizacao: true,
      nome_remetente: true,
      tel_remetente: true,
      email_remetente: true,
      nome_destinatario: true,
      tel_destinatario: true,
      email_destinatario: true,
    },
  });

  const historico = await prisma.historico_rastreio.findMany({
    where: { encomenda_codigo_rastreio: codigo_rastreio },
    select: {
      data_evento: true,
      localizacao: true,
      descricao: true,
      status: true,
    },
    orderBy: {
      data_evento: "desc",
    },
  });

  res.json({
    encomenda,
    historico,
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  startListening();
});
