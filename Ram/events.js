// ON CLICK
//let btn=document.querySelector("button");
// btn.addEventListener("click",()=>{

// let un=document.getElementById('user').value;
// let pass=document.getElementById('pass').value;
// let div=document.querySelector('div');
// div.innerText=(`${un} and ${pass}`);
// div.style.border="5px groove black";
// div.style.width="200px";
// div.style.height="100px"
// div.style.backgroundColor="pink";
// div.style.color="black";

// })

//ON SUBMIT EVENT
// let form=document.querySelector("form");
// form.addEventListener('submit',(e)=>{ //e  variable
//     let un=document.getElementById('user').value;
//  let pass=document.getElementById('pass').value;
//  console.log(un,pass);
//  e.preventDefault()// by taking the variable  e the data will not go to server
// }

// )

// SUBMIT IS USED ONLY IN FORMS
//KEY EVENTS
let input =document.querySelector('input');
//key up,key down,key press
input.addEventListener("keypress",()=>
{
    console.log("keypress");
    
})
let input1 =document.querySelector('input');//key up,key down,key press
input.addEventListener("keyup",()=>{
let rc=Math.ceil(Math.random()*10000).toString(35);
console.log(rc);
document.body.style.backgroundColor=`#${rc}`
})