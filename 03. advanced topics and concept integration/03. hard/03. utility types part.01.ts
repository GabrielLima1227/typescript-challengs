interface User {
    id: number;
    name: string;
    email?: string;
}

const PartialUser: Partial<User> = {id: 1, name: "Alicia"};
const FullUser: Required<User> = {id: 1, name: "Alicia", email: "alicia@example.com"};