"use strict";
import { generateHeader } from "./generate-homepage.js";
import { generateMainContent } from "./generate-homepage.js";

export default function pageLoad() {
  content.append(generateHeader(), generateMainContent());
}
