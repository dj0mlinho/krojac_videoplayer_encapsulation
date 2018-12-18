//PROCEDURAL STYLE
/*
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
*/

//ENCAPSULATION STYLE (da se vidi u konzoli)
/*
let videoPlayer = {
  playImg: document.querySelector("#playImg"),
  reloadImg: document.querySelector("#reloadImg"),
  video: document.querySelector("video"),
  init: function () {
    this.playImg.addEventListener('click', this.startVideo)
    this.reloadImg.addEventListener('click', this.loadVideo)
  },
  startVideo: function () {
    if (this.getAttribute('src') == 'img/play.png') {
      videoPlayer.video.play()
      this.setAttribute('src', "img/pause.jpg")
    } else {
      videoPlayer.video.pause()
      videoPlayer.playImg.setAttribute('src', "img/play.png")
    }
  },
  loadVideo: function () {
    videoPlayer.video.load()
    videoPlayer.playImg.setAttribute('src', "img/play.png")
  }
}

videoPlayer.init()
*/

//ENCAPSULATION STYLE in function (da se ne vidi u konzoli)
/*
(function () {
  let videoPlayer = {
    playImg: document.querySelector("#playImg"),
    reloadImg: document.querySelector("#reloadImg"),
    video: document.querySelector("video"),
    init: function () {
      this.playImg.addEventListener('click', this.startVideo)
      this.reloadImg.addEventListener('click', this.loadVideo)
    },
    startVideo: function () {
      if (this.getAttribute('src') == 'img/play.png') {
        videoPlayer.video.play()
        this.setAttribute('src', "img/pause.jpg")
      } else {
        videoPlayer.video.pause()
        videoPlayer.playImg.setAttribute('src', "img/play.png")
      }
    },
    loadVideo: function () {
      videoPlayer.video.load()
      videoPlayer.playImg.setAttribute('src', "img/play.png")
    }
  }

  videoPlayer.init()
})()
*/

//ENCAPSULATION STYLE with constructor function (self)
/*
function VideoPlayer() {
  let self = this;
  this.playImg = document.querySelector("#playImg");
  this.reloadImg = document.querySelector("#reloadImg");
  this.video = document.querySelector("video");

  this.init = function() {
    this.playImg.addEventListener("click", this.startVideo);
    this.reloadImg.addEventListener("click", this.loadVideo);
  };
  this.startVideo = function() {
    if (this.getAttribute("src") == "img/play.png") {
      self.video.play();
      this.setAttribute("src", "img/pause.jpg");
    } else {
      self.video.pause();
      self.playImg.setAttribute("src", "img/play.png");
    }
  };
  this.loadVideo = function() {
    self.video.load();
    self.playImg.setAttribute("src", "img/play.png");
  };
}
let videoPlayer = new VideoPlayer();
videoPlayer.init();
*/

//ENCAPSULATION STYLE with constructor function (call, apply, bind) WITH OOP

function VideoPlayer(id) {
  this.videoHolder = document.querySelector("#" + id);
  this.playImg = this.videoHolder.querySelector(".playImg");
  this.reloadImg = this.videoHolder.querySelector(".reloadImg");
  this.video = this.videoHolder.querySelector("video");

  this.init = function() {
    this.playImg.addEventListener("click", this.startVideo.bind(this));
    this.reloadImg.addEventListener("click", this.loadVideo.bind(this));
  };
  this.startVideo = function() {
    if (this.playImg.getAttribute("src") == "img/play.png") {
      this.video.play();
      this.playImg.setAttribute("src", "img/pause.jpg");
    } else {
      this.video.pause();
      this.playImg.setAttribute("src", "img/play.png");
    }
  };
  this.loadVideo = function() {
    this.video.load();
    this.playImg.setAttribute("src", "img/play.png");
  };
}
let videoPlayer1 = new VideoPlayer("video1").init();
let videoPlayer2 = new VideoPlayer("video2").init();
