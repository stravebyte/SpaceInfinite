window.addEventListener('load', () => {

const titles_ = document.querySelector('.titles');
const iss_vel = document.querySelector('#velo');
const iss_alt = document.querySelector('#alt');
const iss_lon = document.querySelector('#lon');
const iss_lat = document.querySelector('#lat');
const issUrl = "https://api.wheretheiss.at/v1/satellites/25544"

const movingElement = document.getElementById('img_box');
const menu = document.getElementById('menuBtn');
const times = document.querySelector('#closeBtn');
const sections = document.querySelectorAll('section');
const stickyTitle = document.querySelectorAll('#discoveries_title');
const logo = document.getElementById('menu');
const discoveriesSection = document.getElementById('discoveries');
const discoveriesTitle = document.getElementById('discoveries_title');

let initialPosition = 0;
let lastScrollY = 0;
let content = document.getElementById('content');

const apod_content = document.getElementById('explanation');
const apod_title = document.querySelector('#apod__title');
const apod_title_content = document.querySelector('#apod_title_content');
const apod = document.querySelector(".apodi");

const apiKey = 'BKTiKbvUtEKMX5LlcxQt20yBy7deHGJ9PoblD54m'; // Replace with your actual NASA API key
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
const img_apod = document.createElement('img');

titles_.style.opacity = 1;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    apod_title_content.textContent = data.title;
    apod_content.textContent = data.explanation;
    img_apod.src = data.url
    apod.appendChild(img_apod)
    apod.url = data.url;
  })
  .catch(error => {
    console.error('Error fetching APOD:', error);
  });
  function iss(){
fetch(issUrl)
  .then(response => response.json())
  .then(data => {
    iss_alt.textContent = data.altitude;
    iss_lon.textContent = data.longitude;
    iss_lat.textContent = data.latitude;
    iss_vel.textContent = data.velocity;
  })
  .catch(error => {
    console.error('Error fetching APOD:', error);
  });
}
setInterval(iss, 5000)
  function updatePosition() {
    const scrolledDistance = window.scrollY;
    const scrollDiff = scrolledDistance - lastScrollY;
    const speedMultiplier = 0.45;
    
    if (Math.abs(scrollDiff) > 1 - 1) {
      initialPosition += scrollDiff * speedMultiplier;
      movingElement.style.transform = `translateX(${initialPosition}px)`;
      content.style.transform = `translateX(-${initialPosition}px)`;
    }
    lastScrollY = scrolledDistance;
    if (initialPosition >= innerWidth) {
      movingElement.style.opacity = 0;
    } else {
      movingElement.style.opacity = 1;
    }
    requestAnimationFrame(updatePosition);
  }
  updatePosition();
  const nav = document.querySelector('nav');
  
  menu.addEventListener('click', () => {
    nav.classList.add('active');
  });

  times.addEventListener('click', () => {
    nav.classList.remove('active');
  });

  window.addEventListener('scroll', () => {
    var stickyTitle = document.querySelectorAll(".sticky-title");
    if (stickyTitle) {
      var scrollPosition = window.scrollY;
      var leftPosition = -scrollPosition; /* Adjust this value to control movement speed */
    }
    nav.classList.remove('active');
    updateStickyTitle();
  });
function updateStickyTitle() {
  const sectionTop = discoveriesSection.offsetTop;
  const sectionBottom = sectionTop + discoveriesSection.offsetHeight;
  const scrollY = window.scrollY;
  const logoHeight = logo.offsetHeight;
  if (scrollY >= sectionTop - logoHeight && scrollY <= sectionBottom) {
    discoveriesTitle.classList.add('sticky');

  } else {
    discoveriesTitle.classList.remove('sticky');

  }
}
  updateStickyTitle();
  TweenMax.staggerFrom(
    ".titles > div",
    0.7,
    {
      ease: Power3.easeInOut,
      opacity: "0",
    },
    2
  );
  
  TweenMax.staggerTo(
    ".titles > div",
    0.7,
    {
      ease: Power3.easeInOut,
      delay: 1.2,
      opacity: "0",
    },
    2
  );
  
  const section = document.getElementById('gL');

function Gl2(){
    titles_.style.position = 'fixed';
    titles_.style.display = 'none';
  }
function Gl(){
      section.style.opacity = 1;
      Gl2();
  }
function Gl1(){
    section.style.display = 'flex'
  }
  setTimeout(Gl2, 6500)
  setTimeout(Gl, 6500)
  setTimeout(Gl1, 6000)
});
const api3Url = "https://api.nasa.gov/insight_weather/?api_key=BKTiKbvUtEKMX5LlcxQt20yBy7deHGJ9PoblD54m&feedtype=json&ver=1.0";

fetch(api3Url)
  .then(response => response.json())
  .then(data => {
    const firstSol = data.sol_keys;
    console.log(`Temperature data for sol ${firstSol}:`);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
  document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".reveal-section");
  const revealElements = document.querySelectorAll(".reveal-element");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionRevealElements = entry.target.querySelectorAll(".reveal-element");
        sectionRevealElements.forEach((element) => {
          element.classList.add("revealed");
        });
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  sections.forEach((section) => {
    observer.observe(section);
  });
});
const video_1 = document.getElementById('vdi_1');
const vdi_1 = document.getElementById('video_player_1');
const video_3 = document.getElementById('vdi_3');
const vdi_3 = document.getElementById('video_player_3');
vdi_1.addEventListener('click', ()=>{
  video_1.play();
  vdi_1.style.display = 'none'
});
vdi_3.addEventListener('click', ()=>{
  video_3.play();
  vdi_3.style.display = 'none';
});
//Yo