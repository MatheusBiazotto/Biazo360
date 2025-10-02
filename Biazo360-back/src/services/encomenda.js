const { PrismaClient } = require("../generated/prisma");
const { generateTrackingCode } = require("../utils/generateTrackingCode");
const { MAX_ATTEMPTS } = require("../constants");

const prisma = new PrismaClient();

async function createEncomenda(shipData) {
  const trackingCode = generateTrackingCode();
  let attempts = 0;

  while (attempts < MAX_ATTEMPTS) {
    try {
      shipData.previsao_entrega = shipData.previsao_entrega
        ? `${shipData.previsao_entrega}T12:00:00Z`
        : null;

      const encomenda = await prisma.encomendas.create({
        data: {
          ...shipData,
          codigo_rastreio: trackingCode,
        },
      });

      return encomenda;
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        attempts++;
        trackingCode = generateTrackingCode();
      } else {
        throw error;
      }
    }
  }
}

async function updateEncomenda(shipData) {
  try {
    shipData.previsao_entrega = shipData.previsao_entrega
      ? `${shipData.previsao_entrega}T12:00:00Z`
      : null;

    

    const encomenda = await prisma.encomendas.update({
      where: { codigo_rastreio: shipData.codigo_rastreio },
      data: shipData,
    });

    return encomenda;
  } catch (error) {
    throw error;
  }
}

module.exports = { createEncomenda, updateEncomenda };
