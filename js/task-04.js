// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValue = document.getElementById("value");
const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");

let count = 0;

decrementButton.addEventListener("click", () => {
	count--;
	counterValue.textContent = count;
});

incrementButton.addEventListener("click", () => {
	count++;
	counterValue.textContent = count;
});
