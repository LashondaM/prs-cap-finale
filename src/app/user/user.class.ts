export class User {
    id: number = 0;
    username: string = "";
    password: string = "";
    firstname: string = "";
    lastname: string = "";
    isReviewer: boolean = true;
    isAdmin: boolean = true;
    phone: string = "";
    email: string = "";
    // isReviewer: boolean = true;
    // isAdmin: boolean = true;

    constructor(id: number, username: string, password: string, firstname: string, lastname: string, isReviewer: boolean, isAdmin: boolean, phone: string, email: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.isReviewer = isReviewer;
        this.isAdmin = isAdmin;
        this.phone = phone;
        this.email = email;
    }
}