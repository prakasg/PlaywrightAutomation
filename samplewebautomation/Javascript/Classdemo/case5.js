//Case 5: Declare setter method with parameters
class Department{
    deptno
    dname
    loc
    setDetails(deptno, deptname,deptloc){
        this.deptno=deptno
        this.dname=deptname
        this.loc=deptloc
    }
 
    showDetails(){
        console.log(this.deptno, this.dname, this.loc);
    }
}
 
let obj1=new Department()
obj1.setDetails(10, "Accounting", "New York")
obj1.showDetails()
 
let obj2=new Department()
obj2.setDetails(20,"Sales","Paris")
obj2.showDetails()