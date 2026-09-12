// Promise in JavaScript:
// -----------------------------------
 
// If there is an Asynchronous actions , these includes fetching data from database, Execution of API, File Operations.
 
// Case 1: Create a user defined promise using Anonymous function and Execute It
// Solution:
 
let myPromise=new Promise(function(resolved, rejected){
    let status=false
    if(status){
        resolved("The Task has completed Successfully ")
    }else{
        rejected("The Task has not completed Successfully")
    }
})
 
myPromise.then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
}).finally(always =>{
    console.log("This task execute always............ ")
})
console.log("-------------------------------------------")
let loginPromise=new Promise((resolved, rejected)=>{
    let loginStatus=true
    if(loginStatus){
        resolved("The Login Action has performed successfully")
    }else{
        rejected("The Login Action has not performed successfully")
    }
})
 
loginPromise.then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
}).finally(always =>{
    console.log("This task execute always............ ")
})
 
// Case 2: Execute an API Request based on Promise
 
Solution:
fetch("https://fakestoreapi.com/products/20")
.then(response=>{
    response.json()
    .then(data =>{
        console.log(data)
    }).catch(error=>{
    console.log(error)
})
}).catch(error=>{
    console.log(error)
})
 
// Case 3: Execute an API Request based on Promise and Async and await approach
// Solution:
const apiresult=async function(){
    const response=await fetch("https://fakestoreapi.com/products/20")
    const resposnedata=await response.json()
    console.log(resposnedata)
}
 
apiresult()