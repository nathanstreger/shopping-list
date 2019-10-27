const button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let deleteButtons = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	//creates new list item delete button
	let btn = document.createElement("button");
	btn.innerHTML = "delete";
	btn.addEventListener("click", deleteItem);

	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn);

	ul.appendChild(li);
	input.value = "";
}

//handles the input by the user.
function addListAfterClick() {
	if (inputLength() > 0){
	createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
	createListElement();
	}
}

function addClassName(element, name) {
	element.classList.add(name);
}

//click on a list item and it strikethoughs the text
function getEventTarget(e) {
	e = e || window.event; //compatible with different browser engines.
	return e.target || e.srcElement;
}

function toggleDone(event) {
	let target = getEventTarget(event);
	target.classList.toggle("done");
}

//deletes an item after clicking the delete button next to it.
function deleteItem(event) {
	event.target.removeEventListener("click", deleteItem);
	event.target.parentNode.remove();
}

//adds event listeners to all the buttons and clickable items.
for (let i = 0; i < ul.children.length; i++) {
	deleteButtons[i].addEventListener("click", deleteItem);
}

ul.addEventListener("click", toggleDone);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);