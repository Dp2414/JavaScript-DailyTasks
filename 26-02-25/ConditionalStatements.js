//1.What will be the output of the following code and why?
let score = 75;
let grade;
if (score >= 90) {    // as the score value is 75 which is less than this condition fail to execute the statement
 grade = "A";        
} else if (score >= 80) {  // as the score value is 75 which is less than this condition fail to execute the statement
 grade = "B";
} else if (score >= 70) {   // as the score value is 75 which lies in this condition try to execute the statement as the condition is true
 grade = "C";  // as this condition is true this statement gets printed or executed 
} else if (score >= 60) {  // as the score value is 75 which is greater  than this condition fail to execute the statement
 grade = "D";
} else {   // the esle conditon here takes the values which are less than 60 
 grade = "F";
}
console.log(grade);                      // Output:- C
if (grade !== "F" ? score > 80 : false) { //if grade is F then it returns false
 console.log("Excellent performance");   // it wont execute because the conditions is not true as the condition is " grade is not equal to F "
} else {
 console.log("Keep working hard");       // Output:-Keep working Hard (as the if condition was wrong it executes the else statement)
}
// Output:-C
// Keep working hard


// ----------------------------------------------------------------------------------------------


//2. Explain what each console.log will output and why:
let authenticated = true;
let premium = false;
let admin = false;
console.log(authenticated && (premium || admin) ? "Full Access" : "LimitedAccess"); // Output:- LimitedAccess(because (true && (false||false) ) gives (true && false) as false||false is false... then the final logical w=output would be false as it dosent have the same boooleans, so hence it executes LimitedAccess as it is false  )
authenticated = false; // the let value is changed here 
console.log(authenticated && (premium || admin) ? "Full Access" : "LimitedAccess"); // Output:- LimitedAccess as the output would be false 
// 1.false && (false||false)
// 2.false && false 
// 3.false
authenticated = true;
premium = true;
console.log(authenticated && (premium || admin) ? "Full Access" : "LimitedAccess"); // Output:- Full Access as the output would be true 
// 1.true && (true||false) //true|| false is true
// 2.true && true // true && true is true

 // Output:-LimitedAccess
// LimitedAccess
// Full Access


// ----------------------------------------------------------------------------------------------


//3.What will the following nested conditional statement output and why?
let temperature = 25;
let humidity = 80;
let precipitation = 60;
let result;
if (temperature > 30) { //it wont exectue as it fails the condition
 if (humidity > 90) {
 result = "Stay indoors";
 } else if (precipitation > 80) {
 result = "Take an umbrella";
 } else {
 result = "Enjoy the warm weather";
 }
} else if (temperature > 20) { // this condition is true 
 if (humidity > 70 && precipitation > 50) { // this condition is also true 
 result = "Expect rain soon"; //so it executes this statement in consolelog
 } else if (humidity <= 70 && precipitation <= 50) {// the condition is false
 result = "Perfect weather";
 } else {// the condition is false
 result = "Changeable conditions";
 }
} else {// the condition is false 
 result = "Bring a jacket";
}
console.log(result);// Output:- Expect rain soon
//Output:- Expect rain soon


// ----------------------------------------------------------------------------------------------



// 4.What is the final value of the message and why? Be careful with the logic:
let userAge = 19;
let hasParentalConsent = false;
let isSubscribed = true;
let message;
if (userAge >= 18) {  // as this condition is true the statement inside it gets executed first
 message = "Adult content accessible";// this executes first
} else if (userAge >= 13) { // as per this condition the user age must be in between 13 and 17 including 17 and 13 so it wont gets executed as the condition is failed
 if (hasParentalConsent) { // if(true) then execute below statement says this condition
 message = "Teen content accessible with consent";
 } else { // if not true then this statement get executed
 message = "Parental consent required";
 }
} else { // if the user age is less than 13 then it prints the statement in this condition if user age is more than 17 it wont come till here  
 message = "Content not accessible";
}
if (isSubscribed) { // if true  then execute this statement or condition
 if (userAge < 18 && !hasParentalConsent) {  // if the user age is lesss than 18 and has parental consent is false this condition goes like(false && !false)==>(false && false = which is false) so this statement wont get executed
 message = "Subscribe status pending parental approval";
 } else {
 message += " with premium features";// this statement get executed at the end this statement goes like ==> message=message+" with premium features"
 //the message from above conditions we got is Adult Content accessible + " with premium features"
 }
}
console.log(message);
// Output:-Adult content accessible with premium features


// ----------------------------------------------------------------------------------------------


//5.What will be the final values of variables and the console output? Pay close attention to the order of operations and conditions:
let a = 5, 
b = 10, 
c = 15;
let result = "";
if (a < b) { // condition is true
 if (b < c) { // condition is true
 a = b; // now a=10;
 if (a < c) { // condition is true
 b = c; // now b=15
 if (b > a) { // condition is true
 result += "Path 1 ";  // result=result+"Path 1 "
 c = a; // now c=10;
 }
 }
 } else {
 result += "Path 2 ";
 c = a;
 }
} else {
 result += "Path 3 ";
 a = c;
}
if (a == 10 && b == 15) { // true && true = true so this condition gets executed ,as from change of a=b and b=c the values gets changed 
 result += "Condition X met";
} else if (a == 5 && c == 5) {
 result += "Condition Y met";
} else {
 result += "No conditions met";
}
console.log(`a=${a}, b=${b}, c=${c}`); // as from change of a=b(10) and b=c(15) and then c=a(10) values gets changed 
console.log(result); // Path 1 Condition X met
// Output:- a=10, b=15, c=10
// Path 1 Condition X met


// ---------------------------------------------------------------------------------------------


//6.Take two input numbers from the input Prompt and console the greatest number?
// let a=prompt("enter the a value") 
// let b=prompt("enter the b value");
// if(a>b){
// alert("a is the greatest number");
// }
// else if(a<b){
//     alert("b is the greatest number");
// }
// else{

//     alert("both are equal");
// }


// ---------------------------------------------------------------------------------------------


//7.Take three numbers from the input prompt and console the greatest number?
let a=prompt("enter the a value");
let b=prompt("enter the b value");
let c=prompt("enter the c value");

if(a>b&&a>c){
alert("a is the greatest number");
}
else if(b>a&&b>c){
    alert("c is the greatest number");
}
else if(c>a&&c>b){
    alert("c is the greatest number");
    
}
else{

    alert("All are equal");
}


//---------------------------------------------------------------------------------------------


//8.Write a prompt to take age as input and should check for condition number is greaterthan 18 and less than 90? If it satisfies the condition console “Eligible to Vote”. If not satisfy the console “Not Eligible to Vote” ?
let Age=prompt("Enter Your Age"); //if we give 40 in prompt then as per condition eligible to vote
if(Age>18 && Age<90){
    console.log("Eligible to Vote");  
} else{
    console.log("Not Eligible to Vote");
    
}
// Output:-if we give 40 in prompt then as per condition eligible to vote


//---------------------------------------------------------------------------------------------


//9.Explain the difference between null and undefined in JavaScript. How are they similar? In what scenarios might you encounter each one?

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


//---------------------------------------------------------------------------------------------


//11.Write a condition that checks: if age is greater than 18 AND hasLicense is true Can a person drive?
let Age=20;
let hasLicense=true;
if(Age>18&&hasLicense){ //Condition
    console.log("A person can drive");
    
} else{
    console.log("A person cannot drive");
    
}
// Output:-"A person can drive


//---------------------------------------------------------------------------------------------


/*12.Create three variables: let score = 85; let attendance = 75; let extraCredit = true;
Write conditions to check if a student passes if they need EITHER: score above 80 AND
attendance above 80 OR extraCredit is true*/
let score=85;
let attendance=75;
let extraCredit=true;

if ((score>80 &&attendance>80)||extraCredit) { // this statement is correct so it executes this statement inside the if .
    console.log("student passes");
} else {
    console.log("student fails");
}
// Output:-student passes


//---------------------------------------------------------------------------------------------


/*13. Create a variable with your age.
Write conditions to check if you are:
Child (below 13)
Teen (13-19)
Adult (above 19) */

let age=12;
if(age<13){
    console.log("You are Child");
} else if(age>=13 && age<=18){
    console.log("You are Teen");
} else{
    console.log("You are Adult");
}
//Output:-Your are child


//---------------------------------------------------------------------------------------------


/*15. Create two variables:
let temperature = 35;
let isHot;
Write a condition using temperature to set isHot to true if temperature is above 30*/

let temperature = 35;
let isHot;
if(temperature>30){
    isHot=true;
    console.log(isHot);
}
else{
    console.log("is cold");
    
}
// Output:-true