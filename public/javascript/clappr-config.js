import Clappr from '/clappr-core.esm.js'
const playerElement = document.getElementById("player-wrapper")

window.Clappr = Clappr

const player = new Clappr.Player({
  source: 'http://clappr.io/highline.mp4',
  mute: true,
  autoPlay: false,
  height: 360,
  width: 640,
  playback: {
    controls: true,
  },
})

window.player = player

player.attachTo(playerElement)
