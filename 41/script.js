const root = document.getElementById('root');

const getData = async () => {
  const r = await fetch(
    `https://cors-unlimited.herokuapp.com/https://jsonplaceholder.typicode.com/posts`
  );
  const j = await r.json();
  return j;
};

const makeTabs = (arr) => {
  let contents = ``;
  let html = `<div class="tab"><div class="tab-links">`;
  const users = [...new Set(arr.map((item) => item.userId))];
  users.map((i) => {
    html += `<a class="tab-link" key=${i}>User ${i}</a>`;
  });
  html += `</div><div class="tab-contents">`;
  users.map((i) => {
    let nodes = ``;
    arr
      .filter((j) => j.userId === i)
      .map((j) => {
        nodes += `<div class="tab-inner"><div>Title: ${j.title}</div><div>Body: ${j.body}</div></div>`;
      });
    contents += `<div class="tab-content" key=${i}>${nodes}</div>`;
  });
  html += contents;
  root.innerHTML = `${html}</div></div>`;
};

const defaults = () => {
  document.querySelector('.tab-link').classList.add('active');
  document.querySelector('.tab-content').classList.add('d-block');
};

const handleEvents = () => {
  const tabContents = document.querySelectorAll('.tab-content');
  const tabLinks = document.querySelectorAll('.tab-link');
  tabContents.forEach((i) => i.classList.add('d-none'));
  tabLinks.forEach((i) => {
    i.addEventListener('click', (e) => {
      const currentKey = e.currentTarget.getAttribute('key');
      const allContents = e.currentTarget.parentElement.parentElement.querySelectorAll(
        '.tab-content'
      );
      const allLinks = e.currentTarget.parentElement.parentElement.querySelectorAll(
        '.tab-link'
      );
      allLinks.forEach((j) => {
        if (j.getAttribute('key') === currentKey) {
          j.classList.add('active');
        } else {
          j.classList.remove('active');
        }
      });
      allContents.forEach((j) => {
        if (j.getAttribute('key') === currentKey) {
          j.classList.remove('d-none');
          j.classList.add('d-block');
        } else {
          j.classList.remove('d-block');
          j.classList.add('d-none');
        }
      });
    });
  });
};

const init = (arr) => {
  makeTabs(arr);
  defaults();
  handleEvents();
};

getData()
  .then((d) => init(d))
  .catch((e) => console.log(e));
