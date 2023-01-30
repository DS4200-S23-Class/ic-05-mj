// set global variable
let num = 0;

// button function 
function buttonClicked(){

	let newText = "Number of times button clicked: ";

	// select element to be modified
	let buttonDiv = document.getElementById("button-div");

	// increment num everytime this function is ran 
	num += 1;
	buttonDiv.innerHTML = newText + num;
}