const decrementCount = document.querySelector('[data-action= "decrement"]');
const incrementCount = document.querySelector('[data-action= "increment"]');
const valueCountable = document.getElementById("value");

let counterValue = 0;

decrementCount.addEventListener('click', e => {
    counterValue -= 1;
    valueCountable.textContent = counterValue;
  });

  incrementCount.addEventListener('click', e => {
    counterValue += 1;
    valueCountable.textContent = counterValue;
  });