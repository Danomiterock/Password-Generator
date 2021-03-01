// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//This draws the password content from the information retrieved by th efunctions
  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create a array for upper case alpha, lower case alpha, special character, and number

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y", "Z"]

var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">","/", "~", "=", "+", "-"]

var numericalCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

//Defines an item as a vlue selected from a specific array
function random(arr) {
  let randomindex = Math.floor(Math.random()*arr.length)
  return arr[randomindex]
} 

// function writePassword() {
//   var password = generatePassword ();
//   var passwordText = document.querySelector("#generate");
// }

function passwordOptions() {
  //Prompt user for password length
  //ParseInt means change the variable from a string to a number
  let passwordLength = parseInt(prompt ("How many characters would you like your password to be? (must be between 8 and 128 characters)")while,(passwordLength < 8 || passwordLength > 128))
 
  //Prompt user for upper alpha
 let uppers = confirm("Would you like to include Uppercase Letters?")

  //Prompt user for lower alphs
 let lowers = confirm("Would you like to include Lowercase Letters?")
  //Prompt user for number 
 let numbers = confirm("Would you like to include Numbers?")
  //Prompt User for special characters
  let specchar = confirm("Would you like to include Special Characters?")
  let options = {
    passwordLength, uppers, lowers, numbers, specchar
  }
  return options
}
//These items define the names of various functions and objects in the code.

function generatePassword() {
  let options = passwordOptions();
  let concats = []
  let guaranted = []
  let finalpassword = []
if (options.specchar) {
  concats =[...concats, ...specialCharacter]
  guaranted.push(random(specialCharacter))
  }

if (options.numbers) {
  concats = concats.concat(numericalCharacter)
  guaranted.push(random(numericalCharacter))
}

if (options.lowers) {
  concats = concats.concat(lowerCaseLetters)
  guaranted.push(random(lowerCaseLetters))
}

if (options.uppers) {
  concats = concats.concat(upperCaseLetters)
  guaranted.push(random(upperCaseLetters))
}
console.log(concats)
console.log(guaranted)

//Run loop to select charracters from all four arrays
//This may be the loop- does this need to go inside the generatePassword function?
for(let i = 0; i < options.passwordLength; i++) {
finalpassword.push(random(concats))
}
for(let i = 0; i < guaranted.length; i++) {
  finalpassword[i] = guaranted[i]
  }
return finalpassword.join("")
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

// generatePassword()