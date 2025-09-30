interface Tag {
    id: number;
    name: string;
}

const tags: Tag[] = [
    { id: 1, name: "Vlad III" },
    { id: 2, name: "Dracula" },
    { id: 3, name: "Alucard" },
    { id: 4, name: "Belmont" },
    { id: 4, name: "Belmont" }
];

const uniqueIds = new Set(tags.map(tag => tag.id));

const uniqueTags = tags.filter((tag, index, self) =>
    index === self.findIndex(t => t.id === tag.id)
);