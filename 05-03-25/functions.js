//1.Define a function named welcome that takes one parameter name and logs
// "Welcome, [name]!" to the console. If no name is provided, it should default to
// "Guest".

function welcome(name = "guest") {
  console.log(`Welcome,${name}`);
}
welcome("Deva"); // if name given then it logs Welcome,Deva
welcome(); // if no name is given it takes the default value i.e guest and logs out Welcome,guest
/*Output:-
Welcome,Deva
Welcome,guest
*/


//------------------------------------------------------------------------------------------------------


//2.calculating the area of rectangle with given formula  (Formula: Area = Width * Height)
let calculateArea = function (width, height) {
  let Area = width * height;
  return Area;
};
console.log(`Area of Rectangle is :${calculateArea(5, 4)}`);
//Output:-20


//------------------------------------------------------------------------------------------------------


//3.Create a function named isEven that takes a number as input and returns true if the number is even and false if it is odd.
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(488888247468898));
//Output:-true


//------------------------------------------------------------------------------------------------------


//4.max of two numbers
function max(a, b) {
  if (a > b) {
    return `a:${a}`;
  } else if (b > a) {
    return `b:${b}`;
  }
}
console.log(`The largest number is ${max(55, 17)}`);
//Output:-the large number is 19


//------------------------------------------------------------------------------------------------------


//5.Write a function named reverseString that takes a string as input and returns the reversed string.
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("Salaar"));
////Output:-raalaS


//------------------------------------------------------------------------------------------------------


//6.Write a function named double that takes a number as input and returns its double.
function double(num) {
  return num * 2;
}
console.log(double(19));
//Output:-38


//------------------------------------------------------------------------------------------------------


//7..Write a function named quadruple that takes a number as input and returns its quadruple.
function quadruple(num2) {
  return num2 * 4;
}
console.log(quadruple(19));
//Output:-76


//------------------------------------------------------------------------------------------------------


//8.Factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1); // Recursive call
}
console.log(factorial(5));
//Output:-120


//------------------------------------------------------------------------------------------------------


// ==========================Medium=========================
//1.Sample: math(“add”, 1, 2) Output is: addition of 1 and 2 is: 3;
function Math(a, b, c) {
  switch (a) {
    case "add":
      return `The Addition of the given two numbers is: ${b + c}`;
    case "sub":
      return `The Subtraction of the given two numbers is: ${b - c}`;
    case "multiply":
      return `The Multiplication of the given two numbers is: ${b * c}`;
    case "divide":
      if (c !== 0) {
        return `The Division of the given two numbers is: ${b / c}`;
      } else {
        return "Cannot divide by zero";
      }
    default:
      return "Invalid operation";
  }
}
console.log(Math("add", 5, 10));
//Output:-The Addition of the given two numbers is: 15


//------------------------------------------------------------------------------------------------------


//2.Write an IIFE that calculates the sum of an array of numbers and logs the result to the console in that function.
(function () {
  let numbers = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(`Sum of the array is: ${sum}`);
})();
//Output:-Sum of the array is: 15


//------------------------------------------------------------------------------------------------------


//3.The function should return an object representing the user with the given username and role.
// Sample input createUser(“xyz”, “admin”);
// Sample output: {userName: “xyz”, role: “admin”};
function createUser(username = "user", role = "user") {
  let u = function () {
    return {
      username: username,
      role: role,
    };
  };
  return u();
}
console.log(createUser("xyz", "admin"));
//Output:-{ username: 'xyz', role: 'admin' }


//------------------------------------------------------------------------------------------------------


//4.Define a function named operator which returns null. provide arguments one
// variable and two numbers and console the sum to output by assigning it to
// argument. (Hint: use the reference type variable as an argument).

function operator(isokey, num1 = 4, num2 = 5) {
  isokey.sum = num1 + num2;
  console.log(`The sum is: ${isokey.sum}`);
  return null;
}
let obj = {}; // A reference type variable (an object)
operator(obj);
//Output:-The sum is: 9


//------------------------------------------------------------------------------------------------------


//5.As per IIFE and Immediately Invoked Arrow Function function that calculates and logs the product of two numbers.
((h,l) => {
 
  console.log(`The product of two numbers : ${h * l}`);
})(5,3);
//Output:-The product of two numbers : 15

//   with normal arrow function
//   let product=(h,l) => {
//     return `The product of two numbers : ${h*l}`;

//   }
//   console.log(product(5, 3));
