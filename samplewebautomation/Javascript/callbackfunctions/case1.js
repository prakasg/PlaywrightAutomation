//Call Back Function in JavaScript:
// -------------------------------------------------
// A function can accept another function as a parameter that represents call back function
 
// Case 1: Execute Call back Function
 
function mainFunction(callback){
    console.log("It is a Main Function Execution !!!");
    callback()
}
 
function callBackFunction(){
    console.log("It is a Call Back Function");
}
 
mainFunction(callBackFunction)