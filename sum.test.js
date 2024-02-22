// const myFunction = require("./sum");
// const sum = require("./sum");
// const fetchData = require("./sum");
const fetchPromise = require("./sum");

// test("1 + 2 equal 3", () => {
//   expect(() => {
//     sum(1, 2).toBe(3);
//   });
// });

// test("throws on invalid input", () => {
//   expect(() => {
//     myFunction("jjh").toThrow();
//   });
// });

// test("the data is peanut butter", (done) => {
//   const callback = (data) => {
//     try {
//       expect(data).toBe("peanut butter");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   };

//   fetchData(callback);
// });

// test("the data is peanut butter", () => {
//   return expect(fetchPromise()).resolves.toBe("peanut butter");
// });

// test("the fetch fails with an error", () => {
//   return expect(fetchPromise()).rejects.toThrow("error");
// });

// test("the data is peanut butter", async () => {
//   const data = await fetchPromise();
//   expect(data).toBe("peanut butter");
// });

// const mockCallback = jest.fn((x) => 42 + x);
// mockCallback(0);
// mockCallback(1);

test("mock implementation of a basic function", () => {
  const mock = jest.fn((x) => 42 + x);
  expect(mock(1)).toBe(43);
  expect(mock).toHaveBeenCalledWith(1);
});
