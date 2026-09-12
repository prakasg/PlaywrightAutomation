// Irrespective of return value or not, We can discuss Types of Functions in JavaScript:
//Case 1: Find factorial of number using Named , Anomymous & Arrow Functions
// Named function to find factorial of number
function findFactorial1(num){
    let fact=1
    for(let i=num;i>=1;i--){
        fact=fact * i
    }
    console.log("Factorial of "+num+" is "+fact);
}
 
findFactorial1(4)
console.log("-------------------------------------------------");
// Anonymous Function to find factorial of number
const findFactorial2=function(num){
    let fact=1
    for(let i=num;i>=1;i--){
        fact=fact * i
    }
    console.log("Factorial of "+num+" is "+fact);
}
findFactorial2(5)
console.log("-------------------------------------------------");
//Arrow Function to find factorial of number
let findFactorial3=(num)=>{
    let fact=1
    for(let i=num;i>=1;i--){
        fact=fact * i
    }
    console.log("Factorial of "+num+" is "+fact);
}
findFactorial3(6)
 
//Case 2: Write a function based on given Integer array, it has to find sum of all Elements
// Named function to find sum of all Elements
function findSumOfElements1(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    console.log("Sum of All Elements :"+sum)
}
 
findSumOfElements1([10,20,30,40,50,60])
findSumOfElements1(new Array(1,2,3,4,5,6,7,8,9,10))
let b=[20,40,60,80]
findSumOfElements1(b)
let arr=[1,2,3,4,5]
findSumOfElements1(arr)
console.log("----------------------------");
// Ananymous Function to find sum of all Elements
let findSumOfElements2=function(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    console.log("Sum of All Elements :"+sum)
}
let newArr=[2,4,6,8,10]
findSumOfElements2(newArr)
console.log("----------------------------");
// Arraow function to find sum of all Elements
let findSumOfElements3=(arr)=>{
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    console.log("Sum of All Elements :"+sum)
}
let z=[100,200,300]
findSumOfElements3(z)
 
// Case 3: Write a function to display Prime Numbers in between 50 to 100
// Named function to display primen umebrs 50 to 100
function displayPrimeNumebrs1(start, end){
    for(let i=start;i<=end;i++){
        let flag=0
        for(let j=2;j<i;j++){         
            if(i % j ==0){
                flag=flag+1
                break
            }
        }
        if(flag==0){
            console.log(i)
        }
    }
}
 
displayPrimeNumebrs1(40,80)
console.log("-----------------------");
// Ananymous function to display primen umebrs 50 to 100
let displayPrimeNumebrs2=function(start, end){
    for(let i=start;i<=end;i++){
        let flag=0
        for(let j=2;j<i;j++){         
            if(i % j ==0){
                flag=flag+1
                break
            }
        }
        if(flag==0){
            console.log(i)
        }
    }
}
displayPrimeNumebrs2(20,50)
console.log("-----------------------");
// Arrow function to display primen umebrs 50 to 100
let displayPrimeNumebrs3=(start, end) =>{
    for(let i=start; i<=end;i++){
        let flag=0
        for(let j=2;j<i;j++){
            if(i % j ==0){
                flag=flag+1
                break
            }
        }
        if(flag==0){
            console.log(i)
        }
    }
}
displayPrimeNumebrs3(50,100)