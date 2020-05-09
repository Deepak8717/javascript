'use strict';
import { config } from './config.js';

(async () => {
  const url = config.url;
  const key = config.apiKey;
  const options = {
    headers: {
      'user-key': key,
    },
  };
  const r = await fetch(url, options);
  const j = await r.json();
  return j;
})()
  .then((d) => {
    let html = ``;
    const container = document.querySelector('.container');
    d.collections.forEach((i) => {
      html += `
        <section>
        <h2>${i.collection.title}</h2>
        <p>${i.collection.description}</p>
        <img src=${i.collection.image_url} alt=${i.collection.title} />
        <p><a href=${i.collection.share_url} target="_blank">View</a></p>
        </section>
      `;
    });
    container.innerHTML = html;
  })
  .catch((e) => console.log(e));
