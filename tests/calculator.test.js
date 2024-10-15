const assert = require("assert");
const calculator = require("../calculator");
const assert = require("assert");
const calculator = require("../calculator");

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});

describe("Calculator Memory Functions", function () {});

// Test calculation functions
describe("Calculator Calculation Functions", function () {
  const res = calculator.calculateSquareRoot(4);
  it("should return 2", function () {
    assert.strictEqual(res, 2);
  });
<<<<<<< HEAD
});
describe("Calculator Calculation Functions", function () {
  const res = calculator.calculateSquareRoot(4);
  it("should return 2", function () {
    assert.strictEqual(res, 2);
  });
=======
>>>>>>> b8734ab (added cosine function and tests)
});

describe("Cosine Function", function () {
  const res = calculator.cosine(Math.PI / 3);
  it("should return 0.5", function () {
    assert.strictEqual(res, 0.5);
  });
  const res2 = calculator.cosine(Math.PI / 4);
  it("should return 0", function () {
    assert.strictEqual(res2, 0);
  });
  const res3 = calculator.cosine(Math.PI / 2);
  it("should return -1", function () {
    assert.strictEqual(res3, -1);
  });
  const res4 = calculator.cosine(Math.PI);
  it("should return 1", function () {
    assert.strictEqual(res4, 1);
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
