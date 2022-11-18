
// obj hocche akta structure jeitar majhe je kono kisu thakte pare as like interface 

// You can create a const object:
const car = {
type:"Fiat", 
model:"500",
color:"white" };

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

console.log(car)

// obj er majhe obj 

let person = {
    firstname:'joy',
    lastname:'adhikary',
    email:'joyadhikary@gmail.com',
    phone:'017188888888',
    address:{
        street:'joy road',
        city : 'dhaka',
        Block:'H',
        Building_info:{
            building_num: 152,
            floor :6,
            flat_num:'29A'
        }
    }
}

// .(dot) diye diye access korty hobe or array er index er mto kore print kora jabe .

console.log(person.firstname) 

console.log(person['firstname'])

console.log(person.address.Block)

console.log(person['address']['Block'])

console.log(person['address']['Building_info']['building_num']) // person-> address-> building_info-> building_num
