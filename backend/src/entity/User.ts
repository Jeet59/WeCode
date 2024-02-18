import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  firstName: string = "first";

  @Column()
  lastName: string = "last";

  @Column()
  age: number = 20;
}
