





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

var button = document.getElementById("submitButton");





function buildTree () {

	var tree = "";
	var height = document.getElementById("treeHeight").value;
	var char = document.getElementById("character").value;

	for (var i = 0; i < height; i++) {
		tree += " ".repeat(height - i - 1) + char.repeat((2 * i) + 1) + '\n';
	}

		console.log(tree);
}

button.addEventListener("click", buildTree);


function enter (e) {
	if (13 === e.keyCode)	{
		buildTree();
	}
}


