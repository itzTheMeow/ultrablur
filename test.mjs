import fs from "fs";

if(!fs.existsSync("tests")) fs.mkdirSync("tests");

fs.writeFileSync("tests/test.html", `<body>
  <style>
    body {
      width: 100%;
      height: 100%;
      background: ${generateUltrablurCSS("#faf0fa", "#000000")};
    }  
  </style>
</body>`);
