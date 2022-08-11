"use strict";

import "../src/style.css";

function createEl(element) {
  return document.createElement(element);
}

export default function pageLoad() {
  const content = document.getElementById("content");
  const header = createEl("header");
  const main = createEl("main");
  const logoContainer = createEl("div");
  const logoName = createEl("h1");
  const logoImg = createEl("img");
  const tabsContainer = createEl("div");
  const tabs = ["Home", "Menu", "Contact"];
  const mainDescription = createEl("div");
  const descriptionTxt = [
    `In 2005 it all started in Bucharest as a small and intimate Asian
  restaurant that was one of the first to use the “all-you-can-eat
  concept” and grew into an immensely popular formula.`,
    `Today, sumosushi can be found throughout the world.`,
    `Enjoy a delicious Japanese & Asian lunch or dinner.`,
  ];
  const hours = createEl("div");
  const hoursTitle = createEl("h2");
  const hoursList = createEl("ul");
  const hoursListItems = [`mon-sat`, `12pm - 9pm`, `sun`, `no sumo no sushi`];

  header.classList.add("header", "flex");
  logoContainer.classList.add("flex", "header__logo");
  logoName.textContent = "sumosushi";
  logoImg.src = "../src/img/icons8-sushi-64.png";
  logoImg.alt = "logo";
  tabsContainer.classList.add("flex", "header__tabs");
  main.classList.add("flex", "main");
  mainDescription.classList.add("flex", "main__description");
  hours.classList.add("flex", "main__hours");
  hoursTitle.textContent = "hours:";
  hoursList.classList.add("main__hours--list");

  content.append(header, main);
  header.append(logoContainer, tabsContainer);
  logoContainer.append(logoName, logoImg);

  tabs.forEach((item) => {
    const button = createEl("button");
    button.classList.add("header__tabs--btn");
    button.textContent = item;
    tabsContainer.appendChild(button);
  });

  main.append(mainDescription, hours);

  descriptionTxt.forEach((item) => {
    const para = createEl("para");
    para.textContent = item;
    mainDescription.appendChild(para);
  });

  hours.append(hoursTitle, hoursList);

  hoursListItems.forEach((item) => {
    const listItem = createEl("li");
    listItem.textContent = item;

    if (item === "mon-sat" || item === "sun") {
      listItem.classList.add("main__hours--list-title");
    }
    hoursList.appendChild(listItem);
  });
}
