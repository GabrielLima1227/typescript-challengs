type LoggerFunction = (message: string) => void;

const logger: LoggerFunction = (msg: string): void => {
    console.log(`[LOG]: ${msg}`);
};

logger("Erro: Lost conection!");