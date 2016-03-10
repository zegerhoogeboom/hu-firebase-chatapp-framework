$(document).ready(function() {
  // Your root ref
  var ref = new Firebase("https://CHANGE_ME.firebaseio.com/");
  // Store messages in /messages/{id}
  var messagesRef = ref.child("messages");

  //after getting the user credentials, store them so they're available everywhere
  var globalAuthData;

  // Get references to DOM elements
  var $newMessage = $("#newMessage");
  var $emailInput = $('#txtEmail');
  var $passInput = $('#txtPass');
  var $messageList = $("#messageList");
  var $loginButton = $('#login_button');
  var $registerButton = $('#register_button');
  var $loggedInText = $("#loggedInText");
  var $logoutButton = $("#logoutButton");

  // Add a new message to the message list
  function addMessage(username, text) {
    var el = $("<li class='list-group-item'><b>" + username + ":</b> " + text + "</li>")
    $messageList.append(el);
  }

  function addMessageFromSnapshot(snapshot) {
    var message = snapshot.val();

    // Escape unsafe characters
    var username = message.username.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
    var text = message.text.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");

    addMessage(username, text);
  }

  // Get the last 10 messages and call addMessageFromSnapshot(snapshot)


  $newMessage.keypress(function (e) {
    var text = $newMessage.val().trim();

    //keyCode 13 = Enter
    if (e.keyCode == 13 && text.length) {
      // Save message to Firebase when enter key is pressed

      // Reset new message input
      $newMessage.val("");
    }
  });


  function onAuth(authData) {
    if (authData) {
      // User logged in
      $loginForm.hide();
      $logoutButton.show();
      $loggedInText.text("Logged in as " + authData.password.email);
      $newMessage.prop("disabled", false);
    } else {
      // User logged out
      $loginForm.show();
      $logoutButton.hide();
      $loggedInText.text("");
      $newMessage.prop("disabled", true);
    }
  }

  $loginButton.click(function() {
    var email = $emailInput.val();
    var password = $passInput.val();
    login(/*pass the user*/);
  });

  $registerButton.click(function() {
    var email = $emailInput.val();
    var password = $passInput.val();
    //register
    //on fail: show/log message
    //on success:
    login(/*pass the user*/);
  });

  function login(user) {
    // Login
  }

  $logoutButton.click(function() {
    // Logout
  });

});
