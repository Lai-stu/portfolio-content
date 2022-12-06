var vid = document.getElementById("videoplayer");
vid.loop = false;
vid.autoplay = false;
vid.load();

var playButton = document.getElementById("play");
function playVid() {
  vid.play();
}
playButton.addEventListener("click", playVid);

var pauseButton = document.getElementById("pause");
function pauseVid() {
  vid.pause();
}
pauseButton.addEventListener("click", pauseVid);

var slowButton = document.getElementById("slower");
function slowVid() {
  if (vid.playbackRate > 0.5) {
    vid.playbackRate = vid.playbackRate / 2;
  } else {
    alert("Video is at slowest speed!");
  }
}
slowButton.addEventListener("click", slowVid);


var fastButton = document.getElementById("faster");
function fastVid() {
  if (vid.playbackRate < 2) {
    vid.playbackRate = vid.playbackRate * 2;
  } else {
    alert("Video is at fastest speed!");
  }
}
fastButton.addEventListener("click", fastVid);

var muteButton = document.getElementById("mute");
function muteVid() {
  if (vid.muted) {
    muteButton.innerHTML = "Mute";
    vid.muted = false;
    volSlider.value = vid.volume * 100;
    volume.innerHTML = volSlider.value + "%";
  } else {
    muteButton.innerHTML = "unmute";
    vid.muted = true;
    volSlider.value = 0;
    volume.innerHTML = "0%";
  }
}
muteButton.addEventListener("click", muteVid);