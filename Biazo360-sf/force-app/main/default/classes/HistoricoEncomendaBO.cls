public with sharing class HistoricoEncomendaBO {
  public static void createEventInsert(
    List<HistoricoEncomenda__c> newHistorico
  ) {
    List<EventoHistoricoEncomenda__e> eventosHistorico = new List<EventoHistoricoEncomenda__e>();
    Set<Id> encomendaIds = new Set<Id>();

    for (HistoricoEncomenda__c historico : newHistorico) {
      encomendaIds.add(historico.Encomenda__c);
    }

    Map<Id, Encomenda__c> encomendasMap = new Map<Id, Encomenda__c>(
      [SELECT Id, CodigoRastreio__c FROM Encomenda__c WHERE Id IN :encomendaIds]
    );

    for (HistoricoEncomenda__c historico : newHistorico) {
      EventoHistoricoEncomenda__e eventoHistorico = new EventoHistoricoEncomenda__e();

      eventoHistorico.Payload__c = JSON.serialize(
        generatePayload(historico, encomendasMap)
      );
      eventoHistorico.Tipo__c = 'CREATE_HISTORICO_ENCOMENDA';

      eventosHistorico.add(eventoHistorico);
    }

    if (!eventosHistorico.isEmpty()) {
      EventBus.publish(eventosHistorico);
    }
  }

  public static void createEventUpdate(
    List<HistoricoEncomenda__c> newHistorico,
    Map<Id, HistoricoEncomenda__c> oldHistorico
  ) {
    List<EventoHistoricoEncomenda__e> eventosHistorico = new List<EventoHistoricoEncomenda__e>();
    Set<Id> encomendaIds = new Set<Id>();

    for (HistoricoEncomenda__c historico : newHistorico) {
      encomendaIds.add(historico.Encomenda__c);
    }

    Map<Id, Encomenda__c> encomendasMap = new Map<Id, Encomenda__c>(
      [SELECT Id, CodigoRastreio__c FROM Encomenda__c WHERE Id IN :encomendaIds]
    );

    for (HistoricoEncomenda__c historico : newHistorico) {
      if (
        historico.CodigoHistorico__c != null &&
        oldHistorico.get(historico.Id).CodigoHistorico__c == null
      ) {
        continue;
      }
      EventoHistoricoEncomenda__e eventoHistorico = new EventoHistoricoEncomenda__e();

      eventoHistorico.Payload__c = JSON.serialize(
        generatePayload(historico, encomendasMap)
      );

      eventoHistorico.Tipo__c = 'UPDATE_HISTORICO_ENCOMENDA';

      eventosHistorico.add(eventoHistorico);
    }

    if (!eventosHistorico.isEmpty()) {
      EventBus.publish(eventosHistorico);
    }
  }

  private static PayloadHistoricoTO generatePayload(
    HistoricoEncomenda__c historico,
    Map<Id, Encomenda__c> encomendasMap
  ) {
    PayloadHistoricoTO payloadHistorico = new PayloadHistoricoTO();

    payloadHistorico.id = Integer.valueOf(historico.CodigoHistorico__c);
    payloadHistorico.id_salesforce = historico.Id;
    payloadHistorico.encomenda_codigo_rastreio = encomendasMap.get(
        historico.Encomenda__c
      )
      .CodigoRastreio__c;
    payloadHistorico.data_evento = historico.DataHoraEvento__c;
    payloadHistorico.localizacao = historico.Localizacao__c;
    payloadHistorico.descricao = historico.Descricao__c;
    payloadHistorico.status = historico.StatusMomento__c;

    return payloadHistorico;
  }

  public class PayloadHistoricoTO {
    public Integer id;
    public String id_salesforce;
    public String encomenda_codigo_rastreio;
    public Datetime data_evento;
    public String localizacao;
    public String descricao;
    public String status;
  }
}
