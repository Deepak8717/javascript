const executeLoop = (selection) => {
  const letterSet = ['C', 'D', 'H', 'K', 'N', 'O', 'R', 'S', 'V', 'Z'];
  let minLength = 0;
  let maxLength = letterSet.length;
  selection.forEach((letter) => {
    const number = getRandom(minLength, maxLength);
    const slot = letterSet[number];
    letterSet.splice(number, 1);
    letter.textContent = slot;
    --maxLength;
  });
};

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

// First Letter
const firstLetter = ['E', 'H', 'N'];
const one = document.querySelector('.one');
one.textContent = firstLetter[getRandom(0, 3)];

// Remaining Letters
const two = document.querySelectorAll('.two');
const three = document.querySelectorAll('.three');
const four = document.querySelectorAll('.four');
const five = document.querySelectorAll('.five');
const six = document.querySelectorAll('.six');
const seven = document.querySelectorAll('.seven');
const eightOne = document.querySelectorAll('.eight-1');
const eightTwo = document.querySelectorAll('.eight-2');
const eightThree = document.querySelectorAll('.eight-3');
const eightFour = document.querySelectorAll('.eight-4');
executeLoop(two);
executeLoop(three);
executeLoop(four);
executeLoop(five);
executeLoop(six);
executeLoop(seven);
executeLoop(eightOne);
executeLoop(eightTwo);
executeLoop(eightThree);
executeLoop(eightFour);

// Mode
const mode = document.getElementById('mode');
mode.addEventListener('click', () => {
  document.body.classList.toggle('mode');
})