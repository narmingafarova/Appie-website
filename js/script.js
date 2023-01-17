import { langData } from "./data/language.js";

// Sections
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const initial = document.querySelector(".initial");
const design = document.querySelector(".design");
const reactions = document.querySelector(".reactions");
const traffic = document.querySelector(".traffic");
const team = document.querySelector(".team");
const plans = document.querySelector(".plans");
const questions = document.querySelector(".questions");
const blogs = document.querySelector(".blog");
const footer = document.querySelector(".footer");
const footBar = document.querySelector(".foot-bar");

// Buttons
const langBtn = document.querySelector(".lang-btn");
const modeBtn = document.querySelector(".mode-btn");

// Nav
const navLink = document.querySelectorAll(".nav-link");
const navBtn = document.querySelectorAll(".nav-btn-lang");

// Initial page
const initLang = document.querySelectorAll(".init-lang");

// Plans page
const input = document.getElementById("switch");
const showcards = document.getElementsByClassName("show")[0];
const plan_cards = document.getElementsByClassName("plancard-display")[0];

// Plans toggle
input.addEventListener("click", () => {
  if (input.checked == true) {
    showcards.style.display = "flex";
    plan_cards.style.display = "none";
  } else {
    showcards.style.display = "none";
    plan_cards.style.display = "flex";
  }
});

// Language change
langBtn.onclick = () => {
  if (langBtn.innerHTML === "AZ") {
    for (let index in langData.nav_link_az) {
      navLink[index].innerHTML = langData.nav_link_az[index];
    }
    for (let index in langData.nav_btn_az) {
      navBtn[index].innerHTML = langData.nav_btn_az[index];
    }
    for (let index in langData.init_lang_az) {
      initLang[index].innerHTML = langData.init_lang_az[index];
    }

    langBtn.innerHTML = "EN";
  } else {
    for (let index in langData.nav_link_en) {
      navLink[index].innerHTML = langData.nav_link_en[index];
    }
    for (let index in langData.nav_btn_en) {
      navBtn[index].innerHTML = langData.nav_btn_en[index];
    }
    for (let index in langData.init_lang_en) {
      initLang[index].innerHTML = langData.init_lang_en[index];
    }
    langBtn.innerHTML = "AZ";
  }
};

// Mode change
modeBtn.onclick = () => {
  if (body.className === "bg-white") {
    body.className = "bg-dark";
    nav.className = "navbar navbar-expand-lg bg-dark nav-dark py-3";
    initial.className =
      "initial init-dark d-flex justify-content-center flex-column";
    design.className = "design bg-dark design-dark";
    reactions.className = "reactions reactions-dark";
    traffic.className = "traffic traffic-dark position-relative";
    team.className = "team team-dark";
    plans.className = "plans plans-dark bg-dark";
    questions.className = "questions questions-dark bg-dark";
    blogs.className = "blog blog-dark";
    footer.className = "footer footer-dark bg-dark";
    footBar.className = "foot-bar foot-bar-dark";
    modeBtn.innerHTML = "🌞";
  } else {
    body.className = "bg-white";
    nav.className = "navbar navbar-expand-lg bg-white py-3";
    initial.className = "initial d-flex justify-content-center flex-column";
    design.className = "design";
    reactions.className = "reactions";
    traffic.className = "traffic position-relative";
    team.className = "team";
    plans.className = "plans";
    questions.className = "questions";
    blogs.className = "blog";
    footer.className = "footer";
    footBar.className = "foot-bar";
    modeBtn.innerHTML = "🌙";
  }
  modeBtn.classList.toggle("mode-btn-dark");
};
