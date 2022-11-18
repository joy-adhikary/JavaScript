
// const variable can not be reassing but const array / object  can be change an element or increase the size 
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi"); 

// const carx = ["Saab", "Volvo", "BMW"];
// carx = ["Toyota", "Volvo", "Audi"];    // this will throw an error 
console.log(cars)



// You can create a const object:
const carx = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
carx.color = "red";

// You can add a property:
carx.owner = "Johnson";
console.log(carx)


console.log(typeof(carx))  // return the type 

