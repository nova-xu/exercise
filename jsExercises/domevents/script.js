var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");
var deleteButton = document.querySelectorAll(".delete");

function inputLength() {
	return input.value.length;
}

function removeItem() {
	this.parentElement.remove();
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

function toggleItem() {
	this.classList.toggle("done");	
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	btn = document.createElement("BUTTON");
	btn.appendChild(document.createTextNode("Delete"));
	btn.className = "delete";
	btn.addEventListener("click", removeItem);
	li.addEventListener("click", toggleItem);
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

items.forEach(e => e.addEventListener("click", toggleItem));

deleteButton.forEach(e => e.addEventListener("click", removeItem));