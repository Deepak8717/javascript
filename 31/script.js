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
        let total = [...oldData, ...revisedData];
        // total = total.sort((a, b) => (a.createdDate > b.createdDate ? -1 : 1));
        this.memes = total;
      }
    } catch (error) {
      console.log(error);
    }
  }
  makeMemes() {
    // const originalContent = root.innerHTML;
    let html = ``;
    let j = 2;
    this.memes.map((meme, index) => {
      if (j > 20) {
        j = 2
      };
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
      html += `<div class="${randomClass} animated fadeIn animate-${j}s" key=${meme._id}><img class="meme__img animated fadeIn delay-2s" src="${meme.url}" alt="Meme number ${index}" /></div>`;
      j += 2;
    });
    root.innerHTML = html;
    // window.scrollTo(0, 0);
    // root.innerHTML = originalContent + html;
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
      this.isLoadingMessage();
      this.getMemes().then(() => {
        this.makeMemes();
        this.isLoadingMessage();
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
