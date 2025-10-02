const jsforce = require("jsforce");
const { createEncomenda, updateEncomenda } = require("./services/encomenda");
const { createHistorico, updateHistorico } = require("./services/historicos");

const ENCOMENDA_CHANNEL = process.env.ENCOMENDA_CHANNEL;
const HISTORICO_CHANNEL = process.env.HISTORICO_CHANNEL;

async function startListening() {
  const loginUrl = process.env.SF_LOGIN_URL || "https://login.salesforce.com";
  const username = process.env.SF_USERNAME;
  const password = process.env.SF_PASSWORD;
  const token = process.env.SF_TOKEN;

  if (!username || !password || !token) {
    throw new Error(
      "Variáveis SF_USERNAME, SF_PASSWORD e SF_TOKEN são obrigatórias."
    );
  }

  const conn = new jsforce.Connection({ loginUrl });

  try {
    await conn.login(username, password + token);
    console.log("✅ Conectado ao Salesforce com sucesso!");
    console.log("Iniciando a escuta dos Platform Events...");

    conn.streaming.topic(ENCOMENDA_CHANNEL).subscribe(async (message) => {
      if (message.payload.Tipo__c === "CREATE_ENCOMENDA") {
        console.log("Criando encomenda...");
        try {
          const result = await createEncomenda(
            JSON.parse(message.payload.Payload__c)
          );

          await conn.sobject("Encomenda__c").update({
            Id: result.id_salesforce,
            CodigoRastreio__c: result.codigo_rastreio,
          });
        } catch (error) {
          console.error("Erro ao criar encomenda:", error);
        }
      } else if (message.payload.Tipo__c === "UPDATE_ENCOMENDA") {
        console.log("Atualizando encomenda...");
        try {
          await updateEncomenda(JSON.parse(message.payload.Payload__c));
        } catch (error) {
          console.error("Erro ao atualizar encomenda:", error);
        }
      }
    });

    conn.streaming.topic(HISTORICO_CHANNEL).subscribe(async (message) => {
      if (message.payload.Tipo__c === "CREATE_HISTORICO_ENCOMENDA") {
        console.log("Criando histórico...");
        try {
          const result = await createHistorico(
            JSON.parse(message.payload.Payload__c)
          );
          await conn.sobject("HistoricoEncomenda__c").update({
            Id: result.id_salesforce,
            CodigoHistorico__c: String(result.id),
          });
        } catch (error) {
          console.error("Erro ao criar histórico:", error);
        }
      } else if (message.payload.Tipo__c === "UPDATE_HISTORICO_ENCOMENDA") {
        console.log("Atualizando histórico...");
        try {
          await updateHistorico(JSON.parse(message.payload.Payload__c));
        } catch (error) {
          console.error("Erro ao atualizar histórico:", error);
        }
      }
    });
  } catch (error) {
    console.error(
      "❌ Erro ao conectar ou escutar o Salesforce:",
      error.message
    );
  }
}

module.exports = { startListening };
