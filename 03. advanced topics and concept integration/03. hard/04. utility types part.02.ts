interface User {
    id: number;
    name: string;
    email?: string;
}

const UserSummary: Pick<User, "id" | "name"> = {id: 1, name: "Alicia"};
const UserWithoutEmail: Omit<User, "email"> = {id: 1, name: "Alicia"};