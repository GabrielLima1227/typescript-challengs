function verifyInput(input: unknown) {
    if (typeof input === "object" && input !== null && "name" in input && "email" in input) {
        const user = input as { name: string; email: string };
        console.log(input.name);
    }
} 