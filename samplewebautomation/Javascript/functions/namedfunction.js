function displayPrimeNumbers(start,end){
    for(let i=start;i<=end;i++){
        let flag=0
        for(let j=2;j<i;j++){
            if(i%j==0){
                flag=flag+1
                break
            }
        }
            if(flag==0){
                console.log(i);
            }
    }
}
displayPrimeNumbers(50,100)