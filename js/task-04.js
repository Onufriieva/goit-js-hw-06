// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};


const actions = document.querySelectorAll("button");
const value = document.querySelector('#value')

const decrement = actions[0];
const increment = actions[1];

decrement.addEventListener(`click`, (event) => {
   counterValue.decrement();
   value.textContent = counterValue.value;
});


increment.addEventListener(`click`, (event) => {
    counterValue.increment();
    value.textContent = counterValue.value;
});
