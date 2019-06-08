var Rooms = {

  allRooms: {},

  add: function () {
    let room = window.prompt('Please enter new room name', '');
    RoomsView.renderRoom(room);
  },

  manageRoomsImport: function (arr) {
    for (let i = 0; i < arr.length; i++) {
      let roomName = arr[i].roomname;
      if (Rooms.allRooms[roomName] === undefined) {
        Rooms.allRooms[roomName] = [arr[i]];
        RoomsView.renderRoom(roomName);
      } else {
        Rooms.allRooms[roomName].push(arr[i]);
      }
    }
  },

  
};

/*
roomNames = ['a', 'b', 'c']

if Rooms.allRooms[roomName] === undefined create array w/ message @ that key
otherwise push to that location

*/