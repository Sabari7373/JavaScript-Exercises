    //     Functions in JavaScript    //
    //  with return //
function add(a,b){
    return a+b;
}
console.log(add(10,20));// 30
    
    // without return  //
    function add(a,b){
        console.log(add(10+20));// 30
    }
    add();
//----------------------------------------------------//

function  added(){
    let total = 0;
    for(i=0;i<arguments.length;i++){
        total+=arguments[i];// total = total +arguments[i]
    }
    return total;
}
console.log(added(15,15));//30
console.log(added(15,15.15,15));//60

//-----------------------------------------------------//

       //  Arrow functions //

// Introduced in ES6
// Syntax 
// variable variablename = () => {} ();

// var sum = (a,b) => {a*b} console.log(sum(10,20));

var add = (i,j,k,l) => {
    var result = 10;
    var total = result + i + j+ k+l;
    return total;
}
console.log(add(100,200,10,300));
//.................................................//


const add =(a,b) =>{return a+b;};
console.log(add);///just the syntax only display
console.log(add(100,200));// 300

//-----------------------------------------------------//

      //    Map Functions   //

//   Sample 1
let numberss = [1,2,3,4,5];
let res = numberss.map(number => number * 2);
console.log(res);// Ans : 2 4 6 8 10

//   Sample 2 Using Filters
let words = ["apple","orange","mango","grapes"];
let resu = words.map(word => word.length>5);
console.log(resu); // orange  // beacuse Orange only has 6 digits

//  Sample 3 using Reduce
let numberss = [1,2,3,4,5];
let totals = numberss.reduce((sum,number) => sum + number,0);
console.log(totals); //  Ans : 15 //  here Add all the 5 elements and sum is 15

//   Sample 4  arrow function using Closure
// here we count //
let createCounter = ()=>{
    let count = 0;        // initialize its 0;
    return ()=>{          // arrow function
        count ++;         // increase the count 
        return count;     // return to it
    }
};
let counter = createCounter();
console.log(counter());  //whenever execute the program again & again 
                         //Counter will increased
                         // 1 2 3 4 5 6 7 ......etc
//------------------------------------------------------------//

                  // IIFE function  //

// // rarely used / less memory
// (function(){})();
(function(){
    console.log("hi santhosh");
}) ();

// with argument
(function bar(a,b){
    console.log(a+b);
})(10,20);
//...............................................................//

       //    Scope   //
if (true){
    let ans = "im block scope";
    console.log(ans);//im block scope
}
console.log(ans);// reference error : blockscopevariable
                //  is not defined
//-----------------------------------------------------------//

       // Function scope  //
function foo(){
    fvariable= "im blockscope";
    function add() {
        console.log(fvariable);
    }
    add();
}
foo();
// Im blockscope 
//------------------------------------------------------------//

//  Difference between Rest Parameters Vs Spread operators  //
//______________________________________//

//  Rest parameters
function Fooo(first, second, ...rest){
    console.log(first);
    console.log(second);
    console.log(rest);
}Fooo(10,20,30,40,50,60);
// Ans :10
//      20
//      30 40 50 60
//________________________________________//

//  Spread Operators
let myArray = [1,2,3,4];
let newArray = [...myArray,5,6];
console.log(newArray); // 1 2 3 4 5 6
//_________________________________________//

//     Perameter Destructuring In JavaScript   //
function sayHello(name){
    console.log(`${name}`);
}sayHello("Hello da"); // Hello da

//--------------------------------------------------//


        //   Callback    //

function myfun() {
    console.log("im programer");
}
function test(myfun){
    
}








//-----------------------------------------------------//

