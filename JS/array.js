let array=[1,"string",true,undefined,null,2n,function a(){}]
console.log(array);
console.log(typeof array);
console.log(array instanceof Array);

//literals
let a=[100,200,300]
console.log(a,typeof a);

//constructor
let b=new Array(100,200,300)
console.log(b,typeof b);


//access array and modify
const bus=[10,20,30,56,43,70]
console.log(bus);
console.log(bus[3]);
console.log(bus);
 console.log(bus[5]="hi");

 //array methods
//1.push

let pu=["hello","ga",100,200,421]
console.log(pu);
console.log(pu.push(500,700,900));

console.log(pu);

//unshift

let pu1=["hello","ga",100,200,421]
console.log(pu1.unshift(10));
console.log(pu1);


//pop
let pu3=["hello","ga",100,200,421]
console.log(pu3.pop());
console.log(pu3);

//shift
let pu4=["hello","ga",100,200,421]
console.log(pu4.shift());
console.log(pu4);

//slice
let pu5=["hello","ga",100,200,421]
console.log(pu5.slice(2,4));
console.log(pu5);

//splice
let pu6=["hello","ga",100,200,421];
console.log(pu6.splice(1,2,"virat","rohith"));
console.log(pu6);









