window.onload = function() {
  preloadImages(); // Preload images before starting the slideshow
  setTimeout(imageSlideshow, 5000);
};

function preloadImages() {
  const imageList = [
    "images/amazon_music_144.png",
    "images/appleMusic_144.png",
    "images/deezer_144.png",
    "images/emailIcon.png",
    "images/facebookIcon.png",
    "images/instagramIcon.png",
    "images/logo.png",
    "images/profilePic1.jpg",
    "images/profilePic2.jpg",
    "images/profilePic3.jpg",
    "images/soundcloud_144.png",
    "images/spotify_144.png",
    "images/twitterIcon.png",
    "images/ui.jpg",
    "images/youtube_144.png"
  ];

  imageList.forEach(function(imageUrl) {
    const img = new Image();
    img.src = imageUrl;
  });
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

  setTimeout(imageSlideshow, 5000);
}