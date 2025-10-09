type User = {
    name: string;
    email: string;
};

function isUser(obj: any): obj is User {
    return (
        typeof obj === "object" &&
        obj !== null &&
        "name" in obj &&
        typeof obj.name === "string" &&
        "email" in obj &&
        typeof obj.email === "string"
    );
}