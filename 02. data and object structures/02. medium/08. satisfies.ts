type ColorTypes = {
    primary: string;
    secondary: string;
};

const styleConfig = {
    primary: "#3498db",
    secondary: "#2ecc71",
    "font-size": "16px",
    "border-radius": "8px"
} satisfies ColorTypes;

console.log(styleConfig.primary);
console.log(styleConfig["font-size"]);
