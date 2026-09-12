//Case 3: Callback function accepts Parameters
function calulcator(x,y,multiplication){
    multiplication(x,y)
}
 
function multiply(a,b){
   let result=(a * b)
   console.log("Multiplication Result :"+result);
}
 
calulcator(12,10,multiply)