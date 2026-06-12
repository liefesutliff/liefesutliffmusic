document.addEventListener("DOMContentLoaded", () => {

  // Mobile menu toggle
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Preload images
  preloadImages([
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
    "images/youtube_144.png",
    "images/release.jpg",
    "images/apparelPic1.jpg",
    "images/apparelPic2.jpg",
    "images/apparelPic3.jpg",
    "images/apparelPic4.jpg",
    "images/physicalAudioPic1.jpg"
  ]);

  // Homepage profile slideshow
  createSlideshow(
    ".profilePic",
    [
      "images/profilePic1.jpg",
      "images/profilePic2.jpg",
      "images/profilePic3.jpg"
    ],
    3000
  );

  // Merch apparel slideshow
  createSlideshow(
    ".apparelPic",
    [
      "images/apparelPic1.jpg",
      "images/apparelPic2.jpg",
      "images/apparelPic3.jpg",
      "images/apparelPic4.jpg"
    ],
    3000
  );

  // Merch physical audio slideshow
  createSlideshow(
    ".physicalAudio",
    [
      "images/physicalAudioPic1.jpg",
      "images/physicalAudioPic2.jpg"
    ],
    3000
  );

});

function preloadImages(imageList) {
  imageList.forEach(imageUrl => {
    const img = new Image();
    img.src = imageUrl;
  });
}

function createSlideshow(selector, images, interval) {

  const imgElement = document.querySelector(selector);

  // Don't start slideshow if image isn't on this page
  if (!imgElement) {
    return;
  }

  // No slideshow needed for a single image
  if (images.length <= 1) {
    return;
  }

  let currentIndex = 0;

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
  }

  // Automatic slideshow
  setInterval(nextImage, interval);

  // Manual click to advance
  imgElement.addEventListener("click", nextImage);
}