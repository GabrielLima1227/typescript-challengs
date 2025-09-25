type Config = {
    theme: string;
    language: string;
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const userConfig = { theme: "dark", language: "en" };

const theme = getValue<Config, "theme">(userConfig, "theme");