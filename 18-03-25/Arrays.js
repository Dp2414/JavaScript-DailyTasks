//1.
const array=[1,2,2,3,4,4,5];
array.splice(2,1);
array.splice(4,1)

console.log(array);





//3.Write a function that replaces a segment of an array with new values using splice().
// const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
// Should output: ['red', 'purple', 'pink', 'yellow', 'orange']
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
function demo2(a,b,c,d){
  a.splice(b,c,...d);

}
demo2(colors,1,2,['purple','pink']);
console.log(colors);


//7. Create a function that calculates the distance between the first and last occurrence of an element in an array.
// const chars = ['a', 'b', 'c', 'd', 'a', 'e', 'a'];
// console.log(elementSpan(chars, 'a')); // Should output: 6 (from index 0 to index 6)



function elementSpan(arr2, element) {
    const firstIndex = arr2.indexOf(element);
    if (firstIndex === -1) {
        return -1;
    }
    const lastIndex = arr2.lastIndexOf(element);
    return lastIndex - firstIndex;
}
const chars = ['a', 'b', 'c', 'd', 'a', 'e', 'a','k','j'];
console.log(elementSpan(chars, 'a')); // Output:6



//8.Create a function that uses sort() with custom comparator functions based on a specified property.
// const users = [
// { name: "Bob", age: 25 },
// { name: "Alice", age: 30 },
// { name: "Charlie", age: 35 }
// ];

function Sort(arr3, property) {
    return arr3.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1;  
      }
      if (a[property] > b[property]) {
        return 1;   
      }
      return 0;      
    });
  }
  
  
 let users = [
    { name: "Bob", age: 25 },
    { name: "Alice", age: 20 },
    { name: "Charlie", age: 35 }
  ];
  
  console.log(Sort(users, "age"));//Output:-[ { name: 'Alice', age: 20 },{ name: 'Bob', age: 25 }, { name:'Charlie', age: 35 }]
console.log(users);
