// Array of special chars
var specialC = [
"@",
"%",
"+",
"\\",
"/",
"'",
"!",
"#",
"^",
"?",
":",
",",
")",
"(",
"}",
"[",
"]",
"~",
"-",
"_",
".",
"#",
"*",
"=",
];

// Array of numbers
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Array of uppercase letters
var uppercaseC = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Array of lowercase characters
var lowercaseC = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];


function generatePassword(){
  var pLength = prompt("What password length do you want?");
  var specialC = confirm("Needs special characters");
  var uppercaseC = confirm("Needs uppercase characters");
  var lowercaseC = confirm("Needs lowercase characters");
  var number = confirm("Needs numbers");

  var passwordChoices = {
    pLength: pLength,
    specialC: specialC,
    uppercaseC: uppercaseC,
    lowercaseC: lowercaseC,
    number: number
  }


// Saves what becomes our password
var results = [];
var requiredCharacters = [];

// Selects random value from array
function randomCharSelect(array) {
  return array[Math.floor(Math.random() * array.length)]; // pulls first value from an array
}

// If statement pushes these password choices into the required characters array
if(passwordChoices.specialC) {
  results.push(randomCharSelect(specialC));
  requiredCharacters.concat(specialC);
}

if(passwordChoices.uppercaseC) {
  results.push(randomCharSelect(uppercaseC));
  requiredCharacters.concat(uppercaseC);
}

if(passwordChoices.lowercaseC) {
  results.push(randomCharSelect(lowercaseC));
  requiredCharacters.concat(lowercaseC);
}

if(passwordChoices.number) {
  results.push(randomCharSelect(number));
  requiredCharacters.concat(number);
}
for (var i = 0; i < passwordChoices.pLength - results.length; i++) {
  var randomC = randomCharSelect(requiredCharacters);
  results.push(randomC);
  console.log(results);
}

}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}