"use strict";
import "../src/style.css";
import { createEl } from "./homepage";

const menu = {
  1: "salmon dragon roll - 8pcs",
  2: "tempura shrimps roll - 8pcs",
  3: "futomaki tempura philly - 5pcs",
  4: "avocado shrimp roll - 8pcs",
  5: "futomaki tokyo roll - 5pcs",
  6: "crunchy california roll - 8pcs",
  7: "maki tuna mango - 8pcs",
  8: "sushi wrap",
};

export default function generateMenu() {
  const mainMenu = createEl("main");
  mainMenu.classList.add("menu", "grid");

  for (const [key, menuItem] of Object.entries(menu)) {
    const item = createEl("div");
    const img = createEl("img");
    const itemTitle = createEl("h3");

    item.classList.add("flex", "menu__item");
    img.src = `../src/img/${key}.png`;
    img.alt = `${menuItem}`;
    itemTitle.textContent = `${menuItem}`;

    item.append(img, itemTitle);
    mainMenu.appendChild(item);
  }
  // content.appendChild(mainMenu);
  return mainMenu;
}
