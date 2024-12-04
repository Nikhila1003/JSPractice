var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	// var deleteButton = document.createElement("button");
    // deleteButton.setAttribute("class", "btn")
    // deleteButton.appendChild(document.createTextNode(" Remove "));
    // ul>li.appendChild(deleteButton).addEventListener("click", removeItem);

	ul.appendChild(li).addEventListener("click", toggleList);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// function removeItem() {
//     this.parentNode.remove();
// }

function toggleList () {
    this.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
