document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0; // Initialize the current index
  let images = [
    "images/profilePic1.jpg",
    "images/profilePic2.jpg",
    "images/profilePic3.jpg"
  ]; // List of images to cycle through
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", () => {navLinks.classList.toggle("active");});

  window.onload = function() {
    preloadImages(); // Preload images
    startSlideshow(); // Start slideshow
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
      "images/youtube_144.png",
      "images/release.jpg"
    ];

    imageList.forEach(function(imageUrl) {
      const img = new Image();
      img.src = imageUrl;
    });
  }

  function startSlideshow() {
    setInterval(changeImage, 5000); // Change image every 5 seconds
  }

  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    document.querySelector('.profilePic').src = images[currentIndex]; // Update the image source
  }

  // Manual cycling through images on click
  document.querySelector('.profilePic').onclick = changeImage;
});