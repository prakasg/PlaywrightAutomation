/*Case 6: Define a constructor in class and assign value to variables
During object creation the constructor will be executed, It is not a function, The execution of the Constructor provides an object or instance.
 
There are two types of Constructors:
1. No-Args Constructor
2. Parametrized Constructor
 
1. No-Args Constructor:
This type of constructor does not accept parameters.*/
 
//Example:
class Department{
    constructor(){
        this.deptno=10
        this.dname="Sales"
        this.loc="Dallas"
    }
    display(){
        console.log(this.deptno, this.dname, this.loc);
    }
}
 
let obj1=new Department()
obj1.display()
 
let obj2=new Department()
obj2.display() 
 
