import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  username: String = "Username";

  @Column()
  email: String = "Email";

  @Column()
  password: String = "Password";
}
