import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Userlist{
    @PrimaryGeneratedColumn('increment')
    usernum : number
    @Column()
    username : string
    @Column()
    userid : string
}