"use strict";

import { createEl } from "./generate-homepage";

const menu = {
  1: "Salmon Dragon Roll - 8pcs",
  2: "Tempura Shrimps Roll - 8pcs",
  3: "Futomaki Tempura Philly - 5pcs",
  4: "Avocado Shrimp Roll - 8pcs",
  5: "Futomaki Tokyo Roll - 5pcs",
  6: "Crunchy California Roll - 8pcs",
  7: "Maki Tuna Mango - 8pcs",
  8: "Sushi Wrap",
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
    main.appendChild(item);
  }

  return mainMenu;
}
