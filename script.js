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

//Defines an item as a vlue selected from a specific array
// var item = item[Math.floor(Math.random()*item.length)]

function writePassword() {
  var password = generatePassword ();
  var passwordText = document.querySelector("#generate");
}

function generatePassword () {
  //Prompt user for password length
  prompt("How many characters would you like your password to be? (must be between 8 and 128 characters)")
 
  //Prompt user for upper alpha
  confirm("Would you like to include Uppercase Letters?", upperCaseLetters)

  //Prompt user for lower alphs
  confirm("Would you like to include Lowercase Letters?", lowerCaseLetters)
  //Prompt user for number 
  confirm("Would you like to include Numbers?", numericalCharacter)
  //Prompt User for special characters
  confirm("Would you like to include Special Characters?", specialCharacter)
  


  //return "Password should go here"
}

//Declare function for each array -should this be within the generatePassword function?
function getRandomcharacter(array) {

}
//Run loop to select charracters from all four arrays
//This may be the loop- does this need to go inside the generatePassword function?
for(let i = 0; i < i , length; i++) {

}

// //splice to the character length of the password to be between 8 and 120 characters-search refresher for how to splice
// array.splice(index, howmany, item1, ....., itemX)
// //This code limits the max length of the password
// <input type="text" maxlength="2" id="sessionNo" name="sessionNum" onkeypress="return isNumberKey(event)" />

//Display password on the screen- is this what the return will do?

// # User Story

// ```
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// ```

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```

//## Mock-Up

//The following image shows the web application's appearance and functionality:

//![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

//## Grading Requirements

//This homework is graded based on the following criteria: 

//### Technical Acceptance Criteria: 40%

//* Satisfies all of the preceding acceptance criteria plus the following:

  //* The homework should not produce any errors in the console when you inspect it using Chrome DevTools.

//### Deployment: 32%

//* Application deployed at live URL.

//* Application loads with no errors.

//* Application GitHub URL submitted.

//* GitHub repository that contains application code.

// ### Application Quality: 15%

// * Application user experience is intuitive and easy to navigate.

// * Application user interface style is clean and polished.

// * Application resembles the mock-up functionality provided in the homework instructions.

// ### Repository Quality: 13%

// * Repository has a unique name.

// * Repository follows best practices for file structure and naming conventions.

// * Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

// * Repository contains multiple descriptive commit messages.

// * Repository contains quality readme file with description, screenshot, and link to deployed application.

generatePassword()