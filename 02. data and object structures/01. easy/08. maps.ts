type User = {
    name: string;
    email: string;
};

const users = new Map<number, User>();

users.set(1, { name: "Alice", email: "alice@example.com" });
users.set(2, { name: "Bob", email: "bob@example.com" });
users.set(3, { name: "Carol", email: "carol@example.com" });

function getUserById(id: number): User | undefined {
    return users.get(id);
}