// Grouping the Tests in Playwright:
// ---------------------------------------------------
// Case 1: Grouping tests
import {test, expect} from "@playwright/test"
 
test.describe("Sanity Tests",async()=>{
    test("First Santiy test", async()=>{
        console.log("It is a First Sanity Test")
    })
 
    test("Second Santiy test", async()=>{
        console.log("It is a Second Sanity Test")
    })
})
 
test.describe("Regression Tests",async()=>{
    test("First Regression test", async()=>{
        console.log("It is a First Regression Test")
    })
 
    test("Second Regression test", async()=>{
        console.log("It is a Second Regression Test")
    })
})
 
test.describe("Unit Tests",async()=>{
    test("First Unit test", async()=>{
        console.log("It is a First Unit Test")
    })
 
    test("Second Unit test", async()=>{
        console.log("It is a Second Unit Test")
    })
})
 
test.describe("Restful API Tests",async()=>{
    test("First API test", async()=>{
        console.log("It is a First API Test")
    })
 
    test("Second API test", async()=>{
        console.log("It is a Second API Test")
    })
})
 
// Case 2: Can I run only a specific group alone
 
import {test, expect} from "@playwright/test"
 
test.describe("Sanity Tests",async()=>{
    test("First Santiy test", async()=>{
        console.log("It is a First Sanity Test")
    })
 
    test("Second Santiy test", async()=>{
        console.log("It is a Second Sanity Test")
    })
})
 
test.describe.only("Regression Tests",async()=>{
    test("First Regression test", async()=>{
        console.log("It is a First Regression Test")
    })
 
    test("Second Regression test", async()=>{
        console.log("It is a Second Regression Test")
    })
})
 
test.describe("Unit Tests",async()=>{
    test("First Unit test", async()=>{
        console.log("It is a First Unit Test")
    })
 
    test("Second Unit test", async()=>{
        console.log("It is a Second Unit Test")
    })
})
 
test.describe("Restful API Tests",async()=>{
    test("First API test", async()=>{
        console.log("It is a First API Test")
    })
 
    test("Second API test", async()=>{
        console.log("It is a Second API Test")
    })
})
 
// Case 3: Can we skip some Group of Tests
import {test, expect} from "@playwright/test"
 
test.describe.skip("Sanity Tests",async()=>{
    test("First Santiy test", async()=>{
        console.log("It is a First Sanity Test")
    })
 
    test("Second Santiy test", async()=>{
        console.log("It is a Second Sanity Test")
    })
})
 
test.describe.skip("Regression Tests",async()=>{
    test("First Regression test", async()=>{
        console.log("It is a First Regression Test")
    })
 
    test("Second Regression test", async()=>{
        console.log("It is a Second Regression Test")
    })
})
 
test.describe.skip("Unit Tests",async()=>{
    test("First Unit test", async()=>{
        console.log("It is a First Unit Test")
    })
 
    test("Second Unit test", async()=>{
        console.log("It is a Second Unit Test")
    })
})
 
test.describe("Restful API Tests",async()=>{
    test("First API test", async()=>{
        console.log("It is a First API Test")
    })
 
    test("Second API test", async()=>{
        console.log("It is a Second API Test")
    })
})
 
// Case 4: Can we execute tests in serial order
 
import {test, expect} from "@playwright/test"
 
test.describe.serial("Application Tests",async()=>{
    test("First Santiy test", async()=>{
        console.log("It is a First Sanity Test")
    })
 
    test("Second Santiy test", async()=>{
        console.log("It is a Second Sanity Test")
    })
 
    test("First Regression test", async()=>{
        console.log("It is a First Regression Test")
    })
 
    test("Second Regression test", async()=>{
        console.log("It is a Second Regression Test")
    })
 
    test("First Unit test", async()=>{
        console.log("It is a First Unit Test")
    })
 
    test("Second Unit test", async()=>{
        console.log("It is a Second Unit Test")
    })
    test("First API test", async()=>{
        console.log("It is a First API Test")
    })
 
    test("Second API test", async()=>{
        console.log("It is a Second API Test")
    })
})
 
// Case 5: Apply Hooks beforeEach , afterEach on Groups
 
import {test, expect} from "@playwright/test"
 
test.beforeEach(async()=>{
    console.log("Login into the application with valid credentials")
})
 
test.afterEach(async()=>{
    console.log("Logout from the Application and Close Application")
})
 
test.describe("Sanity Tests",async()=>{
    test("First Santiy test", async()=>{
        console.log("It is a First Sanity Test")
    })
 
    test("Second Santiy test", async()=>{
        console.log("It is a Second Sanity Test")
    })
})
 
test.describe("Regression Tests",async()=>{
    test("First Regression test", async()=>{
        console.log("It is a First Regression Test")
    })
 
    test("Second Regression test", async()=>{
        console.log("It is a Second Regression Test")
    })
})
 
test.describe("Unit Tests",async()=>{
    test("First Unit test", async()=>{
        console.log("It is a First Unit Test")
    })
 
    test("Second Unit test", async()=>{
        console.log("It is a Second Unit Test")
    })
})
 
test.describe("Restful API Tests",async()=>{
    test("First API test", async()=>{
        console.log("It is a First API Test")
    })
 
    test("Second API test", async()=>{
        console.log("It is a Second API Test")
    })
})
 
// Case 6: Apply Hooks beforeAll , afterAll on Groups
 
import {test, expect} from "@playwright/test"
 
test.beforeAll(async()=>{
    console.log("Login into the application with valid credentials")
})
 
test.afterAll(async()=>{
    console.log("Logout from the Application and Close Application")
})
 
test.describe("Sanity Tests",async()=>{
    test("First Santiy test", async()=>{
        console.log("It is a First Sanity Test")
    })
 
    test("Second Santiy test", async()=>{
        console.log("It is a Second Sanity Test")
    })
})
 
test.describe("Regression Tests",async()=>{
    test("First Regression test", async()=>{
        console.log("It is a First Regression Test")
    })
 
    test("Second Regression test", async()=>{
        console.log("It is a Second Regression Test")
    })
})
 
test.describe("Unit Tests",async()=>{
    test("First Unit test", async()=>{
        console.log("It is a First Unit Test")
    })
 
    test("Second Unit test", async()=>{
        console.log("It is a Second Unit Test")
    })
})
 
test.describe("Restful API Tests",async()=>{
    test("First API test", async()=>{
        console.log("It is a First API Test")
    })
 
    test("Second API test", async()=>{
        console.log("It is a Second API Test")
    })
})