/*
So far, we've focused on writing JSX expressions. It's similar to writing bits of HTML, but inside of a JavaScript file.

In this lesson, we're going to add something new: regular JavaScript, written inside of a JSX expression, written inside of a JavaScript file.

Whoaaaa...
Instructions
1.
Starting on line 5, carefully write the following code. What do you think will appear in the browser?

ReactDOM.render(
  <h1>2 + 3</h1>,
  document.getElementById('app')
);
*/

var React = require('react');
var ReactDOM = require('react-dom');

// Write code here:
ReactDOM.render(
	<h1>{2 + 3}</h1>,
  document.getElementById('app')
);
