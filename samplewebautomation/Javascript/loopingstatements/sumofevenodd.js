//give me sum of first 20 even numbers
let sumeven=0;
let sumodd=0;
for(i=1;i<=500;i++){
    if(i%2==0){
        sumeven=sumeven+i
    }
    else{
        sumodd=sumodd+i
    }
}
console.log("Sum of  even numbers :"+sumeven);
console.log("Sum of odd numbers :"+sumodd);