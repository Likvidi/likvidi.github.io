document.addEventListener("DOMContentLoaded", function () {
  // Smooth nav menu scrolling
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    // Check if it's an internal link
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      smoothScrollTo(targetSection);
    }
    // External links will function normally
  });
});

function smoothScrollTo(targetSection) {
  const top = targetSection.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: top,
    behavior: "smooth",
  });
}

  // Mailchimp form popup
  var navButton = document.querySelector(".nav-button");
  var submitButton = document.querySelector(".submit-button")
  var mcPopup = document.getElementById("mc-popup");
  var mcCloseButton = document.querySelector(".mc-close-button");
  var mcPopupContent = document.querySelector(".mc-popup-content");
  var heroButton = document.querySelector(".hero-button-1")

  mcCloseButton.addEventListener("click", function () {
    mcPopup.classList.remove("visible");
  });
  
  navButton.addEventListener("click", function () {
    mcPopup.classList.remove("hidden");
    mcPopup.classList.add("visible");
  });

  submitButton.addEventListener("click", function () {
    mcPopup.classList.remove("hidden");
    mcPopup.classList.add("visible");
  });

  heroButton.addEventListener("click", function () {
    mcPopup.classList.remove("hidden");
    mcPopup.classList.add("visible");
  });
  
  // Optional: Close the popup when clicking outside the content
  mcPopup.addEventListener("click", function (event) {
    if (event.target === mcPopup || event.target === mcPopupContent) {
      mcPopup.classList.remove("visible");
    }
  });
  
});

// Hero button email link //

var heroButton2 = document.querySelector(".hero-button-2");

heroButton2.addEventListener("click", function () {
  var email = "info@likvidi.com";
  var mailtoUrl = "mailto:" + email;
  
  if (navigator && navigator.share) {
    navigator.share({url: mailtoUrl});
  } else {
    window.open(mailtoUrl, "_blank");
  }
});