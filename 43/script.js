const root = document.getElementById('root');

const getRandom = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

const getData = async () => {
  const r = await fetch(
    `https://cors-unlimited.herokuapp.com/https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web`
  );
  const t = await r.text();
  return t;
};

getData()
  .then((d) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(d, 'text/html');
    const list = doc.querySelector('.quick-links > div > ol');
    const linkSettings = doc.querySelectorAll('a[href^="/en-US/"');
    const listSettings = doc.querySelectorAll('.quick-links li');
    const nodeSettings = doc.querySelectorAll('.toggle');
    const detailsSettings = doc.querySelectorAll('details');
    linkSettings.forEach((i) => {
      const currentSrc = i.getAttribute('href');
      i.setAttribute('href', `https://developer.mozilla.org${currentSrc}`);
      i.setAttribute('target', `_blank`);
    });
    listSettings.forEach((i, index) => {
      let newSpan = document.createElement('span');
      newSpan.setAttribute('class', 'code');
      i.appendChild(newSpan);
      newSpan.innerHTML = index;

      i.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
        0,
        255
      )}, ${getRandom(0, 255)})`;
      i.setAttribute('data-default-state', 'closed');
    });
    nodeSettings.forEach((i) => {
      i.querySelectorAll('ol').forEach((j) => {
        j.classList.add('children');
      });
      i.querySelectorAll('li').forEach((j) => {
        j.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
          0,
          255
        )}, ${getRandom(0, 255)})`;
      });
      i.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
        0,
        255
      )}, ${getRandom(0, 255)})`;
    });
    detailsSettings.forEach((i) => i.removeAttribute('open'));
    root.innerHTML = list.innerHTML;
  })
  .catch((e) => console.log(e));
