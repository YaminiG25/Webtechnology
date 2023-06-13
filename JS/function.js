 //anonymonous function
// function(){

//     console.log("anonymonous function");
// } //uncaught syntax error



// named function
// demo();
// function demo(){

//     console.log("Named function");
// }

// demo();


// // function with expression
// let a=function (){

//     console.log("Function with expression");
// }

// a()

// // arrow function
// let b=()=>{
//     console.log("Arrow function")
// }
// b()
// //rules for arrow function
// let c=()=>
//     console.log("no braces")

// c()

// let d=()=>
//     console.log("braces");
//     console.log("braces");
//     console.log("braces");
//     console.log("braces");
//     console.log("braces");

// d()

function add(a,b){

    return a+b;
}
function sub(a,b){
    return a-b;
}
function hof(a,b,test){
    let y=test(a,b)
    console.log(y)
}
hof(10,20,add)
hof(30,10,sub)


//call back
function test(){
    console.log("pmc")
}
 function demo(){
    console.log("idfc")
 }
 demo(test())

 function demo1(name,callback){
    callback()
    console.log("hi students"+name)
 }
 function test1(){
    console.log("bye students");

 }
 demo1("how are you",test1)
    
 