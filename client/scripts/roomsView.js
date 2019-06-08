var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
    $('select').on('change', RoomsView.render);
  },

  render: function() {
    let roomName = RoomsView.$select[0].value;
    let roomMessages = Rooms.allRooms[roomName];
    MessagesView.render(roomMessages);
    
  },
  renderRoom: function(roomName) {
    $('#rooms select').append(`<option value="${roomName}">${roomName}</option>`);
  }

};
