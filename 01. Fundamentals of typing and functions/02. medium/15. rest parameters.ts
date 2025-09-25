function sumAll(...values: number[]): number {
    return values.reduce((accumulator, value) => accumulator + value, 0);
}
