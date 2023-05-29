const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// Save user preference on load
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

// Adding date
const myDate = document.querySelector("#datee");
const currentYear = new Date().getFullYear();
myDate.textContent = currentYear;

const carouselText = [
  { text: "CSE Undergraduate", color: "red" },
  { text: "Frontend web developer", color: "orange" },
  { text: "Designer", color: "green" },
  { text: "Competitive programmer", color: "blue" }
];

$(document).ready(async function () {
  carousel(carouselText, "#feature-text");
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
  var i = 0;
  while (true) {
    updateFontColor(eleRef, carouselList[i].color);
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++;
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css("color", color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const aboutSection = document.querySelector("#about");
const worksSection = document.querySelector("#works");
const projectsSection = document.querySelector("#projects");
const contactSection = document.querySelector("#contact");
const skillsSection = document.querySelector("#skills");

function sendEmail() {

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("comments").value,
  };

  const serviceID = "service_y828yti";
  const templateID = "template_2lf0u1u";
  const userID = "bGEjlL8qITSLA4aCk";

  emailjs.send(serviceID, templateID, params, userID)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("comments").value = "";
      console.log(res);
      alert("Your message sent successfully!!")

    })
    .catch(err => console.log(err));
}

function cargit() {
  window.location.href = "https://github.com/jeevsssss/carparking/tree/main/dop/parking_space_finder";
}
function slotify() {
  window.location.href = "https://github.com/jeevsssss/slotify";
}
function omp() {
  window.location.href = "https://github.com/jeevsssss/OMP-MP3";
}
function poster() {
  window.location.href = "https://drive.google.com/drive/folders/1K1Ln9WYfzFdCdHhcn1znYZFARrtUiAIg?usp=share_link";
}


var scrollButton = document.getElementById('scrollButton');
var isScrolled = false;
var isZoomed = false;

function handleScroll() {
  if (!isScrolled && !isZoomed) {
    scrollButton.classList.add('hide');
    isScrolled = true;
  }
}

function handleZoom() {
  var currentZoom = window.outerWidth / window.innerWidth;
  if (currentZoom < 1 && !isZoomed) {
    scrollButton.classList.add('hide');
    isZoomed = true;
  } else if (currentZoom >= 1 && isZoomed) {
    scrollButton.classList.remove('hide');
    isZoomed = false;
  }
}

function handleResize() {
  scrollButton.classList.remove('hide');
  isScrolled = false;
  isZoomed = false;
}

// Add scroll, zoom, and resize event listeners
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleResize);
window.addEventListener('resize', handleZoom);
