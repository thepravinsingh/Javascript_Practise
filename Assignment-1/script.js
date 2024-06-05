// Calculator
const a = 10;
const b = 20;
const operation = "+";
switch (operation) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Invalid Operation");
    break;
}

// Marks Average Generator
const maths = 97;
const sst = 98;
const english = 96;
const hindi = 90;
const science = 98;
const avg_marks = (maths + sst + english + hindi + science) / 5;
console.log(avg_marks);

// BMI Calculator
const weight = 70;
const height = 2;
const BMI = weight / (height * height);
console.log(BMI);

//Marks Grading System
const marks = 60;
switch (true) {
  case marks >= 50 && marks <= 59:
    console.log("Grade D");
    break;

  case marks >= 60 && marks <= 69:
    console.log("Grade C");
    break;

  case marks >= 70 && marks <= 79:
    console.log("Grade B");
    break;
  case marks >= 80:
    console.log("Grade A");
    break;

  default:
    console.log("Invalid Marks");
    break;
}
