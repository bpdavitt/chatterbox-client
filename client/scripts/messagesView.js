var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(arr) {
    $('#chats').empty();
    for (let i = 0; i < arr.length; i++) {
      MessagesView.renderMessage(arr[i]);
    }
  },

  renderMessage: function(message) {
    let rendered = MessageView.render(message);
    this.$chats.append(rendered);
    $('.username').unbind('click').click(function(event) {
      Friends.toggleStatus(event.target.textContent);
    });
  }

};