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


## Chapter 5 - React with JSX
JSX combines JS from JavaScript and X from XML. It is a JavaScript extension that allows us to redefine React elements using a tag-based syntax directly within JS code.

A JavaScript *expression* is surrounded by curly braces and allows JS to be passed to a React component as a property

### JSX Tips

### Babel
JSX is not supported by any browser, so Babel compiles JSX into text that the browser can read.

Several ways to incorporate Babel
- Link the CDN in your HTML code. Babel will compile the code on the client before running it. This way is not great for production.   

### React Fragments
React doesn't like it when you have adjacent JSX elements outside of a wrapper like <div></div>. Instead of creating a new tag, you can use a React Fragment element:
```
<React.Fragment>
  /*JSX code here*/
</React.Fragment>
```
Or the shorthand version

```
<>
  /*JSX code here*/
</>
```
## Chapter 6 - React State Management

### Intro to hooks
*Hooks* contain reusable code logic that is separate from the component tree. The all us to hook up functionality to our components. React ships with several built-in hooks we can use out of the box.
  - useState:  first argument is state value we want to use, the second value is a function that can be called to change the state value


  Hooks can cause the component they are a part of to *rerender*.

### State in component trees
**Not** a good idea to use state in every single component! Easier to manage state from a single location.
There are several approaches:
 - State lives in root element and is passed to child components via props  
 - 
