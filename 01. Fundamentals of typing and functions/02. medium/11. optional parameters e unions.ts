function calculatePrice(price: number, discount?: number | string): number | void {
    if (typeof discount !== "undefined") {
        switch (typeof discount) {
            case "number":
                return price * (1 - discount / 100);
            case "string":
                console.log(`Cupom aplicado: ${discount}`);
                return;
        }
    }
    return price;
}
