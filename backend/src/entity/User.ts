import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  firstName: string = "first";

  @Column()
  lastName: string = "last";

  @Column()
  age: number = 20;
}
