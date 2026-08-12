//2. Parametrized Constructor:
//This type of constructor accepts parameters.
class Department{
    constructor(dno, deptname,deptloc){
        this.deptno=dno
        this.dname=deptname
        this.loc=deptloc
    }
 
    display(){
        console.log("Department Number:"+this.deptno)
        console.log("Department Name:"+this.dname)
        console.log("Department Location:"+this.loc)
    }
}
 
let obj1=new Department(10,"Accounting", "Dallas")
obj1.display()
 
let obj2=new Department(20,"Marketing", "Delhi")
obj2.display()
 