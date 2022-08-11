"use strict";
import { generateHeader } from "./generate-homepage.js";
import { generateMainContent } from "./generate-homepage.js";

export default function pageLoad() {
  const content = document.getElementById("content");
  content.append(generateHeader(), generateMainContent());
}
