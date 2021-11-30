export class Request {
    id: number = 0;
    description: string = "";
    justification: string = "";
    rejectionReason: string = "";
    deliveryMode: string = "";
    status: string = "";
    total: number = 0;
    userId: number = 0;
    // isReviewer: boolean = true;
    // isAdmin: boolean = true;

    constructor(id: number, description: string, justification: string, rejectionReason: string, deliveryMode: string, status: string, total: number, userId: number) {
        this.id = id;
        this.description = description;
        this.justification = justification;
        this.rejectionReason = rejectionReason;
        this.deliveryMode = deliveryMode;
        this.status = status;
        this.total = total;
        this.userId = userId;
    }
}