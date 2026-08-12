//Case 2: Create Multiple Objects for the same class
class Department{
    deptno
    dname
    loc
}
 
let obj1=new Department()
obj1.deptno=10
obj1.dname="Operations"
obj1.loc="Dallas"
console.log(obj1.deptno, obj1.dname, obj1.loc);
 
let obj2=new Department()
obj2.deptno=20
obj2.dname="Sales"
obj2.loc="New York"
console.log(obj2.deptno, obj2.dname, obj2.loc);
 