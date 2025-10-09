interface Printable {
    print(): void;
}

interface Savable {
    save(): void;
}

interface Document extends Printable, Savable {
    title: string;
}