const sum = (a, b) => {
  return a + b;
};

module.exports = sum;

const myFunction = (input) => {
  if (typeof input !== "number") {
    throw new Error("Invalid Input");
  }
};

module.exports = myFunction;

const fetchData = (callback) => {
  setTimeout(() => {
    callback("peanut butter");
  }, 1000);
};

module.exports = fetchData;
