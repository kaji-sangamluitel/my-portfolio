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

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "dark";

if (savedTheme === "light") {
  body.classList.add("light-mode");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
} else {
  body.classList.remove("light-mode");
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
}

// Toggle theme
toggle.addEventListener("click", () => {
  const isLight = body.classList.toggle("light-mode");

  if (isLight) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("theme", "dark");
  }
});