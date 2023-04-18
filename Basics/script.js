// Console Statements //
var a = 10;
console.log(typeof a);
console.time("Timer");
for(i=0;i<10;i++)
{
    console.log(1);
}
console.timeEnd("Timer");
console.log("hi sabari");
console.log([1,2,3,4,5]);

console.log({fname:"sabari",age:25});
console.table({fname:"sabari",age:25});
console.error("sample error");
console.warn("warning error");

// Var --- Let --- const //

var a=25;
var b= 30;
console.log(a+b);

// in const variable we cant change the value that asinged
// but we can change the vale if its stored Object Form like KEY VALUE PAIRS

const student = { name: "sabari",age: 26}
console.log(student);
console.log(student.name);
student.name="Sabari arun";
console.log(student);

//         Data type         //
var isMarried = true;
var phone = null;

//         ES 6              //
// const s1 = symbol();
// const s2 = symbol();
// console.log(s1==s2);
// ans : false//
var courses = ["c",'c++','java', 'javascript'];
var DateIS = new Date();
console.log(DateIS);
// current Date//

//          Type Conversion       //
let x;
x = 10;
console.log(x,typeof x);// x is now number type
x= String(x);
console.log(x,typeof x);// x is now string type

  //         String to Number         //
//   y = 125;
//   console.log(y, typeof y);
//   y = number(y);// here string is concerted into number//

  //         Parse Int    //
  y1 = "30";
  console.log(y1, typeof y1);
  y1 = parseInt(y1);
  console.log(y1, typeof y1);

    //         Parse Float   //
    y1 = "30.65";
    console.log(y1, typeof y1);
    y1 = parseFloat(y1);
    console.log(y1, typeof y1);
  
  //   Type Coercion   //
  let y2 = "10";
  let y3 = 10;
  console.log(y2+y3);
  //ans : 20//
  // here the string and number are concatinated//


             //     Arithmatic operations   ///
let aa= 100;
let aaa = 200;
let c= aa + aaa;
console.log(c);
c=++aaa;
console.log(c);
    //      Assignment Operators      //

let bb = 10;
bb = bb + 5;
console.log(bb);
// insteat of this Try this upcoming Code
bb+=5;
bb%=5;
bb-=5;
bb/=5;
bb*=5;
console.log(bb);

               //     .Math Functions    //
let D;
D = Math.PI;
console.log(D);// ans : 3.141592
D = Math.E;
console.log(D);//ans : 2.7182818
D= Math.round(5.8);// ans : 5
D = Math.floor(5.8)// ans :5 it removing the decimal values
D = Math.ceil(5.8)// 6
D = Math.sqrt(90)// ans: 9.48
D = Math.abs(-50)// it conver - into + // Ans is 50
D = Math.trunc(5.8)
D = Math.pow(2,4)//Ans is 6
D = Math.min(10,20,30,1,5,87,45)// find the small number //ans is 1
D = Math.max(10,20,30,1,5,87,45)// find the Big number //ans is 87
D = Math.Random();// it gives random decimal number
D = Math.floor((Math.random()*50+1))// ans 51
D = Math.sign(0)

           // comparision Operators      //
let F = 10;
let F1 = 20;
console.log(F==F1);// fasle
 FF = 10;
 FFF = "10";
console.log(FFF==FF);// true
console.log(F !=FF);// false

        //     Relational Operators    //
        //     > Greater than
        //     < lesser than
let g = 10;
let g1 = 20;
console.log(" Greater :", g>g1);//false
console.log(" Lesser :", g<g1);//true
console.log(" GreaterThan Equal :", g>=g1);//false
console.log(" GreaterThan Equal :", g<=g1);//true

        //     Logical operators  //
        //     Logical AND
        //     Logical OR
        //     Logical NOT
let mark=45;
// All condition must be true  //
console.log(mark>=35 && mark<=100);// ans : true// Pass
let h = 10;
// Any one contion should be true
console.log(h==2 || h == 5);// fasle

h1 = true;
console.log(!a);// false

//       Strict Equality   = = = Operator      ///
h2 = 100;
h3 = 100;
console.log(h2==h3);//true
console.log(h2===h3);//true
h4="100";
console.log(h2===h4);// false// because typeof value differs
    
                     // Formula //

    //                 X             Y           = =       = = =

    //             undefined     undefined      true       true
    //             null          null           true       true
    //             true          true           true       true
    //             false         false          true       true
    //            "sabari"      "sabari"        true        true
    //                0            0             true       true
    //               +0           -0             true       true
    //               +0            0              true       true
    //               -0            0              true       true 
    //                0            false          true       false
    //                ""           false          true       false
    //                ""           0              true       false
    //               "0"           0              true       false
    //              "27"           27             true       false
    //              null         undefined       true       false

         //       Conditional or Ternary operator   //
const age =  13;
const result = age >=18?"Eligible for vote":"Not eligible";
console.log(result);

          //  Handling inputs   //
          function welcome(name){
            const results = name?name:"Sabari arun";
            console.log("welcome"+results);
          }
          welcome();// here ternary operator performs  //



          //     Conditional chaining   //
// Find Average Mark for grades  //
// Single condition //
const Average=90;
const grade = ave>=90?"Agrade":"Bgrade";
console.log(grade);// Ans : B grade

// Multiple condition //
const Average = 93;
const grade = ave>=90?"A grade":ave>=80?"B grade":"C grade";
console.log(grade);// Ans : A grade

       //    Bitwise Operators in Javascript   //      
       const i = 2;                                            
       const i1= 3;
       console.log(i&i1); // Ans : 2  


       //      Nullish Coalescing Operators  ( ?? )    //
const j = null  ?? "no value";
console.log(j);// No value
// next sample //
const users = {"name":"dinesh"};
console.log(users);// {users: "dinesh"}
console.log(users.name);//dinesh
users.city ?? = "salem";// here we check there is any city key? but nope
console.log(users.city);?// Ans : salem // Automatically this operator Added the CITY to Users data
console.log(users);// {users:dinesh,city:"salem"}

        //   Incerement or Decrement operators  //
let k = 10;
k++;
console.log(k); // ans: 11
k--;
k--;
console.log(k); // ans: 9

// PostFix Incerement A++
// PreFix Incerement ++A
let K1 = 3;
const k2 = K1++;      // here now k2 value is 3 and k1 value is 4
                      //  because k2 is stored in const type 
console.log(k1,k2);   //  Ans : 4,3   //



              // If condition  //

    let age = prompt("enter tour age");
    if ( age ! = null && age  >= 18)
    {
      console.log("you are eligible for voting");
    }

            // else if    //
let age = prompt("enter tour age");
if ( age ! = null && age  >= 18)
{
console.log("you are eligible for voting");
}else{
console.log(" you are not eligible for voting");
}

           //   else if laadder   //
//example 1
let num = 1;
if(num <0){
  console.log("num is negative");
}
else if (num >0 ){
  console.log(" num is positive");
}
else{
  console.log("NUmber is zero");
}

//example 2
let aver= 87;
if (aver>90 && aver<=100)
{
  console.log(" A grade");
}else if (aver>=80 && aver<90)
{
  console.log("B grade");
}else if (aver>=70 && aver<80)
{
  console.log(" C grade");
}else if (aver<70)
{
  console.log("D grade");
}else {
  console.log("result is fail");
}

           //      Switch Case       //
           //     Basic examples     //
let marks = 2;
switch(marks){
  case 1 :
    console.log("one");
    break;
  case 2 :
    console.log("two");
    break;
  case 3 :
    console.log("three");
    break;
  default:
    console.log("Invalid number");
    break;
}

//example 2       //  Combling Cases statement//
let letters = "a";
switch(letters){
  case 'a';
  case 'e';
  case 'i';
  case 'o';
  case 'u';
  case 'A';
  case 'E';
  case 'I';
  case 'O';
  case 'U';
     console.log(letters + " is an Vowel");
     break;
     default:
      console.log(letters+ " not an vowel");
    break;
}






























































