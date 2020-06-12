// YOUTUBE STUFF : https://jsfiddle.net/47mhf8s1/4/

const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('iframe', {
    events: {
      onReady: onPlayerReady,
    },
  });
}

const onPlayerReady = () => {
  document.getElementById('button').addEventListener('click', (e) => {
    player.pauseVideo();
    e.currentTarget.classList.toggle('pause');
    if (e.currentTarget.classList.contains('pause')) {
    } else {
      player.playVideo();
    }
  });
};

// HIDE+SHOW LOAD/CONTENT

const root = document.getElementById('root');
const loading = document.getElementById('loading');

root.style.display = 'none';
loading.style.display = 'flex';

window.addEventListener('load', () => {
  loading.style.display = 'none';
  root.style.display = 'flex';
});
