// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var availableChar = ``
  var completedPassword = ``

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

return `helloworld`
}