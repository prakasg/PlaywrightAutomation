//Case 4: Multiple callback functions accepting Parameters
 
function employeeDetails(ename, job,showEmpName, showJobName){
    showEmpName(ename)
    showJobName(job)
}
 
function showEmpJobName(jobname){
    console.log("Job Name of the Employee :"+jobname);
}
 
function showEmpName(employeename){
    console.log("Employee Name :"+employeename)
}
 
employeeDetails("Santosh","analyst", showEmpName, showEmpJobName)
console.log("--------------------");
employeeDetails("Adams","clerk", 
function showEmpJobName(jobname){
    console.log("Job Name of the Employee :"+jobname);
},
function showEmpName(employeename){
    console.log("Employee Name :"+employeename)
}
)
 
 