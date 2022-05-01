const Manager = require("../lib/Manager");

test("manager is an instance of the Manager class", () =>{
const manager = new Manager();
expect (manager).toBeInstanceOf(Manager);
});