//Case 4: Declare setter method to assign value to variables
class Department{
    deptno
    dname
    loc
 
    setDetails(){
        this.deptno=40
        this.dname="Research"
        this.loc="Mumbai"
    }
 
    showDetails(){
        console.log(this.deptno, this.dname, this.loc); 
    }
}
 
let obj1=new Department()
obj1.setDetails()
obj1.showDetails()
 
let obj2=new Department()
obj2.setDetails()
obj2.showDetails()