// given
var generateBtn = document.querySelector("#generate");

// randomize array
function getRandom(arr) {
  // return values between 0 and the array, floor vs ceiling, in this case round down
  var randNum = Math.floor(Math.random() * arr.length);
  var char = arr[randNum];
  // take and store the characters, add to empty string password
  password = password + char;
}

// generate a password, variables stored within a function are local, vs global
function generatePassword() {
  // can play around with an array; however, strings are easier to manipulate
  var password = "";
  // empty character array, store random values while looping through the arrays
  var charTypes = [];
  var lowerChars = [
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

  // .toUpperCase()
  var upperChars = [
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
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var numsChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // array including the four variable types
  // loop through the array and prompt (ok or cancel) client to choose
  // prompt client to choose password length between 1 and 128
  // looping through the program until a set condition is met
  do {
    var passwordChar = prompt(
      "Please choose a character length between 8 and 128 characters."
    );
    //log the entire password, outside of the loop, because, then it will store the result :O
    console.log(passwordChar);

    if (passwordChar < 8 || passwordChar > 128 || isNaN(passwordChar)) {
      alert(
        "Please choose a valid length greater than 8 or less than 128 characters."
      );
    }
  } while (passwordChar < 8 || passwordChar > 128 || isNaN(passwordChar));

  do {
    var lower = confirm("Would you like to add lower characters?");
    console.log(lower);
    var upper = confirm("Would you like to add upper characters?");
    console.log(upper);
    var special = confirm("Would you like to add special characters?");
    console.log(special);
    var nums = confirm("Would you like to add numbers?");
    console.log(nums);

    if (lower) {
      charTypes = charTypes.concat(lowerChars);
    }
    if (upper) {
      charTypes = charTypes.concat(upperChars);
    }
    if (special) {
      charTypes = charTypes.concat(specialChars);
    }
    if (nums) {
      charTypes = charTypes.concat(numsChars);
    }
    if (charTypes.length === 0) {
      alert("Please include at least one character type");
    }
  } while (charTypes.length === 0);

  var passwordLength = passwordChar;
  for (var i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * charTypes.length);
    var charToAdd = charTypes[randomNum];
    password = password + charToAdd;
  }
  //self explanatory
  return password;
}

// Generate function when the user clicks the generate button
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
