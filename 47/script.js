const executeLoop = (selection, largeSet) => {
  const letterSet = [...largeSet];
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

const printLetters = (smallSet, largeSet) => {
  // First Letter
  const firstLetter = smallSet;
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
  executeLoop(two, largeSet);
  executeLoop(three, largeSet);
  executeLoop(four, largeSet);
  executeLoop(five, largeSet);
  executeLoop(six, largeSet);
  executeLoop(seven, largeSet);
  executeLoop(eightOne, largeSet);
  executeLoop(eightTwo, largeSet);
  executeLoop(eightThree, largeSet);
  executeLoop(eightFour, largeSet);
};

const printAlphabets = () => {
  const smallSet = ['E', 'H', 'N'];
  const largeSet = ['C', 'D', 'H', 'K', 'N', 'O', 'R', 'S', 'V', 'Z'];
  printLetters(smallSet, largeSet);
};

printAlphabets();

// Mode
const mode = document.getElementById('mode');
mode.addEventListener('click', () => {
  document.body.classList.toggle('mode');
});

// Reset
const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
  printAlphabets();
});

// Numbers
const numbers = document.getElementById('numbers');
numbers.addEventListener('click', () => {
  const smallSet = [0, 1, 2, 3];
  const largeSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  printLetters(smallSet, largeSet);
});
