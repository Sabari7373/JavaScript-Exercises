//             Call back              //


// it means one funtion after executing succesfully then its call a new funtion


//   How async perform :
console.log("start");
console.log("mid");
setTimeout(function(){
    console.log("settimeout");
},4000)
// for(let i =0; i<200;i++){
//     console.log("lopping");
// }
console.log("end"); 
//  Output is : strat  mid   end   settimeout


//-------------------------------------------------------//
console.log("a");
console.log("b");
function loginUser(email,password){
    setTimeout(function(){
        return {username:"abcd"};

    },3000);
}
console.log("c");
const User = loginUser("abcd@gmail.com","12345678");
console.log(User);
// a 
// b
// c
// 
// undefined
//   So here we cant access the data
// so we use call back function for this problem

        //     CallBack    //
        // console.log("a");
        // console.log("b");
        // function loginUser(email,password, Callback){
        //     setTimeout(function(){
        //         Callback({username:"abcd"});
        
        //     },3000);
        // }
        // console.log("c");
        // loginUser("abcd@gmail.com","12345",function (Users) {
        //     console.log(Users);
        // });
        
// --------------------------------------------------------------//
// Sample 2 
function a(num1 , num2 , callback){
    var result= num1+num2;
    callback(result);
}
function b(res){
    console.log(res);
}
a(10,20,b);
// it means one funtion after executing succesfully then its call a new funtion

