         //     JavaScript have 25 major methods   //

let a = [1,2,3,4,5];
console.log(a);// 1 2 3 4 5
console.log(a[1]);//2

let b = new Array(10,20,30,40,50);
console.log(b);//10 20 30 40 50

let c = new Array("Sabari",30,true,{m1:60,m2:40,m3:69});
// here we can able to store any type of data


           //     For Each     //

const num = [1,2,3,4,5,6,7,8,9,10];
num.forEach(value)=> {
    console.log(value);     //1,2,3,4,5,6,7,8,9,10
};
num.forEach(value,index)=> {
    console.log(value,index);     // here output is value and index value
};

    //   retrive data from ForEach   //
const Users = [
    {
        names:"sabari", age:26,job:"devoloper",salary:35000
    },
    {
        names:"bala", age:26,job:"marketing",salary:25000
    },
    {
        names:"ezhil", age:26,job:"It ",salary:20000
    },
    {
        names:"dinesh", age:26,job:"management",salary:24000
    }
];
Users.forEach(value)=>{
    console.log(names);  // sabari   bala   ezhil   dinesh
    console.log(age);    //   23      26     25      26
}
//-------------------------------------------------------------------------//

          //   Map function   //
//----examples 1-----// 
const num = [1,2,3,4,5,6,7,8,9,10];

let sqrt = num.map(value)=>{
    return Math.sqrt(value);
}
console.log(sqrt);// 1.00   1.41   1.73   2.00    2.43    2.45    2.65   2.85    3.00

//----examples 2 ----//
const Users = [
    {
        names:"sabari", age:26,job:"devoloper",salary:35000
    },
    {
        names:"bala", age:17,job:"marketing",salary:25000
    },
    {
        names:"ezhil", age:24,job:"It ",salary:20000
    },
    {
        names:"dinesh", age:20,job:"management",salary:24000
    }
];
let EligibleReport = Users.map((user)=>({
name:user.names,
age:user.age,
salary:user.salary,
job:user.job,
// instead of 70,71,72,73 lines Use SPREAD OPERATORS
...user,    // Same output is displayd here...
status:user.age>=18?"Eligible for Voting":"not Eligible" //   Here we check the condition using Map
}));

         //   Slice () Method
         //   Slice(start,end,)

const nu = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.slice());//1,2,3,4,5,6,7,8,9,10
console.log(numbers.slice(2));//3,4,5,6,7,8,9,10
console.log(numbers.slice(2,8));//3,4,5,6,7,8

        //   Splice method
        //   Splice (Start,length,new_element_add ) method
        const n1 = [1,2,3,4,5,6,7,8,9,10];
        let AfterRemove = n1.splice(3);
        console.log(AfterRemove);// 4,5,6,7,8,9,10
        console.log(n1);         // 1,2,3
 
        //  splice with 2 arguments
        const n2 = [1,2,3,4,5,6,7,8,9,10];
        let AfterRemoved = n2.splice(3,4);// 1st arg. is where to start, 2nd arg.is how many datas
        console.log(AfterRemoved);// 
        console.log(n2);         // 1,2,3,8,9,10
     
        //   Splice with add new element
        const n3 = [1,2,3,4,5,6,7,8,9,10];
        let AfterAdd = n3.splice(2,2,100,200);// we can  give Array type of values too[100,200]
        console.log(AfterAdd);// 3,4
        console.log(n3); //  1,2,100,200,5,6,7,8,9,10

        // Splice Without removing data just ADD Elements
        const n4 = [1,2,3,4,5,6,7,8,9,10];
        n4.splice(3,0,1000,2000);
        console.log(n4);// 1,2,3,1000,2000,4,5,6,7,8,9,10

//------------------------------------------------------------------------------//

       // Concat  //
       // Join the values Not Arithmatic

const a = [1,2,3,4,5];
const b = [10,20,30,40,50];
const c = [100,200,300,400,500];
let d = a.concat(b);
console.log(d);//1 2 3 4 5 10 20 30 40 50
let d = a.concat(b,c);// 1 2 3 4 5 10 20 30 40 50 100 200 300 400 500


        //      Sorting      //
const namings = ["sabari","dinesh","ezhil","bala"];
namings.sort();
console.log(namings);// bala dinesh ezhil sabari

       // sort for numbers  //
const num1 = [5,1,2,4,8,9,6,4,10];
num1.sort();
console.log(num1);   // 1,2,4,4,5,6,8,9,10]

num1.sort(a,b)=>{
return a-b;
}
console.log(num1);   // 

//---------------------------------------------------------//

      //    Fill    //
      //    fill(value , start ,end)
      //   fill is just replace the date into new one
      const num2 = [1,2,3,4,5,6];
      num2.fill(20);
      console.log(num2);// 20 20 20 20 20 20
      num2.fill(" Sabari ");
      console.log(num2);// Sabari  Sabari  Sabari  Sabari  Sabari  Sabari
      num2.fill(20,3) 
      console.log(num2);// 1,2,3,20,20,20
      num2.fill(20,3,5);
      console.log(num2);//1,2,3,20,20,6

// -----------------------------------------------------------//
    //  Includes in Javascript  //
    //includes(value,start_index)
const values = ["vijay","ajith","dhanush","karthi"];
let res=values.includes("vijay");
console.log(res);//Ans : true   //here includes method is verify VIJAY is there OR not?
let resu=values.includes("arjun");
console.log(resu);//fasle

        //     Joins     //
        // array elements ah string ah convert panlam //
        const prod = ["pen","pencil","eraser","box"];
        console.log(prod.join());// pen pencil eraser box
        console.log(prod.join("|"));//pen|pencil|eraser|box
        console.log(prod.join("***"));//pen***pencil***eraser***box

        // Reverse In JAvascript //
        // reassending into reverse
 // Example1 

        const n = [1,2,3,4,5];
        console.log(n.reverse); // 5 4 3 2 1
        
// Example2
const val = {0 :10, 1:20,2:30,4:40,length:4};
Array.prototype.reverse.call(val);
console.log(val); // 0:40 1:30 2:20 3:10 length:4

//-------------------------------------------------------------------------//

       //    Push    //
       // used to add values into array//
       // we can Add multiple values at the same time
       // Numbers and Strings too
let n = [1,2,3,4,5];
console.log(n.push(100));// 6 // here the six is length of the array
console.log(n);// 1 2 3 4 5 100
n.push(20 30 40 50); // 1 2 3 4 5 100 20 30 40 50
n.push("Sabari arun");
console.log(n);  // 1 2 3 4 5 100 20 30 40 50 [Sabari arun];

       //   Push for Join 2 Arrays  //
       // for that use Spread operators //
let user1 = ["ram","rom","memo"];
let user2 = ["raj","kumar"];
user1.push(...user2);// here all the user2 elements are stored into user1
console.log(user1); // ram rom memo raj kumar

      //    POP in JavaScript //
      // Pop used to remove the last element from array //
let u = ["ram","rom","memo"];
console.log(u.pop());//momo   
console.log(u); // ram rom    // here memo is removed    //

      //    Shift   in JavaScript    //
      //   Used to remove First element of the Array  //
let u1 = ["bmw","audi","benz"];
console.log(u1.shift); // bmw
console.log(u1);  // audi benz

      //    UnShift in JavaScript    //
      //    Used to Add a data in Array Use UnShift   //
let u2 = ["iphone","samnsung","nokia"];
let len = u2.unshift("Motorola");
console.log(len);// 4 // this is the length of the Array
console.log(u2);// Motorola iphone samnsung nokia

//----------------------------------------------------------------//

         //    IndexOf in JavaScript   //
         // to find the index of the datas
let u2 = ["iphone","samnsung","nokia"];
let i=u2.indexOf("nokia");
console.log(i); // 2             // here 2 is Index of the value nokia

let u2 = ["iphone","samnsung","nokia","sony","samsung","redmi"];
let i = u2.lastIndexOf("samsung");
console.log(i); // 4             // here the last specific data's(samsung) index will be displayed

//----------------------------------------------------------------//

        //    Every & Some in JavaScript  //
        // for example find all data are ODD //
let no = [10,20,21,23,24];
let res = no.every((value) => {
    return value%2==0;
});
console.log(res); // false      // Cause some numbers are ODD number some numbers only EVEN
  //--------------------//
let no = [10,20,21,23,24];
let res = no.some((value) => {
    return value%2==0;
});
console.log(res); //  true    // cause some numbers are EVEN so true

//----------------------------------------------------------------//

       //     Const Array in JavaScript     //
const g = 10;
g = 20; // here g value cannot changed

const g1 = ["Sabari","bala","dinesh"];
g1.push("ezhil");
console.log(g1);// Ans : Sabari bala dinesh ezhil       // here the g1 value is changed
                                                        // becuase we didnt change memory location 
                                                        // just change the reference data
//----------------------------------------------------------------//

       //    Desctructuring in JavaScript     //
// ssample 1 
let numb1 = [10,20,30,40,50];
let [a,b,c,,d] = numb1;
console.log(a);  // 10
console.log(b);  // 20 
console.log(c);  // 30
console.log(d);  // 50
// sample 2
let numb1 = [10,20,30,40,50,60,70];
let [a,b,c,...d] = numb1;
console.log(a);  // 10
console.log(b);  // 20 
console.log(c);  // 30
console.log(d);  // 40 50 60 70 // here the spread operators perfoms
 // sample 3
 // nested Array
 let nesdedArray = [[1,2],[3,4],[5,6]];
 let [[a,b],[c,d],[e,f]] = nesdedArray;
 
console.log(a);  // 1
console.log(b);  // 2  
console.log(c);  // 3
console.log(d);  // 4
console.log(e);  // 5
console.log(f);  // 6
     
        //  Object Destrucuting //
  //_____________________________________//
//  Sample 1
let person = {name:"Samantha",Age:27,gender:"female"};
let {name,Age,gender} = person;
console.log(name); //Samantha
console.log(Age); //27
console.log(gender); //female

//-----------------------------------------------------//

         // Creating objects in JavScript  //
//sample 1
const names = {
    name:"sabari",
    job:"devoloper"
};
console.log(names);
//sample 2
const names = new Object();
names.name="sabari";
names.job="devoloper";
console.log(names);
//sample 3


class persons {
    constructor(name,age,job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
}
const per = new persons("Sabari",25,"Devoloper");
console.log(per);//  age : 25, job : deloloper , name : sabari

//-------------------------------------------------//

      // Dot notations and Bracket notations  //
      // Dot //
      const namings = {
        name:"sabari",
        job:"devoloper",
        age:27
    };
    console.log(namings);
      // Bracket //
    console.log(namings["age"]); // Ans : 25

//---------------------------------------------------------------//

         //     Iterating through javascript Objects   //
         const User1 = {
            name:"sabari",
            job:"devoloper",
            age:27
        };
        for(let key in User1){
            console.log(`${key} : ${User1[key]}`);
        };
        //  Ans : name : Sabari
        //        job  : devoloper
        //        age  : 25

//--------------------------------------------------------------//
         //   Onjects inside the Array  //
const User3 = {
    name:"sabari",
    job:"devoloper",
    age:27
},
{
    name:"arun",
    job:"devoloper",
    age:27
}
{
    name:"arun",
    job:"devoloper",
    age:27
}

// Using forEach function
for(const user of User3)
{
    console.log(user);
} //  all data displayed























