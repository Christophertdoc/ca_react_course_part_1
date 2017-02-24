/*
When writing JSX, it's common to use variables to set attributes.

Here's an example of how that might work:

// Use a variable to set the `height` and `width` attributes:

var sideLength = "200px";

var panda = (
  <img
    src="images/panda.jpg"
    alt="panda"
    height={sideLength}
    width={sideLength} />
);
Notice how in this example, the <img />'s attributes each get their own line. This can make your code more readable if you have a lot of attributes on one element.

Object properties are also often used to set attributes:

var pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
};

var panda = (
  <img
    src={pics.panda}
    alt="Lazy Panda" />
);

var owl = (
  <img
    src={pics.owl}
    alt="Unimpressed Owl" />
);

var owlCat = (
  <img
    src={pics.owlCat}
    alt="Ghastly Abomination" />
);
Instructions
1.
On line 7, declare a new variable named gooseImg. Set its value equal to a JSX <img /> element.

Give the <img /> an attribute with a name of src. Set the attribute's value equal to the variable goose.
2.
Use ReactDOM.render to render gooseImg.

ReactDOM.render's first argument should be gooseImg.

ReactDOM.render's second argument should be document.getElementById('app').
*/

var React = require('react');
var ReactDOM = require('react-dom');

var goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
var gooseImg = (
	<img src={goose} />
);

ReactDOM.render (gooseImg,document.getElementById('app')
);
