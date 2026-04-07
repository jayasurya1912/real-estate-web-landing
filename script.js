
window.addEventListener("load", function() {
  document.getElementById("realestate-preloader").style.display = "none";
});


function openSidebar() {
  document.getElementById("sidebar").classList.add("active");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
}

const text = "Find Your Dream Property Today";
const speed = 100;     // typing speed
const eraseSpeed = 50; // deleting speed
const delay = 1500;    // pause before delete

let i = 0;
let isDeleting = false;

function typeEffect() {
  const element = document.getElementById("typing-text");

  if (!isDeleting) {
    element.innerHTML = text.substring(0, i++);
    
    if (i > text.length) {
      isDeleting = true;
      setTimeout(typeEffect, delay);
      return;
    }
  } else {
    element.innerHTML = text.substring(0, i--);

    if (i === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeEffect, isDeleting ? eraseSpeed : speed);
}

typeEffect();
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

