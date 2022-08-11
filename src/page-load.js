"use strict";
import { generateHeader } from "./generate-homepage";
import { generateMainContent } from "./generate-homepage";

export default function pageLoad() {
  const content = document.getElementById("content");
  content.append(generateHeader(), generateMainContent());
}
