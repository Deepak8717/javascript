let score = 0;
const chances = [1, 2, 3, 4, 6, 0, 'W'];
const hit = document.getElementById('hit');
const scoreBoard = document.getElementById('scoreBoard');
const commentary = document.getElementById('commentary');

const range = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const createList = (parent, text) => {
  let list = document.createElement('li');
  list.classList.add('list-group-item');
  list.textContent = text;
  parent.append(list);
};

const resetMatch = () => {
  scoreBoard.innerHTML = `<div class="jumbotron text-dark m-0">Batting will start soon...</div>`;
  commentary.innerHTML = `<li class="list-group-item">It is a nice weather, expected that batsman might beat Brian Lara's record of 400 runs.</li>`;
};

resetMatch();

hit.addEventListener('click', () => {
  let shotType = '';
  const stroke = chances[range(0, 7)];
  if (stroke === 'W') {
    if (score === 0) {
      alert(`Out! You gone for a duck.`);
    } else {
      alert(`Out! You scored ${score} runs.`);
    }
    score = 0;
    resetMatch();
  } else {
    switch (stroke) {
      case 0:
        shotType = 'Nice bowling, no run!';
        createList(commentary, shotType);
        break;
      case 1:
        shotType = 'Well played, Single run!';
        createList(commentary, shotType);
        break;
      case 2:
        shotType = 'Nice shot, Two runs!';
        createList(commentary, shotType);
        break;
      case 3:
        shotType = 'What a shot, Three runs!';
        createList(commentary, shotType);
        break;
      case 4:
        shotType = 'That is a boundary, Four runs!';
        createList(commentary, shotType);
        break;
      case 6:
        shotType = 'Out of the park, It is a sixer!';
        createList(commentary, shotType);
        break;
      default:
        shotType = '';
        break;
    }
    score += stroke;
    scoreBoard.innerHTML = `<div class="jumbotron text-dark m-0">${score}</div>`;;
  }
});
