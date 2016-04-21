





// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.
// It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.

// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.

// A key that specifies which character to use to build the pine tree.

// The character to use should be from user input in a <input type="text"> field in the DOM.

// Once the user enters in a number, and a character, the user can either then just
// press the enter key (as long as the cursor is in one of the input fields),
// or click a button that is labeled "Grow your tree" and the tree should be shown in the console.
// This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key,
// or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree

// Example

// Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

//       *                spaces= 6, symbol= 1  (0) + 1
//      ***               spaces= 5, symbol= 3  (1) + 2
//     *****              spaces= 4, symbol= 5  (2) + 3
//    *******             spaces= 3, symbol= 7  (3) + 4
//   *********            spaces= 2, symbol= 9  (4) + 5
//  ***********           spaces= 1, symbol= 11 (5) + 6
// *************          spaces= 0, symbol= 13 (6) + 7



// var height = document.getElementById("treeHeight").value;
// console.log("height:", height);

// var char = document.getElementById("character").value;
// console.log("character:", char);

// var tree = "";
// console.log("tree:", tree);



var heightBox = document.getElementById("treeHeight");		// target input box in HTML, make into a variable
heightBox.addEventListener("keypress", enter);						// add an event listener that triggers
																													// the function "enter" upon a keypress

var charBox = document.getElementById("character");
charBox.addEventListener("keypress", enter);

var button = document.getElementById("submitButton");		// target the "grow" button and assign it to a variable
button.addEventListener("click", middle);								// create an event listener that, upon the click of the button variable, runs the function "middle"



function enter (e) {															// function that says "if the keyCode of the key thats pressed is 13,
	var key = e.keyCode;														// run the function 'middle'
	if (13 === key)	{
		middle();
	}
}

var treeObject = {};															// create an empty object called "treeObject"

function middle () {
	treeObject.height = heightBox.value;						// create a key in treeObject called "height" and add to it the text in the height input box
	treeObject.character = charBox.value;						// create a key in treeObject called "character" and add to it the text in the character input box
	buildTree(treeObject)														// run the function "buildTree" with the treeObject object
	console.log("height:", treeObject.height);
	console.log("character", treeObject.character);
}


function buildTree (x) {

	var tree = "";															// create a variable "tree" that contains an empty string


	if (x.height === "" || x.character === "") {																		// if the value of the key "height" is empty OR
		alert("Oops! I'm missing information, Please fill out the WHOLE form.");			// if the value of the key "character" is empty
	}																																								// when this function is called, display this alert

	for (var i = 0; i < x.height; i++) {																							// use "i" to increment/decrement the key values
		tree += " ".repeat(x.height - i - 1) + x.character.repeat((2 * i) + 1) + '\n';	// based on the index of the for loop
	}

		console.log(tree);

		console.log("object:", treeObject);
}





