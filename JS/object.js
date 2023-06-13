//in object 
//WE Can create object in two ways 
//1.literals way

let obj = {
    id: 500,
    name: "Yamini",
    salary: 110000000000
}
console.log(obj, typeof obj);

//adding an key and values pair for an exisiting object 
//1st ways
obj["address"] = "bangalore";
//2ways 
obj.pincode = 560003;
console.log(obj);

//ways to access an object
console.log(obj.salary);
console.log(obj["name"]);

//creating object inside another object 
let obj1 = {
    color: "red",
    shape: "square",
    computer: {
        ram: "8gb",
        color: "gray",
        processor: "ryzen"

    }
}
console.log(obj1.computer.processor);
console.log(obj1["computer"]["ram"]);

//creating function inside the object
let ob = {
    sports: "cricket",
    stadium: "chinnaswamy",
    players: function () {
        let name = "kapil dev";
        let jno = 18;
        return `${name} ${jno}`
    }

}
console.log(ob.players());
//2
let ob2 = {
    sports: "cricket",
    stadium: "chinnaswamy",
    players: () => {
        let name = "kapil dev";
        let jno = 18;
        return `${name} ${jno}`
    }
}
console.log(ob2.players());
//3
let ob3 = {
    sports: "cricket",
    stadium: "chinnaswamy",
    players: function () {
        //  console.log(this.sports);
        return this.sports
        //whenever we are usnig return keywoard inside the function we should use log statements out side the functions 
    }
}
console.log(ob3.players());
//4
let ob4 = {
    sports: "cricket",
    stadium: "chinnaswamy",
    players: function () {
        // this:typeof globalThis
        return this.sports
    }

}
console.log(ob4.players());


courses="java"
let y10={
    courses:"web tech",
    place:"bangalore",
    colors:function(){
        let course="sql"
        return this.courses;
    }
}
console.log(y10.colors());

let emp=[
{
    id:101,
    ename:"uma"
},
{
    id:102,
    ename:"shankar"
}]
console.log(emp,typeof emp);
console.log(emp[0].ename);
console.log(emp[0].id);

let yy=new Object()
console.log(yy,typeof yy);
yy["id"]=110;
yy["name"]="YAMINI"
console.log(yy.id);
console.log(yy);

//why objects are mutable
 let mute={
   pcolor:"white",
    pheight:"30inch"
 }

// console.log(mute);
// mute.pcolor="lightpink";
// console.log(mute);


let k={

    1:"duster",
    2:"marker"
}

console.log(k);
console.log(k[2]);

//object method
//1.freeze
let free={
    name:"yamini",
    place:"bangalore"
}
free["name"]="sunil"
console.log(free);
Object.freeze(free);
free["name"]="kavitha"
console.log(free)

//2.assign
let ab={
    company:"ty",
    name:"pradeep sir"
}
console.log(ab);
ab.company="infosys";
console.log(ab);

let bb={
    name:"pradeep sir"
}
console.log(bb);


let cc=Object.assign(bb,ab)
console.log(cc);



let values=Object.values(mute);
console.log(values);
let key=Object.keys(mute);
console.log(key);

//3.entries

let enter={
    sName:"abc",
    sId:200
}
console.log("before entries");
console.log(enter);
console.log("after entries");
console.log(Object.entries(enter));
console.log(enter);