const assert = require("assert");
const calculator = require("../calculator");

// Test memory functions
describe("Calculator Memory Functions", function () {});

// Test calculation functions
describe("Calculator Calculation Functions", function () {
  const res = calculator.calculateSquareRoot(4);
  it("should return 2", function () {
    assert.strictEqual(res, 2);
  });
});

/* describe("Calculate reciprocal tests", function () {
  const res1 = calculator.calculateReciprocal(2);
  const res2 = () => calculator.calculateReciprocal(0);
  it("should return 0.5", function () {
    assert.strictEqual(res1, 0.5);
  });
  it("should return an error", function () {});
  assert.throws(res2, expected);
}); */

// Add your tests here
describe("Calculator Sine Function", function () {
  const res1 = calculator.sine(Math.PI / 2);
  const res2 = calculator.sine(0);
  it("should return 1", function () {
    assert.strictEqual(res1, 1);
  });
  it("should return 0", function () {
    assert.strictEqual(res2, 0);
  });
});
