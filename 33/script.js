// const URL = `https://cors-anywhere.herokuapp.com/https://www.betakit.com/feed/`;
const URL = `./data.rss`;
const getData = () => {
  (async () => {
    const r = await fetch(URL);
    const j = await r.text();
    return j;
  })()
    .then((str) => new window.DOMParser().parseFromString(str, 'text/xml'))
    .then((d) => {
      let html = `<h1>BetaKit RSS Compiler</h1>`;
      const items = d.querySelectorAll('item');
      items.forEach((item) => {
        if (item.nodeName === 'item') {
          const title = item.children[0].textContent;
          const link = item.children[1].textContent;
          const pub = item.children[4].textContent;
          html += `<div><a href=${link} target="_blank"><h2>${title}</h2></a><p><small>${pub}</small></p></div>`;
        }
      });
      document.getElementById('root').innerHTML = html;
    })
    .catch((e) => {
      console.log(e);
    });
};
getData();
