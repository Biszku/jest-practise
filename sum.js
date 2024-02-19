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
