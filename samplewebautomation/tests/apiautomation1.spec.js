// 9. API automation:
// ---------------------------------
// Case 1: authenticate -> Display Customer
// https://sgtestinginstitute.onrender.com/api/v1/authenticate
 
// Solutions:
const{test,expect}=require("@playwright/test")
let authToken="";

test.beforeAll(async ({ request }) => {

    const response = await request.post(
        "https://sgtestinginstitute.onrender.com/api/v1/authenticate",
        {
            data: {
                username: "Prakash",
                password: "Gurikar"
            },
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    authToken = await response.text();

    console.log("Token: " + authToken);

    await expect(response.status()).toEqual(200);
});


test("Display Existing Customer Scenario", async ({ request }) => {

    const response = await request.get(
        "https://sgtestinginstitute.onrender.com/api/v1/customers/1386",
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authToken
            }
        }
    );

    const responseBody = await response.text();

    console.log("Customer Response: " + responseBody);

    await expect(response.status()).toEqual(200);
});