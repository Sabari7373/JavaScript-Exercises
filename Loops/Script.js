            //     Looping      //
            //   While Looping  //
//example 1
let n = 1;
while(n<=10)
{
console.log(n);
n++;
}// Ans : 1 2 3 4 5 6 7 8 9 10

//example 2
let names = ["Sabari","dinesh","ezhil","bala","surya"];
//console.log(names[2]);//ezhil

           //    Do While   //
           //    Vaippadu   //
let tab = 2;
let limit = 5;
let i=1;
do{
    console.log(tab +  "X"  +i+  "+"  + (tab*i));
    i++;
}while(i<=limit);


          //    For loop   //

let arr=[];
for ( let i = 0; i<=5; i++)
{
    arr.push(i);
}
console.log(arr);// Ans : 1 2 3 4 5
 // example 2
 let arr=[];
for ( let i = 0; i<=5; i+=5)
{
    arr.push(i);
}
console.log(arr);// Ans : 5  10  15  20  25


           //    Nested For Loop    //

let numb = [];
for (let i = 0; i<3; i++){
    numb.push([]);
    for (let j = 0; j<3; j++){
    numb[i].push(j);
    }
}   // Ans : 0  1  2
    //       0  1  2
    //       0  1  
    
    
        //   For Of   //
        let names = ["Sabari","dinesh","ezhil","bala","surya"];
        for(let name of names){
            console.log(name);
        }
       //  Ans :  Sabari    dinesh   ezhil   bala   surya

       //     For In     //
       //     Only for Objects type of variables like key value pairs //
let users = {
    name:"sabari",
    age:26,
    job:"full stack devoloper",
    contact:"6369133574"
}
for(let pro in users){
    console.log(prop "+" users[prop]);
}
//  Ans :  name:"sabari",
//  age:26,
//  job:"full stack devoloper",
//  contact:"6369133574"


       // convert Objects into arrays  //

       let users = {
        name:"sabari",
        age:26,
        job:"full stack devoloper",
        contact:"6369133574"
    }
    let arrkey = Object.keys(users)
    console.log(arrkey);
    
    let arrVal = Object.values(users)
    console.log(arrVal);


        //    Break In JavaScript   //
        // here Loops will force stoppes within 4 times only instead of 10 times
for(let i=0; i<=10; i++)
{
    console.log(i);
    if(i==4){
        break;// here the for force stopped
    }
}
// Ans :    1 2 3 4

               //     continue In JavaScript   //
               //    Means Except that conditon all others executed

for(let i=0; i<=10; i++)
{
if(i==4){
continue;
}
console.log(i);
}
// ans : 1 2 3 5 6 7 8 9 10
// here the condition 4 is omited














