type Product = {
    readonly id: number,
    name: string,
}

let bean: Product = {
    id: 1,
    name: "bean",
}

bean.id = 2; // Cannot assing to "id" because it is a read-only 