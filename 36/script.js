const next = document.getElementById('next');
const previous = document.getElementById('previous');
const random = document.getElementById('random');
const slide = document.getElementById('slide');

const getUsers = async () => {
  const r = await fetch(
    `https://cors-unlimited.herokuapp.com/https://jsonplaceholder.typicode.com/users`
  );
  const j = await r.json();
  return j;
};
const makeSlide = (arr, count) => {
  const user = arr[count];
  const { name, phone, id, username, website, email } = user;
  slide.innerHTML = `
    <div>${id}</div>
    <div>${name}</div>
    <div>${phone}</div>
    <div>${username}</div>
    <div>${website}</div>
    <div>${email}</div>
  `;
};
const init = (arr) => {
  let currentCount = 0;
  makeSlide(arr, currentCount);
  next.addEventListener('click', () => {
    currentCount = currentCount === arr.length - 1 ? 0 : ++currentCount;
    makeSlide(arr, currentCount);
  });
  previous.addEventListener('click', () => {
    currentCount = currentCount <= 0 ? arr.length - 1 : --currentCount;
    makeSlide(arr, currentCount);
  });
  random.addEventListener('click', () => {
    makeSlide(arr, getRandomNumber(0, arr.length - 1));
  });
};

getUsers()
  .then((d) => init(d))
  .catch((e) => console.log(e));
