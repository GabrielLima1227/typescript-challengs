function createArray<T>(length: number, value: T): T[] {
    return new Array(length).fill(value);
}