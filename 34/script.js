const button = document.getElementById('button');
const stats = document.getElementById('stats');

document.body.style.backgroundColor = 'black';

button.addEventListener('click', () => {
  const RGB = `rgb(${getRandomArbitrary(0, 255)}, ${getRandomArbitrary(
    0,
    255
  )}, ${getRandomArbitrary(0, 255)})`;
  const HEX = rgbToHex(RGB);
  document.body.style.backgroundColor = RGB;
  stats.innerHTML = `
      <div class='color'>#${HEX}</div>
      <div class='color'>${RGB}</div>
  `;
});
