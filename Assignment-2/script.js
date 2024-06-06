// Check Given String ia a Palindrome.
function reverseString(str) {
  let rev_string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev_string += str[i];
  }
  return rev_string;
}

function isPalindrome(str) {
  reverse_str = reverseString(str);

  if (reverse_str === str) {
    console.log("Passes string is apalindrome");
  } else {
    console.log("Passed string is not a palindrome");
  }
}
let test = "racecar";
isPalindrome(test);

// Arrange the string in the alphabetical order.
function isAlphabrticalOrder(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] > str[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isAlphabrticalOrder("abcdef")); // true
console.log(isAlphabrticalOrder("aabbcc")); // true
console.log(isAlphabrticalOrder("abcdeF")); // false
console.log(isAlphabrticalOrder("hello")); // false
console.log(isAlphabrticalOrder("xyz")); // true

// Calculate the marks using function.
function calculateAverage(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  let average = sum / marks.length;
  return average;
}

const marks1 = [90, 80, 70, 60, 50];
const marks2 = [100, 95, 85, 75, 65];
const marks3 = [100, 100, 100, 100];

console.log(calculateAverage(marks1)); // 70
console.log(calculateAverage(marks2)); // 84
console.log(calculateAverage(marks3)); // 100
