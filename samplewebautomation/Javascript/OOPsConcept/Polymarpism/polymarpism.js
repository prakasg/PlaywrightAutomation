/*Polymorphism in JavaScript:
-------------------------------------------
A super class reference variable can refer to each child class object based on reference variable of super class, we can execute the sub class detail.
 
Solution:*/
class Payment{
    doPayment(){
        console.log("It performs Cash Payment Process")
    }
}
 
class PhonePe extends Payment{
    doPayment(){
        console.log("It performs PhonePe Payment Process")
    }
}
 
class GooglePay extends Payment{
    doPayment(){
        console.log("It performs GooglePay Payment Process")
    }
}
 
class NetBanking extends Payment{
    doPayment(){
        console.log("It performs NetBanking Payment Process")
    }
}
 
let payment=new Payment();
payment.doPayment()
 
let phonepe=new PhonePe()
let goolepay=new GooglePay()
let netbanking=new NetBanking()
 
payment=phonepe
payment.doPayment()
 
payment=goolepay
payment.doPayment()
 
payment=netbanking
payment.doPayment()