let a={
    name:"kavitha",
    id:110,
    test:()=>{
        alert("hi how are you")

    }
}
console.log(a);
let b={
    name1:"saish",
    id:120
}
console.log(b);
a.__proto__=b
b.__proto__={
    name2:"uma shankar"
}
console.log(a.name);
console.log(b.name1);
console.log(a.name2);
console.log(b.name2);
console.log(a.name1);
console.log(b.name);
console.log(a.test());

