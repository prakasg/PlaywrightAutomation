//case 1: In Multilevel Inheritance if each class have No-Args constructor, find order of Execution of Constructor
 
//Solution:
class AA{
    constructor(){
        console.log("It is AA class Constructor!!")
    }
}
 
class BB extends AA{
    constructor(){
        super()
        console.log("It is BB class Constructor!!")
    }
}
 
class CC extends BB{
    constructor(){
        super()
        console.log("It is CC class Constructor!!")
    }
}
 
let obj=new CC()
 
//Output:
//It is AA class Constructor!!
//It is BB class Constructor!!
//It is CC class Constructor!!