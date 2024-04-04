//          100 days of coding challenge ( DAY 21 )

//   Question 01
   // --making a list (enum) for different types of vehicles

   enum vehiclesType{
    car,
    Truck,
    Motorcycle,
   }
   // showing one type vehicles from list
   console.log(vehiclesType.Truck) // here it shows that what number our truck get in list
   
//   Question 02    
interface student{
  name: string;
 age: number;
 courses: string[];
}
let student: student = {
    name: "Varun",
    age: 22,
    courses: ["English","Graphic Design","science"]
};

console.log(student);
  // --We're using the blueprint to make sure our student has a name, age, and list of courses

//   Question 03 
type Shape = {
  kind: "Circle" | "Rectangle"
  radius?: number,
  width?: number,
  height?: number,
};
   // --Describing a circle
   let circle: Shape = {
    kind: "Circle",
    radius: 6,
   };

   // --Describing a Rectangle
   let Rectangle: Shape = {
     kind: "Rectangle",
     width: 15,
     height: 30
   };

      // -- now we have to show result
  console.log(circle);
  console.log(Rectangle);
