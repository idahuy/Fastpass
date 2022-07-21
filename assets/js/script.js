// Assignment Code
var generateBtn = document.querySelector("#generate");

var nums = "0123456789";
var symb = "!@#$%^&*()";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// Write password to the #password input
function writePassword() {

  var generatePassword = function() {
    passwordCharSet = "";

    var length = window.prompt("Enter a number from 8 to 128 for password length.");

    var lowercase = window.confirm("Would you like to use lowercase letters?");
      if (lowercase == true) {
        passwordCharSet += lower;
    };

    var uppercase = window.confirm("Would you like to use uppercase letters?");
      if (uppercase == true) {
        passwordCharSet += upper;
    };

    var symbols = window.confirm("Would you like to use symbols?");
      if (symbols == true) {
        passwordCharSet += symb;
    };

    var numbers = window.confirm("Would you like to use numbers?");
      if (numbers == true) {
        passwordCharSet += nums;
    };

    var pass = "";
    for (let i = 0; i < length; i++) {pass += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }
    return pass;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
