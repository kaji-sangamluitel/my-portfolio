  AOS.init();

  const hamburger = document.querySelector('.hamburger-menu');
  const smallNav = document.querySelector('.small-screen-nav');
  const closeBtn = document.querySelector('.cross');
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
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

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      body.classList.add("light-mode");
      themeIcon.classList.replace("fa-moon", "fa-sun");
    }

    themeToggle.addEventListener("click", () => {
      const light = body.classList.toggle("light-mode");
      themeIcon.classList.toggle("fa-sun", light);
      themeIcon.classList.toggle("fa-moon", !light);
      localStorage.setItem("theme", light ? "light" : "dark");
    });
    
    document.getElementById("contactForm").onsubmit = async function(e) {
  e.preventDefault();

  let formData = new FormData(this);

  let res = await fetch("http://127.0.0.1:8000/send-message/", {
    method: "POST",
    body: formData
  });

  let data = await res.json();

  alert(data.msg);
};
    document.getElementById("focusCenter").addEventListener("click", () => {
  const center = document.getElementById("centerDisplay");
  if (center) {
    center.scrollIntoView({ behavior: "smooth", block: "center" });
  }});

    // Fade animation
    const fadeUps = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.2 });
    fadeUps.forEach(section => observer.observe(section));

   // Circular gallery logic
   const imgs = document.querySelectorAll('.circle img');
    const centerDisplay = document.getElementById('centerDisplay');
    const centerImg = centerDisplay.querySelector('img');
    let selectedIndex = -1;

    function positionCircle() {
      const total = imgs.length;
      imgs.forEach((img,i)=>{
        const angle = (i/total)*360;
        const radiusZ = 260;
        img.style.transform = selectedIndex===i ? `rotateY(${angle}deg) translateZ(${radiusZ+40}px) scale(1.15)` : `rotateY(${angle}deg) translateZ(${radiusZ}px)`;
      });
    }

    imgs.forEach((img,i)=>{
      img.addEventListener('click', ()=>{
        if(selectedIndex===i){
          selectedIndex=-1;
          centerDisplay.classList.remove('active');
        } else {
          selectedIndex=i;
          centerDisplay.classList.add('active');
          centerImg.style.opacity=0;
          setTimeout(()=>{ centerImg.src=img.src; centerImg.style.opacity=1; },300);
        }
        positionCircle();
      });
    });

    centerDisplay.addEventListener('click', ()=>{
      selectedIndex=-1;
      centerDisplay.classList.remove('active');
      positionCircle();
    });

    positionCircle();
    document.getElementById("contactForm").addEventListener("submit", async (e) => {
      e.preventDefault();
    
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
    
      const response = await fetch("http://localhost:5000/send-message", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      });
    
      const result = await response.json();
      alert(result.message);
    });
    
    // Accordion animation
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-item.active');
    if (openItem && openItem !== item) openItem.classList.remove('active');
    item.classList.toggle('active');
  });
});