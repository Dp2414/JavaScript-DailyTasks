//1.Write a simple for loop that prints numbers from 1 to 5 to the console
 for(let i=1;i<6;i++)
 {
     console.log(i);
 }

//----------------------------------------------------------------------------------------------

//2.Create a while loop that counts down from 5 to 20 and displays each number.
 let i=5
while(i<21)
{
    console.log(i);
    i++
}
/*Output:- 
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
*/

//----------------------------------------------------------------------------------------------

//3.Use a do...while loop to run and continuously print the word “Hello” for 15 times.
 let i=1;
 do{
  
   console.log(`Hello- ${i}`);
    i++;
}while(i<16);

/*Output:- 

Hello- 1
Hello- 2
Hello- 3
Hello- 4
Hello- 5
Hello- 6
Hello- 7
Hello- 8
Hello- 9
Hello- 10
Hello- 11
Hello- 12
Hello- 13
Hello- 14
Hello- 15
*/

//----------------------------------------------------------------------------------------------

//4.Given an object with student names as property and their scores as values, use a for...in loop to display each student's name and score.
// Sample object: {
// Ram: 30,
// Shyam: 29
// }


 let Sample={
    ram:20,
    shyam:29,
}
for(let key in Sample){
    console.log(`${key} : ${Sample[key]}`);
}
/*Output:-
ram : 20
shyam : 29
*/

//----------------------------------------------------------------------------------------------

//5.Create an array of fruits, then use a for...of loop to display each fruit's name.
let fruits = ["apple","pineapple", "watermelon","orange","mango","grapes","banana","jack fruit",];

for(element of fruits)
{
    console.log(element);
}

/*Output:-
 apple
orange
mango
grapes
banana
jack fruit*/

//----------------------------------------------------------------------------------------------

//6.Write a program that takes an array of strings and returns the total number of characters across all strings using a for...of loop
const strings = ["fruits", "bannana", "apple"];
let total = 0;

for (const string of strings) {  // here we can give any name like string which is mentioned here
  total += string.length; //as the array contains 3 elements the loop executes three times,once for each element. so in total it took 3 iterations
}
console.log(`The total number of characters across all the strings are ${total}`);
//Output:- The total number of characters across all the strings are 18


//----------------------------------------------------------------------------------------------


//7.Define and assign a constant variable with any number between 1 to 100, then use a do...while loop to simulate guessing that number until correct between 1 to 100.
let i=10;
let guess=1;
do{
    console.log(`Guessing the number ${guess}`); //it prints asmay times the guess gets incremented until we get the correct guess
    if(i===guess){

    console.log(`The number is ${i} ,The guess is correct, the number lies between 1-100`);
    break;

}
guess++;

}while(i<101)

    console.log(i);
/*Output:-
Guessing the number 1
Guessing the number 2
Guessing the number 3
Guessing the number 4
Guessing the number 5
Guessing the number 6
Guessing the number 7
Guessing the number 8
Guessing the number 9
Guessing the number 10
The number is 10 ,The guess is correct, the number lies between 1-100*/


//----------------------------------------------------------------------------------------------


//8. Write a program which prints 1 to 100 numbers. but will not print or skip thenumbers which are divisible by 3 and 5;

for(let i=1;i<101;i++){
    if(i%3==0 && i%5==0){
        continue;

    }
    else{
        console.log(i);

    }

}


//----------------------------------------------------------------------------------------------


//9.Create an array of fruits (const fruits = [“Apple”, “Banana”, “Mango"]) and another array of (prices = [120, 30, 90]). Now console sentences with fruit name and its price in format using for loop “Fruit Name : price”.

const fruits = ["Apple", "Banana", "Mango"];
prices = [120, 30, 90];
for (let i = 0; i < fruits.length; i++) {
  console.log(`${fruits[i]}: ${prices[i]}`);
}
/*Output:- Apple: 120
Banana: 30
Mango: 90*/


//----------------------------------------------------------------------------------------------


//10. Create two arrays of numbers for example number1 = [2,3,4,87], and number2 = [3,5,7,4,3]; now console the numbers which are present in both arrays using any loop.
let number1 = [2, 3, 4, 87];
let number2 = [3, 5, 7, 4, 3];

for (let a = 0; a < number1.length; a++) {
  for (let b = 0; b < number2.length; b++) {
    //The outer loop goes through each element in number1 while the inner loop checks every element in number2 for a match, logging the number and breaking out once a match is found.

    if (number1[a] === number2[b]) {
      console.log(number1[a]);
      break;
    }
  }
}
/*Output:-2
87*/


//----------------------------------------------------------------------------------------------


//11. Write a program to console below pattern in the console?
for (let i = 1; i < 6; i++) {
  console.log("*".repeat(i));
}


//----------------------------------------------------------------------------------------------


//12.
const x = "123456789";
for (let i = 9; i > 0; i--) {
  console.log(x.substring(0, i)); //substring includes from 0index but not including index i
}


//----------------------------------------------------------------------------------------------


//13.
const n = 5;
for (let i = 1; i <= n; i++) {
  if (i === 1) {
    console.log(" ".repeat(n - i) + "*");
  } else {
    console.log(" ".repeat(n - i) + "*" + " ".repeat(2 * i - 3) + "*");
  }
}
console.log("          *          ");
console.log("        *   *       ");
console.log("       *     *       ");
console.log("      *       *       ");
console.log("     *         *       ");
