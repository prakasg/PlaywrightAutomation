//Objects in JavaScript:
//------------------------------------
//Objects stores elements based on key and value pair. based on key we can read value.
//Object contains properties and functions(methods). It supports to read elements based on key, here we can call keys are named keys.
 
//Case 1: Create an object which has properties and read property values.
 
let department={
    "deptnono":10,
    "dname":"Accounting",
    "location":"California"
}
// display an object
console.log(department);
//display each property value
console.log(department["deptnono"]);
console.log(department["dname"]);
console.log(department["location"]);
//display each property value
console.log(department.deptnono);
console.log(department.dname);
console.log(department.location);
 
//Case 2: Create an object which has properties  and Update Object by adding new Properties
let student ={
    "rollno":101,
    "firstname":"Santosh",
    "age":22
}
console.log(student);
student.course="Science and Research"
console.log(student);
student.address="Attigupe, Vijaynagar"
console.log(student);
 
//Case 3: Create an object which has properties  and read property and property values from object
let department={
    "deptnono":10,
    "dname":"Accounting",
    "location":"California"
}
 
for(let x in department){
    console.log(x+" -> "+department[x]);
}
 
//Case 4: Create an object which has properties  and delete existing properties.
let customer={
    "custid":101,
    "customername":"Lenovo Servies",
    "emailid":"services@lenovo.com",
    "description":"Provides Laptop Services"
}
console.log(customer);
//delete property name
delete customer.description
console.log(customer);
 
//Case 5: Array of JavaScript Objects and Read the properties.
 
let products=[
    {
        "prodid":101,
        "prodname":"Dell Laptop",
        "price":34000,
        "email":"dell@services.com"
    },
    {
        "prodid":102,
        "prodname":"Lenovo Laptop",
        "price":44000,
        "email":"lenovo@support.com"
    },
    {
        "prodid":103,
        "prodname":"HP Laptop",
        "price":41000,
        "email":"hp@laptopservices.com"
    }
]
 
console.log(products[0].prodid);
console.log(products[0].prodname);
console.log(products[0].price);
console.log(products[0].email);
console.log(products[1].prodid);
console.log(products[1].prodname);
console.log(products[1].price);
console.log(products[1].email);
console.log(products[2].prodid);
console.log(products[2].prodname);
console.log(products[2].price);
console.log(products[2].email);
console.log("---------------------------");
//apply for loop to read Elements
for(let i=0;i<products.length;i++){
    console.log(products[i].prodid);
    console.log(products[i].prodname);
    console.log(products[i].price);
    console.log(products[i].email);
}
 
 
//Case 6: Nested of JavaScript Objects and Read the properties.
let projects={
    "healthcare":{
        "id":"H001",
        "projecttitle":"Tulip",
        "description":"It deals with Drugs Manufacturing"
    },
    "sales":{
        id:"S002",
        "projecttitle":"Lavendar",
        "description":"It deals with Sales Compensation"
    },
    "insurance":{
        "id":"I003",
        "projecttitle":"Vehicle Insurance",
        "description":"It deals with Four Wheelers Vehicle"
    }
}
console.log(projects.healthcare.id);
console.log(projects.healthcare.projecttitle);
console.log(projects.healthcare.description);
console.log(projects.sales.id);
console.log(projects.sales.projecttitle);
console.log(projects.sales.description);
console.log(projects.insurance.id);
console.log(projects.insurance.projecttitle);
console.log(projects.insurance.description);
 
//Case 7: Create an Object with Properties and Functions (methods)
 
 
let employee={
    "empid":1910,
    "empname":"Santosh",
    "jobname":"Sales Executive",
    "salary":40000,
    "bonus": function(){
                return (this.salary * 5)/100
            },
    "commission": function(){
                return (this.salary * 10)/100
            },
    "incentives": function(){
                return (this.bonus() + this.commission())
            }
}
 
console.log(employee.empid);
console.log(employee.empname);
console.log(employee.jobname);
console.log(employee.salary);
console.log(employee.bonus());
console.log(employee.commission());
console.log(employee.incentives());
 