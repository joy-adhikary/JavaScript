
// function er body je kno jaigai likhlei hoi , jmn eitai nice dice , to ei joy ke upr theke o call deya jaito

//below both function call are valid 

function joy(firstName, lastName) {
    return firstName + lastName;
}

let x = joy("joy", "adhikary");
console.log(x);


let y = joy1("joy", "adhikary");
console.log(y);

function joy1(firstName, lastName) {
    return firstName + lastName;
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

function add(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log(add(1,2,3,4,5,10));