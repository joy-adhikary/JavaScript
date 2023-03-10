//  1 . issa moto number pass korty parbo ... er jonno

function sum(...joy){
    let total=0;
    for(let i of joy){total+=i}
  return total;
}

console.log(sum(1,2,3,4))
console.log(sum(1,4))
console.log(sum(1,2,4))


// 2. const er majhe value change kora jai .

const joy={ name: " joy ", id:62 }
joy.id=00;
console.log(joy) // joy 00


// 3. copy related 

const joy={ name: " joy ", id:62 }
const roy=joy;
roy.id=55;
console.log(joy) //  name:  joy , id: 55 that means it will change the value of joy.id also.

to avoid it we can use  this ( ... ) spred oparetor 
const joy={ name: " joy ", id:62 }
const roy={...joy};
roy.id=00;
console.log(joy) // it will not change joy.id 


// 4.Turnary oparetor 

let x=true;
if x?console.log("its true") : console.log("false").    //if condition ? ( if ture then execute this block ) : ( if false then execute this block )



5. const Obj = {
  data:{
      
      name : "JOY",
      id: "0978",
      class: "12",
  }
}
const name=obj.data.name , const id=obj.data.id,const class =obj.data.class;
eitar equivalent holo 
const {name,id,class}=Obj.data;


7.assigning value in a short way 

let x;
if (data.name){
    x=data.name}
else x=6666;

eitar equivalent holo 
let x=data.name || 6666


8. map vs foreach 

so basically  akta methes ashe je foreach modify kore r map array ke modify kore nah . but this steatment is not true .
lets see an example : 

let arr1=[1, 2, 3, 4 ]
let result1=arr1.foreach( (x,i,a)=>( a[i]=x*2 ))
console.log( "array 1 is ", result1) // undefined 

let result2=arr1.map( (x,i,a)=>( a[i]=x*2 ))
console.log( "array 1 is ", result1)  // 2 4 6 8 


9. assigning and accing at the same time 

const joy = {} 
joy.name="joyAdhikary" / joy["name"] = "joyAdhikary"    // creating and assign property at the same time 
console.log(joy)  // {name : joyAdhikary } 

