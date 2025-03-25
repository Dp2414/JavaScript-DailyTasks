//2
// function arr(){
// let a=[2,"ok",false]
// a.pop();
// a.shift();
// console.log(a);

// }
// arr();


//3
function newObj()
{
    let a={
        "emp name": "jejfc",
        id:34,
        isGoodemployee:true,

    };
    console.log(`The number of properties in a are ${Object.keys(a).length}`);
    
}
newObj();

//4
function merge(){
    let h={
        x:1,
        y:2,
        z:3
    };
    let t={
        y:2,
        z:4,

    };
    let xyz={...h,...t};
    console.log(xyz);
    
}
merge();

//5
function nested(){
    let nest={
        student: "engineering",
        branch:{
            cse:"14 students",
            ece:"1 student"
        }

    }
    console.log(nest.branch.ece);
    
}
nested();

//6
function reverseString(str="Hello") {
    
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
     
    }
    console.log(reversed);
    
    
  }
  reverseString();
