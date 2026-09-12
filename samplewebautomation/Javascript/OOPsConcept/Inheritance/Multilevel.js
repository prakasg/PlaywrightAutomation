//2. Multilevel Inheritance:
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
 
class Maths3 extends Maths2{
    division(x,y){
        let result=(x/y)
        console.log("Division Result :"+(x/y))
    }
}
 
let obj=new Maths3()
obj.division(50,10)
obj.substraction(60,40)
obj.addition(50,70)
 