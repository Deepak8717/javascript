const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = e.target.elements['shuffler'].value;
  if (value.trim() === '') {
    alert('Please enter a word...');
    return;
  }
  const letters = value.split('');
  const shuffles = _.shuffle(letters);
  result.textContent = shuffles.join('');
});
