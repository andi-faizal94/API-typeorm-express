import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm";

@Entity("client")
export default class Client extends BaseEntity {
  @PrimaryColumn()
  id: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column({
    unique: true,
  })
  email: string;
}
