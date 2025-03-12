export class User {
    firstName?: string;
    lastName?: string;
    email?: string;
    birthdate?: number;
    street?: string;
    zipCode?: number;
    city?: string;

    constructor(obj?: Partial<User>) {
        if (obj) Object.assign(this, obj);
    }

    public toJson() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthdate: this.birthdate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
        };
    }
}