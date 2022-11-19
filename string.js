
// string oparetion  just follow w3school for string 

// javaScript string a index diye value change kora jai nah 

let str="java";
str[0]="x";
console.log(str);  // output => java


//accesing string index 
let char = str.charAt(0); 
console.log(char);
console.log(str[0]);


let name="joy";
let full_name=`I'am ${name} adhikary `;     // ` ` er majhe string likhle variable er mto print kora jai . this will print I'am joy
//full_name="I'am ${name}"        // this will print I'am ${name}


console.log(full_name)
console.log(name.length) // length of string 
console.log(name[name.length-1]) // asccessing index 


//compare value acording to the ascii value . so jar ascii value boro oita boro 
let result = 'a'< 'b';
console.log(result); // true 

let joy = 'a'<'B';
console.log(joy); // false cz 98 < 66 compair hocche 


// Extracting String Parts


// slice(start position (included) , end position ( not included )  ) like  [start,end) , indexing start from 0
//slicec a - value thakle last theke count kore 
//slice() extracts a part of a string and returns the extracted part in a new string.
         
          //0123456789
let text = "Apple, Banana, Kiwi";
let slice_ex1=text.slice(9,13);
console.log(slice_ex1);

//If a parameter is negative, the position is counted from the end of the string:
let slice_ex2=text.slice(-12,-6);
console.log(slice_ex2)

//If you omit the second parameter, the method will slice out the rest of the string:
let slice_ex3=text.slice(8);
console.log(slice_ex3)



//A string can be converted to an array with the split() method:
//text.split(",")    // Split on commas
//text.split(" ")    // Split on spaces
//text.split("|")    // Split on pipe
let  array_from_string=text.split(",") //text0 now an array with split text string  by , 
console.log(array_from_string)




//substring(start, end)  
// only diff is neg num support kore nah  baki sob same slice er mto 

let slice_ex4=text.substring(9,13);
console.log(slice_ex4)



//substr(starting position , length of the string ) 
//eita negative value support kore like slice 
let slice_ex5=text.substr(9,5);
console.log(slice_ex5);

//If you omit the second parameter, substr() will slice out the rest of the string.
let slice_ex6=text.substr(10);
console.log(slice_ex6);





//A string is converted to upper case with toUpperCase():
let text1 = "Hello World!";
let text2 = text1.toUpperCase();

//A string is converted to upper case with toLowerCase():
let text3 = "HeLLo World!";
let text4 = text3.toLowerCase();




//The trim() method removes whitespace from both sides of a string:
let text5="    Hello        world       ";
let text6= text5.trim();
console.log(text6);

//The trimStart() method works like trim(), but removes whitespace only from the start of a string.
//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.





//some of useful oparetion in string ( w3school ) 

//The indexOf() method returns the index of (position of) the first occurrence of a string in a string:
//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
//Both indexOf(), and lastIndexOf() return -1 if the text is not found:
//The search() method searches a string for a string (or a regular expression) and returns the position of the match:
//The match() method returns an array containing the results of matching a string against a string 
//text.match("ain"); return only first ain 
//text.match(/ain/g); return total ain 
//The matchAll() method returns an iterator containing the results of matching a string against a string 
//The includes() method returns true if a string contains a specified value.
