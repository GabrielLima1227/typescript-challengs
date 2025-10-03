function doOperation(success: boolean): [boolean, string] {
    if (success) {
        return [true, "Operação concluída com sucesso!"];
    } else {
        return [false, "Houve um erro na operação."];
    }
}

const result = doOperation(true);

const [isSuccess, message] = result;

console.log(isSuccess);
console.log(message);