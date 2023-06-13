// console.log(window);
// alert("hi");

// window.alert("holllaaa")//not necessary 


// var a=20;
// console.log(window.a);

// let b=30;
// console.log(window.b);

// const c=30;
// console.log(window.c);

//console.log(location);
//location.href="https://www.flipkart.com"
//location.hostname;


//history
//history.back();
//history.forward();
 

//screen.height;-gives values interms of pixeles
//screen.width;-gives values interms of pixeles

//navigator.cookieEnabled ; - it allows previous data into the current page if its true
//navigator.appVersion; -5.0
//navigator.product; - Gecko
//navigator.language-'en-US'
//navigator.onLine- internet connection-true if yes ...false if no

setTimeout(()=>{
    console.log("first one");

},5000);
setTimeout(()=>{
    console.log("second one");

}, 2000);
setTimeout(()=>{
    console.log(" third one");

}, 3000);

setInterval(() => {
   console.log("hi"); 
}, 2000);