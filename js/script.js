// Adding sound variables
let introMusic = new Audio("assets/sounds/harunoyokan.mp3");
introMusic.loop = true;
introMusic.volume = 0.3;
let forestMusic = new Audio("assets/sounds/harpohikunezumi.mp3");
forestMusic.loop = true;
forestMusic.volume = 0.3;
let waterMusic = new Audio("assets/sounds/sepiairononagisa.mp3");
waterMusic.loop = true;
waterMusic.volume = 0.3;
let typingMusic = new Audio("assets/sounds/suisoutoyakei.mp3");
typingMusic.loop = true;
typingMusic.volume = 0.3;

// The music buttons
let playMusicButton = document.getElementById("playMusicButton");
let stopMusicButton = document.getElementById("stopMusicButton");

// Adding variable for the body
// An array is used in order to select the first class of the body
let pageBody = document.querySelector("body").classList[0];

// Music functions
// Play the appropriate music when the music button is clicked
function playMusic() {
  if (pageBody === "introBody") {
    introMusic.play();
    // The music will always start at the beginning
    introMusic.currentTime = 0;
  } else if (pageBody === "forestBody") {
    forestMusic.play();
    // The music will always start at the beginning
    forestMusic.currentTime = 0;
  } else if (pageBody === "waterBody") {
    waterMusic.play();
    // The music will always start at the beginning
    waterMusic.currentTime = 0;
  } else if (pageBody === "typingBody") {
    typingMusic.play();
    // The music will always start at the beginning
    typingMusic.currentTime = 0;
  }
}

// Stops the music when the button is clicked
function stopMusic() {
  introMusic.pause();
  forestMusic.pause();
  waterMusic.pause();
  typingMusic.pause();
}

// Calling the functions
playMusicButton.addEventListener("click", playMusic);
stopMusicButton.addEventListener("click", stopMusic);
