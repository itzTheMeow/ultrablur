import tinycolor from "tinycolor2";
import config from "./config";

/**
 * Generate a CSS `background` value using radial-gradient.
 * @param color The foreground color to use.
 * @param background The background color to use.
 * @param saturation Adds this value to the tinycolor mix percentage (0-100). Lower values blend toward the background. (default 65)
 * @param intensity Multiply this value by the mix percentage base (1-7). Higher values create a more random feel.
 * @returns The CSS string for the `background` rule.
 */
export function generateUltrablurCSS(
  color: string,
  background: string,
  saturation = 65,
  intensity = 1
) {
  return [
    ...new Array(4)
      .fill(0)
      .map(
        (_, i) =>
          `radial-gradient(circle farthest-side at ${config.stops[i]
            .map((s) => s + "%")
            .join(" ")}, ${tinycolor.mix(
            color,
            background,
            Math.min(100, Math.max(0, config.mix[i] * intensity + saturation))
          )} 0%, transparent 100%)`
      ),
    background,
  ].join(", ");
}
