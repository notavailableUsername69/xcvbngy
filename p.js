function generatePassword() {
  var length = document.getElementById("length").value;
  var symbols = document.getElementById("symbols").checked;
  var numbers = document.getElementById("numbers").checked;
  var lowercase = document.getElementById("lowercase").checked;
  var uppercase = document.getElementById("uppercase").checked;

  var chars = "";

  if (symbols) {
    chars += "!@#$%^&*()";
  }

  if (numbers) {
    chars += "0123456789";
  }

  if (lowercase) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }

  if (uppercase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var password = "";

  for (var i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  var passwordInput = document.getElementById("password");
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}