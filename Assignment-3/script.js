// Vehicle class
class Vehicle {
  constructor(wheels, isDeisel) {
    this.wheels = wheels;
    this.isDeisel = isDeisel;
  }
  drive() {
    console.log("You can drive");
  }
  break() {
    console.log("Break when there is a vehicle in front of you");
  }
}

const obj1 = new Vehicle("4Wheels", true);
console.log(obj1);
obj1.drive();
obj1.break();

const vehicalfn = {
  model: "XUV",
  number: 345678,
  color: "Red",
};
console.log(vehicalfn);

// converting string to Json
const stringToJson = JSON.stringify(vehicalfn);
console.log(stringToJson);

// converting Json to string
const JsontoString = JSON.parse(stringToJson);
console.log(JsontoString);
