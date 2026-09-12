let mydate=new Date()
console.log(mydate);  // 2026-08-02T02:38:18.422Z
console.log("-----------------------");
// Extract day, Month & Year value
let dayvalue=mydate.getDate() 
console.log(dayvalue); // 2
 
let monthvalue=mydate.getMonth()+1
console.log(monthvalue); //8
 
let yearvalue=mydate.getFullYear()
console.log(yearvalue);
console.log("-----------------------");
// Custom Date
let date1=dayvalue+"-"+monthvalue+"-"+yearvalue
console.log(date1);
 
//Updated Custom Date
if(dayvalue<10){
    dayvalue="0"+dayvalue
}
if(monthvalue<10){
    monthvalue="0"+monthvalue
}
let date2=dayvalue+"-"+monthvalue+"-"+yearvalue
console.log(date2);
console.log("-----------------------");
// Extract hour , minute & seconds
let hourvalue=mydate.getHours()
console.log(hourvalue);
 
let minutevalue=mydate.getMinutes()
console.log(minutevalue);
 
let secondvalue=mydate.getSeconds()
console.log(secondvalue);
console.log("-----------------------");
//cutom time
if(hourvalue <10){
    hourvalue="0"+hourvalue
}
 
if(minutevalue<10){
    minutevalue="0"+minutevalue
}
 
if(secondvalue<10){
    secondvalue="0"+secondvalue
}
 
let time1=hourvalue+"-"+minutevalue+"-"+secondvalue
console.log(time1);