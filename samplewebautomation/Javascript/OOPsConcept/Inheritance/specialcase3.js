//Case 3: If super class and sub class contains same function with parameters (signature) (Overriding)
//A sub class hides super class method or function (Run Time Polymorphism)
 
//Solution:
 
class SalesDepartment{
    showDepartmentName(oname){
        console.log("It is a Sales Deaprtment of an Organization "+oname)
    }
}
 
class PurchaseDepartment extends SalesDepartment{
    constructor(orgname){
        super()
        super.showDepartmentName(orgname)
    }
    showDepartmentName(oname){
        console.log("It is a Purchase Deaprtment of an Organization "+oname)
    }
}
 
let obj2=new PurchaseDepartment("S K Consulting")
obj2.showDepartmentName("GowriSoft")
 
//Output:
//It is a Sales Deaprtment of an Organization S K Consulting
//It is a Purchase Deaprtment of an Organization GowriSoft