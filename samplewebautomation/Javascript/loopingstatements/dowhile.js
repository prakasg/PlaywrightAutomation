//Case 1: Display numbers in reverse order
let i=10
do{
    console.log(i);
    i--
}while(i>=1)
// case 2: Write a program to find sum of even numbers and sum of odd numbers in between 1 to 500
let sumEven=0
let sumOdd=0
let k=1
do{
    if(k % 2 ==0){
        sumEven=sumEven+k
    }else{
        sumOdd=sumOdd+k
    }
    k++
}while(k<=500)
console.log("Sum of Even Numbers : "+sumEven)
console.log("Sum of Odd Numbers : "+sumOdd)
console.log("**********");
//case 3: Write a program to find sum of first 10 Numbers
let sum=0
let j=1
do{ 
    sum=sum+j
    j++
    console.log(j)
}while(j<=10)
console.log("Sum of Numbers from 1 to 10 : "+sum)