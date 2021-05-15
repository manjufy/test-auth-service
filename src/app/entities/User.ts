import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { UserRole } from '../../lib/enums';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    firstName?: string

    @Column()
    lastName?: string

    @Column()
    email!: string

    @Column()
    password!: string

    @Column()
    status!: string

    @Column()
    role!: string
}
