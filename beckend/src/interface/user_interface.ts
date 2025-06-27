export interface IUser {
    name: string;
    email: string;
    password: string;
    role: "owner" | "user";
    image?: string;
}

export interface UserInstance{
    hashPassword():Promise<void>;
    comparePassword(plainPassword:string):Promise<boolean>
}

