var Friends = {
  friendsList: {},
  toggleStatus: function(user) {
    if (Friends.friendsList[user] === undefined) {
      Friends.friendsList[user] = true;
    } else if (Friends.friendsList[user] === true) {
      Friends.friendsList[user] = false;
    } else if (Friends.friendsList[user] === false) {
      Friends.friendsList[user] = true;
    }
  }

};