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
const dropdownItem = document.querySelectorAll(".dropdown-lang");
const dropdownItemSpan = document.querySelector(".dropdown-item span");

// Initial page
const initLang = document.querySelectorAll(".init-lang");

// Design section
const destitle_h2 = document.querySelector(".design .title h2");
const destitle_p = document.querySelector(".design .title p");
const descardtitle = document.querySelectorAll(".design .card .card-title");
const descardtext = document.querySelectorAll(".design .card .card-text");

// Reactions section
const reactList = document.querySelectorAll(".reactions ul li a span");
const reactInfo = document.querySelectorAll(".re_info_lang");

// Traffic section
const trafInfo = document.querySelectorAll(".traf-info-lan");
const trafListTitle = document.querySelectorAll(".traffic-list .list-text h3");
const trafListText = document.querySelectorAll(".traffic-list .list-text p");

// Authors section

// Plans section
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
    // Nav and Initial sections
    for (let index in langData.nav_link_az) {
      navLink[index].innerHTML = langData.nav_link_az[index];
    }
    dropdownItemSpan.innerHTML = "Ev 1";
    for (let index in langData.nav_dropdown_az) {
      dropdownItem[index].innerHTML = langData.nav_dropdown_az[index];
    }
    for (let index in langData.nav_btn_az) {
      navBtn[index].innerHTML = langData.nav_btn_az[index];
    }
    for (let index in langData.init_lang_az) {
      initLang[index].innerHTML = langData.init_lang_az[index];
    }

    // Design Section
    destitle_h2.innerHTML = langData.destitle_h2_az;
    destitle_p.innerHTML = langData.destitle_p_az;
    for (let index in langData.descardtitle_az) {
      descardtitle[index].innerHTML = langData.descardtitle_az[index];
    }
    for (let index in langData.descardtext_az) {
      descardtext[index].innerHTML = langData.descardtext_az[index];
    }

    // React Section
    for (let index in langData.reac_list_az) {
      reactList[index].innerHTML = langData.reac_list_az[index];
    }
    for (let index in langData.reac_info_az) {
      reactInfo[index].innerHTML = langData.reac_info_az[index];
    }

    // Traffic Section
    for (let index in langData.traf_info_az) {
      trafInfo[index].innerHTML = langData.traf_info_az[index];
    }
    for (let index in langData.traf_list_title_az) {
      trafListTitle[index].innerHTML = langData.traf_list_title_az[index];
    }
    for (let index in langData.traf_list_text_az) {
      trafListText[index].innerHTML = langData.traf_list_text_az[index];
    }

    langBtn.innerHTML = "EN";
    localStorage.setItem("lang", "az");
  } else {
    // Nav and Initial sections
    for (let index in langData.nav_link_en) {
      navLink[index].innerHTML = langData.nav_link_en[index];
    }
    dropdownItemSpan.innerHTML = "Home 1";
    for (let index in langData.nav_dropdown_en) {
      dropdownItem[index].innerHTML = langData.nav_dropdown_en[index];
    }
    for (let index in langData.nav_btn_en) {
      navBtn[index].innerHTML = langData.nav_btn_en[index];
    }
    for (let index in langData.init_lang_en) {
      initLang[index].innerHTML = langData.init_lang_en[index];
    }

    // Design Section
    destitle_h2.innerHTML = langData.destitle_h2_en;
    destitle_p.innerHTML = langData.destitle_p_en;
    for (let index in langData.descardtitle_en) {
      descardtitle[index].innerHTML = langData.descardtitle_en[index];
    }
    for (let index in langData.descardtext_en) {
      descardtext[index].innerHTML = langData.descardtext_en[index];
    }

    // React Section
    for (let index in langData.reac_list_en) {
      reactList[index].innerHTML = langData.reac_list_en[index];
    }
    for (let index in langData.reac_info_en) {
      reactInfo[index].innerHTML = langData.reac_info_en[index];
    }

    // Traffic Section
    for (let index in langData.traf_info_en) {
      trafInfo[index].innerHTML = langData.traf_info_en[index];
    }
    for (let index in langData.traf_list_title_en) {
      trafListTitle[index].innerHTML = langData.traf_list_title_en[index];
    }
    for (let index in langData.traf_list_text_en) {
      trafListText[index].innerHTML = langData.traf_list_text_en[index];
    }

    // Btn and local
    langBtn.innerHTML = "AZ";
    localStorage.setItem("lang", "en");
  }
};

//Language LocalStorage
if (localStorage.getItem("lang") === null) {
  localStorage.setItem("lang", "en");
} else {
  if (localStorage.getItem("lang") == "en") {
    // Nav and Initial sections
    for (let index in langData.nav_link_en) {
      navLink[index].innerHTML = langData.nav_link_en[index];
    }
    dropdownItemSpan.innerHTML = "Home 1";
    for (let index in langData.nav_dropdown_en) {
      dropdownItem[index].innerHTML = langData.nav_dropdown_en[index];
    }
    for (let index in langData.nav_btn_en) {
      navBtn[index].innerHTML = langData.nav_btn_en[index];
    }
    for (let index in langData.init_lang_en) {
      initLang[index].innerHTML = langData.init_lang_en[index];
    }

    // Design section
    destitle_h2.innerHTML = langData.destitle_h2_en;
    destitle_p.innerHTML = langData.destitle_p_en;
    for (let index in langData.descardtitle_en) {
      descardtitle[index].innerHTML = langData.descardtitle_en[index];
    }
    for (let index in langData.descardtext_en) {
      descardtext[index].innerHTML = langData.descardtext_en[index];
    }

    // React Section
    for (let index in langData.reac_list_en) {
      reactList[index].innerHTML = langData.reac_list_en[index];
    }
    for (let index in langData.reac_info_en) {
      reactInfo[index].innerHTML = langData.reac_info_en[index];
    }

    // Traffic Section
    for (let index in langData.traf_info_en) {
      trafInfo[index].innerHTML = langData.traf_info_en[index];
    }
    for (let index in langData.traf_list_title_en) {
      trafListTitle[index].innerHTML = langData.traf_list_title_en[index];
    }
    for (let index in langData.traf_list_text_en) {
      trafListText[index].innerHTML = langData.traf_list_text_en[index];
    }

    // Btn
    langBtn.innerHTML = "AZ";
  } else {
    // Nav and Initial sections
    for (let index in langData.nav_link_az) {
      navLink[index].innerHTML = langData.nav_link_az[index];
    }
    dropdownItemSpan.innerHTML = "Ev 1";
    for (let index in langData.nav_dropdown_az) {
      dropdownItem[index].innerHTML = langData.nav_dropdown_az[index];
    }
    for (let index in langData.nav_btn_az) {
      navBtn[index].innerHTML = langData.nav_btn_az[index];
    }
    for (let index in langData.init_lang_az) {
      initLang[index].innerHTML = langData.init_lang_az[index];
    }

    // Design Section
    destitle_h2.innerHTML = langData.destitle_h2_az;
    destitle_p.innerHTML = langData.destitle_p_az;
    for (let index in langData.descardtitle_az) {
      descardtitle[index].innerHTML = langData.descardtitle_az[index];
    }
    for (let index in langData.descardtext_az) {
      descardtext[index].innerHTML = langData.descardtext_az[index];
    }

    // React Section
    for (let index in langData.reac_list_az) {
      reactList[index].innerHTML = langData.reac_list_az[index];
    }
    for (let index in langData.reac_info_az) {
      reactInfo[index].innerHTML = langData.reac_info_az[index];
    }

    // Traffic Section
    for (let index in langData.traf_info_az) {
      trafInfo[index].innerHTML = langData.traf_info_az[index];
    }
    for (let index in langData.traf_list_title_az) {
      trafListTitle[index].innerHTML = langData.traf_list_title_az[index];
    }
    for (let index in langData.traf_list_text_az) {
      trafListText[index].innerHTML = langData.traf_list_text_az[index];
    }

    // Btn and local
    langBtn.innerHTML = "EN";
  }
}

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

    localStorage.setItem("mode", "dark");
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

    localStorage.setItem("mode", "light");
  }
  modeBtn.classList.toggle("mode-btn-dark");
};

//Mode LocalStorage
if (localStorage.getItem("mode") === null) {
  localStorage.setItem("mode", "light");
} else {
  if (localStorage.getItem("mode") == "dark") {
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
}
