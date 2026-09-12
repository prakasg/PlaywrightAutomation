/*Web Table:
---------------------------
Web Table contains Number of Rows and Number  columns.
Read Content From Web Table:
 
Example:*/

 const {test, expect} = require("@playwright/test")

 
test("Read Content from Web Table", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await  page.waitForTimeout(3000)
    await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()
    await  page.waitForTimeout(3000)
    const WebTable = await page.$("//table[@name='BookTable']")
    const webTableRows=await WebTable.$$("tr")
    console.log("Number of Rows in a Web Table :"+webTableRows.length);
    let tableContent=""
    for(let i=0;i<webTableRows.length;i++){
        let webTableCols=await webTableRows[i].$$("td")
        for(let j=0;j<webTableCols.length;j++){
            let data=await webTableCols[j].textContent()
            tableContent= tableContent+data+"  "
        }
        tableContent=tableContent+"\n"
    }
    console.log(tableContent)
})
 
 