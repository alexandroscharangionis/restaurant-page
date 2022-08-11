"use strict";
import { generateHeader } from "./generate-page-sections";
import { generateMainContent } from "./generate-page-sections";

export default function pageLoad() {
  const content = document.getElementById("content");
  content.append(generateHeader(), generateMainContent());
}
