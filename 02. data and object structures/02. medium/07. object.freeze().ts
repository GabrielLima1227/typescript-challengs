type ErrorLog = {
    kind: "error";
    errorMessage: string;
};

const myObject: ErrorLog = Object.freeze({
    kind: "error",
    errorMessage: "Denied Access",
});
