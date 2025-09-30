const apiEndpoints = {
    getUser: "https://api.meusite.com/user",
    getPosts: "https://api.meusite.com/posts",
    getComments: "https://api.meusite.com/comments",
} as const;

function changeEndpoint(obj: typeof apiEndpoints) {
    obj.getUser = "https://api.hacker.com/user";
}

changeEndpoint(apiEndpoints);
