const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let audio;
let hasAccess = false;
const range = [5000, 10000, 15000, 20000, 25000, 30000];
const title = document.getElementById("title");
const access = document.getElementById("access");
let randomRange = getRandomNumber(0, range.length - 1);
let currentRange = range[randomRange];

title.textContent = `Please press allow to run the application...`;

access.addEventListener("click", () => {
  audio = new Audio(
    "http://soundbible.com/mp3/Hello-SoundBible.com-218208532.mp3"
  );
  hasAccess = true;
  playSound(randomRange, currentRange);
});

const playSound = (randomRange, currentRange) => {
  if(!hasAccess) {
    title.textContent = `Please press allow to run the application...`;
  } else {
    access.style.display = `none`;
    let currentSecond = Number(currentRange) / 1000;
    const handleSeconds = () => {
      title.textContent = `I'll be with you in ${currentSecond} seconds.`;
      if (currentSecond === 0) {
        audio.play();
        this.clearInterval(updateSecond);
        randomRange = getRandomNumber(0, range.length - 1);
        currentRange = range[randomRange];
        playSound(randomRange, currentRange);
      }
      currentSecond--;
    };
    let updateSecond = setInterval(handleSeconds, 1000);
  }
};

