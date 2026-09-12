/*Case 3: Modify the User defined Function exactly as same as Higher Order Function like map
Solution: */
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
 
Array.prototype.calculate=function(coreAction){
    let result=[]
    for(let i=0;i<this.length;i++){
        result.push(coreAction(this[i]))
    }
    return result
}
 
console.log(radius.calculate(area))
console.log(radius.map(area))
console.log(radius.calculate(circuference))
console.log(radius.map(circuference))
console.log(radius.calculate(diameter))
console.log(radius.map(diameter))