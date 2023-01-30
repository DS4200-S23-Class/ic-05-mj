// button function 
let num = 0
function buttonClicked(){

	let newText = "Number of times button clicked: ";

	// select element to be modified
	let buttonDiv = document.getElementById("button-div");

	// run addOne function
	num += 1
	buttonDiv.innerHTML = newText + num;
}