// Set Operations:

// ----------------------

// Set never accept duplicate elements, It does not support index.
 
// Case 1: How to Create a set and how to display elements from Set.

//declare set and assign elements

let obj=new Set([10,20,30,40,50,60])

console.log(obj)
 
 
//Case 2: IF a set contains duplicate Elements?

//declare set with dupicate Elements
 
let obj1=new Set(["Mango","Apple",10,50,90,true,"Mango",50])

console.log(obj1)
 
////Output:

//Set(6) { 'Mango', 'Apple', 10, 50, 90, true }
 
 
//Case 3: How to Add Elements in to Set object?

//declare set and ElementsElements
 
let obj2=new Set(["Mango","Apple",10,50,90,true,"Orange",70])

console.log(obj2)
 
// Add Eleemnts

obj2.add("Grapes")

obj2.add("Lotus")

obj2.add("Peacock")

obj2.add(99)

console.log(obj2)
 
//Case 4: Read Elements from the set
 
//declare set and Read Elements
 
let obj3=new Set(["Mango","Apple",10,50,90,true,"Orange",70])

//console.log(obj3)

//first Appraoch

for(let x of obj3)

{

    console.log(x)

}

console.log("------------------------------")

//Second Appraoch

for(let element of obj3.values()){

    console.log(element)

}

console.log("------------------------------")

// Third Approach

obj3.forEach(function(x){

    console.log(x)

})
 
//Case 5: Convert set into an Array:

// Declare a set and convert set into an array
 
let obj5=new Set(["Mango","Apple",10,50,90,true,"Orange",70])

console.log(obj5)
 
let arr=[...obj5]

console.log(arr);
 