function printId<T extends { id: number }>(obj: T) {
    console.log(obj.id);
}