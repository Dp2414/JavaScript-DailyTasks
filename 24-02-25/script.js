//1.Basic Variables
var favColor= "red";
let favNumber= 14;
const favName= "SALAAR";
console.log(favColor);
console.log(favNumber);
console.log(favName);




//2.Data Types
// "42" = String;
//  42  = Number;
//  true= Boolean;
//  undefined=undefined;
//  ["apple","banana"] = object;
//  null = object;


//3.Numbers
//-- Their sum
let a=3;
let b=4;
result=a+b;
console.log(result);  // Output:-7
      // -----or-----
console.log(a+b); // Output:-7

//--Their difference
console.log(result=a-b);  // Output:- -1
      // -----or-----
console.log(a-b);  // Output:- -1

//--Their product
console.log(result=a*b);   // Output:-12
    // -----or-----
 console.log(a*b);  // Output:-12

//--Their division result
console.log(result=a/b); // Output:-0.75
console.log(a/b); // Output:-0.75



//4.Strings

let c="MS";
let d="DHONI";

console.log(c+" "+d);  //by ading 2 double quotes with a space in it(space depends on the no.of spaces we want to give in between them).

//5.Boolean
let isJavaScriptFun = true;
let isCodehard = false;
let isLearning = true;
console.log(isJavaScriptFun && isCodehard); // Output:- false
console.log(isCodehard || isLearning); // Output:- true


//6.Arrays
let food = ["Pizza","Shawarma","Butter chicken"]
console.log(food[0]);  // Output:- Pizza (as arrays index starts from 0 so the first food here is pizza which starts with [0] index value)
console.log(food.length);  //Output:- 3 (using the variablename.length we can find the length of an array  or the no.of items present in an array.)
console.log(food.push('Veg Salad'));  // // Output:- 4 (push() returns new length)
console.log(food);  // Output:- [ 'Pizza', 'Shawarma', 'Butter chicken', 'Veg Salad' ] the arrayname.push()inserts the elements at the last index of the array 


//7.Simple Math
let temperature = 35;
//temperature=temperature+5;
console.log(temperature+=5); // Output:- 40 
//temperature=temperature-2;
console.log(temperature-=2);// Output:- 38 
//temperature=temperature*3; 
console.log(temperature*=3); // Output:- 114
//temperature=temperature/2;
console.log(temperature/=2); // Output:- 57


// //8.Variable Names
// _firstName and $price 
//  only these two are valid names in J.S

// //9.Comments
// single-line comment :- // which comments out only the specific line ,just for documentation purpose and readablity
// multi-line comment :- 
/* which cover the content over 
multiple lines for
 clean code and documentation */


//10.DataType Checking
console.log(typeof ("Hello World"));  // Output:- String
console.log(typeof (42));  // Output:- number
console.log(typeof (true));  // Output:- boolean
console.log(typeof ([1,2,3]));  // Output:- object
console.log(typeof (undefined));  // Output:- undefined

//11.Basic Console
//  3ways to display "Hello, JavaScript!" in the console


console.log('"Hello,JavaScript!"');
console.info('"Hello,JavaScript!"');
console.debug('"Hello,JavaScript!"');

// -----------or---------

//1st-way
console.log('"'+"Hello,JavaScript"+'!"'); // Output:- "Hello,JavaScript!"
//2nd-way
 let e=['"Hello',',','JavaScript!"']       
console.log(e[0]+e[1]+e[2]); // Output:- "Hello,JavaScript!"
//3rd-way
let f='"Hello';
let g=",";
let h="JavaScript";
let i='!"';
console.log(f+g+h+i); // Output:- "Hello,JavaScript!"



//12.Variables and Numbers
let num1 = 10;
let num2 = 5;
let Addition=num1+num2;
let Subtraction=num1-num2;
let Multiplication=num1*num2;
let Division=num1/num2;
let byZero=num1/0;
console.log(Addition);      // Output: 15
console.log(Subtraction);   // Output: 5
console.log(Multiplication); // Output: 50
console.log(Division);      // Output: 2
console.log(byZero);   // Output: Infinity



