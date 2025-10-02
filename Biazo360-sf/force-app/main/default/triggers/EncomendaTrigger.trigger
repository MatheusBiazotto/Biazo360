trigger EncomendaTrigger on Encomenda__c(after insert, after update) {
  if (Trigger.isInsert) {
    EncomendaBO.createEventInsert(Trigger.new);
  }

  if (Trigger.isUpdate) {
    EncomendaBO.createEventUpdate(Trigger.new, Trigger.oldMap);
  }
}
