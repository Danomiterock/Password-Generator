// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create a array for upper case alpha, lower case alpha, special character, and number

var lowerCaseLetters = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")

var upperCaseLetters = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y", "Z")

var specialCharacter = ("!", "@", "#", "$", "%", "^", "&", "*", "<", ">","/", "~", "=", "+", "-")

var numericalCharacter = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")

function writePassword() {
  var password = generatePassword ();
  var passwordText = document.querySelector("#generate");
}

function generatePassword () {
  //Prompt User for special characters
  //Prompt user for lower alphs
  //Prompt user for upper alpha
  //Prompt user for number
  //Prompt user for password length
  //Do I need prompts or should I just assign the value?
  //return "Password should go here"
}

//Declare function for each array -should this be within the generatePassword function?
function getRandomcharacter(array) {

}
//Run loop to select charracters from all four arrays
//This may be the loop- does this need to go inside the generatePassword function?
for(let i = 0; i < i , length; i++) {

}

//splice to the character length of the password to be 10 characters-search refresher for how to splice

//Display password on the screen- is this what the return will do?