// import { RegisterDto } from "src/authentication/registerUser.dto";
// import { UserService } from "../services/users.service";
// import bcrypt from 'bcrypt'
// import { CreateUserDto } from "src/dto/createUser.dto";
// import { HttpException,HttpStatus } from "@nestjs/common";

// export class AuthenticationService {
//     constructor(
//         private readonly usersService: UserService
//     ){}

//     //register
//     async register(registerDto:RegisterDto){
//         const hashedpassword = await bcrypt.hash(registerDto.password,10)
//         // try { 
//         //     const createdUser = await this.usersService.create({
//         //         ...registerDto,
//         //         password: hashedpassword
//         // });
//         // createdUser.password = undefined;
//         return hashedpassword;
//     // }catch (error){
//     //     if (error?.code === PostgresErrorCode.UniqueViolation) {
//     //         throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST);
//     //       }
//     //       throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
//     //     }
//       }

//     //logging 
//     public async getAuthenticatedUser(email: string, plainTextPassword: string) {
//         // try {
//           const user = await this.usersService.getByEmail(email);
//         //   await this.verifyPassword(plainTextPassword, user.password);
//         //   user.password = undefined;
//           return user;
//         // } catch (error) {
//         //   throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
//         // }
//       }
       
//       private async verifyPassword(plainTextPassword: string, hashedPassword: string) {
//         const isPasswordMatching = await bcrypt.compare(
//           plainTextPassword,
//           hashedPassword
//         );
//         if (!isPasswordMatching) {
//           throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
//         }
//       }
//     }










        