import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

if (localStorage.getItem('videoplayer-current-time')) {
  iframePlayer.setCurrentTime(
    JSON.parse(localStorage.getItem('videoplayer-current-time'))
  );
}

iframePlayer.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000)
);
