
// function er body je kno jaigai likhlei hoi , jmn eitai nice dice , to ei joy ke upr theke o call deya jaito

//below both function call are valid 

function joy(firstName, lastName) {
    return firstName + " " + lastName;
}

let x = joy("joy", "adhikary");
console.log(x);


let y = joy1("joy", "adhikary");
console.log(y);

function joy1(firstName, lastName) {
    return firstName + " " + lastName;
}


function check_empty(massage) {
    if (!massage) {
        console.log("empty");
    } else {
        console.log(massage);
    }
}

check_empty("joy");
check_empty(" "); // " " is not an empty bcz it contain space 
check_empty("");


// using default argument which act like an array but it is nott an array

function add() {  // function add(...args){ }  both are same 
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(add(1, 2, 3, 4, 5, 10));

//function which is stored in a variable , it is called anonymous function (a function without a name).
let ex = function (a, b) {
    return a * b;
}
//let z=ex(10,"string");//this will return nan as int * string 
let z = ex(10, 10.540);
console.log(z)


// number of perameter 
function myFunction() {
    return arguments.length;
}
let ex1 = myFunction(1, 2, 2);
console.log(ex1); // this will return number of parameter   


// function in obj

let joy2 = {
    name: "joy",
    lastName: "adhiakry",
    fullName: function () {
        return this.name + this.lastName;
    }
}
//let ex2=joy2.fullName; // this will return fullname type 
let ex2 = joy2.fullName(); // this will return fullname value
console.log(ex2);


//function in another function 

function add1(x) {
    return x + 10;
}

function minus(x) {
    return x - 10;
}

function joy3(x, y, z, xx) { //fun pass korse minus ejonno ami jei nam e dei nah kno kaj korbe minus er e 
    let sum1 = x + y + z;
    return xx(sum1);
}

let ex3 = joy3(10, 20, 10, minus);  // 30 
let ex4 = joy3(10, 20, 10, add1)    // 50 
console.log(ex3, ex4)




//  advanced topic 




// sorting of any key pair value 
function compareBy(propertyName) {
    return function (a, b) {
        let x = a[propertyName],
            y = b[propertyName];

        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
    };
}
let products = [
    { name: "iphone", price: 100 },
    {
        name: "samsung",    // same as {name:"samsung",price:200},
        price: 200
    },
    { name: "iphone", price: 150 },
    {
        name: "joy",
        price: 1000000
    }
];

console.log("sorting by name ( first value");
console.log(products.sort(compareBy('name')));
console.table(products);

console.log("sorting by price ( 2nd value )");
console.log(products.sort(compareBy('price')));
console.table(products);



// https://www.javascripttutorial.net/javascript-pass-by-value/

let person1 = {
    name: 'joy',
    age: 23,
    sex: 'mail'
}

function pass_by_reference(obj) {
    obj.age += 1;
    obj.name = "joy_adhikary";

    // this modification  will not work cz 
    // when passing an object to a function, you are passing the reference of that object, not the actual object. Therefore, the function can modify the properties of the object via its reference.
    // so single properti access kora jabe but entire ta change kora jabe nah 
    obj = {
        name: 'joyxx',
        age: 234,
        sex: 'mail11'
    }
}

pass_by_reference(person1);
console.log(person1);


//A recursive function is a function that calls itself until it doesn’t. 

function sum3(number) {
    if (number <= 1) {
        return number;
    }
    else {
        return number + sum3(number - 1);
    }
}
let ex5 = sum3(10);
console.log(ex5);

