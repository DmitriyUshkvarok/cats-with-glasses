import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const playPlayerButton = document.querySelector('[data-open-three]');
const stopPlayerButton = document.querySelector('[data-modal-closed-three]');
const backdrop = document.querySelector('.backdrop');
const threeModal = document.querySelector('[data-modal-three]');
playPlayerButton.addEventListener('click', onPlayVideoFunction);
stopPlayerButton.addEventListener('click', onStopVideoFunction);

function onPlayVideoFunction() {
  iframe.setAttribute('src', 'https://player.vimeo.com/video/236203659');
}

function onStopVideoFunction() {
  iframe.removeAttribute('src', 'https://player.vimeo.com/video/236203659');
}

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(seconds));
  }, 1000)
);

player.setCurrentTime(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

console.dir(player);
