/*Higher Order Functions:
------------------------------------
A Function accepts another function as parameter and returns a function/result*/
 
//Case 1: for the given radius array calculate Area, Circumference and Radius of Circle
//Solution:
let radius=[3,5,4,6,1,2]
 
let calculareArea=function(radius){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(Math.PI * radius[i] * radius[i])
    }
    return result
}
 
console.log(calculareArea(radius))
 
let CalculateCircumference=function(radius){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(2 * Math.PI * radius[i])
    }
    return result
}
console.log(CalculateCircumference(radius))
 
let calculateDiameter=function(radius){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(2 * radius[i])
    }
    return result
}
 
console.log(calculateDiameter(radius))
 
 