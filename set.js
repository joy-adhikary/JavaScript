/*

just store unique values 

new Set()	Creates a new Set
add()	Adds a new element to the Set
delete()	Removes an element from a Set
has()	Returns true if a value exists in the Set
forEach()	Invokes a callback for each element in the Set
values()	Returns an iterator with all the values in a Set
clear()  – removes all elements from the Set object.
delete(value) – deletes an element specified by the value.

*/

let joy = new Set(["a", "b", "c", "d", "e", "f"]);

console.log("using normal value ")
for (let value of joy) {
    console.log(value);
}
console.log("using keys ")
for (let key of joy.keys()) {
    console.log(key);
}
console.log("using values ")
for (let value of joy.values()) {
    console.log(value);
}


// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c")
    .add("c") // this will work 
    .add("x");

for (let value of letters) {
    console.log(value);
}
