trigger HistoricoTrigger on HistoricoEncomenda__c(after insert, after update) {
  if (Trigger.isInsert) {
    HistoricoEncomendaBO.createEventInsert(Trigger.new);
  }

  if (Trigger.isUpdate) {
    HistoricoEncomendaBO.createEventUpdate(Trigger.new, Trigger.oldMap);
  }
}
