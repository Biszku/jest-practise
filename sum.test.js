const myFunction = require("./sum");

test("throws on invalid input", () => {
  expect(() => {
    myFunction("jjh");
  }).toThrow();
});
