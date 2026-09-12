// How to Export a class and How to Import a Class and access the members of the class: [Modules]
// -----------------------------------------------------------------------------------------------------------------------------
// Export a Class Customer:
class Customers{
    showCustomerName(cname){
        console.log("customer Name :"+cname)
    }
 
    showCustomerEmailId(cemail){
        console.log("Customer eMail Id :"+cemail)
    }
 
    showCustomerLocation(clocation){
        console.log("Customer Location :"+clocation)
    }
}
 
module.exports = {Customers}