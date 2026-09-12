// at : it provides eleemnt based on index
let flowers=[10,20,"Lotus","Sunflower",true,"Aster"]
console.log(flowers);
console.log(flowers.at(2));
console.log("-------------------");
// indexof : It provides position of Element based on index from left to right
let flowers1=["Lotus","Sunflower","Tulip","Cosmos","Lavendar","Lotus","Tulip"]
console.log(flowers1);
console.log(flowers1.indexOf("Tulip")); //2 
console.log(flowers1.indexOf("Tulip",3)); //6
console.log("-------------------");
// lastIndexOF : It provides position of element based on index from right to left
let flowers2=["Lotus","Sunflower","Tulip","Cosmos","Lavendar","Lotus","Tulip"]
console.log(flowers2);
console.log(flowers2.lastIndexOf("Tulip"));  // 6
console.log(flowers2.lastIndexOf("Tulip",5));  // 2
console.log("-------------------");
// includes : it verifies the existance of element
let fruits1=[40,"Mango",50,"Apple",70,"Watermelon","Banana"]
console.log(fruits1);
console.log(fruits1.includes("Watermelon"));
console.log("-------------------");
//slice : It extract Eleemnts based on start and end position
let fruits2=[40,"Mango",50,"Apple",70,"Watermelon","Banana"]
console.log(fruits2);
console.log(fruits2.slice(2,5));
console.log("-------------------");
// reverse : it prints an array in reverse order
let fruits3=[40,"Mango",50,"Apple",70,"Watermelon","Banana"]
console.log(fruits3);
console.log(fruits3.reverse());
console.log("-------------------");
//concat : It comnies multiple arrays
let a1=[10,20,30]
let b1=["Mango","Orange","Banana"]
console.log(a1.concat(b1));
console.log("-------------------");
// join : It joins elements based on delimeter
let cities=["Bangalore","Hassan","Mysore","Tumkur","Kolar"]
console.log(cities);
console.log(cities.join("#"));