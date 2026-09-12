let num=41
 
let isPrime=0
for(let i=2;i<num;i++){
    if(num % i ==0 ){
        isPrime=isPrime+1
        break
    }
}
 
if(isPrime==0){
    console.log(num+" is a Prime Number");
}else{
    console.log(num+" is not a Prime Number");
}

