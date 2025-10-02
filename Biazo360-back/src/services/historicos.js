const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

async function createHistorico(histData) {
  const dataToCreate = { ...histData };
  if (dataToCreate.hasOwnProperty("id")) {
    delete dataToCreate.id;
  }

  try {
    const { encomenda_codigo_rastreio, ...historicoData } = dataToCreate;

    const historico = await prisma.historico_rastreio.create({
      data: {
        ...historicoData,
        encomendas: {
          connect: {
            codigo_rastreio: encomenda_codigo_rastreio,
          },
        },
      },
    });

    return historico;
  } catch (error) {
    throw error;
  }
}

async function updateHistorico(histData) {
  try {
    const historico = await prisma.historico_rastreio.update({
      where: { id: histData.id },
      data: histData,
    });

    return historico;
  } catch (error) {
    throw error;
  }
}

module.exports = { createHistorico, updateHistorico };
