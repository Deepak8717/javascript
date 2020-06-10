const button = document.getElementById('button');
const buttonText = document.getElementById('buttonText');
const fridge = document.getElementById('fridge');
const pets = document.querySelectorAll('.pets');

const openedFridge = `https://previews.123rf.com/images/apopium/apopium1807/apopium180700003/104361995-3d-rendering-big-fridge-on-a-white-background-with-an-open-door.jpg`;
const closedFridge = `https://media.npr.org/assets/img/2012/05/04/samsung-smart-fridge_custom-5f6d2d159e369d4a6dd9f052bc3c6ddbe2fd4b0c-s800-c85.jpg`;

button.addEventListener('click', () => {
  pets.forEach((pet) => {
    pet.classList.toggle('yes');
    pet.classList.contains('yes')
      ? ((buttonText.textContent = 'Close'),
        fridge.setAttribute('src', openedFridge))
      : ((buttonText.textContent = 'Open'),
        fridge.setAttribute('src', closedFridge));
  });
});
