const appRoutes = {
    home: "/",
    login: "/login",
    register: "/register",
    dashboard: "/dashboard",
    profile: "/profile/:userId",
    settings: {
        root: "/settings",
        account: "/settings/account",
        security: "/settings/security",
    },
    notFound: "*",
} as const;
