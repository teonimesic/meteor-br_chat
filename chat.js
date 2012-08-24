Messages = new Meteor.Collection("messages");


if (Meteor.is_client) {

  Template.saying.greeting = function () {
    return "Welcome to chat.";
  };

  Template.saying.events = {
    'click input#submit' : function () {
      Messages.insert({
        name:Session.get('name'),
        text:$("#what_to_say").val()
      });
      $("#what_to_say").val("");
    }
  };
  
  Template.name_form.events = {
    'click input#set_name' : function () {
      Session.set('name', $('#name').val());
      $('#name').val('');
    }
  };
  
  Template.said.messages = function () {
    return Messages.find({});
  };
  
  Template.name_form.name_undefined = function () {
    if(Session.equals('name', undefined))
      return true;
    return false;
  };
  
}
