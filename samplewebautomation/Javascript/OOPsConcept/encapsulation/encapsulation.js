/*class 9: Encapsulation in JavaScript
Encapsulation represents data hiding the data can be hidden using private access specifier, the hidden data can be accessible using setter and getter approaches.
 
Note: the Private members of the class can be accessible only within the class alone.
 
Solution 1:*/
class Bank{
    #bankName
    #accountNumber
    #balance
 
    setBankName(bankname){
        this.#bankName=bankname
    }
 
    setAccountNumber(accountNo){
        this.#accountNumber=accountNo
    }
 
    setBankBalance(balance){
        this.#balance=balance
    }
 
    getBankName(){
        return this.#bankName
    }
 
    getAccountNumber(){
        return this.#accountNumber
    }
 
    getBankBalance(){
        return this.#balance
    }
}
 
let obj=new Bank()
obj.setBankName("IDFC Bank")
obj.setAccountNumber(100000011)
obj.setBankBalance(25000)
console.log(obj.getBankName());
console.log(obj.getAccountNumber());
console.log(obj.getBankBalance());
 
 
/*Assignments on Class:
1) Create class Employee , Insurance and execute it
2) Create a class Customer, Project and Execute it
3) Create a class Flowers, Fruits and Vegetables and execute it
4) Create a class Purchase, Product, Sales and Execute it*/