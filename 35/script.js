const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');

let num = 0;
counter.textContent = num;

plus.addEventListener('click', () => {
  num++;
  counter.textContent = num;
  counter.style.color = 'green';
});

minus.addEventListener('click', () => {
  num <= 0 ? (num = 0) : num--;
  counter.textContent = num;
  num === 0 ? (counter.style.color = 'white') : (counter.style.color = 'red');
});

reset.addEventListener('click', () => {
  num = 0;
  counter.textContent = num;
  counter.style.color = 'white';
});
