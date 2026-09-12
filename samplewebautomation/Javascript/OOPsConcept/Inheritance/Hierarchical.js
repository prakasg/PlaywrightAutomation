//3. Hierarchal Inheritance:
//A single super class can be accessed by "N' number of Sub class
 
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
 
let obj1=new Maths2()
obj1.substraction(60,10)
obj1.addition(60,100)
 
let obj2=new Maths3()
obj2.division(48,4)
obj2.addition(80,70)
 