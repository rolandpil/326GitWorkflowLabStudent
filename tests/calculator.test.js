const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquareRoot(4);
    it('should return 2', function() {
        assert.strictEqual(res, 2);
    });
});

describe('Calculator tangent function', function(){
    const res1 = calculator.tangent(0);
    const res2 = calculator.tangent(Math.PI / 2);
    const res3 = calculator.tangent(Math.PI / 4);
    it('should return 0 if val is 0', function() {
        assert.strictEqual(res1, 0);
    });
    
    it('should return 16331239353195370 if val is Math.pi / 2', function(){
        assert.strictEqual(res2,16331239353195370);
    })

    it ('should return 0.9999999999999999 if val is Math.pi / 4', function(){
        assert.strictEqual(res3,0.9999999999999999);
    })
})
// Add your tests here