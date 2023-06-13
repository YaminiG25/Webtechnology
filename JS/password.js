// let oo=122.1
// let math=Math.ceil(oo);//ceil  takes next number
// console.log(math);

// let math1=Math.floor(oo);// floor takes same number
// console.log(math1);

let random=Math.ceil(Math.random()*10000).toString(16)
console.log(random);
let body=document.querySelector('body');
console.log(body);
body.style.backgroundColor=`#${random}`;

 

// let u=2;
// let y1=3; 
// let date1=new Date(2023,3,3,10,10,10,10,10,10)//1.YEAR 2.MONTH 3.DATE 4.HR 5.MIN 6.SEC 7.millisecomd
// console.log(date1);