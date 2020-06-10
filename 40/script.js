const root = document.getElementById('root');
const sign = document.getElementById('sign');

const getData = async () => {
  const r = await fetch(
    `https://cors-unlimited.herokuapp.com/https://jsonplaceholder.typicode.com/users/1/posts`
  );
  const j = await r.json();
  return j;
};

const init = (data) => {
  let html = `<div class="accordion">`;
  data.map((i) => {
    html += `
      <div class="accordion-row" key=${i.id}>
        <div class="accordion-item">
          <div class="accordion-title">
            <span>${i.title}</span>
            <span id="sign">+</span>
          </div>
          <div class="accordion-body">${i.body}</div>
        </div>
      </div>`;
  });
  root.innerHTML = `${html}</div>`;
  const items = document.querySelectorAll('.accordion-row');
  items.forEach((item) => {
    const title = item.querySelector('.accordion-title');
    title.addEventListener('click', (e) => {
      const accordion =
        e.currentTarget.parentElement.parentElement.parentElement;
      const currentAccordionItem = e.currentTarget.parentElement.parentElement;
      const currentKey = e.currentTarget.parentElement.parentElement.getAttribute(
        'key'
      );
      accordion.querySelectorAll('.accordion-row').forEach((i) => {
        if (i.getAttribute('key') !== currentKey) {
          i.querySelector('.accordion-body').classList.remove('show');
          i.querySelector('#sign').textContent = '+';
        }
      });
      currentAccordionItem
        .querySelector('.accordion-body')
        .classList.toggle('show');
      currentAccordionItem.querySelector('#sign').textContent = '-';
    });
  });
};

getData()
  .then((d) => init(d))
  .catch((e) => console.log(e));
