type ErrorLog = {
    kind: "error";
    errorMessage: string;
};

type InfoLog = {
    kind: "info";
    message: string;
};

function mergeObjects<T, U>(firstObject: T, secondObject: U): T & U;

function mergeObjects<T, U>(firstObject: T, secondObject: U): T & U {
    return { ...firstObject, ...secondObject };
}
