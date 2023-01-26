import { generateUltrablurCSS } from "../dist";

const [Foreground, Background, Saturation] = document.body.querySelectorAll("input");

function update() {
  document.body.style.background = generateUltrablurCSS(
    Foreground.value,
    Background.value,
    Number(Saturation.value)
  );
}
update();

Foreground.oninput = Background.oninput = Saturation.oninput = update;
