//Case 2: If super class has parametrized Constructor, How to execute super class parametrized constructor.
 
//Solution:
class Department{
    constructor(deptno,dname,loc){
        this.deptno=deptno
        this.dname=dname
        this.loc=loc
    }
    displayDepartmentDetails(){
        console.log("Department Number:"+this.deptno);
        console.log("Department Name:"+this.dname);
        console.log("Department Location:"+this.loc);
    }
}
 
class Employee extends Department{
    constructor(empid,ename,job,sal, deptno,deptname,deptloc){
        super(deptno,deptname,deptloc)
        this.empid=empid
        this.ename=ename
        this.job=job
        this.sal=sal
    }
    displayEmployeeDetails(){
        console.log("Employee Id :"+this.empid)
        console.log("Employee Name :"+this.ename)
        console.log("Employee job :"+this.job)
        console.log("Employee Salary :"+this.sal)
    }
}
 
let obj1=new Employee(1001,"Santosh","Analyst",27000, 10,"Accounting","Boston")
obj1.displayEmployeeDetails()
obj1.displayDepartmentDetails()
 
//Output:
// Employee Id :1001
// Employee Name :Santosh
// Employee job :Analyst
// Employee Salary :27000
// Department Number:10
// Department Name:Accounting
// Department Location:Boston