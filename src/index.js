"use strict";

import { generateMainContent } from "./generate-homepage.js";
import pageLoad from "./page-load.js";
import generateMenu from "./generate-menu.js";
const content = document.getElementById("content");
pageLoad();

const mainContent = document.querySelector("main");
const homeBtn = document.getElementById("Home");
const menuBtn = document.getElementById("Menu");
const logo = document.querySelector(".header__logo");

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
