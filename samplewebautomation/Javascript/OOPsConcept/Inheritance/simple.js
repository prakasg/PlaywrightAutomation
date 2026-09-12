/*Inheritance in JavaScript:
----------------------------------------------
Inheritance provides reusability of the code. (IS-A)
 
class BasicCalculator{
    // All Basic Action  40 Methods
}
 
class ScienticCalculator extends BasicCalculator{
    // All Scientific Actions // 60 Methods
}
 
Note : In the above Example , ScienticCalculator is called a sub class, derived class or child class
Note : In the above Example , BasicCalculator is called a super class, base class or parent class
Note 1: Based on sub class Object we can access100 Methods
Note 2: Based on Parent class Object we can access only 40 Methods
 
Note: In Inheritance we must create object only for Sub Class.
 
Types of Inheritance:
1. Simple Inheritance*/
 
class Maths1{
    addition(x,y){
        console.log("Addition Result :"+(x+y))
    }
}
 
class Maths2 extends Maths1{
    substraction(a,b){
        let result=(a - b)
        console.log("Substraction Result :"+(a - b))
    }
}
 
let obj=new Maths2()
obj.substraction(55,15)
obj.addition(70,20)
 