/*
ReactDOM.render()'s first argument should evaluate to a JSX expression, it doesn't have to literally be a JSX expression.

The first argument could also be a variable, so long as that variable evaluates to a JSX expression.

In this example, we save a JSX expression as a variable named toDoList. We then pass toDoList as the first argument to ReactDOM.render:

var toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

ReactDOM.render(
  toDoList,
  document.getElementById('app')
);
Instructions
1.
On line 5, declare a variable named myList. Set myList equal to a JSX <ul></ul> element. Wrap your <ul></ul> in paretheses.

Add several <li></li> elements in between your <ul></ul> tags. Put some text in each <li></li>. Use line breaks and indentation lin
2.
At the bottom of the file, call ReactDOM.render().

For ReactDOM.render()'s first argument, pass in the variable myList.

For ReactDOM.render()'s second argument, select an HTML element with an id of app.

Feel free to use the example code as a guide.
*/

var React = require('react');
var ReactDOM = require('react-dom');

// Write code here:
var myList = (
	<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
);

ReactDOM.render(myList, document.getElementById('app'));
