import { string } from "@hapi/joi";
import { Post,Controller, Body, Get, Param, Delete, Put  } from "@nestjs/common";
import { emitWarning } from "process";

import { CreateUserDto } from "src/dto/createUser.dto";
import { UpdateUserDto } from "src/dto/updateUser.dto";
import { UserService } from "src/services/users.service";



@Controller('users')
export class UserController{
    constructor(private userService: UserService){}


    // registration
    @Post()
    async create(@Body() user: CreateUserDto){
        console.log(user);
        return this.userService.create(user)
    }

    // login
    @Post('login')
    async login(@Body() user: CreateUserDto){
        console.log(user)
        return this.userService.getByEmail(user.email, user.password)

    }
    



    // @Get('get/:email')
    // async getByEmail(@Param('email') email: string){
    //     // console.log(email);
    //     return this.userService.getByEmail(email)
    // }

    @Get()
    async getAll(){
        return this.userService.getAll()
    }




    
}