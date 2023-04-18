const p1 = new Promise ((resolve,reject) => {
  setTimeout(() => {
      
      resolve ("success for the promise");
  }, 4000);
})
p1.then(console.log).catch(console.log());


const p2 = new Promise((resolve,reject) => {
  setTimeout(() => {
      resolve(" promise success now ")

  },5000);
})
p2.then(console.log);
// console.log(p2); // Ans : <pending>

//..............................................................//

// example with reject

const p3 = new Promise((resolve,reject)=>{
  setTimeout(() => {
      reject("the promise failed");
  },2000);
})
p3.then(console.log).catch(console.log);

//.............................................................//
//example 2
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  // The producing code (this may take some time)
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
  
  //..........................................................//

 // me tring this
  const p5 = new Promise((res1,rej1)=>{
    setTimeout(()=>{
      res1("resolved succesfully now........")
    },3000);
  });
  p5.then(console.log).catch(console.log);

//.............................................................//