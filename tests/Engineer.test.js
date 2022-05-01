const Engineer = require("../lib/Engineer");

test("engineer is an instance of the Engineer class", () =>{
const engineer = new Engineer();
expect (engineer).toBeInstanceOf(Engineer);
});

test("Can set GitHub account via constructor", () => {
const testValue = "GitHubUserData";
const engineer = new Engineer("Mikel", 1, "mikel.balazic@gmail.com", testValue);
expect(engineer.github).toBe(testValue);
});