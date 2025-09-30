type Palette = {
    primary: string;
    secondary: string;
    neutral: string;
    [key: string]: string;
};

const myColors = {
    link: "https://github.com.io",
    primary: "Blue",
    secondary: "Blue",
    neutral: "Blue",
} satisfies Palette;
