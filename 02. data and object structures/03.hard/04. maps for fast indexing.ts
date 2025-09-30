interface User {
    id: number;
    name: string;
}

function indexUsers(users: User[]): Map<number, User> {
    const userMap = new Map<number, User>();

    for (const user of users) {
        userMap.set(user.id, user);
    }

    return userMap;
}

const users: User[] = [
    { id: 1, name: "Gabriel" },
    { id: 2, name: "Ana" },
    { id: 3, name: "Carlos" },
];

const usersById = indexUsers(users);

console.log(usersById.get(2)); 

console.log(usersById);