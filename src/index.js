"use strict";

import { generateMainContent } from "./homepage.js";
import pageLoad from "./page-load.js";
import generateMenu from "./menu.js";
import generateContact from "./contact.js";

const content = document.getElementById("content");
pageLoad();

const logo = document.querySelector(".header__logo");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");
const mainContent = document.getElementById("main");

logo.addEventListener("click", () => {
  mainContent.innerHTML = "";
  mainContent.appendChild(generateMainContent());
});

homeBtn.addEventListener("click", () => {
  mainContent.innerHTML = "";
  mainContent.appendChild(generateMainContent());
});

menuBtn.addEventListener("click", () => {
  mainContent.innerHTML = "";
  mainContent.appendChild(generateMenu());
});

contactBtn.addEventListener("click", () => {
  mainContent.innerHTML = "";
  // mainContent.classList.add("flex");
  mainContent.style.textAlign = "center";
  mainContent.appendChild(generateContact());
});
