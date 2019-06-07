var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
  },

  render: function() {
  },
  renderRoom: function(roomName) {
    $('#rooms select').append(`<option value="${roomName}">${roomName}</option>`);
  }

};
