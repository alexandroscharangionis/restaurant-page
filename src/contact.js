"use strict";
import "../src/style.css";
import { createEl } from "./homepage";

const contacts = {
  "sumo 相撲:": "sumo@sumosushi.com",
  "sushi すし:": "sushi@sumosushi.com",
};

export default function generateContact() {
  const contact = createEl("main");
  const title = createEl("h3");

  contact.appendChild(title);
  contact.classList.add("contact", "flex");
  title.textContent = "get in touch!";

  for (const [contactName, contactEmail] of Object.entries(contacts)) {
    const contactBox = createEl("div");
    const name = createEl("p");
    const email = createEl("span");

    contactBox.classList.add("contact__box", "flex");
    name.textContent = `${contactName}`;
    email.textContent = `${contactEmail}`;

    contactBox.append(name, email);
    contact.appendChild(contactBox);
  }

  return contact;
}
