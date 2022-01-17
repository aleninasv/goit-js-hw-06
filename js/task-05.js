const inputValue = document.getElementById("name-input");
const outputValue = document.getElementById("name-output");
    inputValue.addEventListener("input", () => {
        outputValue.textContent = inputValue.value;
        if (!inputValue.value.trim()) {
            outputValue.textContent = "Anonymous";
        }
})




// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>