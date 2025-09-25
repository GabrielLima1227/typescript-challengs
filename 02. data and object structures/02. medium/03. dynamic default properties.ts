type Config = {
    theme: string;
    language: string;
};

function createConfig({
    theme = "light",
    language = "en",
    }: Partial<Config>): Config {
    return { theme, language };
}

const config1 = createConfig({});
console.log(config1);

const config2 = createConfig({ theme: "dark" });
console.log(config2);

const config3 = createConfig({ theme: "dark", language: "pt-BR" });
console.log(config3);
