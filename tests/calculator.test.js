const assert = require("assert");
const calculator = require("../calculator");
const assert = require("assert");
const calculator = require("../calculator");

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
describe("Calculator Calculation Functions", function () {
  const res = calculator.calculateSquareRoot(4);
  it("should return 2", function () {
    assert.strictEqual(res, 2);
  });
});
describe("Calculator Calculation Functions", function () {
  const res = calculator.calculateSquareRoot(4);
  it("should return 2", function () {
    assert.strictEqual(res, 2);
  });
});

describe("Cosine Function", function () {
  const res = calculator.cosine(Math.PI / 3);
  it("should return 0.5", function () {
    assert.strictEqual(res, 0.5);
  });
});


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
