var Rooms = {

  add: function () {
    let room = window.prompt('Please enter new room name', '');
    RoomsView.renderRoom(room);
  },

  allRooms: {}
};

/*
roomNames = ['a', 'b', 'c']

if Rooms.allRooms[roomName] === undefined create array w/ message @ that key
otherwise push to that location

*/