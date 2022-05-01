const Engineer = require("../lib/Engineer");

test("engineer is an instance of the Engineer class", () =>{
    const engineer = new Engineer();
    expect (engineer).toBeInstanceOf(Engineer);
    });