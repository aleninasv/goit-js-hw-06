function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const [input, create, destroy] = document.getElementById("controls").children;
const container = document.getElementById("boxes");
let size = 30;
create.addEventListener("click", () => {
  createBoxes(input.value);
 })
destroy.addEventListener("click", () => {
  container.innerHTML = "";
  size = 30;
})
function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    const divBox = document.createElement("div");
    divBox.style.width = size + "px";
    divBox.style.height = size + "px";
    divBox.style.backgroundColor = getRandomHexColor();
    size += 10;
    elements.push(divBox);
  }
  container.append(...elements);
}

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.