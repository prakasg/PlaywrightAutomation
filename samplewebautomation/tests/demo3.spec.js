const {test, expect} = require("@playwright/test")
 
test.skip("Validate Numbers", ()=>{
    expect(10).toBe(10)
})
 
test("Validate Decimal Value", ()=>{
    expect(14.75).toBe(14.75)
})
 
test.skip("Validate Boolean Value", ()=>{
    expect(true).toBeTruthy()
})
 
test("Validate String Content", ()=>{
    expect("S G Software Testing Institute").toContain("Software")
})
 
test("Validate String Content with Partial", ()=>{
    expect("S G Software Testing Institute".includes("Testing")).toBeTruthy()
})
 
test("Validate String Content using Equal Operator", ()=>{
    expect("S G Software"=="S G Software").toBeTruthy()
})
 
test("Validate Integer with Greater Than", ()=>{
    expect(45).toBeGreaterThan(25)
})
 
test("Validate Integer with Lesser Than", ()=>{
    expect(45).toBeLessThanOrEqual(75)
})
 

 