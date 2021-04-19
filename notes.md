# Notes for *Learning React: Modern Patterns for Developing React Apps* by Alex Banks & Eve Porcello

## Chapter 3 - Functional Programming

### Functional Concepts
- Immutability: unchangable data. In a functional program, data is immutable.  
- Pure function: function that returns a value based on its arguments. They do not cause side effects, set global variables, or change anything about application state. These properties make pure functions *testable.*  
- Data transformations: two core functions
  - Array.map: takes a function as an argument, invokes it once for every item in array, and returns a new array.  
  - Array.reduce: transform an array into any value, including a number, string, boolean, object, or even a function.  
- Higher-order functions: functions that can manipulate other functions.
- Recursion: creating a function that recalls itself
- Composition: how you put smaller functions together. There are several techniques.
  - Chaining using dot notation.  
  - Compose function, which takes in functions as arguments and returns a single function.  
  
