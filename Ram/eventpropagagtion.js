let gp=document.querySelector('.gp');
let p=document.querySelector('.p');
let c=document.querySelector('.c');

gp.addEventListener("click",e=>{
    console.log("grand parent capture");
})
gp.addEventListener("click",e=>{
    console.log("grand parent bubling");
})
p.addEventListener("click",e=>{
    console.log(" parent capture");
})
p.addEventListener("click",e=>{
    console.log(" parent bubling");
})
c.addEventListener("click",e=>{
    console.log("child capture");
    e.stopPropagation()
})
c.addEventListener("click",e=>{
    console.log("child bubling");
})
 document.addEventListener("click",e=>{
console.log("document bubling");
 },bubble="true" )
 document.addEventListener("click",e=>{
    console.log("document capturing");
     } ,capture="true")
