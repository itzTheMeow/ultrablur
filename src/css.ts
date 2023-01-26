import tinycolor from "tinycolor2";

/**
 * Generate a CSS `background` value using radial-gradient.
 * @param color The foreground color to use.
 * @param background The background color to use.
 * @returns The CSS string for the `background` rule.
 */
export function generateUltrablurCSS(color: string, background: string) {
  const pos = ["0% 100%", "100% 100%", "100% 0%", "0% 0%"],
    mix = [71, 67, 66, 68];
  return [
    ...new Array(4)
      .fill(0)
      .map(
        (_, i) =>
          `radial-gradient(circle farthest-side at ${pos[i]}, ${tinycolor.mix(
            color,
            background,
            mix[i]
          )} 0%, transparent 100%)`
      ),
    background,
  ].join(", ");
}
