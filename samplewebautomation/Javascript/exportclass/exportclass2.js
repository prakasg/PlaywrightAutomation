class Products{
    constructor(pid, prodname, quantity){
        this.prodid=pid
        this.prodname=prodname
        this.quantity=quantity
    }
 
    displayProductId(){
        console.log("Product Id :"+this.prodid)
    }
 
    displayProductName(){
        console.log("Product Name :"+this.prodname)
    }
 
    displayProductqunatity(){
        console.log("Product quantity :"+this.quantity)
    }
}
 
module.exports = {Products}