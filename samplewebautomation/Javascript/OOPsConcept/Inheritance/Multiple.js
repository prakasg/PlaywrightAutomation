// Hybrid Inheritance:
//It is a combination of Simple, Multilevel and Hierarchal inheritance.
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
 
class Maths3 extends Maths1{
    division(x,y){
        let result=(x/y)
        console.log("Division Result :"+(x/y))
    }
}
 
class Maths4 extends Maths3{
    multiply(x,y){
        let result=(x * y)
        console.log("Multiplication Result :"+(x * y))
    }
}
 
let obj1=new Maths4()
obj1.multiply(12,10)
obj1.division(45,9)
obj1.addition(100,50)
 
let obj2=new Maths2()
obj2.substraction(55,35)
obj2.addition(40,90)
 