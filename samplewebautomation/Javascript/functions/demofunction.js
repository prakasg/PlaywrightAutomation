// function findFactorial(num){
//     let fact=1
//     for(let i=num;i>=1;i--){
//         fact=fact*i
//     }
//     console.log("Factorial of "+num+" is :"+fact);
// }
// findFactorial(5)

function addition(){
    let x=10
    let y=20
    let result=x+y
    console.log("Addition Result:"+result)
}
addition()

function multiplication(x,y){
    result=x*y
    console.log("Multiplication Result:"+result)
}
multiplication(10,20)

let multi=function(x,y){
    result=x*y
    console.log("Multiplication Result:"+result);
}

multi(10,10)

let div= (c,b) =>{
    let result=c%b
    console.log("Modulus Result:"+result);
}
div(10,20)

//Find Factorial of a number using Named Function
function findfactorial1(num){
    let fact=1
    for (let i=num;i>=1;i--){
        fact=fact*i
    }
    
    console.log("Factorial of "+num+" is :"+fact);
}
findfactorial1(6)
