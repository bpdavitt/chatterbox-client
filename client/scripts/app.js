var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      let allMessages = data.results;
      allMessages = App.scrubData(allMessages);
      MessagesView.render(allMessages);
      console.log(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },
  scrubData: function(arr) {
    for(var i = arr.length - 1 ; i >= 0; i--){
      if(arr[i].text === undefined || arr[i].username === undefined || arr[i].roomname === undefined){
        arr.splice(i, 1);
        continue;
      }
      if(arr[i].text.includes("<script>") || arr[i].username.includes("<script>") || arr[i].roomname.includes("<script>") ){
        arr.splice(i, 1);
        continue;
      }
      if(arr[i].text.includes("<img") || arr[i].username.includes("<img") || arr[i].roomname.includes("<img") ){
        arr.splice(i, 1);
        continue;
      }
      if(arr[i].text.includes("<iframe") || arr[i].username.includes("<iframe") || arr[i].roomname.includes("<iframe") ){
        arr.splice(i, 1);
        continue;
      }
    }
    return arr;
  }
};
