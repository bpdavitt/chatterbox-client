var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    let user = App.username;
    let text = $('#message')[0].value;
    let room = $('#rooms select')[0].value;
    let message = new Messages(user , text , room);
    Parse.create(message);
    $('#message')[0].value = "";
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};