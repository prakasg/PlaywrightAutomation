//Destructing of String:
//-----------------------------------
// Destructuring of String
let str="WELCOME"
 
let [s1,s2,s3]=str
console.log(s1,s2,s3);
console.log("--------------");
let [a1,a2,a3,a4,a5,a6,a7]=str
console.log(a1,a2,a3,a4,a5,a6,a7);
console.log("--------------");
let [b1,,b2,,b3,,b4]=str
console.log(b1,b2,b3,b4);
console.log("--------------");
let [c1,c2,...c3]=str
console.log(c1,c2);
console.log(c3);
console.log("--------------");
 
//Destructing of Array:
//-----------------------------------
// Destructuring of Array
let arr=[10,20,30,40,50,60,70,80]
 
let [d1,d2,d3]=arr
console.log(d1,d2,d3);  // 10 20 30
 
console.log("-------------------");
let [e1,,,,e2,,,e3]=arr
console.log(e1,e2,e3)
 
console.log("-------------------");
let [f1,f2,...f3]=arr
console.log(f1,f2);
console.log(f3);
 
//Destructing of Object:
//-----------------------------------
let employee={
    "eid":101,
    "ename":"Santosh",
    "job":"Analyst",
    "sal":34000,
    "dname":"Accounting"
}
 
// let {eid, ename} = employee
// console.log(eid, ename);
console.log("------------------");
 
// let {eid,job,dname}=employee
// console.log(eid,job, dname);
console.log("------------------");
 
let {eid,ename,...emp} =employee
console.log(eid,ename);
console.log(emp);
 