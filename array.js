 
 
 // array akta special type er object .kintu obj likhty hoi { } diye r array [ ] diye .
 // array access korty hoi index diye like array[3] kintu obj access korty hoi name diye like person.address 
 // obj key value pair r array just only index contain value 
 // arrays use numbered indexes and objects use named indexes.
 
 


// const variable can not be reassign but const array / object  can be change an element or increase the size 
// You can create a constant array:
const cars = [
    "Saab",
    "Volvo",
    "BMW",
    100,
    true
];
// const cars=["bmw","audi",100,"75","joy","toyota"];upper one and this one, both are same 

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi"); 

// const car = ["Saab", "Volvo", "BMW"];
// car = ["Toyota", "Volvo", "Audi"];    // this will throw an error 

console.log(cars.length);   // Returns the number of elements
cars.sort()   // Sorts the array

console.log(cars)
console.log(typeof(cars))  // return the type 

const carx=new Array("bmw","audi",100,"joy","75","joy","toyota");

carx.push("joy"); // push from back 
//carx.unshift("push from front")
// carx[carx.length]="joy";    //both are same 

carx.pop(); // pop last element 
//carx.shift() // pop first element 
console.log(carx);



const point = [40]; // create array with one elemant 
const points=new Array(40); // create 40 empty items nul nul nul  ...... 40th nul  
console.log(point,points);

Array.isArray(point); // check if it is an array or not  


//To add an element to the beginning of an array, you use the unshift() method:
let array_ex=['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
array_ex.unshift('Red Sea'); // push from front 
console.log("used unshift ==> ",array_ex)

// removing element form the front 
array_ex.shift();
console.log("used shift ==> " ,array_ex)


//some of useful methods of array 
//The JavaScript method toString() converts an array to a string of (comma separated) array values.
let str = array_ex.toString();
console.log(str);  // array to string 

//The join() method also joins all array elements into a string.but in addition you can specify the separator:
let str1=array_ex.join("*");
console.log(str1);

//The concat() method creates a new array by merging (concatenating) existing arrays:
//The concat() method does not change the existing arrays. It always returns a new array.
//it can concat any number of array into one array 
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus","k","p","t"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren)

// The splice() method can be used to add new items to an array:
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

arr1.splice(0,1,"joy",'adhikary'); // indx 0 er por 1 ta element remove kore 2 ta element push kortyci
console.log(arr1);

// The slice() method can take two arguments like slice(1, 3).
// The method then selects elements from the start argument, and up to (but not including) the end argument.
let arr4= arr2.slice(1,5); // [1,5)
console.log(arr4);

//The sort() method sorts an array alphabetically:
//The reverse() method reverses the elements in an array.after reverse we can sort for descending order sorting 

arr2.sort();
arr2.reverse();
console.log(arr2);

//sorting an array which is containing only number then we need to perfrom some extra function to sort it out 
let point3 = [40, 100, 1, 5, 25, 10];
point3.sort(function(a,b){return a-b});
console.log(point3)


const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
];

for(let x of ratings){
    console.log(x.score);
}
