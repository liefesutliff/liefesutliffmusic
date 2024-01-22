window.onload = function() {
  imageSlideshow();
};

function toggleAudioPlayer() {
  var audioPlayer = document.querySelector('.firstSongAudioPlayer');
  audioPlayer.classList.toggle('show');
}

function imageSlideshow() {
  var image = document.querySelector('.profilePic');

  if (image.src.includes("images/profilePic1.jpg")) {
    image.src = "images/profilePic2.jpg";
  } else if (image.src.includes("images/profilePic2.jpg")) {
    image.src = "images/profilePic3.jpg";
  } else {
    image.src = "images/profilePic1.jpg";
  }

  setTimeout(function() {
    imageSlideshow();
  }, 7000);
}