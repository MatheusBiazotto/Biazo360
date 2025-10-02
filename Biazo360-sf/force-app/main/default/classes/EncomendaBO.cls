public with sharing class EncomendaBO {
  public static void createEventInsert(List<Encomenda__c> newEncomendas) {
    List<EventoEncomenda__e> eventosEncomenda = new List<EventoEncomenda__e>();
    Set<Id> contactIds = new Set<Id>();

    for (Encomenda__c encomenda : newEncomendas) {
      contactIds.add(encomenda.Destinatario__c);
      contactIds.add(encomenda.Remetente__c);
    }

    Map<Id, Contact> contacts = new Map<Id, Contact>(
      [SELECT Id, Name, Phone, Email FROM Contact WHERE Id IN :contactIds]
    );

    for (Encomenda__c encomenda : newEncomendas) {
      EventoEncomenda__e eventoEncomenda = new EventoEncomenda__e();

      eventoEncomenda.Payload__c = JSON.serialize(
        generatePayload(encomenda, contacts)
      );

      if (encomenda.Status__c != 'Cancelado') {
        eventoEncomenda.Tipo__c = 'CREATE_ENCOMENDA';
      } else {
        eventoEncomenda.Tipo__c = 'CANCEL_ENCOMENDA_CREATED';
      }

      eventosEncomenda.add(eventoEncomenda);
    }

    if (!eventosEncomenda.isEmpty()) {
      EventBus.publish(eventosEncomenda);
    }
  }

  public static void createEventUpdate(
    List<Encomenda__c> newEncomendas,
    Map<Id, Encomenda__c> oldEncomendas
  ) {
    List<EventoEncomenda__e> eventosEncomenda = new List<EventoEncomenda__e>();

    Set<Id> contactIds = new Set<Id>();

    for (Encomenda__c encomenda : newEncomendas) {
      contactIds.add(encomenda.Destinatario__c);
      contactIds.add(encomenda.Remetente__c);
    }

    Map<Id, Contact> contacts = new Map<Id, Contact>(
      [SELECT Id, Name, Phone, Email FROM Contact WHERE Id IN :contactIds]
    );

    for (Encomenda__c encomenda : newEncomendas) {
      if (encomenda.Status__c != oldEncomendas.get(encomenda.Id).Status__c) {
        EventoEncomenda__e eventoEncomenda = new EventoEncomenda__e();

        eventoEncomenda.Payload__c = JSON.serialize(
          generatePayload(encomenda, contacts)
        );

        if (encomenda.Status__c != 'Cancelado') {
          eventoEncomenda.Tipo__c = 'UPDATE_ENCOMENDA';
        } else {
          eventoEncomenda.Tipo__c = 'CANCEL_ENCOMENDA';
        }

        eventosEncomenda.add(eventoEncomenda);
      }
    }

    if (!eventosEncomenda.isEmpty()) {
      EventBus.publish(eventosEncomenda);
    }
  }

  private static PayloadEncomendaTO generatePayload(
    Encomenda__c encomenda,
    Map<Id, Contact> contacts
  ) {
    PayloadEncomendaTO payloadEncomenda = new PayloadEncomendaTO();

    payloadEncomenda.id_salesforce = encomenda.Id;
    payloadEncomenda.codigo_rastreio = encomenda.CodigoRastreio__c;
    payloadEncomenda.data_postagem = encomenda.DataPostagem__c;
    payloadEncomenda.nome_destinatario = contacts.get(encomenda.Destinatario__c)
      .Name;
    payloadEncomenda.tel_destinatario = contacts.get(encomenda.Destinatario__c)
      .Phone;
    payloadEncomenda.email_destinatario = contacts.get(
        encomenda.Destinatario__c
      )
      .Email;
    payloadEncomenda.nome_remetente = contacts.get(encomenda.Remetente__c).Name;
    payloadEncomenda.tel_remetente = contacts.get(encomenda.Remetente__c).Phone;
    payloadEncomenda.email_remetente = contacts.get(encomenda.Remetente__c)
      .Email;
    payloadEncomenda.previsao_entrega = encomenda.PrevisaoEntrega__c;
    payloadEncomenda.status = encomenda.Status__c;
    payloadEncomenda.ultima_atualizacao = encomenda.UltimaAtualizacao__c;

    return payloadEncomenda;
  }

  public class PayloadEncomendaTO {
    public String id_salesforce;
    public String codigo_rastreio;
    public Datetime data_postagem;
    public String nome_destinatario;
    public String tel_destinatario;
    public String email_destinatario;
    public String nome_remetente;
    public String tel_remetente;
    public String email_remetente;
    public Date previsao_entrega;
    public String status;
    public Datetime ultima_atualizacao;
  }
}
