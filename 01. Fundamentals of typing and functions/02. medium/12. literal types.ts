type Position = "top" | "middle" | "bottom";

function selectItem(item: string, position: Position): void {
    console.log(`The item "${item}" is in the ${position} position.`);
}