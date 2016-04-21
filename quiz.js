





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



var heightBox = document.getElementById("treeHeight");
heightBox.addEventListener("keypress", enter);

var charBox = document.getElementById("character");
charBox.addEventListener("keypress", enter);




function enter (e) {
	var key = e.keyCode;
	if (13 === key)	{
		middle();
	}
}

var treeObject = {};

function middle () {
	treeObject.height = heightBox.value;
	treeObject.character = charBox.value;
	buildTree(treeObject)
	console.log("height:", treeObject.height);
	console.log("character", treeObject.character);
}

var button = document.getElementById("submitButton");
button.addEventListener("click", middle);

function buildTree (x) {

	var tree = "";


	if (x.height === "" || x.character === "") {
		alert("Oops! I'm missing information, Please fill out the WHOLE form.");
	}

	for (var i = 0; i < x.height; i++) {
		tree += " ".repeat(x.height - i - 1) + x.character.repeat((2 * i) + 1) + '\n';
	}

		console.log(tree);

		console.log("object:", treeObject);
}





