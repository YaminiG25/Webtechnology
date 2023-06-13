let c=100n;
console.log(c,typeof c);
//  String to number and bigint conversion is not possible

// let c1=BigInt("hi");
// console.log(c1,typeof c1) we cant convert

let c3=BigInt("20");
console.log(c3,typeof c3);// we can convert

let c4=BigInt(false);
console.log(c4,typeof c4);


let c5=BigInt("   ")
console.log(c5,typeof c5);// we can convert

let c6=BigInt(1);
console.log(c6,typeof c6);
// undefined
var s;
console.log(s);
 let s3;
 console.log(s3);

//  const s1;
//  console.log(s1,typeof s1);


//  boolean

console.log(!true);
console.log(!false);

let b= Boolean(0);
console.log(b,typeof b);
let b1= Boolean(1);
console.log(b1,typeof b1);

let u=Boolean("-yamini")
console.log(u,typeof u);
let h1= Boolean(0n);
console.log(h1,typeof h1);

let h2= Boolean(1n);
console.log(h2,typeof h2);