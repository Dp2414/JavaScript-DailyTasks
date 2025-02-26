//1. difference between var,let const

// ----var-----
/*var:- var is function-scoped when declared inside a function,and global-scoped when declared outside any function. It can be re-declared and reassigned within the same scope. */
// ----let----
/*let:-it is a block-scoped ,Variables are accessible only inside the {} block where they are declared.or can be reassigned but cannot be redeclared.*/
// ----const-----
//const:-const is used to create constants, it cant be reassigned or redeclared,it has to assign a value at the time of declaration
var x = 10;
var x = 20; // we can re-declare and re-assign anywhere based on thier scope golabal or function scope
const m = 14;
let $x = 24;

function variables() {
  $x = 30;
  var y = 30;
  var x = 50;
  console.log(x); // Output:-50;

  var bbr = 500;
  if (x > y) {
    var x = 100;
    y = 70; // here y is still inside the function scope so the variable y gets assigned to 70 => y=70;
    console.log(y); // Output:-70
    console.log(x); // Output:-100
  }
  //----------------example for choosing wrong one and getting bug-----------------------
  // m=16;// Const we cannot declare inside the other function nd we cannot  redeclare and reassin the const

  /*we get the TypeError as Assignment to constant variable.*/

  x = 99; // re-assigning of var
  console.log(x); // Output 99
  console.log(y); // Outputs: 40, because y is function-scoped
  console.log(m); // Output:-14
  console.log($x); // Output:-30 because it is redeclared inside the function the redeclared value stays inside the function only as we call it as a scope
}
$x = 50; //re-assigning of let
console.log(m); // Output:-14
console.log($x); // Output:-50
console.log(x); // Output:-20
variables();
//console.log(y); /---> this will give y is not defined as it is defined inside the function scope

//console.log(bbr); //we cannot console the values of the variables which are declared inside the function


// ----------------------------------------------------------------------------------------------


//2.Premitive and reference Data types

//premitive Data types
// 1.Number
// 2.string
// 3.boolean

//Reference Data Types
// 1.object
// 2.array
// 3.functions

//in Reference data type the value gets changed even if it's assigned to another variable, the value in that variable also changes

//in primitive data types, when a value is assigned to another variable, a copy of the value is created. Changing the original variable does not affect the new variable.

//Premitive data type
let _a = 43;
let _b = _a;
_a = 50;
console.log(_b); // Output:-43
console.log(_a); // Output:-50

//Reference data type
let $a = { djdj: 45 };
let $b = $a;
$a.djdj = 55;
console.log($b.djdj); // Output:-55


//----------------------------------------------------------------------------------------------


//3.Without running the code, determine the output of:
let result = 3 + 4 * 5 - 6 / 2 && 10 || 5;
Explain the order of operations that leads to this result
/*Given equation  3 + 4 * 5 - 6 / 2 && 10 || 5
If we compute 3+4*5-6/2 using BODMAS we get 20 && 10||5
20 && 10 as both are true then it returns 10, as both of them are greater than 0 both are true ,&& returns second truthy value
from 10||5 we get 10 as logical (or) || gets the first truthy value from the condition
so the answer is 10.


//----------------------------------------------------------------------------------------------


//4.NULL & UNDEFINED
//null and undefined are different from each other though they look similar..null and undefined are two distinct primitive values used to denote the absence of a value, but they serve different purposes and are used in different contexts.
/*undefined :- when we won't assing a value to the variable we declared and if we console.log it we will get udefined, as the value is not assigned to the variable
example:-*/
var undif;
console.log(undif); // Output:-undefined
/* null:- when we the user want to give nothing to the variable ,indicating that a variable intentionally has no value,Assigning null to a variable that holds an object reference can help in "resetting" that reference
example:-
*/
let nll = null;
console.log(nll); // Output:-null
// ---or---
let obj = { name: "nullundefined" };
obj = null;
console.log(obj); // Output:-null
//typeof undefined returns undefined
//typeof null returns object which is a historical error in JavaScript


// ----------------------------------------------------------------------------------------------


//5. swapping two variables without third variable
let a = 5;
let b = 10;
a = a + b;
//a=a+b; (eq1)
//a=5+10;
b = a - b;
// b=a+b-b (as a=a+b from eq 1)
a = a - b;
//a=a+b-(a+b-b)
a=b;
console.log(a, b); // Output:-10, 5 


// ----------------------------------------------------------------------------------------------


//6.predicting the resulting value and data type:
let result1 = "5" + 3; // Output:-''53'' string
let result2 = "5" - 3; // Output:- 2  number
let result3 = "5" * "3"; // Output:-15  number
let result4 = 10 / "2"; // Output:-5  number
let result5 = 8 * null; // Output:-0  number
let result6 = "five" * 2; // Output:-NaN  number
let result7 = "5" == 5; // Output:-true  boolean
let result8 = "5" === 5; // Output:-false  boolean


// ----------------------------------------------------------------------------------------------


//7.Strings
let str1 = "Hello";
let str2 = "World";
let num1 = 5;
let num2 = 10;
let str = str1 + " " + str2;
let avg = (num1 + num2) / 2;
console.log(str); // Output:-'Hello World'
if (str1.length > str2.length) {
  console.log("str1 is longer than str2");
} else if (str1.length < str2.length) {
  console.log("str2 is longer than str1");
} else {
  console.log("None of them are longer"); // Output:-'None of them are longer'
}

console.log(avg); //Output:-7.5


// ----------------------------------------------------------------------------------------------


//8.Conditions
let num = 11;
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Number is divisibe by both 2 and 3");
} else if (num % 2 == 0 || num % 3 == 0) {
  console.log("Number is Divisible by either 2 or 3");
} else if (num % 2 != 0 && num % 3 != 0) {
  console.log("Number is not Divisible by neither 2 nor 3"); // Output:-'Number is not Divisible by neither 2 nor 3'
}
console.log(num); // Output:-11


// ----------------------------------------------------------------------------------------------


//9.What is the value of each variable after these operations?
let a = 10;
let b = 3;
let addition = a + b; // Output:-13
let subtraction = a - b; // Output:-7
let multiplication = a * b; // Output:-30
let division = a / b; //Output:-3.3333
let modulus = a % b; //Output:-1
let exponentiation = a ** b;  //Output:-1000
let increment = a++;  //Output:-10
let decrement = --b;  //Output:-2
console.log(a); // Output:-11 a changes its orginal value from 10 to 11
console.log(b); // Output:-2 b changes its orginal value from 3 to 2


// ----------------------------------------------------------------------------------------------


//10.What will be the boolean result of these expressions?
// let p = true;
// let q = false;
// p && q //false
// p || q //true
// !p //false
// !q //true
// p && !q //true


// ----------------------------------------------------------------------------------------------


//11. Given this object:
let person = {
  name: "Alex",
  "favorite color": "blue",
  123: "numeric key",
  address: {
    city: "Techville",
    country: "Codeland",
  },
};
console.log(person.name);  //Output:-Alex
console.log(person["favorite color"]); //Output:-blue
console.log(person[123]);  //Output:-numerickey
console.log(person.address.country);  //Output:-Codeland
person["age"] = 25; 
console.log(person["age"]);  //Output:-25
person.address.city = "Programton";
console.log(person.address.city);  //Output:-


// ----------------------------------------------------------------------------------------------


//12. What will be the values of x, y, p, and q after this code runs?
let x = 5; 
let y = x++;
let p = 5;
let q = ++p;
// Output:- x=6;,y=5,p=6,q=6;


// ----------------------------------------------------------------------------------------------


//13. Predict the final value of variable num after these operations:
let num = 10;
num += 5; //15
num *= 2; //30
num -= 7; //23
num /= 3; //7.66
num %= 4; //3.66
//so the num will be 3.66 at the end


// ----------------------------------------------------------------------------------------------


//14. What will be output to the console?
let greeting = "Hello";
let name = "JavaScript";
console.log(greeting + " " + name); // Output:-Hello JavaScript
greeting += "!";
console.log(greeting); // Output:-Hello!


// ----------------------------------------------------------------------------------------------


//15. Calculate the result of these expressions:
let result1 = 2 + 3 * 4; // Output:-14
let result2 = (2 + 3) * 4; // Output:-20
let result3 = 20 / 4 - 2;  // Output:-3
let result4 = 20 / (4 - 2);  // Output:-10
let result5 = 5 + 10 / 2 * 3 - 1;  // Output:-19
