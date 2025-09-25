type MyEvent = MouseEvent | KeyboardEvent;

function handleEvent(event: MyEvent): void {
    if (event instanceof MouseEvent) {
        console.log("MouseEvent detectado!");
        console.log(`Clique em: (${event.clientX}, ${event.clientY})`);
    } else if (event instanceof KeyboardEvent) {
        console.log("KeyboardEvent detectado!");
        console.log(`Tecla: ${event.key}`);
    }
}