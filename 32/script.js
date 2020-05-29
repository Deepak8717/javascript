let distance = 0;
let position = 0;
setInterval(() => {
  distance = distance + 1;
  document.querySelector('span').textContent = `${distance} kms. travelled`;
  document.documentElement.style.setProperty('--right', `${position - 10}rem`);
}, 400);
