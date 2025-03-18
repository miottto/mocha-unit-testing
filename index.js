const Calculate = {
    factorial(input) {
      if (input < 0) throw new Error("Factorial is not defined for negative numbers");
      // Calculate factorial by creating an array from 1 to input and reducing it to the product
      return input === 0 ? 1 : [...Array(input)].map((_, i) => i + 1).reduce((acc, num) => acc * num, 1);
    }
  };
  
  module.exports = Calculate;