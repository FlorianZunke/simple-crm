export class User {
    firstName: string = "";
    lastName: string = "";
    birthdate: number = 0;
    street: string = "";
    zipCode: number = 0;
    city: string = "";


    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthdate = obj ? obj.birthdate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    public toJson() {
        return {
            firstName:  this.firstName,
            lastName:  this.lastName,
            birthdate: this.birthdate,
            street:  this.street,
            zipCode: this.zipCode,
            city:  this.city,
        }
    }

}