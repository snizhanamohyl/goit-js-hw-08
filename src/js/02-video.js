import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);
const playerCurrentTime = localStorage.getItem('videoplayer-current-time');

if (playerCurrentTime) {
  iframePlayer.setCurrentTime(JSON.parse(playerCurrentTime));
}

iframePlayer.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000)
);
