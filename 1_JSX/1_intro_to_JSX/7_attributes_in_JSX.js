/*
JSX elements can have attributes, just like HTML elements can.

A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value. The value should be wrapped in quotes, like this:

my-attribute-name="my-attribute-value"
Here are some JSX elements with attributes:

<a href="http://www.yahoo.com">Welcome to the Yahoo</a>;

var title = <h1 id="title">Introduction to React.js: Part I</h1>;
A single JSX element can have many attributes, just like in HTML:

var panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />;
Instructions
1.
Declare a variable named p1.

Set p1 equal to a JSX <p></p> element. Write the word foo in between the <p></p> tags.
2.
On the next line, declare a variable named p2.

Set p2 equal to another JSX <p></p> element. Write the word bar in between the <p></p> tags.
3.
Give the first <p></p> an id attribute of "large".

Give the second <p></p> an id attribute of "small".
*/

var p1 = <p id="large">foo</p>;
var p2 = <p id="small">bar</p>;
