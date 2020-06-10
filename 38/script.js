const button = document.getElementById('button');
const banner = document.getElementById('banner');

button.addEventListener('click', () => {
  banner.classList.toggle('show');
});
