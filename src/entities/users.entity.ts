import { truncate } from 'fs';
import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
class Users{
    @PrimaryGeneratedColumn()
    public id : number

    @Column({
        nullable: true
    })
    public name : string

    @Column({ unique : true, nullable: true })
    public email : string

    @Column({nullable: true})
    public password : string 

}

export default Users;