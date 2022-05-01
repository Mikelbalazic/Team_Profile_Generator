const Employee = require("../lib/Employee");

test("employee is an instance of the Employee class", () =>{
const employee = new Employee();
expect (employee).toBeInstanceOf(Employee);
});

test("Can create employee", () => {
const employee = new Employee();
expect (typeof(employee)).tobe("object");
});

test("Can set name via getName()", () => {
const name = "Mikel";
const employee = new Employee(name);
expect(employee.name).toBe(name);
});

test("Can set ID via getId()", () => {
const testValue = 100;
const employee = new Employee("Foo", testValue);
expect(employee.getId()).toBe(testValue);
});

test("Can set email via getEmail()", () => {
const testValue = "mikel.balazic@gmail.com";
const employee = new Employee("Foo", 1, testValue);
expect(employee.getEmail()).toBe(testValue);
});

test("getRole() will return title of Employee", () => {
const testValue = "Employee";
const employee = new Employee("Mikel", 1, "mikel.balazic@gmail.com");
expect(employee.getRole()).toBe(testValue);
});