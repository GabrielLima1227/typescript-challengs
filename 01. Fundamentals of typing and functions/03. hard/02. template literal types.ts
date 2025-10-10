type Color = "primary" | "secondary" | "tertiary";
type FontSize = "small" | "medium" | "large";

type StyleKeys =
    | `color-${Color}`
    | `font-size-${FontSize}`;

type Style = {
    [K in StyleKeys]?: string | number;
};