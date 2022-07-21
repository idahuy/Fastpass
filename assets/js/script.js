// Assignment Code
var generateBtn = document.querySelector("#generate");

<<<<<<< HEAD
=======
// array for each set of characters
var nums = "0123456789";
var symb = "!@#$%^&*()";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

>>>>>>> feature/array

// Write password to the #password input
function writePassword() {

<<<<<<< HEAD
  var generatePassword = function() {
    
  }

=======
>>>>>>> feature/array
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
