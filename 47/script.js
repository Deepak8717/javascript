let currentLanguage = '';

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

const changeLanguage = (selectedLanguage) => {
  switch (selectedLanguage) {
    case 'punjabi':
      currentLanguage = selectedLanguage;
      printLetters(['ਕ', 'ਹ', 'ਲ'], ['ਬ', 'ਮ', 'ਫ', 'ਧ', 'ਛ', 'ਗ', 'ਡ', 'ਥ', 'ਢ', 'ਐ']);
      break;
    case 'hindi':
      currentLanguage = selectedLanguage;
      printLetters(['घ', 'ख', 'ग'], ['ब', 'फ', 'प', 'ध', 'ज', 'ड', 'ट', 'थ', 'ण', 'भ']);
      break;
    case 'vietnamese':
      currentLanguage = selectedLanguage;
      printLetters(['Č', 'Š', 'Ê'], ['Ư', 'Ê', 'Ă', 'Ž', 'Š', 'Đ', 'Ơ', 'Â', 'Ć', 'Č']);
      break;
    default:
      currentLanguage = '';
      printLetters(
        ['E', 'H', 'N'],
        ['C', 'D', 'H', 'K', 'N', 'O', 'R', 'S', 'V', 'Z']
      );
      break;
  }
};

printAlphabets();

// Mode
const mode = document.getElementById('mode');
mode.addEventListener('click', () => {
  document.body.classList.toggle('mode');
});

// Language
const language = document.getElementById('language');
language.addEventListener('click', () => {
  document.body.classList.toggle('language');
});

// Language Form
const languageForm = document.querySelector('.language-form');
languageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const selectedLanguage = e.target.elements['language-list'].value;
  document.body.classList.remove('language');
  changeLanguage(selectedLanguage);
  reset.style.display = 'block';
});

// Reset
const reset = document.getElementById('reset');
reset.style.display = 'none';
reset.addEventListener('click', () => {
  changeLanguage(currentLanguage);
});

// Menu
const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
  document.body.classList.toggle('menu');
});

// English
const english = document.getElementById('english');
english.addEventListener('click', () => {
  reset.style.display = 'none';
  printAlphabets();
});

// Numbers
const numbers = document.getElementById('numbers');
numbers.addEventListener('click', () => {
  reset.style.display = 'none';
  const smallSet = [0, 1, 2, 3];
  const largeSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  printLetters(smallSet, largeSet);
});

// iOS
document.addEventListener('gesturestart',  (e) => e.preventDefault());