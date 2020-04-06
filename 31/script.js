const root = document.getElementById(`root`);

class Memes {
  constructor(count) {
    this.count = count;
    this.memes = null;
    this.isBottom = false;
  }
  async getMemes() {
    const URL = `https://cors-anywhere.herokuapp.com/https://namo-memes.herokuapp.com/memes/page/${
      this.count - 10
    }/${this.count}`;
    try {
      const response = await fetch(URL);
      const json = await response.json();
      this.memes = json;
    } catch (error) {
      console.log(error);
    }
  }
  makeMemes() {
    const memeBox = document.createElement("div");
    memeBox.classList.add("meme-box");
    let html = ``;
    this.memes.map((meme, index) => {
      html += `<div class="meme"><img class="meme__img" src="${meme.url}" alt="Meme number ${index}" /></div>`;
    });
    memeBox.innerHTML = html;
    root.appendChild(memeBox);
    this.testImages();
  }
  testImages() {
    document.querySelectorAll("img").forEach((image) => image.addEventListener("error", (e) => e.target.parentElement.classList.add("error")));
  }
  makeTenMemes() {
    this.getMemes()
      .then(() => {
        this.makeMemes();
      });
  }
  automate() {
    if (this.isBottom) {
      this.getMemes().then(() => {
        this.makeMemes();
      });
    }
  }
}

const init = new Memes(10);
init.makeTenMemes();

window.onscroll = () => {
  const meta = root.getBoundingClientRect();
  const condition =
    Math.ceil(window.innerHeight + window.scrollY) >= Math.floor(meta.height);
  if (condition) {
    init.isBottom = true;
    init.count += 10;
    init.automate();
    init.isBottom = false;
  }
};
