const generate = document.getElementById('generate');
const captcha = document.getElementById('captcha');
const image = document.getElementById('image');

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getCharacter = () => {
  const arr = [];
  arr.push(getRandomInt(97, 122));
  arr.push(getRandomInt(65, 90));
  arr.push(getRandomInt(48, 57));
  const value = arr[getRandomInt(0, arr.length)];
  return String.fromCharCode(value);
};

const makeImage = () => {
  const newWord = getWord();
  const context = captcha.getContext('2d');
  context.canvas.width = 300;
  context.canvas.height = 150;
  context.font = '48px Courier New';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = '#eee';
  context.fillRect(0, 0, 300, 150);
  context.fillStyle = '#222';
  context.fillText(newWord, 150, 75);
  image.src = context.canvas.toDataURL();
  return false;
};

const getWord = () => {
  let newWord = ``;
  let count = 0;
  while (count < 6) {
    newWord += getCharacter();
    count++;
  }
  return newWord;
};

generate.addEventListener('click', () => makeImage());
