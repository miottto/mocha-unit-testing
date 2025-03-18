var assert = require('assert');
var Calculate = require('../index.js');

describe('Calculate', () => {
  describe('.factorial', () => {
    
    let expected; // Variable to store expected value for each test

    // Hook to setup 'expected' value before each test
    beforeEach(() => {
      expected = null; // 
    });

    it('should return 120 for input 5!', () => {
      // Setup
      expected = 120;
      // Exercise
      const input = Calculate.factorial(5);
      // Verify
      assert.equal(input, expected);
    });

    it('should return 6 for input 3!', () => {
      // Setup
      expected = 6;
      // Exercise
      const input = Calculate.factorial(3);
      // Verify
      assert.equal(input, expected);
    });

    it('should return 1 for input 0!', () => {
      // Setup
      expected = 1;
      // Exercise
      const input = Calculate.factorial(0);
      // Verify
      assert.equal(input, expected);
    });

    it('should throw an error for negative input', () => {
      // Setup
      const expectedError = "Factorial is not defined for negative numbers";
      // Exercise and Verify
      assert.throws(() => { Calculate.factorial(-2); }, Error, expectedError);
    });

  });
});