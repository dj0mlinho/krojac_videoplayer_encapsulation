//PROCEDURAL STYLE

let video = document.querySelector('video');
let playImg = document.querySelector('#playImg');
let reloadImg = document.querySelector('#reloadImg');

playImg.addEventListener('click', startVideo)
reloadImg.addEventListener('click', loadVideo)

function startVideo() {
  if (this.getAttribute('src') == "img/play.png") {
    video.play()
    this.setAttribute('src', "img/pause.jpg")
  } else {
    video.pause()
    this.setAttribute('src', "img/play.png")
  }
}

function loadVideo() {
  video.load()
  playImg.setAttribute('src', "img/play.png")
}


//ENCAPSULATION STYLE

let videoPlayer = {
  playImg: document.querySelector("#playImg"),
  reloadImg: document.querySelector("#reloadImg"),
  video: document.querySelector("video"),
  init:
}