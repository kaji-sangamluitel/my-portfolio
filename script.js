AOS.init();

const toggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const hamburger = document.querySelector('.hamburger-menu');
const smallNav = document.querySelector('.small-screen-nav');
const closeBtn = document.querySelector('.cross');
const body = document.body;

hamburger.addEventListener('click', () => {
  smallNav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  smallNav.classList.remove('active');
});

  // Close small nav when clicking outside
  document.addEventListener('click', (e) => {
    const clickedInsideMenu = smallNav.contains(e.target);
    const clickedHamburger = hamburger.contains(e.target);
  
    console.log("outside", clickedInsideMenu, clickedHamburger)
    if (!clickedInsideMenu && !clickedHamburger) {
      console.log('here i am')
      smallNav.classList.remove('active');
    }
  });
  

// Close menu when clicking a link
document.querySelectorAll('.small-menu a').forEach(link => {
  link.addEventListener('click', () => {
    smallNav.classList.remove('active');
  });
});

function setTheme(mode) {
  if (mode === "light") {
    body.classList.add("light-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    body.classList.remove("light-mode");
    icon.classList.replace("fa-sun", "fa-moon");
  }
  localStorage.setItem("theme", mode);
}

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "light" ? "light" : "dark");

toggle.addEventListener("click", () => {
  const isLight = body.classList.toggle("light-mode");
  icon.classList.toggle("fa-sun", isLight);
  icon.classList.toggle("fa-moon", !isLight);
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
const arrow = document.querySelector(".graphics-arrow");

// Smooth scroll to graphics page if same page section exists
arrow.addEventListener("click", () => {
window.location.href = "graphics.html";
});

// Fade out arrow when user scrolls down
window.addEventListener("scroll", () => {
if (window.scrollY > 150) {
arrow.style.opacity = "0";
} else {
arrow.style.opacity = "1";
}
});