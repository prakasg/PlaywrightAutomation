//Case 3: Instead of assigning value after creation of object , do same in class
class Department{
    deptno=30
    dname="Healthcare"
    loc="Bangalore"
}
 
let obj1=new Department()
console.log(obj1.deptno, obj1.dname, obj1.loc);
 
let obj2=new Department()
console.log(obj2.deptno, obj2.dname, obj2.loc);