// In built Functions in an array
//Push : add Elements in to an array at last
let fruits=[10,20,"Mango","Grapes",true,"apple"]
console.log(fruits);
fruits.push("Watermelon")
console.log(fruits);
console.log("----------------------");
// pop : It removes elements at last
let flowers=["Sunflower","Lotus","Cosmos","Tulip"]
console.log(flowers);
flowers.pop()
console.log(flowers);
console.log("----------------------");
//unshift : It adds element at start
let cities=["Kolar","Mysore","Hassan","Bangalore"]
console.log(cities);
cities.unshift("California")
console.log(cities);
console.log("----------------------");
// shift: It removes element at 0th index
let states=["Karnataka","Assam","Kerala","Tamilnadu","Andrapradesh"]
console.log(states);
states.shift()
console.log(states);
console.log("----------------------");
//ToString  : This function converts an array with string
let books=["Java","Python","JavaSCript","TypeScript"]
console.log(books);
let v1=books.toString()
console.log(v1);
let arr=v1.split(",")
console.log(arr);
 
 