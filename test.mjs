import fs from "fs";
import { generateUltrablurCSS } from "./dist/index.js";

const color = "#faf0fa",
  bg = "#000000";

if (!fs.existsSync("tests")) fs.mkdirSync("tests");

fs.writeFileSync(
  "tests/test.html",
  `<body>
  <style>
    body {
      margin: 0;
      width: 100%;
      height: 100%;
      background: ${generateUltrablurCSS(color, bg)};
    }  
  </style>
</body>`
);
