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
const authorsInfo = document.querySelectorAll(".authors .author-info-lan");
const authorsText = document.querySelectorAll(".authors .author-text-lan");

// Team section
const teamTitleMain = document.querySelector(".team .title h2");
const teamTitleDesc = document.querySelector(".team .title p");
const teamMemberPosition = document.querySelectorAll(".team .card-body .card-text");
const teamBtn = document.querySelector(".team .btn-w-arrow");

// Plans section
const plansTitleMain = document.querySelector(".plans .title h2");
const plansTitleDesc = document.querySelector(".plans .title p");
const plansTogglesText = document.querySelectorAll(".plans .toggle-diff");
const input = document.getElementById("switch");
const showcards = document.getElementsByClassName("show")[0];
const plan_cards = document.getElementsByClassName("plancard-display")[0];

// Questions section
const questionTitleMain = document.querySelector(".questions .title h2");
const questionTitleDesc = document.querySelector(".questions .title p");
const questionHeader = document.querySelectorAll(
  ".questions .accordion-header span"
);
const questionAnswer = document.querySelectorAll(".questions .accordion-body");
const questionEmail = document.querySelector(".questions .email p");

// Blog section
const blogTitleMain = document.querySelector(".blog .title h2");
const blogTitleDesc = document.querySelector(".blog .title p");

// Subscribe section
const subscribeData = document.querySelectorAll(".subscribe-lan");
const subscFormInput = document.querySelector(".subscribe form input");

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

    // Authors Section
    for (let index in langData.author_info_az) {
      authorsInfo[index].innerHTML = langData.author_info_az[index];
    }
    for (let index in langData.author_text_az) {
      authorsText[index].innerHTML = langData.author_text_az[index];
    }

    // Team Section
    teamTitleMain.innerHTML = langData.team_title_h2_az;
    teamTitleDesc.innerHTML = langData.team_title_p_az;
    for (let index in langData.team_mem_pos_az) {
      teamMemberPosition[index].innerHTML = langData.team_mem_pos_az[index];
    }
    teamBtn.innerHTML = langData.team_btn_az;

    // Plans Section
    plansTitleMain.innerHTML = langData.plans_title_h2_az;
    plansTitleDesc.innerHTML = langData.plans_title_p_az;
    for (let index in langData.plans_toggle_text_az) {
      plansTogglesText[index].innerHTML = langData.plans_toggle_text_az[index];
    }

    // Questions Section
    questionTitleMain.innerHTML = langData.ques_title_h2_az;
    questionTitleDesc.innerHTML = langData.ques_title_p_az;
    for (let index in langData.ques_question_az) {
      questionHeader[index].innerHTML = langData.ques_question_az[index];
    }
    for (let index in langData.ques_answer_az) {
      questionAnswer[index].innerHTML = langData.ques_answer_az[index];
    }
    questionEmail.innerHTML = langData.ques_email_az;

    // Blog Section
    blogTitleMain.innerHTML = langData.blog_title_h2_az;
    blogTitleDesc.innerHTML = langData.blog_title_p_az;

    // Subscribe Section
    for (let index in langData.subscribe_az) {
      subscribeData[index].innerHTML = langData.subscribe_az[index];
    }
    subscFormInput.placeholder = "Sizin e-poçt";

    langBtn.innerHTML = "EN";
    localStorage.setItem("lang", "az");
  } else {
    // Nav and Initial Sections
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

    // Authors Section
    for (let index in langData.author_info_en) {
      authorsInfo[index].innerHTML = langData.author_info_en[index];
    }
    for (let index in langData.author_text_en) {
      authorsText[index].innerHTML = langData.author_text_en[index];
    }

    // Team Section
    teamTitleMain.innerHTML = langData.team_title_h2_en;
    teamTitleDesc.innerHTML = langData.team_title_p_en;
    for (let index in langData.team_mem_pos_en) {
      teamMemberPosition[index].innerHTML = langData.team_mem_pos_en[index];
    }
    teamBtn.innerHTML = langData.team_btn_en;

    // Plans Section
    plansTitleMain.innerHTML = langData.plans_title_h2_en;
    plansTitleDesc.innerHTML = langData.plans_title_p_en;
    for (let index in langData.plans_toggle_text_en) {
      plansTogglesText[index].innerHTML = langData.plans_toggle_text_en[index];
    }

    // Questions Section
    questionTitleMain.innerHTML = langData.ques_title_h2_en;
    questionTitleDesc.innerHTML = langData.ques_title_p_en;
    for (let index in langData.ques_question_en) {
      questionHeader[index].innerHTML = langData.ques_question_en[index];
    }
    for (let index in langData.ques_answer_en) {
      questionAnswer[index].innerHTML = langData.ques_answer_en[index];
    }
    questionEmail.innerHTML = langData.ques_email_en;

    // Blog Section
    blogTitleMain.innerHTML = langData.blog_title_h2_en;
    blogTitleDesc.innerHTML = langData.blog_title_p_en;

    // Subscribe Section
    for (let index in langData.subscribe_en) {
      subscribeData[index].innerHTML = langData.subscribe_en[index];
    }
    subscFormInput.placeholder = "Your email";

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

    // Authors Section
    for (let index in langData.author_info_en) {
      authorsInfo[index].innerHTML = langData.author_info_en[index];
    }
    for (let index in langData.author_text_en) {
      authorsText[index].innerHTML = langData.author_text_en[index];
    }

    // Team Section
    teamTitleMain.innerHTML = langData.team_title_h2_en;
    teamTitleDesc.innerHTML = langData.team_title_p_en;
    for (let index in langData.team_mem_pos_en) {
      teamMemberPosition[index].innerHTML = langData.team_mem_pos_en[index];
    }
    teamBtn.innerHTML = langData.team_btn_en;

    // Plans Section
    plansTitleMain.innerHTML = langData.plans_title_h2_en;
    plansTitleDesc.innerHTML = langData.plans_title_p_en;
    for (let index in langData.plans_toggle_text_en) {
      plansTogglesText[index].innerHTML = langData.plans_toggle_text_en[index];
    }

    // Questions Section
    questionTitleMain.innerHTML = langData.ques_title_h2_en;
    questionTitleDesc.innerHTML = langData.ques_title_p_en;
    for (let index in langData.ques_question_en) {
      questionHeader[index].innerHTML = langData.ques_question_en[index];
    }
    for (let index in langData.ques_answer_en) {
      questionAnswer[index].innerHTML = langData.ques_answer_en[index];
    }
    questionEmail.innerHTML = langData.ques_email_en;

    // Blog Section
    blogTitleMain.innerHTML = langData.blog_title_h2_en;
    blogTitleDesc.innerHTML = langData.blog_title_p_en;

    // Subscribe Section
    for (let index in langData.subscribe_en) {
      subscribeData[index].innerHTML = langData.subscribe_en[index];
    }
    subscFormInput.placeholder = "Your email";

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

    // Authors Section
    for (let index in langData.author_info_az) {
      authorsInfo[index].innerHTML = langData.author_info_az[index];
    }
    for (let index in langData.author_text_az) {
      authorsText[index].innerHTML = langData.author_text_az[index];
    }

    // Team Section
    teamTitleMain.innerHTML = langData.team_title_h2_az;
    teamTitleDesc.innerHTML = langData.team_title_p_az;
    for (let index in langData.team_mem_pos_az) {
      teamMemberPosition[index].innerHTML = langData.team_mem_pos_az[index];
    }
    teamBtn.innerHTML = langData.team_btn_az;

    // Plans Section
    plansTitleMain.innerHTML = langData.plans_title_h2_az;
    plansTitleDesc.innerHTML = langData.plans_title_p_az;
    for (let index in langData.plans_toggle_text_az) {
      plansTogglesText[index].innerHTML = langData.plans_toggle_text_az[index];
    }

    // Questions Section
    questionTitleMain.innerHTML = langData.ques_title_h2_az;
    questionTitleDesc.innerHTML = langData.ques_title_p_az;
    for (let index in langData.ques_question_az) {
      questionHeader[index].innerHTML = langData.ques_question_az[index];
    }
    for (let index in langData.ques_answer_az) {
      questionAnswer[index].innerHTML = langData.ques_answer_az[index];
    }
    questionEmail.innerHTML = langData.ques_email_az;

    // Blog Section
    blogTitleMain.innerHTML = langData.blog_title_h2_az;
    blogTitleDesc.innerHTML = langData.blog_title_p_az;

    // Subscribe Section
    for (let index in langData.subscribe_az) {
      subscribeData[index].innerHTML = langData.subscribe_az[index];
    }
    subscFormInput.placeholder = "Sizin e-poçt";

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
    // modeBtn.className = "btn btn-func mode-btn-dark btn-light ms-3";
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
    // modeBtn.className = "btn btn-func mode-btn btn-light ms-3";

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
    // modeBtn.className = "btn btn-func mode-btn-dark btn-light ms-3";
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
    // modeBtn.className = "btn btn-func mode-btn btn-light ms-3";
  }
}
