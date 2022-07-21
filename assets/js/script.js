// Assignment Code
var generateBtn = document.querySelector("#generate");

<<<<<<< HEAD
// array for each set of characters
=======
// Arrays for all the characters needed
>>>>>>> feature/psuedocode
var nums = "0123456789";
var symb = "!@#$%^&*()";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Write password to the #password input
function writePassword() {

<<<<<<< HEAD
=======
  // create a function for generatePassword
  var generatePassword = function() {
    // set list of possible characters that can be used into its own string
    passwordCharSet = ""; 

    // determine the length of the password

    // determine whether or not the password will have lowercase

    // determine whether or not the password will have uppercase

    // determine whether or not the password will have symbols

    // determine whether or not the password will have number

    // var for the start of the password which is null

    // get the length and randomize passwordCharSet from the given set of strings for each array selected


  }


>>>>>>> feature/psuedocode
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
