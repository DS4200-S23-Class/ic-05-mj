// button function 

function addOne(num){
	return num + 1;
}

function buttonClicked(){
	let newText = "Number of times button clicked:";
	let num = 0;

	// select element to be modified
	let buttonDiv = document.getElementById("button-div");
	buttonDiv.innerHTML = newText + addOne(num);
}