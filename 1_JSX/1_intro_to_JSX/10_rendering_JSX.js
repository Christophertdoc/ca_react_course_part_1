/*
You've learned how to write JSX elements! Now it's time to learn how to render them.

To render a JSX expression means to make it appear onscreen.
Instructions
1.
The following code will render a JSX expression:

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
Starting on line 5, carefully copy the code into the code editor. We'll go over how it works in the next exercise.

JavaScript is case-sensitive, so make sure to capitalize ReactDOM correctly!
*/

var React = require('react');
var ReactDOM = require('react-dom');

// Copy code here:
ReactDOM.render(<h1>Hello world</h1>,document.getElementById('app'));
