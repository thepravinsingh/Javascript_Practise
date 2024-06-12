// filter
const strArray = ['hi', 'hello', 'bye', 'namaste', 'madam', 'racecar'];
strArray.filter((data) => {
  {
    data.length == 3 && console.log(data);
  }
});
 
const result = strArray.filter((data) => {
  if (data.includes('hi')) {
    console.log(data);
    return true;
  }
  return false;
});
console.log(result);
 
//palindrome
const isPalindrome = (str) => {
  const len = str.length;
 
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};
 
const palindromes = strArray.filter((data) => {
  if (isPalindrome(data)) {
    console.log(data);
    return true;
  }
  return false;
});
console.log(palindromes);
 
// Map
const mapNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
const resultNum = mapNumArray.map((data) => {
  return data ** 2;
});
 
console.log(resultNum);
 
const resultStr = mapNumArray.map((data) => {
  return String(data);
});
 
console.log(resultStr);
 
//
 
let users = [
  { firstName: 'Susan', lastName: 'Steward' },
  { firstName: 'Danial', lastName: 'longbottom' },
  { firstName: 'Jacob', lastName: 'Black' },
];
 
users.find((data) => {
  data.firstName == 'Susan' && console.log(data);
});
 
users.filter((data) => {
  if (data.lastName.charAt(0) == 'l') {
    console.log(data);
  }
});
 
const mapData = users.map((data) => {
  return data;
});
 
console.log(mapData);