// Recursion in JavaScript:
// -------------------------------------
// A function can call itself that represents a recursion.
 
// Case 1: Without using any looping statement display numbers 20 to 40
// print numbers 20 to 40
 
let num=20
function displayNumbers(){
    if(num<=40){
        console.log(num);
        num=num+1
        displayNumbers()
    }
}
 
displayNumbers()
console.log("-------------------------");
 
//Case 2: without Looping Statement print odd numbers 61 to 91
// display odd numbers in betweeen 61 to 91
let oddnum=61
function displayOddNumbers(){
    if(oddnum<=91){
        if(oddnum % 2 ==1){
            console.log(oddnum);
        }
        oddnum=oddnum+1
        displayOddNumbers()
    }
}
 
displayOddNumbers()
 
//Case 3: Using Recursion find factorial of a Number:
// using Recursion find factorial of a Number
 
function getFactorial(fnum){
    if(fnum==1){
        return 1
    }
    return fnum * getFactorial(fnum-1)
}
 
console.log(getFactorial(4));
console.log(getFactorial(5));
console.log(getFactorial(6));

let v1=getFactorial(5)
console.log(v1) // 120
 
// 5 * getFactorial(5-1)
// 5 * 4 * getFactorial(4-1)
// 5 * 4 * 3 * getFactorial(3-1)
// 5 * 4 * 3 * 2 *  getFactorial(2-1)
// 5 * 4 * 3 * 2 * 1 =120

/*Assignments :
1) Write a function to return concatenation of all elements of String array?
2. Write a function to return numbers in between 40 to 100 which are divisible by 4?
3. Write a function to return combining the given two array elements ?
4. Write a function to return sum of even numbers and sum of odd numbers in between n1 to 500
5. Write a function to return missing from a given sequence of numbers in between 1 to 10 */