
// let lStorage=localStorage.setItem("id",100);
// let lStorage1=localStorage.setItem("name","kavitha");
// console.log(lStorage,lStorage1);



// let lStorage2=localStorage.getItem("name");
// console.log(lStorage2);


// // let lStorage3=localStorage.removeItem("name");
// // console.log(lStorage);

// // let lStorage4=localStorage.clear();
// // console.log(lStorage4);


// let session=sessionStorage.setItem("bike","activa");
// console.log(session);
// let session1=sessionStorage.setItem("bike","honda");
// console.log(session1);
// let session3=sessionStorage.getItem("name");
// console.log(session3);

//promise
let promise=new Promise((resolve,reject)=>{

    let a=1+1;
    if(a==2){
        resolve("promise is fullfiled")

    }else{
        resolve("promise is rejected")
    }
})
promise.then((success)=>{
    console.log(success);
}).catch((error)=>{
    console.log(error);
})