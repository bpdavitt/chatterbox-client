var Friends = {
  friendsList: {},
  toggleStatus: function(user) {
    if (Friends.friendsList[user] === undefined || Friends.friendsList[user] === false) {
      Friends.friendsList[user] = true;
      var sheet = document.createElement('style');
      sheet.innerHTML = `.${user} {background-color: green;}`;
      document.body.appendChild(sheet);
      //$(`.${user}`).css('background-color', 'green');
    } else {
      Friends.friendsList[user] = false;
      var sheet = document.createElement('style');
      sheet.innerHTML = `.${user} {background-color: #eee;}`;
      document.body.appendChild(sheet);
      //$(`.${user}`).css('background-color', '#eee');
    }
  }

};