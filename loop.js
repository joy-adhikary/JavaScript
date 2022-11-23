
// while

let number =10;
console.log("while loop ==>")
while(number>=0){
    console.log(number);
    number-=2;
}
/*
for (initializer; condition; iterator) {
     statements
}
*/
number =10;
console.log("for loop ==>")
for(let i=5;i<=number;i++){
    console.log(i);
}

let j=8;
console.log("for loop ==>")
for(;j<number;j++){
    console.log(j);
}

j=10;
for(; ;){
    if(j>=12){
        break;
    }
    console.log(j);
    j++;
}

/*

for --> loops through a block of code a number of times
for/in --> loops through the properties of an object
for/of --> loops through the values of an iterable object
while --> loops through a block of code while a specified condition is true
do/while --> also loops through a block of code while a specified condition is true

*/

/*
let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5

but in var case are different 

var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10
*/


let person={
      name:'joy',
      last_name:'adhikary',
      id:062,
      dpt:'cse',
}

let array=[10,12,11,15,20];


//for(key in object_name) here key return the keys of the obj

// array er moddhe key diye indx bojhai .. obj a key diye key bujhai r array te indx , cz
//obj key value pair a theke r array indx basied 

for(let x in person ){
    console.log("key =>",x,"value =>",person[x]);
}

for(x in array){
    console.log(x,"==>",array[x]);
}

//Do not use for in loop over an Array if the index order is important.

// inherite obj eu for in kaj kore 

const person1 = new Object(person);
person1.university="BUBT";

for(key in person1){
    console.log("key =>",key," , value =>",person1[key])
}


//The JavaScript for of statement loops through the values of an iterable object.
// loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, 
// for ( value of object_name)
for ( x of array){
 console.log(x);
}

let joy1="joy_adhikary";
//both are same 
for(let i=0;i<joy1.length;i++){
    console.log(joy1[i]);
}

for(x of joy1){
    console.log(x);
}