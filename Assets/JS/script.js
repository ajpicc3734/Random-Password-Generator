// Assignment code here

var passwordKeys = {
  lowerCase: "abcdefghijklmnopqrstuvwkyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialCharacters: "!@#$%^&*()_+{}?/",
};

function generatePassword() {
  var password = "";
  var passwordCharacters = "";

  var length = window.prompt(
    "Choose password length between 8 and 128 characters"
  );

  var lowerCase = window.confirm("Would you like to use lowercase letters?");
  if (lowerCase) {
    passwordCharacters += passwordKeys.lowerCase;
  }

  var upperCase = window.confirm("Would you like to use uppercase letters?");
  if (upperCase) {
    passwordCharacters += passwordKeys.upperCase;
  }

  var numbers = window.confirm("Would you like to use numbers?");
  if (numbers) {
    passwordCharacters += passwordKeys.numbers;
  }

  var specialCharacters = window.confirm(
    "Would you like to use special characters?"
  );
  if (specialCharacters) {
    passwordCharacters += passwordKeys.specialCharacters;
  }

  for (var i = 0; i < length; i++) {
    password +=
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }

  appendPassword(password);
}

generatePassword();

function appendPassword(pw) {
  var textArea = document.getElementById("password");
  if (typeof pw === "string") {
    textArea.innerText = pw;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
