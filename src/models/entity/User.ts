import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "login", type: "varchar" })
  login: String

  @Column({ name: "password", type: "varchar" })
  password: String
}
