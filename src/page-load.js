"use strict";
import { generateHeader } from "./homepage.js";
import { generateMainContent } from "./homepage.js";

export default function pageLoad() {
  content.append(generateHeader(), generateMainContent());
}
