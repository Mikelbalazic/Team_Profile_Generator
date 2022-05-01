const Intern = require("../lib/Intern");

test("intern is an instance of the Intern class", () =>{
const intern = new Intern();
expect (intern).toBeInstanceOf(Intern);
});

test("Can set school via constructor", () => {
const testValue = "School";
const intern = new Intern("Mikel", 1, "mikel.balazic@gmail.com", testValue);
expect(intern.school).toBe(testValue);
});