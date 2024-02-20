const myFunction = require("./sum");
const sum = require("./sum");
const fetchData = require("./sum");
// const fetchPromise = require("./sum");

test("1 + 2 equal 3", () => {
  expect(() => {
    sum(1, 2).toBe(3);
  });
});

test("throws on invalid input", () => {
  expect(() => {
    myFunction("jjh").toThrow();
  });
});

test("the data is peanut butter", (done) => {
  const callback = (data) => {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  };

  fetchData(callback);
});

// test("the data is peanut butter", () => {
//   return expect(fetchPromise()).resolve.toBe("peanut butter");
// });
