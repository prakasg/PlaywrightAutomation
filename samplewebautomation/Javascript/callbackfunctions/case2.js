//Case 2: Userdefined Names
function show(x){
    console.log("Welcome to Function show() ");
    x()
}
 
function display(){
    console.log("It is display() function statement");
}
 
show(display)
console.log("---------------------");
show(function display(){
    console.log("It is display() function statement");
})
console.log("---------------------");
show(function(){
    console.log("It is display() function statement");
})
console.log("---------------------");
show(()=>{
    console.log("It is display() function statement");
})
 