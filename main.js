"use strict";
//          100 days of coding challenge ( DAY 21 )
Object.defineProperty(exports, "__esModule", { value: true });
//   Question 01
// --making a list (enum) for different types of vehicles
var vehiclesType;
(function (vehiclesType) {
    vehiclesType[vehiclesType["car"] = 0] = "car";
    vehiclesType[vehiclesType["Truck"] = 1] = "Truck";
    vehiclesType[vehiclesType["Motorcycle"] = 2] = "Motorcycle";
})(vehiclesType || (vehiclesType = {}));
// showing one type vehicles from list
console.log(vehiclesType.Truck); // here it shows that what number our truck get in list
let student = {
    name: "Varun",
    age: 22,
    courses: ["English", "Graphic Design", "science"]
};
console.log(student);
// --Describing a circle
let circle = {
    kind: "Circle",
    radius: 6,
};
// --Describing a Rectangle
let Rectangle = {
    kind: "Rectangle",
    width: 15,
    height: 30
};
// -- now we have to show result
console.log(circle);
console.log(Rectangle);
