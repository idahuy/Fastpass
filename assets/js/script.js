// Assignment Code
var generateBtn = document.querySelector("#generate");

// array for each set of characters
var nums = "0123456789";
var symb = "!@#$%^&*()";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Write password to the #password input
function writePassword() {

  // create a function for generatePassword
  var generatePassword = function() {
    // set list of possible characters that can be used into its own string
    passwordCharSet = ""; 

    // determine the length of the password
    var length = prompt("Enter a number from 8 to 128 for password length.");

    // determine whether or not the password will have lowercase
    var lowercase = confirm("Would you like to use lowercase letters?");
      if (lowercase == true) {
        passwordCharSet += lower;
      };

    // determine whether or not the password will have uppercase
    var uppercase = confirm("Would you like to use uppercase letters?");
      if (uppercase == true) {
        passwordCharSet += upper;
      };
    // determine whether or not the password will have symbols
    var symbols = confirm("Would you like to use symbols?");
      if (symbols == true) {
        passwordCharSet += symb;
      };
    // determine whether or not the password will have number
    var numbers = confirm("Would you like to use numbers?");
      if (numbers == true) {
        passwordCharSet += nums;
      };
    // var for the start of the password which is null
    var pass = "";
    // get the length and randomize passwordCharSet from the given set of strings for each array selected
    for (i = 0; i < length; i++) {
      pass += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }
    return pass;
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
