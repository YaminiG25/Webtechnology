console.log(document);
console.log(document.URL);

console.log(document.head);

console.log(document.title);

document.title="web tech"

console.log(document.body);

console.log(document.all);

//get element by id

let id=document.getElementById('demo');
console.log(id);
id.innerHTML="   ❤️RCB FOREVER❤️"
id.style.backgroundColor="black"
id.style.color="red";
id.style.fontSize="50px";
id.style.border="10px solid red"


//get element by classname
let test=document.getElementsByClassName('rcb')
console.log(test);
test[0].style.backgroundColor="red";
test[1].style.backgroundColor="red";
test[2].style.backgroundColor="red";
test[3].style.backgroundColor="red";
test[4].style.backgroundColor="red";
test[5].style.backgroundColor="red";


// console.log(document);

// console.log(document.URL);

// console.log(document.head);

// console.log(document.title);
// document.title = "sunil";

// console.log(document.body);

// console.log(document.all);

// // getelement by id
// let id = document.getElementById('demo');
// console.log(id);
// id.innerHTML = "MY MEGHA"
// id.style.backgroundColor = "black";
// id.style.color = "red"
// id.style.fontSize = "50px";
// id.style.border = "10px solid yellow"


// //getelement by className
// let sk = document.getElementsByClassName("test")
// console.log(sk);


// sk[0].style.backgroundColor = "red";
// sk[1].style.color = "green"
// sk[2].style.fontSize = "50px";
// sk[3].style.border = "10px solid yellow"

// sk[0].innerHTML = "MEGHA "
// console.log(Array.isArray(sk));


// let rr = Array.from(sk);
// console.log(rr, typeof rr);

// console.log(Array.isArray(rr));

// //get element by tag name
// let tag = document.getElementsByTagName('pre');
// console.log(tag);
// tag[1].style.backgroundColor = "blue";
// console.log(Array.isArray(tag));


// let oo = Array.from(tag)
// console.log(oo);
// console.log(Array.isArray(oo));

// //queryselector
// let query = document.querySelector(".demo1");
// console.log(query);
// query.style.fontSize = "50px";

// //queryselectorall
// let queryAll = document.querySelectorAll(".demo1");
// console.log(queryAll);
// queryAll[2].style.color = "orange";
// console.log(Array.isArray(queryAll));

// // let color = window.getComputedStyle(document.querySelector('.demo1'), ':before').getPropertyValue('color');

// // console.log(color);

// //how to create element without using html
// let  create=document.createElement('h1');
// console.log(create);

// //adding the id  and class name
// create.id="demo"
// create.className="tst"

    
//inserting the text
// let txt=document.createTextNode('hello  how r u');
// console.log(txt);

// //insert the content inside the tag
// create.appendChild(txt);

// //gives the output in the document interface
// document.body.appendChild(create);
// create.style.color="red";

// let text1=document.getElementById('red');
// console.log(text1);

// text1.innerHTML="once upon a time ";//shows only 
// text1.innerText="Yamini"//show econtent a
// text1.innerHTML="<h1>YG</h1>";
// text1.innerText="<h1>YG</h1>";

//how to create element without using html
let create=document.createElement('h1');
console.log(create);

//adding id and classname
create.id="demo"
create.className="test"
//inserting the text
let text=document.createTextNode('hello good morning')
console.log(text);

//inserting the content inside the tag
create.appendChild(text);

//gives the output in the document interface
document.body.append(create);
create.style.color="yellow";

let text1=document.getElementById('red');
console.log(text1);
text1.innerHTML="ROYAL CHALLENGERS BENGALURU";//shows only content
text1.innerHTML="KOLKATA KNIGHT RIDERS";//shows content along with tag
text1.innerHTML="<h1>VIRAT KOHLI<h1>";





