const Manager = require("../lib/Manager");

test("manager is an instance of the Manager class", () =>{
const manager = new Manager();
expect (manager).toBeInstanceOf(Manager);
});

test("Can set office number via constructor", () => {
const testValue = 100;
const manager = new Manager("Mikel", 1, "mikel.balazic@gmail.com", testValue);
expect(manager.officeNumber).toBe(testValue);
});