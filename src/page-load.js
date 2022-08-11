"use strict";
import { generateHeader } from "./generate-homepage-sections";
import { generateMainContent } from "./generate-homepage-sections";

export default function pageLoad() {
  const content = document.getElementById("content");
  content.append(generateHeader(), generateMainContent());
}
