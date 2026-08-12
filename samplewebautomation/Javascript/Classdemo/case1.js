/*Object Oriented Programming ( OOPS concepts in JavaScript):
------------------------------------------------------------------------------------------------
class represents a template or blueprint, class contains  properties and methods those are called as members of the class.
In order to access those members we should require an object or instance.
 
Case 1: A Class contains class variables.*/
 
class Department{
    deptno
    dname
    loc
}
 
let obj1=new Department()
obj1.deptno=10
obj1.dname="Accounting"
obj1.loc="California"
console.log(obj1.deptno);
console.log(obj1.dname);
console.log(obj1.loc);
console.log("---------");
Department.deptno=20
Department.dname="Research"
Department.loc="Boston"
console.log(Department.deptno);
console.log(Department.dname);
console.log(Department.loc)