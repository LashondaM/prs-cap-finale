export class Requestline {
    id: number = 0;
    quantity: number = 0;
    requestId: number = 0;
    productId: number = 0;

    constructor(id: number, quantity: number, requestId: number, productId: number) {
        this.id = id;
        this.quantity = quantity;
        this.requestId = requestId;
        this.productId = productId;
    }
}