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

const data1 = { name: "Xenom", email: "Xenom@gmail.com" };
const data2 = { username: "NotAUser" };

if (isUser(data1)) {
    console.log("Nome do usuário:", data1.name);
}

if (isUser(data2)) {
    console.log("Nome do usuário:", data2.name);
}