
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
}


function buildTree (x) {

	if (x.height === "" || x.character === "") {																		// if the value of the key "height" is empty OR
		alert("Oops! I'm missing information, Please fill out the WHOLE form.");			// if the value of the key "character" is empty
	}	else {																																							// when this function is called, display this alert

		var tree = "";															// create a variable "tree" that contains an empty string

		for (var i = 0; i < x.height; i++) {																							// use "i" to increment/decrement the key values
			tree += " ".repeat(x.height - i - 1) + x.character.repeat((2 * i) + 1) + '\n';	// based on the index of the for loop
		}

		console.log(tree);
	}
}
