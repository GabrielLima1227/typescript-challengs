type Square = {
    kind: 'square';
    sideLength: number;
}

type Circle = {
    kind: 'circle';
    radius: number;
}

type Shape = Square | Circle;