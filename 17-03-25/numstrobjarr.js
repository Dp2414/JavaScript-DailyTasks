//1.Write a function that takes an array of numbers and returns a new array where each number is doubled.
function double(arr1=[1,2,3,4]){
   let l= arr1.map(num=>num*2);
   console.log(l);
   
}
double();

// ----------------------------------------------------------------------------------------------------------

//2.Write a function that takes an array of mixed values (numbers, strings, booleans) and returns a new array containing only the string values.
function arr(){
let a=[2,"ok",false]
a.pop();
a.shift();
console.log(a);

}
arr(); //Output :- [ 'ok' ]

// ------------------------------------------------------------------------------------------------------------

//3.Write a function that counts the number of properties in an object.
// Example:
// Input: { name: "John", age: 30, city: "New York" }
// Output: 3

function newObj()
{
    let a={
        "emp name": "jejfc",
        id:34,
        isGoodemployee:true,

    };
    console.log(`The number of properties in a are ${Object.keys(a).length}`); 
    
}
newObj();//Output:- The number of properties in a are 3

// ------------------------------------------------------------------------------------------------------------

//4.Write a function that merges two objects, giving priority to the second object's properties when there are conflicts.
// Example:
// Input: { a: 1, b: 2 }, { b: 3, c: 4 }
// Output: { a: 1, b: 3, c: 4 }
function merge(){
    let h={
        x:1,
        y:2,
        z:3
    };
    let t={
        y:2,
        z:4,
        y:5

    };
    let xyz={...h,...t};
    console.log(xyz);
    
}
merge(); //{ x: 1, y: 5, z: 4 }

// ------------------------------------------------------------------------------------------------------------

//5.Write a function that retrieves a value from a nested object using a string path.
// Example:
// Input: { user: { profile: { name: "Alice", age: 25 } } }, "user.profile.name"
// Output: "Alice"
function nested(){
    let nest={
        student: "engineering",
        branch:{
            cse:"14 students",
            ece:"1 student"
        }

    }
    console.log(`The no.of students in ECE: ${nest.branch.ece}`); 
    
}
nested(); // Output:-The no.of students in ECE: 1 student

// ------------------------------------------------------------------------------------------------------------

//6.Write a function that reverses a string without using the built-in reverse() method.
// Example:
// Input: "hello"
// Output: "olleh"

function revString(str="Hello") {
    
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
     
    }
    console.log(reversed);
    
    
  }
  revString(); //Output:- olleH

// ------------------------------------------------------------------------------------------------------------

  //7. Write a function that performs basic string compression using the counts of repeated characters.
// Example:
// Input: "aaabbbccc"
// Output: "a3b3c3"
// If the compressed string is not smaller than the original, return the original string.



  function compressString(str="aaabbbccc") {
    let compressed = "";
    let count = 1;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }
    
    return compressed.length < str.length ? compressed : str;
}


console.log(compressString()); // Output:- a3b3c3

// ------------------------------------------------------------------------------------------------------------


//8.Write a function that takes an array of numbers, filters out all numbers less than 10, doubles the remaining numbers, and then returns the sum of the resulting array.
// Example:
// Input: [5, 10, 15, 20]
// Output: 90 (because [10, 15, 20] -> [20, 30, 40] -> 20 + 30 + 40 = 90)

function arey(){
    let arr3=[5,3,40,10,12,20];
let c=arr3.filter((arr3)=>arr3>10);
   let d=c.map(arr3=>arr3*2);
   let e=d.reduce((acc,arr3)=>acc+arr3,0);

    console.log(`Filters(removes) out the numbers less than 10 so it prints number greater than 10: [${c}]`);
    console.log(`Doubling the remaining numbers i.e greater than 10:[${d}]`);
    console.log(`Then it returns the sum of resulting array: [${e}]`);
    
    
    //    c.forEach(num=> console.log(` c.forEach(num=> console.log(arr3*2));`, num*2));
    //    let random=c;
    //    console.log(random);
       
    }

arey();// Output:-Filters(removes) out the numbers less than 10 so it prints number greater than 10: [40,12,20]
// Doubling the remaining numbers i.e greater than 10:[80,24,40]
// Then it returns the sum of resulting array: [144]

// ------------------------------------------------------------------------------------------------------------

//9.Write a function that generates a random integer between a minimum and maximum value (inclusive).
// Example:
// Input: min = 5, max = 10
// Output: A random integer between 5 and 10 (inclusive) 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min )) +min;
}
console.log(getRandomInt(5, 10));// Output:- 6
 
// ------------------------------------------------------------------------------------------------------------

 