// Inbuilt Functions in JavaScript
 
//lowercase : it converts into lowercase
let str1="WELCOME"
console.log(str1.toLowerCase());  // welcome
console.log("-----------------------");
//uppercase : It converts into uppercase
let str2="programming"
console.log(str2.toUpperCase());  // PROGRAMMING
console.log("-----------------------");
// length : It provides number of characters
let str3="Learning";
console.log(str3.length);  // 8
console.log("-----------------------");
// charAt  : It will extract each character based on index
let str4="HELLO"
console.log(str4.charAt(1))  // E
console.log("-----------------------");
// indexOf : It provides position of a string or character from left to Right
let str5="GADAG"
console.log(str5.indexOf("A"));  // 1
console.log("-----------------------");
let str6="It is a new book, It is on table"
console.log(str6.indexOf("is"));  // 3
console.log(str6.indexOf("is",4));  // 21
console.log("-----------------------");
// lastIndexOf : It provides position of a string or character from right to left
let str7="It is a new book, It is on table"
console.log(str7.lastIndexOf("is"));  // 21
console.log(str7.lastIndexOf("is",20));  // 3