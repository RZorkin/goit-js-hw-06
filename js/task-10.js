function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
	const fragment = document.createDocumentFragment();
	let size = 30;

	for (let i = 0; i < amount; i += 1) {
		const box = document.createElement("div");
		box.style.width = `${size}px`;
		box.style.height = `${size}px`;
		box.style.backgroundColor = getRandomHexColor();
		fragment.appendChild(box);
		size += 10;
	}
	boxes.appendChild(fragment);
}

function destroyBoxes() {
	boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
	createBoxes(input.value);
});

destroyBtn.addEventListener("click", destroyBoxes);
