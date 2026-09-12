const prime=()=>{
    for(let i=50;i<=100;i++){
        let flag=0
        for(let j=2;j<i;j++){
            if(i % j ==0){
                flag=flag+1
                break
            }
        }
        if(flag==0){
            console.log(i)
        }
    }
}
prime(50,100)
