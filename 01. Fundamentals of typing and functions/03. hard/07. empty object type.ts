let a: {} = "hello"; // allowed, because {} accepts any non-nullish value
let b: object = "hello"; // ERROR: string is not assignable to object
let c: Record<string, unknown> = { any: 123 }; // more restrictive for objects with unknown keys
