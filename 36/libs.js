// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);
