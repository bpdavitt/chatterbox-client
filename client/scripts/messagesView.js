var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message) {
    let rendered = MessageView.render.call(this,message);
    this.$chats.append(rendered);
    console.log(rendered);
  }

};