import { generateUltrablurCSS } from "../dist";

const [Foreground, Background, Saturation, Intensity] = document.body.querySelectorAll("input");

function update() {
  document.body.style.background = generateUltrablurCSS(
    Foreground.value,
    Background.value,
    Number(Saturation.value),
    Number(Intensity.value)
  );
}
update();

Foreground.oninput = Background.oninput = Saturation.oninput = Intensity.oninput = update;
