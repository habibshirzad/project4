
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateUserDto } from "src/dto/createUser.dto";
import { UpdateUserDto } from 'src/dto/updateUser.dto'
import Users from "src/entities/users.entity";
import { string } from "@hapi/joi";
import * as bcrypt from 'bcrypt'


@Injectable()
export class UserService{
  constructor ( 
    @InjectRepository ( Users )
    private readonly usersRepository : Repository<Users>
    ) {}

    // registration
    public async create(user: CreateUserDto){
        const hashedPassword = await bcrypt.hash(user.password, 10);

        try {
            const createdUser =  this.usersRepository.save({
              ...user,
              password: hashedPassword
            });
            return createdUser;
        } catch (error) {  
            throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // login
    async getByEmail (email : string,hashedPassword:string) {

        console.log(email);            
    
        const user = await this.usersRepository.findOne({ email: email })
        console.log(user)
        if ( !user ) {         
            throw new HttpException('wrong email', HttpStatus.NOT_FOUND)
            }
        const matchPassword = await bcrypt.compare(hashedPassword,user.password)
        if(!matchPassword){
            throw new HttpException('wrong password', HttpStatus.NOT_FOUND)
        } 
        return user;
    }



    




    getAll(){
        return this.usersRepository.find()
    }

    async getById(id:number){
        const user = await this.usersRepository.findOne(id)
        if (user) {
            return user;
        }
        throw new HttpException('user with this id does not exist.', HttpStatus.NOT_FOUND)
    }

    deleteById(id:number){
        return this.usersRepository.delete(id)
    }

    async updateById(updateUser:UpdateUserDto){
        return this.usersRepository.update(updateUser.id, updateUser)
    }
}