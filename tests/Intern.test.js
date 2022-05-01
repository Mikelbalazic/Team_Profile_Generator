const Intern = require("../lib/Intern");

test("intern is an instance of the Intern class", () =>{
const intern = new Intern();
expect (intern).toBeInstanceOf(Intern);
});