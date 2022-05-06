// import { Body, Req, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
// import { AuthenticationService } from './authentication.service';
// import RegisterDto from './registerUser.dto';
// import Users from 'src/entities/users.entity';
// import RequestWithUser from 'src/authentication/requestWithUser.interface';

 
// @Controller('authentication')
// export class AuthenticationController {
//   constructor(
//     private readonly authenticationService: AuthenticationService
//   ) {}
 
//   @Post('register')
//   async register(@Body() registrationData: RegisterDto) {
//     return this.authenticationService.register(registrationData);
//   }
 

//   @Post('log-in')
//   async logIn(@Req() request: RequestWithUser) {
//     const user = request.user;
//     user.password = undefined;
//     return user;
//   }
// }