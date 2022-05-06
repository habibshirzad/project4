import { DefaultNamingStrategy } from "typeorm";

export class RegisterDto {
    name: string
    email : string;
    password : string;
}
export default RegisterDto