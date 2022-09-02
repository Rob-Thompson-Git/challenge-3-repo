// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
  passwordText.value = password;

}




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var availableChar = ``
  var completedPassword = ``
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  //series of prompts
    //ask if they want uppercase
    var wantUpper = confirm(`Would you like to include uppercase characters?`)
    console.log(wantUpper);
    //ask if they want lowercase
    var wantLower = confirm(`Would you like to include lowercase characters?`)
    console.log(wantLower);
    //ask if they want special char
    var wantSpecChar = confirm(`Would you like to include special characters?`)
    console.log(wantSpecChar);
    //ask if they want numerics
    var wantNumericChar = confirm(`Would you like to include numeric characters?`)
    console.log(wantNumericChar);
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
  //Ask what length password should be
    //answer needs to be between 8-128
    var desiredPassLength = prompt(`How long would you like your password to be (8-128 characters)?`);
    if(parseInt(desiredPassLength) >= 8 && (parseInt(desiredPassLength) <= 128)) {
      console.log(desiredPassLength);
      console.log(availableChar);
      if (wantUpper) {
        availableChar = availableChar + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (wantLower) {
        availableChar = availableChar + "abcdefghijklmnopqrstuvwxyz";
      }
      if (wantSpecChar) {
        availableChar = availableChar + "!@#$%^&*()";
      }
      if (wantNumericChar) {
        availableChar = availableChar + "1234567890";
      }
      console.log(availableChar);
      for(var i = 0; i < parseInt(desiredPassLength); i++) {
      var randomIndex = Math.floor(Math.random()*availableChar.length);
      console.log(randomIndex);
      var randomCharacter = availableChar[randomIndex];
      console.log(randomCharacter);
      completedPassword = completedPassword + randomCharacter;
      console.log(completedPassword);
      }
      return completedPassword;
    } else {
      alert(`length of password is incorrect; must be between 8-128 characters.`);
      return null;
    }
    
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
return `helloworld`
}