var Rooms = {

  add: function () {
    let room = window.prompt('Please enter new room name', '');
    RoomsView.renderRoom(room);
  }
};