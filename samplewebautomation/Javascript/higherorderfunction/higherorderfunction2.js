/*Case 2: Apply call back function , their provide coreLogic and pass them as arguments or parameter to main Function:
Solution:*/
let radius=[3,5,4,6,1,2]
 
function area(radius){
    return (Math.PI * radius * radius)
}
 
function circuference(radius){
    return 2 * Math.PI * radius
}
 
function diameter(radius){
    return 2 * radius
}
 
let calculate=function(radius,coreAction){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(coreAction(radius[i]))
    }
    return result
}
 
console.log(calculate(radius,area))
console.log(calculate(radius,circuference))
console.log(calculate(radius,diameter))