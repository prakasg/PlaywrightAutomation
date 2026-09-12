/*Case 1: How to Declare any array and how to print elements in array
//first Approach
let arr=[10,20,"Mango","Ornage",true,40]
console.log(arr);
console.log(typeof(arr));
 
 
console.log("-------------------------");
 
//Second Approach
let b=new Array(10,20,"Mango","Ornage",true,40)
console.log(b);
console.log(typeof(b));
 
Case 2: How to initialize an empty array, How to assign Elements and how to display Elements
//declare an array
let fruits=[]
 
// assign elements
fruits[0]="Mango"
fruits[1]="Ornage"
fruits[2]="Grapes"
fruits[3]="Banana"
 
//Read Elements from a narray
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
 
Case 3:  How to initialize an empty array, How to assign Elements and how to display Elements using looping
//declare an array
let fruits=[]
 
// assign elements
fruits[0]="Mango"
fruits[1]="Ornage"
fruits[2]="Grapes"
fruits[3]="Banana"
 
//Apply looping statement to read Elements
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
 
Case 4: How to assign Elements in declaration step and How to Read Elements
//declare an array
let numbers=[20,40,60,30,70,80]
 
//console.log(numbers.length);  // 6
 
//Read Elements
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
 
Case 5: How to read Elements from an array in reverse order
//declare an array
let flowers=["Lotus","Sunflower","Tulip","Cosmos","Aster"]
console.log(flowers);
 
//Read Elements in reverse order
for(let i=flowers.length-1;i>=0;i--){
    console.log(flowers[i])
}
 
Case 6: How to Read Elements from an array based on order of adding [for each]
//declare an array */
let arr=[30,40,50,60,70,70,70,80] 
 
//Read Eleemnts from an array using for in statement
for(let x in arr){
    console.log(arr[x]); 
}
console.log("----------------------");
//Read Eleemnts from an array using for of statement
for(let element of arr){
    console.log(element)
}