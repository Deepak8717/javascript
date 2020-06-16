const root = document.getElementById('root');
const book = document.getElementById('book');

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
    const listNodes = list.querySelectorAll('.quick-links > div > ol > li');
    const linkSettings = doc.querySelectorAll('a[href^="/en-US/"');
    const listSettings = list.querySelectorAll('li');
    const nodeSettings = doc.querySelectorAll('.toggle');
    const detailsSettings = doc.querySelectorAll('details');
    const allLinks = [];
    linkSettings.forEach((i) => {
      allLinks.push(i.getAttribute('href'));
      const currentSrc = i.getAttribute('href');
      i.setAttribute('href', `https://developer.mozilla.org${currentSrc}`);
      i.setAttribute('target', `_blank`);
    });
    listNodes.forEach((i) => {
      i.classList.add('li-parent');
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
    return allLinks;
  })
  .then(async (d) => {
    const promises = d.map((url) =>
      fetch(
        `https://cors-unlimited.herokuapp.com/https://developer.mozilla.org${url}`
      )
        .then((y) => y.text())
        .catch((e) => console.log(e))
    );
    return Promise.all(promises)
      .then((results) => {
        return results;
      })
      .catch((e) => console.log(e));
  })
  .then((d) => {
    return d.map((i) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(i, 'text/html');
      const content =
        doc.querySelector('body').textContent.length / (3 * 60 * 60);
      return content;
    });
  })
  .then((d) => {
    document.querySelectorAll('li').forEach((i, index) => {
      let newSpan = document.createElement('span');
      newSpan.setAttribute('class', 'reading');
      i.insertAdjacentElement('afterbegin', newSpan);
      newSpan.innerHTML = `Reading Time: ${d[index].toFixed(2)} hours`;
    });
  })
  .catch((e) => console.log(e));
