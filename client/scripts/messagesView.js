var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message) {
    let rendered = MessageView.render(message);
    this.$chats.append(rendered);
  }

};