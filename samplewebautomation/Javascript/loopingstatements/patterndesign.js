//Design the right angle pattern in reverse order
let rows=5;
let pattern="";
for(let i=1;i<=5;i++){
    for(let j=5;j>=i;j--){
        pattern=pattern+j+""
    }
    pattern=pattern+"\n"
}
console.log(pattern);

//Design the rectangle pattern
for(let k=1;k<=5;k++){
    for(let l=1;l<=5;l++){
        pattern=pattern+l+""
    }
    pattern=pattern+"\n"
}
console.log(pattern);
