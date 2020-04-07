const root = document.getElementById(`root`);
const loading = document.querySelector(`.loading`);
const loadButton = document.getElementById(`load`);

class Memes {
  constructor(count) {
    this.count = count;
    this.memes = null;
    this.isBottom = false;
    this.isLoading = false;
  }
  async getMemes() {
    const URL = `https://cors-anywhere.herokuapp.com/https://namo-memes.herokuapp.com/memes/latest/${this.count}`;
    try {
      const response = await fetch(URL);
      const json = await response.json();
      if (this.count === 10) {
        this.memes = json;
      } else {
        const data = json;
        const oldData = this.memes;
        const revisedData = _.xorBy(data, oldData, "url");
        this.memes = revisedData;
      }
    } catch (error) {
      console.log(error);
    }
  }
  makeMemes() {
    const originalContent = root.innerHTML;
    let html = ``;
    this.memes.map((meme, index) => {
      let range = Math.floor(Math.random() * 100);
      let randomClass =
        range < 1
          ? "meme meme--fixed"
          : range < 20
          ? "meme meme--tall"
          : range < 40
          ? "meme meme--big"
          : range < 60
          ? "meme meme--wide"
          : "meme";
      html += `<div class="${randomClass}" key=${meme._id}><img class="meme__img" src="${meme.url}" alt="Meme number ${index}" /></div>`;
    });
    root.innerHTML = originalContent + html;
    this.testImages();
  }
  testImages() {
    document
      .querySelectorAll("img")
      .forEach((image) =>
        image.addEventListener("error", (e) =>
          e.target.parentElement.classList.add("error")
        )
      );
  }
  isLoadingMessage() {
    this.isLoading = !this.isLoading;
    if (this.isLoading) {
      loading.classList.add("active");
    } else {
      loading.classList.remove("active");
    }
  }
  makeTenMemes() {
    this.isLoadingMessage();
    this.getMemes().then(() => {
      this.makeMemes();
      this.isLoadingMessage();
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

const next = () => {
  init.isLoadingMessage();
  init.isBottom = true;
  init.count += 10;
  init.automate();
  init.isBottom = false;
  init.isLoadingMessage();
};

window.onscroll = () => {
  const meta = root.getBoundingClientRect();
  const condition =
    Math.ceil(window.innerHeight + window.scrollY) >= Math.floor(meta.height);
  if (condition) {
    next();
  }
};

loadButton.addEventListener("click", next);
