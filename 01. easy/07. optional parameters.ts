function displayProfile(name: string, age?: number): void {
    if (typeof age === undefined) {
        console.log(`Name: ${name}`);
    } else {
        console.log(`Name: ${name}\nAge: ${age}`);
    }
}
